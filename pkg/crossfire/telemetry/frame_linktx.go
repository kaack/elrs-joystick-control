// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package telemetry

import (
	"fmt"
	"github.com/kaack/elrs-joystick-control/pkg/crossfire"
	"github.com/kaack/elrs-joystick-control/pkg/proto/generated/pb"
)

const LinkTXFrameSize int = 10

// TelemLinkRXType I think this is a TBS Crossfire only frame, ELRS uses the link-stats frame instead

type TelemLinkTXType interface {
	TelemType
	DownlinkRSSI() uint32 //RSSI (in percent) of the RF receiver's downlink signal measured at the transmitter
	UplinkPower() uint32  //RF transmitter's power (in dBm) for the uplink signal
	UplinkFPS() uint32    //RF transmitters FPS (in Hz) i.e. 50 Hz, 150 Hz
}

type LinkTXFrame struct {
	RawData []uint8
}

func (t *LinkTXFrame) Addr() crossfire.Endpoint {
	return crossfire.Endpoint(t.RawData[0])
}
func (t *LinkTXFrame) Type() crossfire.FrameType {
	return crossfire.FrameType(t.RawData[2])
}

func (t *LinkTXFrame) Data() []uint8 {
	return t.RawData[2:]
}

func (t *LinkTXFrame) DownlinkRSSI() uint32 {
	//goland:noinspection GoRedundantConversion
	return uint32(uint8(t.RawData[4]))
}

func (t *LinkTXFrame) UplinkPower() uint32 {
	//goland:noinspection GoRedundantConversion
	return uint32(uint8(t.RawData[7]))
}

func (t *LinkTXFrame) UplinkFPS() uint32 {
	//goland:noinspection GoRedundantConversion
	return uint32(uint8(t.RawData[8]))
}

func (t *LinkTXFrame) Proto() *pb.Telemetry {
	return &pb.Telemetry{
		Data: &pb.Telemetry_LinkTx{
			LinkTx: &pb.LinkTXData{
				DownlinkRssi: t.DownlinkRSSI(),
				UplinkPower:  t.UplinkPower(),
				UplinkFps:    t.UplinkFPS(),
			},
		},
	}
}

func (t *LinkTXFrame) String() string {
	return fmt.Sprintf("(link-tx-frame) DLrssi: %v, ULpwr: %v, ULfps: %v", t.DownlinkRSSI(), t.UplinkPower(), t.UplinkFPS())
}
