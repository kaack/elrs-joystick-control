// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package crossfire

import "time"

type FrameType uint8
type Endpoint uint8

//goland:noinspection GoUnusedConst
const (
	AllEndpoint     Endpoint = 0x00
	HandsetEndpoint Endpoint = 0xEA
	ModuleEndpoint  Endpoint = 0xEE
)

//goland:noinspection GoUnusedConst

const (
	GpsFrame             FrameType = 0x02
	VarioFrame           FrameType = 0x07
	BatteryFrame         FrameType = 0x08
	BaroAltFrame         FrameType = 0x09
	LinkStatsFrame       FrameType = 0x14
	ChannelsFrame        FrameType = 0x16
	LinkRxFrame          FrameType = 0x1C
	LinkTxFrame          FrameType = 0x1D
	AltitudeFrame        FrameType = 0x1E
	FlightModeFrame      FrameType = 0x21
	PingDevicesFrame     FrameType = 0x28
	DeviceInfoFrame      FrameType = 0x29
	RequestSettingsFrame FrameType = 0x2A
	CommandFrame         FrameType = 0x32
	RadioFrame           FrameType = 0x3A
	UartSyncFrame        FrameType = 0xC8
	SubcommandFrame      FrameType = 0x10
	CmdModelSelectFrame  FrameType = 0x05
	OpenTxSyncFrame      FrameType = 0x10
)

//goland:noinspection GoUnusedExportedFunction
func GetBaudRates() []int32 {
	return []int32{
		115200,
		400000,
		921600,
		1870000,
		3750000,
		5250000,
	}
}

const MinRefreshRate = 500 * time.Microsecond
const MaxRefreshRate = 50000 * time.Microsecond

//goland:noinspection GoUnusedConst

const (
	AileronCh  int32 = iota
	ElevatorCh int32 = iota
	ThrottleCh int32 = iota
	RollCh     int32 = iota
	Aux1Ch     int32 = iota
	Aux2Ch     int32 = iota
	Aux3Ch     int32 = iota
	Aux4Ch     int32 = iota
	Aux5Ch     int32 = iota
	Aux6Ch     int32 = iota
	Aux7Ch     int32 = iota
	Aux8Ch     int32 = iota
	Aux9Ch     int32 = iota
	Aux10Ch    int32 = iota
	Aux11Ch    int32 = iota
	Aux12Ch    int32 = iota
)
