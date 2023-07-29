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

type CRSFFieldType uint8

const (
	CrsfUint8         CRSFFieldType = iota
	CrsfInt8          CRSFFieldType = iota
	CrsfUint16        CRSFFieldType = iota
	CrsfInt16         CRSFFieldType = iota
	CrsfUint32        CRSFFieldType = iota
	CrsfInt32         CRSFFieldType = iota
	CrsfUint64        CRSFFieldType = iota
	CrsfInt64         CRSFFieldType = iota
	CrsfFloat         CRSFFieldType = iota
	CrsfTextSelection CRSFFieldType = iota
	CrsfString        CRSFFieldType = iota
	CrsfFolder        CRSFFieldType = iota
	CrsfInfo          CRSFFieldType = iota
	CrsfCommand       CRSFFieldType = iota
	CrsfVtx           CRSFFieldType = iota
	CrsfStatus        CRSFFieldType = 0x2E
	CrsfOutOfRange    CRSFFieldType = 0x7F
)

func (t CRSFFieldType) String() string {
	switch t {
	case CrsfUint8:
		return "uint8"
	case CrsfInt8:
		return "int8"
	case CrsfUint16:
		return "uint16"
	case CrsfInt16:
		return "int16"
	case CrsfUint32:
		return "uint32"
	case CrsfInt32:
		return "int32"
	case CrsfUint64:
		return "uint64"
	case CrsfInt64:
		return "int64"
	case CrsfFloat:
		return "float"
	case CrsfTextSelection:
		return "text-select"
	case CrsfString:
		return "string"
	case CrsfFolder:
		return "folder"
	case CrsfInfo:
		return "info"
	case CrsfCommand:
		return "command"
	case CrsfVtx:
		return "vtx"
	case CrsfStatus:
		return "suppress-critical-errors"
	case CrsfOutOfRange:
		return "out-of-range"
	default:
		return fmt.Sprintf("%d", int(t))
	}
}

type LinkStatusFlag uint32

const (
	StatusConnected        LinkStatusFlag = iota
	StatusStatus1          LinkStatusFlag = iota
	StatusModelMatch       LinkStatusFlag = iota
	StatusIsArmed          LinkStatusFlag = iota
	StatusWarning1         LinkStatusFlag = iota
	StatusErrorConnected   LinkStatusFlag = iota
	StatusErrorBaudrate    LinkStatusFlag = iota
	StatusCriticalWarning2 LinkStatusFlag = iota
)
