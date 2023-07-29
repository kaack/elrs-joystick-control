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

type TextSelectFieldType interface {
	FieldType
	Options() string
	Value() uint32
	Min() uint32
	Max() uint32
	Default() uint32
	Units() string
}

type TextSelectField struct {
	id       uint32
	parentId uint32
	data     []uint8

	//internal pointers
	nameEnd    int
	optionsEnd int
	unitsEnd   int
}

func NewTextSelectField(id uint32, parentId uint32, data []uint8) FieldType {

	/** name(string), options(string), value(uint8), min(uint8), max(uint8), default(uint8), units (string) **/
	/**
	  name(string):    0 -> nameEnd
	  options(string): nameEnd + 1 -> optionsEnd
	  value(uint8):    optionsEnd + 1
	  min(uint8):      optionsEnd + 2
	  max(uint8):      optionsEnd + 3
	  default(uint8):  optionsEnd + 4
	  units(string):   optionsEnd + 5 -> unitsEnd

	**/
	nameEnd := bytes.IndexByte(data, 0)
	optionsEnd := nameEnd + 1 + bytes.IndexByte(data[nameEnd+1:], 0)
	unitsEnd := optionsEnd + 5 + bytes.IndexByte(data[optionsEnd+5:], 0)

	field := TextSelectField{
		id,
		parentId,
		data,

		nameEnd,
		optionsEnd,
		unitsEnd,
	}

	return &field
}

func (f *TextSelectField) Name() string {
	return string(f.data[0:f.nameEnd])
}

func (f *TextSelectField) Type() telemetry.CRSFFieldType {
	return telemetry.CrsfTextSelection
}

func (f *TextSelectField) Id() uint32 {
	return f.id
}

func (f *TextSelectField) ParentId() uint32 {
	return f.parentId
}

func (f *TextSelectField) Options() []string {
	return strings.Split(string(f.data[f.nameEnd+1:f.optionsEnd]), ";")
}

func (f *TextSelectField) Value() uint32 {
	return uint32(f.data[f.optionsEnd+1])
}

func (f *TextSelectField) Min() uint32 {
	return uint32(f.data[f.optionsEnd+2])
}

func (f *TextSelectField) Max() uint32 {
	return uint32(f.data[f.optionsEnd+3])
}

func (f *TextSelectField) Default() uint32 {
	return uint32(f.data[f.optionsEnd+4])
}

func (f *TextSelectField) Units() string {
	return string(f.data[f.optionsEnd+5 : f.unitsEnd])
}

func (f *TextSelectField) Proto() *pb.CRSFDeviceFieldData {
	return &pb.CRSFDeviceFieldData{
		Data: &pb.CRSFDeviceFieldData_TextSelect{
			TextSelect: &pb.CRSFDeviceFieldTextSelect{
				Name:     strings.ToValidUTF8(f.Name(), ""),
				Type:     pb.CRSFDeviceFieldType(f.Type()),
				Id:       f.Id(),
				ParentId: f.ParentId(),
				Options:  f.Options(),
				Value:    f.Value(),
				Min:      f.Min(),
				Max:      f.Max(),
				Default:  f.Default(),
				Units:    f.Units(),
			},
		},
	}
}

func (f *TextSelectField) String() string {
	return fmt.Sprintf("(text-select) name: %s, type: %s, id: %v, pid: %v,  opts: %s, val: %v, min: %v, max: %v, def: %v, units: %s",
		f.Name(),
		f.Type(),
		f.Id(),
		f.ParentId(),
		f.Options(),
		f.Value(),
		f.Min(),
		f.Max(),
		f.Default(),
		f.Units(),
	)
}
