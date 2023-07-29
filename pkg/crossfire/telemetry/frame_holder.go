// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package telemetry

import (
	"github.com/kaack/elrs-joystick-control/pkg/crossfire"
	"github.com/kaack/elrs-joystick-control/pkg/proto/generated/pb"
)

const MinExtendedFrameSize = 6

type TelemType interface {
	Addr() crossfire.Endpoint
	Type() crossfire.FrameType
	Data() []uint8

	Proto() *pb.Telemetry
}

type TelemExtType interface {
	TelemType

	Dst() crossfire.Endpoint
	Src() crossfire.Endpoint
}

type THolder struct {
	T TelemType
}
