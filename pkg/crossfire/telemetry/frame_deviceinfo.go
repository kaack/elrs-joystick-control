// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package telemetry

import (
	"bytes"
	"encoding/binary"
	"fmt"
	"github.com/kaack/elrs-joystick-control/pkg/crossfire"
	"github.com/kaack/elrs-joystick-control/pkg/proto/generated/pb"
)

type TelemDeviceInfoExtType interface {
	TelemExtType
	DeviceId() uint8
	DeviceName() string
	SerialNumber() uint32
	HardwareVersion() string
	SoftwareVersion() string
	FieldCount() uint8
	ParameterVersion() uint8
}

type DeviceInfoExtFrame struct {
	RawData []uint8
	Offset  int
}

func NewDeviceInfoExtFrame(data []byte) *DeviceInfoExtFrame {

	frame := DeviceInfoExtFrame{RawData: data}
	frame.Offset = bytes.IndexByte(frame.Data(), 0) + 1

	return &frame
}

func (t *DeviceInfoExtFrame) Addr() crossfire.Endpoint {
	return crossfire.Endpoint(t.RawData[0])
}
func (t *DeviceInfoExtFrame) Type() crossfire.FrameType {
	return crossfire.FrameType(t.RawData[2])
}

func (t *DeviceInfoExtFrame) Dst() crossfire.Endpoint {
	return crossfire.Endpoint(t.RawData[3])
}

func (t *DeviceInfoExtFrame) Src() crossfire.Endpoint {
	return crossfire.Endpoint(t.RawData[4])
}

func (t *DeviceInfoExtFrame) ExtType() crossfire.FrameType {
	return crossfire.FrameType(t.RawData[2])
}

func (t *DeviceInfoExtFrame) Data() []uint8 {
	return t.RawData[5:]
}

func (t *DeviceInfoExtFrame) DeviceId() uint8 {
	return t.RawData[4]
}

func (t *DeviceInfoExtFrame) DeviceName() string {
	return string(t.Data()[0 : t.Offset-1])
}

func (t *DeviceInfoExtFrame) SerialNumber() uint32 {
	return binary.BigEndian.Uint32(t.Data()[t.Offset : t.Offset+4])
}

func (t *DeviceInfoExtFrame) HardwareVersion() string {
	//return binary.BigEndian.Uint32(t.Data()[t.Offset+4 : t.Offset+8])
	return fmt.Sprintf("%d.%d.%d", t.Data()[t.Offset+5], t.Data()[t.Offset+6], t.Data()[t.Offset+7])
}

func (t *DeviceInfoExtFrame) SoftwareVersion() string {
	//return binary.BigEndian.Uint32(t.Data()[t.Offset+8 : t.Offset+12])
	return fmt.Sprintf("%d.%d.%d", t.Data()[t.Offset+9], t.Data()[t.Offset+10], t.Data()[t.Offset+11])
}

func (t *DeviceInfoExtFrame) FieldCount() uint8 {
	return t.Data()[t.Offset+12]
}

func (t *DeviceInfoExtFrame) ParameterVersion() uint8 {
	return t.Data()[t.Offset+13]
}

func (t *DeviceInfoExtFrame) Proto() *pb.Telemetry {
	return &pb.Telemetry{
		Data: &pb.Telemetry_DeviceInfo{
			DeviceInfo: &pb.CRSFDeviceInfoData{
				Id:               uint32(t.DeviceId()),
				Name:             t.DeviceName(),
				SerialNumber:     t.SerialNumber(),
				HardwareVersion:  t.HardwareVersion(),
				SoftwareVersion:  t.SoftwareVersion(),
				FieldCount:       uint32(t.FieldCount()),
				ParameterVersion: uint32(t.ParameterVersion()),
			},
		},
	}
}

func (t *DeviceInfoExtFrame) String() string {
	return fmt.Sprintf("(device-info-frame) id: %v, ame: %s, sno: %v, hv: %v, sv: %v, fc: %v, pv: %v",
		t.DeviceId(),
		t.DeviceName(),
		t.SerialNumber(),
		t.HardwareVersion(),
		t.SoftwareVersion(),
		t.FieldCount(),
		t.ParameterVersion())
}
