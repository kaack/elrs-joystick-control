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

type Int8FieldType interface {
	FieldType
	Value() int8
	Min() int8
	Max() int8
	Default() int8
	Units() string
}

type Int8Field struct {
	id       uint32
	parentId uint32
	data     []uint8

	//internal pointers
	nameEnd  int
	unitsEnd int
}

func NewInt8Field(id uint32, parentId uint32, data []uint8) FieldType {

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

	field := Int8Field{
		id,
		parentId,
		data,

		nameEnd,
		unitsEnd,
	}

	return &field
}

func (f *Int8Field) Name() string {
	return string(f.data[0:f.nameEnd])
}

func (f *Int8Field) Type() telemetry.CRSFFieldType {
	return telemetry.CrsfInt8
}

func (f *Int8Field) Id() uint32 {
	return f.id
}

func (f *Int8Field) ParentId() uint32 {
	return f.parentId
}

func (f *Int8Field) Value() int8 {
	return int8(f.data[f.nameEnd+1])
}

func (f *Int8Field) Min() int8 {
	return int8(f.data[f.nameEnd+2])
}

func (f *Int8Field) Max() int8 {
	return int8(f.data[f.nameEnd+3])
}

func (f *Int8Field) Default() int8 {
	return int8(f.data[f.nameEnd+4])
}

func (f *Int8Field) Units() string {
	return string(f.data[f.nameEnd+5 : f.unitsEnd])
}

func (f *Int8Field) Proto() *pb.CRSFDeviceFieldData {
	return &pb.CRSFDeviceFieldData{
		Data: &pb.CRSFDeviceFieldData_Int8{
			Int8: &pb.CRSFDeviceFieldInt8{
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

func (f *Int8Field) String() string {
	return fmt.Sprintf("(int8) name: %s, type: %s, id: %v, pid: %v, val: %v, min: %v, max: %v, def: %v, units: %s",
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
