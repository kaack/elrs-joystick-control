// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package telemetry

import (
	"encoding/binary"
	"fmt"
	"github.com/kaack/elrs-joystick-control/pkg/crossfire"
	"github.com/kaack/elrs-joystick-control/pkg/proto/generated/pb"
	"math"
)

const AttitudeFrameSize int = 10
const DEGREES = 180.0 / math.Pi

type TelemAttitudeType interface {
	TelemType
	Pitch() float32 // degrees -180, 180
	Roll() float32  // degrees -180, 180
	Yaw() float32   // degrees -180, 180

}

type AttitudeFrame struct {
	RawData []uint8
}

func (t *AttitudeFrame) Addr() crossfire.Endpoint {
	return crossfire.Endpoint(t.RawData[0])
}
func (t *AttitudeFrame) Type() crossfire.FrameType {
	return crossfire.FrameType(t.RawData[2])
}

func (t *AttitudeFrame) Data() []uint8 {
	return t.RawData[2:]
}

func (t *AttitudeFrame) Pitch() float32 {
	return float32(int16(binary.BigEndian.Uint16(t.RawData[3:5]))) / 1000 * DEGREES / 10
}

func (t *AttitudeFrame) Roll() float32 {
	return float32(int16(binary.BigEndian.Uint16(t.RawData[5:7]))) / 1000 * DEGREES / 10
}

func (t *AttitudeFrame) Yaw() float32 {
	return float32(int16(binary.BigEndian.Uint16(t.RawData[7:9]))) / 1000 * DEGREES / 10
}

func (t *AttitudeFrame) Proto() *pb.Telemetry {
	return &pb.Telemetry{
		Data: &pb.Telemetry_Attitude{
			Attitude: &pb.AttitudeData{
				Pitch: t.Pitch(),
				Roll:  t.Roll(),
				Yaw:   t.Yaw(),
			},
		},
	}
}

func (t *AttitudeFrame) String() string {
	return fmt.Sprintf("(battery-frame) Pitch: %v, Roll: %v, Yaw: %v", t.Pitch(), t.Roll(), t.Yaw())
}
