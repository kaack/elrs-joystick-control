// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package settings

import (
	"bytes"
	"encoding/binary"
	"fmt"
	"github.com/kaack/elrs-joystick-control/pkg/crossfire/telemetry"
	"github.com/kaack/elrs-joystick-control/pkg/proto/generated/pb"
	"strings"
)

type Uint16FieldType interface {
	FieldType
	Value() uint16
	Min() uint16
	Max() uint16
	Default() uint16
	Units() string
}

type Uint16Field struct {
	id       uint32
	parentId uint32
	data     []uint8

	//internal pointers
	nameEnd  int
	unitsEnd int
}

func NewUint16Field(id uint32, parentId uint32, data []uint8) FieldType {

	/** name(string), value(uint16), min(uint16), max(uint16), default(uint16), units (string) **/
	/**
	  name(string):    0 -> nameEnd
	  value(uint16):   nameEnd + 1 -> nameEnd + 3
	  min(uint16):     nameEnd + 3 -> nameEnd + 5
	  max(uint16):     nameEnd + 5 -> nameEnd + 7
	  default(uint16): nameEnd + 7 -> nameEnd + 9
	  units(string):   nameEnd + 9 -> unitsEnd

	**/
	nameEnd := bytes.IndexByte(data, 0)
	unitsEnd := nameEnd + 9 + bytes.IndexByte(data[nameEnd+9:], 0)

	field := Uint16Field{
		id,
		parentId,
		data,

		nameEnd,
		unitsEnd,
	}

	return &field
}

func (f *Uint16Field) Name() string {
	return string(f.data[0:f.nameEnd])
}

func (f *Uint16Field) Type() telemetry.CRSFFieldType {
	return telemetry.CrsfUint16
}

func (f *Uint16Field) Id() uint32 {
	return f.id
}

func (f *Uint16Field) ParentId() uint32 {
	return f.parentId
}

func (f *Uint16Field) Value() uint16 {
	return binary.BigEndian.Uint16(f.data[f.nameEnd+1 : f.nameEnd+3])
}

func (f *Uint16Field) Min() uint16 {
	return binary.BigEndian.Uint16(f.data[f.nameEnd+3 : f.nameEnd+5])
}

func (f *Uint16Field) Max() uint16 {
	return binary.BigEndian.Uint16(f.data[f.nameEnd+5 : f.nameEnd+7])
}

func (f *Uint16Field) Default() uint16 {
	return binary.BigEndian.Uint16(f.data[f.nameEnd+7 : f.nameEnd+9])
}

func (f *Uint16Field) Units() string {
	return string(f.data[f.nameEnd+9 : f.unitsEnd])
}

func (f *Uint16Field) Proto() *pb.CRSFDeviceFieldData {
	return &pb.CRSFDeviceFieldData{
		Data: &pb.CRSFDeviceFieldData_Uint16{
			Uint16: &pb.CRSFDeviceFieldUint16{
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

func (f *Uint16Field) String() string {
	return fmt.Sprintf("(uint16) name: %s, type: %s, id: %v, pid: %v, val: %v, min: %v, max: %v, def: %v, units: %s",
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
