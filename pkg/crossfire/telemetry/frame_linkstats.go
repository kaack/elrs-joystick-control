// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package telemetry

import (
	"fmt"
	"github.com/kaack/elrs-joystick-control/pkg/crossfire"
	"github.com/kaack/elrs-joystick-control/pkg/proto/generated/pb"
)

const LinkStatsFrameSize int = 14

type TelemLinkStatsType interface {
	TelemType
	UplinkRSSI1() int32          //RSSI of the RF transmitter's uplink signal measured at the receiver for antenna 1 (dBm)
	UplinkRSSI2() int32          //RSSI of the RF transmitter's uplink signal measured at the receiver for antenna 2 (dBm)
	UplinkLinkQuality() uint32   //link quality of the RF transmitter's uplink signal measured at the receiver (percent)
	UplinkSNR() int32            //signal-to-noise ratio of the RF transmitter's uplink signal measured at the receiver (db)
	ActiveAntenna() uint32       //active antenna at the RF receiver
	RadioFrequencyMode() uint32  //packet rate (Hz)
	UplinkPower() uint32         //RF transmitter's power (milli-watts)
	DownlinkRSSI() int32         //RSSI of the RF receiver's downlink signal measured at the transmitter
	DownlinkLinkQuality() uint32 //link quality of the RF receiver's downlink signal measured at the transmitter
	DownlinkSNR() int32          //signal-to-noise of the RF receiver's downlink signal measured at the transmitter
}

type LinkStatsFrame struct {
	RawData []uint8
}

func (t *LinkStatsFrame) Addr() crossfire.Endpoint {
	return crossfire.Endpoint(t.RawData[0])
}
func (t *LinkStatsFrame) Type() crossfire.FrameType {
	return crossfire.FrameType(t.RawData[2])
}

func (t *LinkStatsFrame) Data() []uint8 {
	return t.RawData[2:]
}

func (t *LinkStatsFrame) UplinkRSSI1() int32 {
	return int32(int8(t.RawData[3]))
}

func (t *LinkStatsFrame) UplinkRSSI2() int32 {
	return int32(int8(t.RawData[4]))
}

func (t *LinkStatsFrame) UplinkLinkQuality() uint32 {
	return uint32(t.RawData[5])
}

func (t *LinkStatsFrame) UplinkSNR() int32 {
	//goland:noinspection GoRedundantConversion
	return int32(uint8(t.RawData[6]))
}

func (t *LinkStatsFrame) ActiveAntenna() uint32 {
	return uint32(t.RawData[7])
}

func (t *LinkStatsFrame) RadioFrequencyMode() uint32 {
	return uint32(t.RawData[8])
}

func (t *LinkStatsFrame) UplinkPower() uint32 {
	return uint32(t.RawData[9])
}

func (t *LinkStatsFrame) DownlinkRSSI() int32 {
	return int32(int8(t.RawData[10]))
}

func (t *LinkStatsFrame) DownlinkLinkQuality() uint32 {
	return uint32(t.RawData[11])
}

func (t *LinkStatsFrame) DownlinkSNR() int32 {
	//goland:noinspection GoRedundantConversion
	return int32(uint8(t.RawData[12]))
}

func (t *LinkStatsFrame) Proto() *pb.Telemetry {
	return &pb.Telemetry{
		Data: &pb.Telemetry_LinkStats{
			LinkStats: &pb.LinkStatsData{
				UplinkRssi1:         t.UplinkRSSI1(),
				UplinkRssi2:         t.UplinkRSSI2(),
				UplinkLinkQuality:   t.UplinkLinkQuality(),
				UplinkSnr:           t.UplinkSNR(),
				ActiveAntenna:       t.ActiveAntenna(),
				RadioFrequencyMode:  t.RadioFrequencyMode(),
				UplinkPower:         t.UplinkPower(),
				DownlinkRssi:        t.DownlinkRSSI(),
				DownlinkLinkQuality: t.DownlinkLinkQuality(),
				DownlinkSnr:         t.DownlinkSNR(),
			},
		},
	}
}

func (t *LinkStatsFrame) String() string {
	return fmt.Sprintf("(link-stats-frame) ULrssi1: %v, ULrssi2: %v, ULlq: %v, ULsnr: %v, aa: %v, rfmd: %v, ULpwr: %v, DLrssi: %v, DLlq: %v, DLsnr: %v",
		t.UplinkRSSI1(),
		t.UplinkRSSI2(),
		t.UplinkLinkQuality(),
		t.UplinkSNR(),
		t.ActiveAntenna(),
		t.RadioFrequencyMode(),
		t.UplinkPower(),
		t.DownlinkRSSI(),
		t.DownlinkLinkQuality(),
		t.DownlinkSNR())
}
