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

type Int16FieldType interface {
	FieldType
	Value() int16
	Min() int16
	Max() int16
	Default() int16
	Units() string
}

type Int16Field struct {
	id       uint32
	parentId uint32
	data     []uint8

	//internal pointers
	nameEnd  int
	unitsEnd int
}

func NewInt16Field(id uint32, parentId uint32, data []uint8) FieldType {

	/** name(string), value(int16), min(int16), max(int16), default(int16), units (string) **/
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

	field := Int16Field{
		id,
		parentId,
		data,

		nameEnd,
		unitsEnd,
	}

	return &field
}

func (f *Int16Field) Name() string {
	return string(f.data[0:f.nameEnd])
}

func (f *Int16Field) Type() telemetry.CRSFFieldType {
	return telemetry.CrsfInt16
}

func (f *Int16Field) Id() uint32 {
	return f.id
}

func (f *Int16Field) ParentId() uint32 {
	return f.parentId
}

func (f *Int16Field) Value() int16 {
	return int16(binary.BigEndian.Uint16(f.data[f.nameEnd+1 : f.nameEnd+3]))
}

func (f *Int16Field) Min() int16 {
	return int16(binary.BigEndian.Uint16(f.data[f.nameEnd+3 : f.nameEnd+5]))
}

func (f *Int16Field) Max() int16 {
	return int16(binary.BigEndian.Uint16(f.data[f.nameEnd+5 : f.nameEnd+7]))
}

func (f *Int16Field) Default() int16 {
	return int16(binary.BigEndian.Uint16(f.data[f.nameEnd+7 : f.nameEnd+9]))
}

func (f *Int16Field) Units() string {
	return string(f.data[f.nameEnd+9 : f.unitsEnd])
}

func (f *Int16Field) Proto() *pb.CRSFDeviceFieldData {
	return &pb.CRSFDeviceFieldData{
		Data: &pb.CRSFDeviceFieldData_Int16{
			Int16: &pb.CRSFDeviceFieldInt16{
				Name:     strings.ToValidUTF8(f.Name(), ""),
				Type:     pb.CRSFDeviceFieldType(f.Type()),
				Id:       f.Id(),
				ParentId: f.ParentId(),
				Value:    int32(f.Value()),
				Min:      int32(f.Min()),
				Max:      int32(f.Max()),
				Default:  int32(f.Default()),
				Units:    f.Units(),
			},
		},
	}
}

func (f *Int16Field) String() string {
	return fmt.Sprintf("(int16) name: %s, type: %s, id: %v, pid: %v, val: %v, min: %v, max: %v, def: %v, units: %s",
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
