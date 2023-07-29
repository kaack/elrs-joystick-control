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

type FolderFieldType interface {
	FieldType
}

type FolderField struct {
	id       uint32
	parentId uint32
	data     []uint8

	//internal pointers
	nameEnd int
}

func NewFolderField(id uint32, parentId uint32, data []uint8) FieldType {

	/**
	  name(string):    0 -> nameEnd
	**/
	nameEnd := bytes.IndexByte(data, 0)

	field := FolderField{
		id,
		parentId,
		data,

		nameEnd,
	}

	return &field
}

func (f *FolderField) Name() string {
	return string(f.data[0:f.nameEnd])
}

func (f *FolderField) Type() telemetry.CRSFFieldType {
	return telemetry.CrsfFolder
}

func (f *FolderField) Id() uint32 {
	return f.id
}

func (f *FolderField) ParentId() uint32 {
	return f.parentId
}

func (f *FolderField) Proto() *pb.CRSFDeviceFieldData {
	return &pb.CRSFDeviceFieldData{
		Data: &pb.CRSFDeviceFieldData_Folder{
			Folder: &pb.CRSFDeviceFieldFolder{
				Name:     strings.ToValidUTF8(f.Name(), ""),
				Type:     pb.CRSFDeviceFieldType(f.Type()),
				Id:       f.Id(),
				ParentId: f.ParentId(),
			},
		},
	}
}

func (f *FolderField) String() string {
	return fmt.Sprintf("(folder) name: %s, type: %s, id: %v, pid: %v",
		f.Name(),
		f.Type(),
		f.Id(),
		f.ParentId(),
	)
}
