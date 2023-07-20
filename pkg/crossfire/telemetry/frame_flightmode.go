// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package telemetry

import (
	"fmt"
	"github.com/kaack/elrs-joystick-control/pkg/crossfire"
	"github.com/kaack/elrs-joystick-control/pkg/proto/generated/pb"
)

type TelemFlightModeType interface {
	TelemType
	Mode() string
}

type FlightModeFrame struct {
	RawData []uint8
}

func (t *FlightModeFrame) Addr() crossfire.Endpoint {
	return crossfire.Endpoint(t.RawData[0])
}
func (t *FlightModeFrame) Type() crossfire.FrameType {
	return crossfire.FrameType(t.RawData[2])
}

func (t *FlightModeFrame) Data() []uint8 {
	return t.RawData[2:]
}

func (t *FlightModeFrame) Mode() string {
	return string(t.RawData[2 : len(t.RawData)-2])
}

func (t *FlightModeFrame) Proto() *pb.Telemetry {
	return &pb.Telemetry{
		Data: &pb.Telemetry_FlightMode{
			FlightMode: &pb.FlightModeData{
				Mode: t.Mode(),
			},
		},
	}
}

func (t *FlightModeFrame) String() string {
	return fmt.Sprintf("(flightmode-frame) mode: %s", t.Mode())
}
