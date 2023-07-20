// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package telemetry

import (
	"encoding/binary"
	"fmt"
	"github.com/kaack/elrs-joystick-control/pkg/crossfire"
	"github.com/kaack/elrs-joystick-control/pkg/proto/generated/pb"
	"time"
)

type TelemSyncType interface {
	TelemExtType
	Rate() int32
	Offset() int32
}

type SyncExtFrame struct {
	RawData []uint8
}

func (t *SyncExtFrame) Addr() crossfire.Endpoint {
	return crossfire.Endpoint(t.RawData[0])
}
func (t *SyncExtFrame) Type() crossfire.FrameType {
	return crossfire.FrameType(t.RawData[2])
}

func (t *SyncExtFrame) Dst() crossfire.Endpoint {
	return crossfire.Endpoint(t.RawData[3])
}

func (t *SyncExtFrame) Src() crossfire.Endpoint {
	return crossfire.Endpoint(t.RawData[4])
}

func (t *SyncExtFrame) ExtType() crossfire.FrameType {
	return crossfire.FrameType(t.RawData[5])
}

func (t *SyncExtFrame) Data() []uint8 {
	return t.RawData[6:]
}

func (t *SyncExtFrame) Rate() int32 {
	return int32(binary.BigEndian.Uint32(t.RawData[6:10]))
}

func (t *SyncExtFrame) Offset() int32 {
	return int32(binary.BigEndian.Uint32(t.RawData[10:14]))
}

func (t *SyncExtFrame) Proto() *pb.Telemetry {
	return &pb.Telemetry{
		Data: &pb.Telemetry_Sync{
			Sync: &pb.SyncData{
				Rate:   t.Rate(),
				Offset: t.Offset(),
			},
		},
	}
}

func (t *SyncExtFrame) String() string {
	return fmt.Sprintf("(sync-frame) rate: %v, offset: %v", time.Duration(t.Rate()/10)*time.Microsecond, time.Duration(t.Offset()/10)*time.Microsecond)
}
