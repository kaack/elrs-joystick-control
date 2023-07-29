// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package telemetry

import (
	"fmt"
	"github.com/kaack/elrs-joystick-control/pkg/crossfire"
	"github.com/kaack/elrs-joystick-control/pkg/proto/generated/pb"
)

type TelemDeviceSettingsEntryExtType interface {
	TelemExtType
	Id() uint8
	ChunksRemaining() uint8
	ParentId() uint8
	DataType() CRSFFieldType
	Buffer() []byte
}

type DeviceSettingsEntryExtFrame struct {
	RawData []uint8
	Offset  int
}

func NewDeviceSettingsEntryExtFrame(data []byte) *DeviceSettingsEntryExtFrame {
	frame := DeviceSettingsEntryExtFrame{RawData: data}
	return &frame
}

func (t *DeviceSettingsEntryExtFrame) Addr() crossfire.Endpoint {
	return crossfire.Endpoint(t.RawData[0])
}
func (t *DeviceSettingsEntryExtFrame) Type() crossfire.FrameType {
	return crossfire.FrameType(t.RawData[2])
}

func (t *DeviceSettingsEntryExtFrame) Dst() crossfire.Endpoint {
	return crossfire.Endpoint(t.RawData[3])
}

func (t *DeviceSettingsEntryExtFrame) Src() crossfire.Endpoint {
	return crossfire.Endpoint(t.RawData[4])
}

func (t *DeviceSettingsEntryExtFrame) ExtType() crossfire.FrameType {
	return crossfire.FrameType(t.RawData[2])
}

func (t *DeviceSettingsEntryExtFrame) Data() []uint8 {
	return t.RawData[5:]
}

func (t *DeviceSettingsEntryExtFrame) Id() uint8 {
	return t.Data()[0]
}

func (t *DeviceSettingsEntryExtFrame) ChunksRemaining() uint8 {
	return t.Data()[1]
}

// ParentId only chunk 0 contains parent id
func (t *DeviceSettingsEntryExtFrame) ParentId() uint8 {
	return t.Data()[2]
}

// DataType only chunk 0 contains data type
func (t *DeviceSettingsEntryExtFrame) DataType() CRSFFieldType {
	return CRSFFieldType(t.Data()[3])
}

func (t *DeviceSettingsEntryExtFrame) Buffer() []byte {
	return t.Data()
}

func (t *DeviceSettingsEntryExtFrame) Proto() *pb.Telemetry {
	return &pb.Telemetry{
		Data: &pb.Telemetry_DeviceFieldEntry{
			DeviceFieldEntry: &pb.CRSFDeviceFieldEntryData{
				Id:              uint32(t.Id()),
				ChunksRemaining: uint32(t.ChunksRemaining()),
				ParentId:        uint32(t.ParentId()),
				DataType:        pb.CRSFDeviceFieldType(t.DataType()),
				Buffer:          t.Buffer(),
			},
		},
	}
}

func (t *DeviceSettingsEntryExtFrame) String() string {
	return fmt.Sprintf("(device-settings-entry-frame) id: %v, cr: %v, pid: %v, dt: %s, clen: %v",
		t.Id(),
		t.ChunksRemaining(),
		t.ParentId(),
		t.DataType(),
		len(t.Buffer()))
}
