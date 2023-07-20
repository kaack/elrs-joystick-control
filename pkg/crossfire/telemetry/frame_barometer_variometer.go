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

const BarometerVariometerFrameSize int = 9

type TelemBarometerVariometerType interface {
	TelemType
	Altitude() float32
	VerticalSpeed() float32
}

type BarometerVariometerFrame struct {
	RawData []uint8
}

func (t *BarometerVariometerFrame) Addr() crossfire.Endpoint {
	return crossfire.Endpoint(t.RawData[0])
}
func (t *BarometerVariometerFrame) Type() crossfire.FrameType {
	return crossfire.FrameType(t.RawData[2])
}

func (t *BarometerVariometerFrame) Data() []uint8 {
	return t.RawData[2:]
}

func (t *BarometerVariometerFrame) Altitude() float32 {
	return BarometerAltitude(t.RawData[3:5])
}

func (t *BarometerVariometerFrame) VerticalSpeed() float32 {
	return float32(int16(binary.BigEndian.Uint16(t.RawData[5:7]))) / 100 //data comes in cm/s so divide by 100 to convert to m/s
}

func (t *BarometerVariometerFrame) Proto() *pb.Telemetry {
	return &pb.Telemetry{
		Data: &pb.Telemetry_BarometerVariometer{
			BarometerVariometer: &pb.BarometerVariometerData{
				Altitude:      t.Altitude(),
				VerticalSpeed: t.VerticalSpeed(),
			},
		},
	}
}

func (t *BarometerVariometerFrame) String() string {
	return fmt.Sprintf("(barometer-variometer-frame) alt: %v, vpspd: %v", t.Altitude(), t.VerticalSpeed())
}
