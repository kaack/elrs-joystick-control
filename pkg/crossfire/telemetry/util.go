// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package telemetry

import (
	"encoding/binary"
	"github.com/kaack/elrs-joystick-control/pkg/crossfire"
	"github.com/kaack/elrs-joystick-control/pkg/proto/generated/pb"
)

func isTelemetryAddress(c crossfire.Endpoint) bool {
	return c == crossfire.HandsetEndpoint || c == crossfire.ModuleEndpoint
}

func BarometerAltitude(data []byte) float32 {
	raw := binary.BigEndian.Uint16(data)
	if raw&0x8000 == 0x8000 { //high bit is set, measurement is in meters
		raw = raw & 0x7FFF //remove the high bit
		raw *= 100         //convert to centimeter
	} else {
		//measurement is in decimeters + 10000dm
		raw -= 10000
		raw *= 10
	}

	return float32(raw) / 10
}

func LinkStatusFlagArrayToProto(flags []LinkStatusFlag) []pb.LinkStatusFlag {
	var res []pb.LinkStatusFlag
	for _, flag := range flags {
		res = append(res, pb.LinkStatusFlag(flag))
	}
	return res
}
