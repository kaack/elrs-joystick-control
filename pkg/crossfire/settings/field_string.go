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

type StringFieldType interface {
	FieldType
	Value() string
}

type StringField struct {
	id       uint32
	parentId uint32
	data     []uint8

	//internal pointers
	nameEnd  int
	valueEnd int
}

func NewStringField(id uint32, parentId uint32, data []uint8) FieldType {

	/** name(string), value(string) **/
	/**
	  name(string):    0 -> nameEnd
	  value(string): nameEnd + 1 -> valueEnd
	**/
	nameEnd := bytes.IndexByte(data, 0)
	valueEnd := nameEnd + 1 + bytes.IndexByte(data[nameEnd+1:], 0)

	field := StringField{
		id,
		parentId,
		data,

		nameEnd,
		valueEnd,
	}

	return &field
}

func (f *StringField) Name() string {
	return string(f.data[0:f.nameEnd])
}

func (f *StringField) Type() telemetry.CRSFFieldType {
	return telemetry.CrsfString
}

func (f *StringField) Id() uint32 {
	return f.id
}

func (f *StringField) ParentId() uint32 {
	return f.parentId
}

func (f *StringField) Value() string {
	return string(f.data[f.nameEnd+1 : f.valueEnd])
}

func (f *StringField) Proto() *pb.CRSFDeviceFieldData {
	return &pb.CRSFDeviceFieldData{
		Data: &pb.CRSFDeviceFieldData_String_{
			String_: &pb.CRSFDeviceFieldString{
				Name:     strings.ToValidUTF8(f.Name(), ""),
				Type:     pb.CRSFDeviceFieldType(f.Type()),
				Id:       f.Id(),
				ParentId: f.ParentId(),
				Value:    f.Value(),
			},
		},
	}
}

func (f *StringField) String() string {
	return fmt.Sprintf("(string) name: %s, type: %s, id: %v, pid: %v,  val: %s",
		f.Name(),
		f.Type(),
		f.Id(),
		f.ParentId(),
		f.Value(),
	)
}
