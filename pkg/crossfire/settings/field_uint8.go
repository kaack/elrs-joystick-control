// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package settings

import (
	"bytes"
	"fmt"
	"github.com/kaack/elrs-joystick-control/pkg/crossfire/telemetry"
	"github.com/kaack/elrs-joystick-control/pkg/proto/generated/pb"
	"strings"
)

type UUint8FieldType interface {
	FieldType
	Value() uint8
	Min() uint8
	Max() uint8
	Default() uint8
	Units() string
}

type Uint8Field struct {
	id       uint32
	parentId uint32
	data     []uint8

	//internal pointers
	nameEnd  int
	unitsEnd int
}

func NewUint8Field(id uint32, parentId uint32, data []uint8) FieldType {

	/** name(string), value(int8), min(int8), max(int8), default(int8), units (string) **/
	/**
	  name(string):    0 -> nameEnd
	  value(int8):   nameEnd + 1
	  min(int8):     nameEnd + 2
	  max(int8):     nameEnd + 3
	  default(int8): nameEnd + 4
	  units(string):   nameEnd + 5
	**/

	nameEnd := bytes.IndexByte(data, 0)
	unitsEnd := nameEnd + 5 + bytes.IndexByte(data[nameEnd+5:], 0)

	field := Uint8Field{
		id,
		parentId,
		data,

		nameEnd,
		unitsEnd,
	}

	return &field
}

func (f *Uint8Field) Name() string {
	return string(f.data[0:f.nameEnd])
}

func (f *Uint8Field) Type() telemetry.CRSFFieldType {
	return telemetry.CrsfUint8
}

func (f *Uint8Field) Id() uint32 {
	return f.id
}

func (f *Uint8Field) ParentId() uint32 {
	return f.parentId
}

func (f *Uint8Field) Value() uint8 {
	return f.data[f.nameEnd+1]
}

func (f *Uint8Field) Min() uint8 {
	return f.data[f.nameEnd+2]
}

func (f *Uint8Field) Max() uint8 {
	return f.data[f.nameEnd+3]
}

func (f *Uint8Field) Default() uint8 {
	return f.data[f.nameEnd+4]
}

func (f *Uint8Field) Units() string {
	return string(f.data[f.nameEnd+5 : f.unitsEnd])
}

func (f *Uint8Field) Proto() *pb.CRSFDeviceFieldData {
	return &pb.CRSFDeviceFieldData{
		Data: &pb.CRSFDeviceFieldData_Uint8{
			Uint8: &pb.CRSFDeviceFieldUint8{
				Name:     strings.ToValidUTF8(f.Name(), ""),
				Type:     pb.CRSFDeviceFieldType(f.Type()),
				Id:       f.Id(),
				ParentId: f.ParentId(),
				Value:    uint32(f.Value()),
				Min:      uint32(f.Min()),
				Max:      uint32(f.Max()),
				Default:  uint32(f.Default()),
				Units:    f.Units(),
			},
		},
	}
}

func (f *Uint8Field) String() string {
	return fmt.Sprintf("(uint8) name: %s, type: %s, id: %v, pid: %v, val: %v, min: %v, max: %v, def: %v, units: %s",
		f.Name(),
		f.Type(),
		f.Id(),
		f.ParentId(),
		f.Value(),
		f.Min(),
		f.Max(),
		f.Default(),
		f.Units(),
	)
}
