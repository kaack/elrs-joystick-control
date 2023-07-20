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

const VariometerFrameSize int = 7

type TelemVariometerType interface {
	TelemType
	Altitude() float32
	VerticalSpeed() float32
}

type VariometerFrame struct {
	RawData []uint8
}

func (t *VariometerFrame) Addr() crossfire.Endpoint {
	return crossfire.Endpoint(t.RawData[0])
}
func (t *VariometerFrame) Type() crossfire.FrameType {
	return crossfire.FrameType(t.RawData[2])
}

func (t *VariometerFrame) Data() []uint8 {
	return t.RawData[2:]
}

func (t *VariometerFrame) VerticalSpeed() float32 {
	return float32(int16(binary.BigEndian.Uint16(t.RawData[3:5]))) / 100 //data comes in cm/s so divide by 100 to convert to m/s
}

func (t *VariometerFrame) Proto() *pb.Telemetry {
	return &pb.Telemetry{
		Data: &pb.Telemetry_Variometer{
			Variometer: &pb.VariometerData{
				VerticalSpeed: t.VerticalSpeed(),
			},
		},
	}
}

func (t *VariometerFrame) String() string {
	return fmt.Sprintf("(variometer-frame) vpspd: %v", t.VerticalSpeed())
}
