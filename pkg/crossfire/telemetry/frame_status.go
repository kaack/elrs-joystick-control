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

type TelemStatusExtType interface {
	TelemExtType

	BadPackets() uint32
	GoodPackets() uint32
	Flags() []LinkStatusFlag
	Message() string
}

type StatusExtFrame struct {
	RawData []uint8
}

func (t *StatusExtFrame) Addr() crossfire.Endpoint {
	return crossfire.Endpoint(t.RawData[0])
}
func (t *StatusExtFrame) Type() crossfire.FrameType {
	return crossfire.FrameType(t.RawData[2])
}

func (t *StatusExtFrame) Dst() crossfire.Endpoint {
	return crossfire.Endpoint(t.RawData[3])
}

func (t *StatusExtFrame) Src() crossfire.Endpoint {
	return crossfire.Endpoint(t.RawData[4])
}

func (t *StatusExtFrame) ExtType() crossfire.FrameType {
	return crossfire.FrameType(t.RawData[2])
}

func (t *StatusExtFrame) Data() []uint8 {
	return t.RawData[5:]
}

func (t *StatusExtFrame) BadPackets() uint32 {
	return uint32(t.RawData[6])
}

func (t *StatusExtFrame) GoodPackets() uint32 {
	return uint32(binary.BigEndian.Uint16(t.RawData[6:8]))
}

func (t *StatusExtFrame) Flags() []LinkStatusFlag {
	//fmt.Printf("%x", t.RawData)
	flags := t.RawData[8]
	var res []LinkStatusFlag
	for i := 7; i >= 0; i-- {
		mask := uint8(0x01) << i
		if flags&mask == mask {
			res = append(res, LinkStatusFlag(i))
		}
	}
	return res
}
func (t *StatusExtFrame) Message() string {
	return string(t.RawData[9 : 9+bytes.IndexByte(t.RawData[9:], 0)])
}

func (t *StatusExtFrame) Proto() *pb.Telemetry {
	return &pb.Telemetry{
		Data: &pb.Telemetry_DeviceLinkStatus{
			DeviceLinkStatus: &pb.CRSFDeviceLinkStatusData{
				BadPacketsCount:  t.BadPackets(),
				GoodPacketsCount: t.GoodPackets(),
				Flags:            LinkStatusFlagArrayToProto(t.Flags()),
				WarningInfo:      t.Message(),
			},
		},
	}
}

func (t *StatusExtFrame) String() string {
	return fmt.Sprintf("(status-frame) bad: %v, good: %v, flags: %v, msg: %s",
		t.BadPackets(),
		t.GoodPackets(),
		t.Flags(),
		t.Message(),
	)
}
