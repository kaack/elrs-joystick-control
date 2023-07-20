// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import (
	"github.com/kaack/elrs-joystick-control/pkg/devices"
	"github.com/kaack/elrs-joystick-control/pkg/util"
)

type HatT struct {
	Input        *IOHolder `json:"input"`
	Number       int32     `json:"number"`
	OutputInvert bool      `json:"output_invert"`
}

// InputHat *** Hat ***
type InputHat struct {
	Id    string        `json:"id"`
	Value util.RawValue `json:"value"`
	IsNaN bool          `json:"-"`

	Type string `json:"type"`
	Hat  HatT   `json:"hat" input:"true"`
}

func (i *InputHat) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	src, out, ch, nan = i._Eval(c)
	i.Value = out
	i.IsNaN = nan

	return src, out, ch, nan
}

func (i *InputHat) _Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	input := i.Hat.Input
	if input == nil {
		return nil, 0, -1, true
	}

	if src, _, _, _ = input.Eval(c); src == nil {
		return nil, 0, -1, true
	}

	var rawDevice *devices.InputGamepad
	var ok bool
	var invert util.RawValue

	switch in := (src).(type) {
	case *InputGamepad:
		if rawDevice, ok = c.GetInputGamepad(in.Gamepad.Id); !ok {
			return nil, 0, -1, true
		}

		if i.Hat.OutputInvert {
			invert = -1
		} else {
			invert = 1
		}
		return nil, rawDevice.Hat(int(i.Hat.Number)) * invert, -1, false
	default:
		return nil, 0, -1, true

	}
}

func (i *InputHat) InputType() string {
	return i.Type
}

func (i *InputHat) InputValue() *util.RawValue {
	if i.IsNaN {
		return nil
	}
	return &i.Value
}

func (i *InputHat) InputId() string {
	return i.Id
}

func (i *InputHat) Children() (out *[]*IOHolder) {
	return GetChildren(i.Hat.Input, nil)

}
