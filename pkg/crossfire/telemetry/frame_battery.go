// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package telemetry

import (
	"encoding/binary"
	"fmt"
	"github.com/kaack/elrs-joystick-control/pkg/crossfire"
	"github.com/kaack/elrs-joystick-control/pkg/proto/generated/pb"
)

const BatteryFrameSize int = 12

type TelemBatteryType interface {
	TelemType
	Voltage() float32
	Current() float32
	Fuel() float32      // in mAh
	Remaining() float32 // in percentage
}

type BatteryFrame struct {
	RawData []uint8
}

func (t *BatteryFrame) Addr() crossfire.Endpoint {
	return crossfire.Endpoint(t.RawData[0])
}
func (t *BatteryFrame) Type() crossfire.FrameType {
	return crossfire.FrameType(t.RawData[2])
}

func (t *BatteryFrame) Data() []uint8 {
	return t.RawData[2:]
}

func (t *BatteryFrame) Voltage() float32 {
	//goland:noinspection GoRedundantConversion
	return float32(uint32(binary.BigEndian.Uint16(t.RawData[3:5]))) / 10
}

func (t *BatteryFrame) Current() float32 {
	//goland:noinspection GoRedundantConversion
	return float32(uint32(binary.BigEndian.Uint16(t.RawData[5:7]))) / 10
}

func (t *BatteryFrame) Fuel() float32 {
	return float32(binary.BigEndian.Uint32([]uint8{0, t.RawData[7], t.RawData[8], t.RawData[9]}))
}

func (t *BatteryFrame) Remaining() float32 {
	//goland:noinspection GoRedundantConversion
	return float32(uint32(t.RawData[10]))
}

func (t *BatteryFrame) Proto() *pb.Telemetry {
	return &pb.Telemetry{
		Data: &pb.Telemetry_Battery{
			Battery: &pb.BatteryData{
				Voltage:   t.Voltage(),
				Current:   t.Current(),
				Fuel:      t.Fuel(),
				Remaining: t.Remaining(),
			},
		},
	}
}

func (t *BatteryFrame) String() string {
	return fmt.Sprintf("(battery-frame) voltage: %v, current: %v, fuel: %v, remain: %v", t.Voltage(), t.Current(), t.Fuel(), t.Remaining())
}
