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

type InfoFieldType interface {
	FieldType
	Value() string
}

type InfoField struct {
	id       uint32
	parentId uint32
	data     []uint8

	//internal pointers
	nameEnd  int
	valueEnd int
}

func NewInfoField(id uint32, parentId uint32, data []uint8) FieldType {

	/** name(string), value(string) **/
	/**
	  name(string):    0 -> nameEnd
	  value(string): nameEnd + 1 -> valueEnd
	**/
	nameEnd := bytes.IndexByte(data, 0)
	valueEnd := nameEnd + 1 + bytes.IndexByte(data[nameEnd+1:], 0)

	field := InfoField{
		id,
		parentId,
		data,

		nameEnd,
		valueEnd,
	}

	return &field
}

func (f *InfoField) Name() string {
	return string(f.data[0:f.nameEnd])
}

func (f *InfoField) Type() telemetry.CRSFFieldType {
	return telemetry.CrsfInfo
}

func (f *InfoField) Id() uint32 {
	return f.id
}

func (f *InfoField) ParentId() uint32 {
	return f.parentId
}

func (f *InfoField) Value() string {
	return string(f.data[f.nameEnd+1 : f.valueEnd])
}

func (f *InfoField) Proto() *pb.CRSFDeviceFieldData {
	return &pb.CRSFDeviceFieldData{
		Data: &pb.CRSFDeviceFieldData_Info{
			Info: &pb.CRSFDeviceFieldInfo{
				Name:     strings.ToValidUTF8(f.Name(), ""),
				Type:     pb.CRSFDeviceFieldType(f.Type()),
				Id:       f.Id(),
				ParentId: f.ParentId(),
				Value:    f.Value(),
			},
		},
	}
}

func (f *InfoField) String() string {
	return fmt.Sprintf("(string) name: %s, type: %s, id: %v, pid: %v,  val: %s",
		f.Name(),
		f.Type(),
		f.Id(),
		f.ParentId(),
		f.Value(),
	)
}
