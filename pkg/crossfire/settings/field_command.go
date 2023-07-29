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

type CommandStep int32

//goland:noinspection ALL
const (
	StepIdle       CommandStep = iota
	StepClick      CommandStep = iota
	StepExecuting  CommandStep = iota
	StepAskConfirm CommandStep = iota
	StepConfirmed  CommandStep = iota
	StepCancel     CommandStep = iota
	StepQuery      CommandStep = iota
)

func (cs CommandStep) String() string {
	names := [...]string{"foo"}
	if int(cs) < len(names) {
		return names[cs]
	}

	return fmt.Sprintf("UnknownStep(%v)", int32(cs))
}

type CommandFieldType interface {
	FieldType
	Step() CommandStep
	Timeout() uint32
	Message() string
}

type CommandField struct {
	id       uint32
	parentId uint32
	data     []uint8

	//internal pointers
	nameEnd int
	infoEnd int
}

func NewCommandField(id uint32, parentId uint32, data []uint8) FieldType {

	/**
	  name(string):    0 -> nameEnd
	  step(uint8):     nameEnd + 1
	  timeout(uint8):  nameEnd + 2
	  info(string):    nameEnd + 3 -> infoEnd
	**/
	nameEnd := bytes.IndexByte(data, 0)
	infoEnd := nameEnd + 3 + bytes.IndexByte(data[nameEnd+3:], 0)

	field := CommandField{
		id,
		parentId,
		data,

		nameEnd,
		infoEnd,
	}

	return &field
}

func (f *CommandField) Name() string {
	return string(f.data[0:f.nameEnd])
}

func (f *CommandField) Type() telemetry.CRSFFieldType {
	return telemetry.CrsfCommand
}

func (f *CommandField) Id() uint32 {
	return f.id
}

func (f *CommandField) ParentId() uint32 {
	return f.parentId
}

func (f *CommandField) Step() CommandStep {
	return CommandStep(f.data[f.nameEnd+1])
}

func (f *CommandField) Timeout() uint32 {
	return uint32(f.data[f.nameEnd+2])
}

func (f *CommandField) Message() string {
	return string(f.data[f.nameEnd+3 : f.infoEnd])
}

func (f *CommandField) Proto() *pb.CRSFDeviceFieldData {
	return &pb.CRSFDeviceFieldData{
		Data: &pb.CRSFDeviceFieldData_Command{
			Command: &pb.CRSFDeviceFieldCommand{
				Name:     strings.ToValidUTF8(f.Name(), ""),
				Type:     pb.CRSFDeviceFieldType(f.Type()),
				Id:       f.Id(),
				ParentId: f.ParentId(),
				Step:     pb.CRSFDeviceFieldCommandStep(f.Step()),
				Timeout:  f.Timeout(),
				Message:  f.Message(),
			},
		},
	}
}

func (f *CommandField) String() string {
	return fmt.Sprintf("(text-select) name: %s, type: %s, id: %v, pid: %v,  step: %v, tout: %v, info: %s",
		f.Name(),
		f.Type(),
		f.Id(),
		f.ParentId(),
		f.Step(),
		f.Timeout(),
		f.Message(),
	)
}
