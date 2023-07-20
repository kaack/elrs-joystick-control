// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package telemetry

import "fmt"

type State int

const (
	TelemInit      State = iota
	TelemWaitPort  State = iota
	TelemPortError State = iota
	TelemSteady    State = iota
	SendModelID    State = iota
	TelemSyncWait  State = iota
)

func (e State) String() string {
	switch e {
	case TelemInit:
		return "TelemInit"
	case TelemWaitPort:
		return "TelemWaitPort"
	case TelemPortError:
		return "TelemPortError"
	case TelemSteady:
		return "TelemSteady"
	case SendModelID:
		return "SendModelID"
	case TelemSyncWait:
		return "TelemSyncWait"
	default:
		return fmt.Sprintf("%d", int(e))
	}
}
