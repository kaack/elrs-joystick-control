// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package telemetry

import (
	"encoding/binary"
	"fmt"
	"github.com/kaack/elrs-joystick-control/pkg/crossfire"
	"github.com/kaack/elrs-joystick-control/pkg/proto/generated/pb"
)

const GPSFrameSize int = 19

type TelemGPSType interface {
	TelemType

	Latitude() float32    //in degrees
	Longitude() float32   //in degrees
	GroundSpeed() float32 //in meters/second
	Heading() float32     //in degrees
	Altitude() int32      //in meters
	Satellites() uint32   //count
}

type GPSFrame struct {
	RawData []uint8
}

func (t *GPSFrame) Addr() crossfire.Endpoint {
	return crossfire.Endpoint(t.RawData[0])
}
func (t *GPSFrame) Type() crossfire.FrameType {
	return crossfire.FrameType(t.RawData[2])
}

func (t *GPSFrame) Data() []uint8 {
	return t.RawData[2:]
}

func (t *GPSFrame) Latitude() float32 {
	return float32(int32(binary.BigEndian.Uint32(t.RawData[3:7]))) / 10000000 // Betaflight sends it as signed integer
}

func (t *GPSFrame) Longitude() float32 {
	return float32(int32(binary.BigEndian.Uint32(t.RawData[7:11]))) / 10000000 // Betaflight sends it as a signed integer
}

func (t *GPSFrame) GroundSpeed() float32 {
	return float32(int32(binary.BigEndian.Uint16(t.RawData[11:13]))) / 100 // Betaflight sends it as cm/s, convert it to m/s
}

func (t *GPSFrame) Heading() float32 {
	return float32(int32(binary.BigEndian.Uint16(t.RawData[13:15]))) / 100
}

func (t *GPSFrame) Altitude() int32 {
	return int32(binary.BigEndian.Uint16(t.RawData[15:17])) - 1000 // Betaflight adds 1000, so subtract it
}

func (t *GPSFrame) Satellites() uint32 {
	//goland:noinspection GoRedundantConversion
	return uint32(uint8(t.RawData[17]))
}

func (t *GPSFrame) Proto() *pb.Telemetry {
	return &pb.Telemetry{
		Data: &pb.Telemetry_Gps{
			Gps: &pb.GPSData{
				Latitude:    t.Latitude(),
				Longitude:   t.Longitude(),
				GroundSpeed: t.GroundSpeed(),
				Heading:     t.Heading(),
				Altitude:    t.Altitude(),
				Satellites:  t.Satellites(),
			},
		},
	}
}

func (t *GPSFrame) String() string {
	return fmt.Sprintf("(gps-frame) lat: %v, lon: %v, gspd: %v, hdg: %v, alt: %v, sat: %v",
		t.Latitude(),
		t.Longitude(),
		t.GroundSpeed(),
		t.Heading(),
		t.Altitude(),
		t.Satellites(),
	)
}
