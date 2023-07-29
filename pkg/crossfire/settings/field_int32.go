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

type Int32FieldType interface {
	FieldType
	Value() int32
	Min() int32
	Max() int32
	Default() int32
	Units() string
}

type Int32Field struct {
	id       uint32
	parentId uint32
	data     []uint8

	//internal pointers
	nameEnd  int
	unitsEnd int
}

func NewInt32Field(id uint32, parentId uint32, data []uint8) FieldType {

	/** name(string), value(int32), min(int32), max(int32), default(int32), units (string) **/
	/**
	  name(string):    0 -> nameEnd
	  value(int32):    nameEnd + 1 -> nameEnd + 5
	  min(int32):      nameEnd + 5 -> nameEnd + 9
	  max(int32):      nameEnd + 9 -> nameEnd + 13
	  default(int32):  nameEnd + 13 -> nameEnd + 17
	  units(string):   nameEnd + 17 -> unitsEnd

	**/
	nameEnd := bytes.IndexByte(data, 0)
	unitsEnd := nameEnd + 17 + bytes.IndexByte(data[nameEnd+17:], 0)

	field := Int32Field{
		id,
		parentId,
		data,

		nameEnd,
		unitsEnd,
	}

	return &field
}

func (f *Int32Field) Name() string {
	return string(f.data[0:f.nameEnd])
}

func (f *Int32Field) Type() telemetry.CRSFFieldType {
	return telemetry.CrsfUint32
}

func (f *Int32Field) Id() uint32 {
	return f.id
}

func (f *Int32Field) ParentId() uint32 {
	return f.parentId
}

func (f *Int32Field) Value() int32 {
	return int32(binary.BigEndian.Uint32(f.data[f.nameEnd+1 : f.nameEnd+5]))
}

func (f *Int32Field) Min() int32 {
	return int32(binary.BigEndian.Uint32(f.data[f.nameEnd+5 : f.nameEnd+9]))
}

func (f *Int32Field) Max() int32 {
	return int32(binary.BigEndian.Uint32(f.data[f.nameEnd+9 : f.nameEnd+13]))
}

func (f *Int32Field) Default() int32 {
	return int32(binary.BigEndian.Uint32(f.data[f.nameEnd+13 : f.nameEnd+17]))
}

func (f *Int32Field) Units() string {
	return string(f.data[f.nameEnd+17 : f.unitsEnd])
}

func (f *Int32Field) Proto() *pb.CRSFDeviceFieldData {
	return &pb.CRSFDeviceFieldData{
		Data: &pb.CRSFDeviceFieldData_Int32{
			Int32: &pb.CRSFDeviceFieldInt32{
				Name:     strings.ToValidUTF8(f.Name(), ""),
				Type:     pb.CRSFDeviceFieldType(f.Type()),
				Id:       f.Id(),
				ParentId: f.ParentId(),
				Value:    f.Value(),
				Min:      f.Min(),
				Max:      f.Max(),
				Default:  f.Default(),
				Units:    f.Units(),
			},
		},
	}
}

func (f *Int32Field) String() string {
	return fmt.Sprintf("(int32) name: %s, type: %s, id: %v, pid: %v, val: %v, min: %v, max: %v, def: %v, units: %s",
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
