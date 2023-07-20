// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package telemetry

import (
	"fmt"
	"github.com/kaack/elrs-joystick-control/pkg/crossfire"
	"github.com/kaack/elrs-joystick-control/pkg/proto/generated/pb"
)

const LinkRXFrameSize int = 9

// TelemLinkRXType I think this is a TBS Crossfire only frame, ELRS uses the link-stats frame instead

type TelemLinkRXType interface {
	TelemType
	UplinkRSSI() uint32    //RSSI (in percent) of the RF transmitter's uplink signal measured at the receiver
	DownlinkPower() uint32 //RF receiver's power (milli-watts) for the downlink signal
}

type LinkRXFrame struct {
	RawData []uint8
}

func (t *LinkRXFrame) Addr() crossfire.Endpoint {
	return crossfire.Endpoint(t.RawData[0])
}
func (t *LinkRXFrame) Type() crossfire.FrameType {
	return crossfire.FrameType(t.RawData[2])
}

func (t *LinkRXFrame) Data() []uint8 {
	return t.RawData[2:]
}

func (t *LinkRXFrame) UplinkRSSI() uint32 {
	//goland:noinspection GoRedundantConversion
	return uint32(uint8(t.RawData[4]))
}

func (t *LinkRXFrame) DownlinkPower() uint32 {
	//goland:noinspection GoRedundantConversion
	return uint32(uint8(t.RawData[7]))
}

func (t *LinkRXFrame) Proto() *pb.Telemetry {
	return &pb.Telemetry{
		Data: &pb.Telemetry_LinkRx{
			LinkRx: &pb.LinkRXData{
				UplinkRssi:    t.UplinkRSSI(),
				DownlinkPower: t.DownlinkPower(),
			},
		},
	}
}

func (t *LinkRXFrame) String() string {
	return fmt.Sprintf("(link-rx-frame) ULrssi: %v, DLpwr: %v", t.UplinkRSSI(), t.DownlinkPower())
}
