// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package link

import (
	"errors"
	"fmt"
	cc "github.com/kaack/elrs-joystick-control/pkg/config"
	"github.com/kaack/elrs-joystick-control/pkg/crossfire"
	"github.com/kaack/elrs-joystick-control/pkg/crossfire/settings"
	dc "github.com/kaack/elrs-joystick-control/pkg/devices"
	"github.com/kaack/elrs-joystick-control/pkg/proto/generated/pb"
	sc "github.com/kaack/elrs-joystick-control/pkg/serial"
	"gopkg.in/tomb.v2"
	"time"
)

type Controller struct {
	devicesCtl *dc.Controller
	serialCtl  *sc.Controller
	configCtl  *cc.Controller

	channels [16]uint16

	portState       PortState
	supervisorState SupervisorState

	sentPacketsCount  uint64
	recvPacketsCount  uint64
	errorPacketsCount uint64

	supervisorTomb *tomb.Tomb
	sendLoopTomb   *tomb.Tomb
	recvLoopTomb   *tomb.Tomb
	portLoopTomb   *tomb.Tomb

	TelemetryBroadcaster    *TelemetryBroadcaster
	DeviceInfoBroadcaster   *TelemetryBroadcaster
	DeviceFieldBroadcaster  *TelemetryBroadcaster
	DeviceStatusBroadcaster *TelemetryBroadcaster

	sendChan chan any
	recvChan chan any
}

func NewCtl(dc *dc.Controller, sc *sc.Controller, cc *cc.Controller) *Controller {
	linkCtl := &Controller{
		portState:               PortUnknown,
		supervisorState:         SupervisorInactive,
		devicesCtl:              dc,
		serialCtl:               sc,
		configCtl:               cc,
		TelemetryBroadcaster:    NewTelemetryBroadcaster(),
		DeviceInfoBroadcaster:   NewTelemetryBroadcaster(),
		DeviceFieldBroadcaster:  NewTelemetryBroadcaster(),
		DeviceStatusBroadcaster: NewTelemetryBroadcaster(),
	}
	err := linkCtl.Init()

	if err != nil {
		linkCtl.Quit()
		panic(err)
	}
	return linkCtl
}

func (c *Controller) Init() (err error) {

	return err
}

func (c *Controller) Quit() {

}

func (c *Controller) GetLinkState(state *pb.LinkState) *pb.LinkState {
	if state == nil {
		state = &pb.LinkState{}
	}

	state.SupervisorState = pb.SupervisorState(c.supervisorState)
	state.PortState = pb.PortState(c.portState)
	state.ReceivedPacketsCount = c.recvPacketsCount
	state.SentPacketsCount = c.sentPacketsCount
	state.ErrorPacketsCount = c.errorPacketsCount

	return state
}

func (c *Controller) GetCRSFDevices() ([]*pb.CRSFDeviceInfoData, error) {

	if c.sendChan == nil || c.supervisorState != SupervisorActive {
		return nil, errors.New("link is not active, start RF Link to use this function")
	}

	luaChan := c.DeviceInfoBroadcaster.Subscribe()
	defer c.DeviceInfoBroadcaster.Unsubscribe(luaChan)

	devicesMap := map[uint32]*pb.CRSFDeviceInfoData{}
	var devicesProtoList []*pb.CRSFDeviceInfoData

	// sometimes the module does not reply with any information
	// when pinging devices, so to work around this
	// we repeatedly ask the module to ping all devices, and only
	// exit when there are multiple collisions

	collisions := 0
	for collisions < 3 {

	RequestDevices:
		//fmt.Printf("requesting field: %d, chunk: %d\n", fieldIndex, chunkIndex)
		c.sendChan <- PingDevices
	WaitForDevices:
		for {
			select {
			case telem := <-luaChan:
				deviceInfo := telem.GetDeviceInfo()

				if deviceInfo == nil {
					// no device info received
					goto WaitForDevices
				} else if _, ok := devicesMap[deviceInfo.GetId()]; ok {
					// already seen this device
					collisions += 1
					break WaitForDevices
				}

				devicesMap[deviceInfo.GetId()] = deviceInfo
				devicesProtoList = append(devicesProtoList, deviceInfo)

				goto WaitForDevices
			case <-time.After(50 * time.Millisecond):
				goto RequestDevices
			}
		}
	}

	return devicesProtoList, nil
}

var fieldConstructors = map[pb.CRSFDeviceFieldType]func(id uint32, parentId uint32, data []uint8) settings.FieldType{
	pb.CRSFDeviceFieldType_TEXT_SELECT: settings.NewTextSelectField,
	pb.CRSFDeviceFieldType_FOLDER:      settings.NewFolderField,
	pb.CRSFDeviceFieldType_COMMAND:     settings.NewCommandField,
	pb.CRSFDeviceFieldType_STRING:      settings.NewStringField,
	pb.CRSFDeviceFieldType_INFO:        settings.NewInfoField,
	pb.CRSFDeviceFieldType_INT8:        settings.NewInt8Field,
	pb.CRSFDeviceFieldType_INT16:       settings.NewInt16Field,
	pb.CRSFDeviceFieldType_INT32:       settings.NewInt32Field,
	pb.CRSFDeviceFieldType_UINT8:       settings.NewUint8Field,
	pb.CRSFDeviceFieldType_UINT16:      settings.NewUint16Field,
	pb.CRSFDeviceFieldType_UINT32:      settings.NewUint32Field,
}

func (c *Controller) GetCRSFDeviceFields(deviceInfo *pb.CRSFDeviceInfoData) ([]*pb.CRSFDeviceFieldData, error) {
	if c.sendChan == nil || c.supervisorState != SupervisorActive {
		return nil, errors.New("link is not active, start RF Link to use this function")
	}

	var fieldProtoList []*pb.CRSFDeviceFieldData
	var fieldId uint32
	var fieldProto *pb.CRSFDeviceFieldData
	var err error

	for fieldId = 1; fieldId < deviceInfo.GetFieldCount(); fieldId++ {
		if fieldProto, err = c.GetCRSFDeviceField(deviceInfo, fieldId, 5*time.Second); err != nil {
			return nil, err
		} else if fieldProto != nil {
			fieldProtoList = append(fieldProtoList, fieldProto)
		}
	}

	return fieldProtoList, nil
}

func (c *Controller) GetCRSFDeviceField(deviceInfo *pb.CRSFDeviceInfoData, fieldId uint32, timeout time.Duration) (*pb.CRSFDeviceFieldData, error) {
	if c.sendChan == nil || c.supervisorState != SupervisorActive {
		return nil, errors.New("link is not active, start RF Link to use this function")
	}

	if deviceInfo == nil {
		return nil, errors.New("device is required")
	}

	if fieldId > deviceInfo.GetFieldCount() {
		return nil, errors.New("field id is not valid")
	}

	luaChan := c.DeviceFieldBroadcaster.Subscribe()
	defer c.DeviceFieldBroadcaster.Unsubscribe(luaChan)

	handledChunksMap := map[uint32]bool{}

	var fieldData []byte
	var firstFieldEntry *pb.CRSFDeviceFieldEntryData
	var fieldProto *pb.CRSFDeviceFieldData

	chunkIndex := 0

	chunkRequestsCount := uint32(0)           // how many times the chunk has been requested
	maxRequestsPerChunk := uint32(5)          // how many times to request chunk, before giving up
	chunkWaitTimeout := 50 * time.Millisecond // how long to wait for a chunk, before requesting it again

	if timeout > time.Duration(maxRequestsPerChunk)*chunkWaitTimeout {
		maxRequestsPerChunk = uint32(timeout / chunkWaitTimeout)
	}

RequestChunk:
	//fmt.Printf("requesting field: %d, chunk: %d\n", fieldIndex, chunkIndex)
	c.sendChan <- &ReadDeviceFieldsRequest{
		deviceId:   uint8(deviceInfo.Id),
		fieldId:    uint8(fieldId),
		fieldChunk: uint8(chunkIndex),
	}
WaitForChunk:
	for {
		select {
		case telem := <-luaChan:
			fieldEntry := telem.GetDeviceFieldEntry()

			if fieldEntry == nil {
				//fmt.Printf("field entry null, will wait for chunk ...\n")
				goto WaitForChunk
			} else if fieldEntry.GetId() != fieldId {
				//fmt.Printf("field entry id mismatch, got id: %d, expected: %d, will wait for chunk ...\n", fieldEntry.GetId(), fieldId)
				goto WaitForChunk
			}

			if _, ok := handledChunksMap[fieldEntry.GetChunksRemaining()]; !ok {
				handledChunksMap[fieldEntry.GetChunksRemaining()] = true
				var chunk []byte
				if chunkIndex == 0 {
					// first chunk header is: (id, chunks remaining, parent id, data type) which is 4 bytes
					chunk = fieldEntry.GetBuffer()[4 : len(fieldEntry.GetBuffer())-1]
				} else {
					// other chunks header is: (id, chunks remaining) which is 2 bytes
					chunk = fieldEntry.GetBuffer()[2 : len(fieldEntry.GetBuffer())-1]
				}

				//fmt.Printf("appending chunk %d for field: %d\n", chunkIndex, fieldId)
				//fmt.Printf("chunk %x\n", string(chunk))
				fieldData = append(fieldData, chunk...)
				chunkRequestsCount = 0

				if chunkIndex == 0 {
					firstFieldEntry = fieldEntry //save this, because the data type only comes on first chunk
				}
			} else {
				goto RequestChunk
			}

			//check to see if there are more chunks needed
			if fieldEntry.GetChunksRemaining() > 0 {
				//fmt.Printf("there are %d more chunks for field %d\n", fieldEntry.GetChunksRemaining(), fieldId)
				chunkIndex += 1
				goto RequestChunk
			}

			if constructor, ok := fieldConstructors[firstFieldEntry.GetDataType()]; ok {
				field := constructor(firstFieldEntry.GetId(),
					firstFieldEntry.GetParentId(),
					fieldData)
				proto := field.Proto()
				fieldProto = proto
				fmt.Printf("%s\n", proto)
			}

			//fmt.Printf("all %d chunks received for field %d\n", chunkIndex, fieldIndex)
			break WaitForChunk
		case <-time.After(chunkWaitTimeout):
			chunkRequestsCount += 1
			//fmt.Printf("timeout(%v/%v) while waiting for chunk %d on field %d\n", chunkRequestsCount, maxRequestsPerChunk, chunkIndex, fieldId)
			if chunkRequestsCount >= maxRequestsPerChunk {
				break WaitForChunk
			} else {
				goto RequestChunk
			}
		}
	}

	return fieldProto, nil
}

func (c *Controller) SetCRSFDeviceField(device *pb.CRSFDeviceInfoData, field *pb.CRSFDeviceFieldData) (*pb.CRSFDeviceFieldData, error) {
	if device == nil {
		return nil, errors.New("device is required")
	}

	if field == nil {
		return nil, errors.New("field is required")
	}

	fieldData := field.GetData()
	var fieldDataRes *pb.CRSFDeviceFieldData
	var err error

	switch data := fieldData.(type) {
	case *pb.CRSFDeviceFieldData_Int8:
		min := data.Int8.GetMin()
		max := data.Int8.GetMax()
		value := data.Int8.GetValue()
		if !(int8(value) >= int8(min) && int8(value) <= int8(max)) {
			return nil, errors.New("int8 value is out of range")
		}
		c.sendChan <- &WriteDeviceFieldRequestUint8{
			deviceId:   uint8(device.GetId()),
			fieldId:    uint8(data.Int8.GetId()),
			fieldValue: uint8(value),
		}

		return field, nil

	case *pb.CRSFDeviceFieldData_Uint8:
		min := data.Uint8.GetMin()
		max := data.Uint8.GetMax()
		value := data.Uint8.GetValue()

		if !(uint8(value) >= uint8(min) && uint8(value) <= uint8(max)) {
			return nil, errors.New("uint8 value is out of range")
		}
		c.sendChan <- &WriteDeviceFieldRequestUint8{
			deviceId:   uint8(device.GetId()),
			fieldId:    uint8(data.Uint8.GetId()),
			fieldValue: uint8(value),
		}
		return field, nil
	case *pb.CRSFDeviceFieldData_Int16:
		min := data.Int16.GetMin()
		max := data.Int16.GetMax()
		value := data.Int16.GetValue()

		if !(int16(value) >= int16(min) && int16(value) <= int16(max)) {
			return nil, errors.New("int16 value is out of range")
		}
		c.sendChan <- &WriteDeviceFieldRequestUint16{
			deviceId:   uint8(device.GetId()),
			fieldId:    uint8(data.Int16.GetId()),
			fieldValue: uint16(value),
		}
		return field, nil
	case *pb.CRSFDeviceFieldData_Uint16:
		min := data.Uint16.GetMin()
		max := data.Uint16.GetMax()
		value := data.Uint16.GetValue()

		if !(uint16(value) >= uint16(min) && uint16(value) <= uint16(max)) {
			return nil, errors.New("uint16 value is out of range")
		}
		c.sendChan <- &WriteDeviceFieldRequestUint16{
			deviceId:   uint8(device.GetId()),
			fieldId:    uint8(data.Uint16.GetId()),
			fieldValue: uint16(value),
		}
		return field, nil
	case *pb.CRSFDeviceFieldData_TextSelect:
		min := data.TextSelect.GetMin()
		max := data.TextSelect.GetMax()
		value := data.TextSelect.GetValue()

		if !(value >= min && value <= max) {
			return nil, errors.New("selection value is out of range")
		}
		for i := 0; i < 5; i++ {
			//send the request multiple times, module sometimes ignores it
			c.sendChan <- &WriteDeviceFieldRequestUint8{
				deviceId:   uint8(device.GetId()),
				fieldId:    uint8(data.TextSelect.GetId()),
				fieldValue: uint8(value),
			}
			time.Sleep(250 * time.Millisecond)
		}

		return field, nil
	case *pb.CRSFDeviceFieldData_Command:
		step := data.Command.GetStep()

		// allowed steps
		if !(step == pb.CRSFDeviceFieldCommandStep_CLICK ||
			step == pb.CRSFDeviceFieldCommandStep_CANCEL ||
			step == pb.CRSFDeviceFieldCommandStep_CONFIRMED ||
			step == pb.CRSFDeviceFieldCommandStep_QUERY) {
			return nil, errors.New("requested step not allowed")
		}

		if fieldDataRes, err = c.RunCRSFCommand(device, data.Command, 5*time.Second); err != nil {
			return nil, err
		}
	default:
		return nil, errors.New(fmt.Sprintf("field cannot be set"))
	}

	return fieldDataRes, nil
}

func (c *Controller) RunCRSFCommand(device *pb.CRSFDeviceInfoData, field *pb.CRSFDeviceFieldCommand, timeout time.Duration) (*pb.CRSFDeviceFieldData, error) {
	if c.sendChan == nil || c.supervisorState != SupervisorActive {
		return nil, errors.New("link is not active, start RF Link to use this function")
	}

	if device == nil {
		return nil, errors.New("device is required")
	}

	if field == nil {
		return nil, errors.New("field is required")
	}

	if field.GetId() > device.GetFieldCount() {
		return nil, errors.New("field id is not valid")
	}

	luaChan := c.DeviceFieldBroadcaster.Subscribe()
	defer c.DeviceFieldBroadcaster.Unsubscribe(luaChan)

	handledChunksMap := map[uint32]bool{}

	var fieldData []byte
	var firstFieldEntry *pb.CRSFDeviceFieldEntryData
	var fieldProto *pb.CRSFDeviceFieldData

	chunkIndex := 0

	chunkRequestsCount := uint32(0)            // how many times the chunk has been requested
	maxRequestsPerChunk := uint32(5)           // how many times to request chunk, before giving up
	chunkWaitTimeout := 150 * time.Millisecond // how long to wait for a chunk, before requesting it again

	if timeout > time.Duration(maxRequestsPerChunk)*chunkWaitTimeout {
		maxRequestsPerChunk = uint32(timeout / chunkWaitTimeout)
	}

	//fmt.Printf("(cmd) running command %s (id: %v)\n", field.GetName(), field.GetId())
	c.sendChan <- &WriteDeviceFieldRequestUint8{
		deviceId:   uint8(device.GetId()),
		fieldId:    uint8(field.GetId()),
		fieldValue: uint8(field.GetStep()),
	}

	goto WaitForChunk

RequestChunk:
	//fmt.Printf("(cmd) requesting field: %d, chunk: %d\n", field.GetId(), chunkIndex)
	c.sendChan <- &WriteDeviceFieldRequestUint8{
		deviceId:   uint8(device.GetId()),
		fieldId:    uint8(field.GetId()),
		fieldValue: uint8(settings.StepQuery),
	}
WaitForChunk:
	for {
		//fmt.Printf("(cmd) waiting on chunks for field %d (expecting chunk: %d)\n", field.GetId(), chunkIndex)
		select {
		case telem := <-luaChan:
			fieldEntry := telem.GetDeviceFieldEntry()

			if fieldEntry == nil {
				//fmt.Printf("field entry null, will wait for chunk ...\n")
				goto WaitForChunk
			} else if fieldEntry.GetId() != field.GetId() {
				//fmt.Printf("field entry id mismatch, got id: %d, expected: %d, will wait for chunk ...\n", fieldEntry.GetId(), fieldId)
				goto WaitForChunk
			}

			//fmt.Printf("(cmd) received chunks for field %d (expecting chunk: %d)\n", field.GetId(), chunkIndex)

			if _, ok := handledChunksMap[fieldEntry.GetChunksRemaining()]; !ok {
				handledChunksMap[fieldEntry.GetChunksRemaining()] = true
				var chunk []byte
				if chunkIndex == 0 {
					// first chunk header is: (id, chunks remaining, parent id, data type) which is 4 bytes
					chunk = fieldEntry.GetBuffer()[4 : len(fieldEntry.GetBuffer())-1]
				} else {
					// other chunks header is: (id, chunks remaining) which is 2 bytes
					chunk = fieldEntry.GetBuffer()[2 : len(fieldEntry.GetBuffer())-1]
				}

				//fmt.Printf("(cmd) appending chunk %d for field: %d\n", chunkIndex, field.GetId())
				//fmt.Printf("(cmd) chunk %x\n", string(chunk))
				fieldData = append(fieldData, chunk...)
				chunkRequestsCount = 0

				if chunkIndex == 0 {
					firstFieldEntry = fieldEntry //save this, because the data type only comes on first chunk
				}
			} else {
				goto RequestChunk
			}

			//check to see if there are more chunks needed
			if fieldEntry.GetChunksRemaining() > 0 {
				//fmt.Printf("(cmd) there are %d more chunks for field %d\n", fieldEntry.GetChunksRemaining(), field.GetId())
				chunkIndex += 1
				goto RequestChunk
			}

			if constructor, ok := fieldConstructors[firstFieldEntry.GetDataType()]; ok {
				field := constructor(firstFieldEntry.GetId(),
					firstFieldEntry.GetParentId(),
					fieldData)
				proto := field.Proto()
				fieldProto = proto
				fmt.Printf("%s\n", proto)
			}

			//fmt.Printf("(cmd) all %d chunks received for field %d\n", chunkIndex, field.GetId())
			break WaitForChunk
		case <-time.After(chunkWaitTimeout):
			chunkRequestsCount += 1
			//fmt.Printf("(cmd) timeout(%v/%v) while waiting for chunk %d on field %d\n", chunkRequestsCount, maxRequestsPerChunk, chunkIndex, field.GetId())
			if chunkRequestsCount >= maxRequestsPerChunk {
				break WaitForChunk
			} else {
				goto RequestChunk
			}
		}
	}

	return fieldProto, nil
}

func (c *Controller) GetCRSFDeviceLinkStatus(timeout time.Duration) (*pb.CRSFDeviceLinkStatusData, error) {
	if c.sendChan == nil || c.supervisorState != SupervisorActive {
		return nil, errors.New("link is not active, start RF Link to use this function")
	}

	luaChan := c.DeviceStatusBroadcaster.Subscribe()
	defer c.DeviceStatusBroadcaster.Unsubscribe(luaChan)

	var fieldProto *pb.CRSFDeviceLinkStatusData

	statusRequestsCount := uint32(0)                  // how many times the status has been requested
	maxStatusRequests := uint32(5)                    // how many times to request status, before giving up
	statusRequestWaitTimeout := 50 * time.Millisecond // how long to wait for a status, before requesting it again

	if timeout > time.Duration(maxStatusRequests)*statusRequestWaitTimeout {
		maxStatusRequests = uint32(timeout / statusRequestWaitTimeout)
	}

RequestStatus:
	//fmt.Printf("(status) requesting status frame\n")
	c.sendChan <- &WriteDeviceFieldRequestUint8{
		deviceId:   uint8(crossfire.ModuleEndpoint),
		fieldId:    uint8(0x00),
		fieldValue: uint8(0x00),
	}
WaitForStatus:
	for {
		//fmt.Printf("(status) waiting on status frame\n")
		select {
		case telem := <-luaChan:
			//fmt.Printf("(status) received telemetry frame\n")
			status := telem.GetDeviceLinkStatus()

			if status == nil {
				//fmt.Printf("(status) field status is null, will wait again ...\n")
				goto WaitForStatus
			}

			fieldProto = status
			//fmt.Printf("(status) received status frame\n")
			break WaitForStatus
		case <-time.After(statusRequestWaitTimeout):
			statusRequestsCount += 1
			//fmt.Printf("timeout(%v/%v) while waiting for status frame\n", statusRequestsCount, maxStatusRequests)
			if statusRequestsCount >= maxStatusRequests {
				break WaitForStatus
			} else {
				goto RequestStatus
			}
		}
	}

	return fieldProto, nil
}

func (c *Controller) ClearCRSFDeviceLinkCriticalFlags() error {

	if c.sendChan == nil || c.supervisorState != SupervisorActive {
		return errors.New("link is not active, start RF Link to use this function")
	}

	c.sendChan <- &WriteDeviceFieldRequestUint8{
		deviceId:   uint8(crossfire.ModuleEndpoint),
		fieldId:    uint8(0x2E), //special field to request clearing flag
		fieldValue: uint8(0x00),
	}

	return nil
}
