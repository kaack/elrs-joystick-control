// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import (
	"encoding/json"
	"github.com/kaack/elrs-joystick-control/pkg/devices"
	"github.com/kaack/elrs-joystick-control/pkg/util"
)

type ButtonT struct {
	Input         *IOHolder      `json:"input"`
	Number        int32          `json:"number"`
	ActiveValue   *util.RawValue `json:"active_value"`
	InactiveValue *util.RawValue `json:"inactive_value"`
}

// InputButton *** Axis ***
type InputButton struct {
	Id    string        `json:"id"`
	Value util.RawValue `json:"value"`
	IsNaN bool          `json:"-"`

	Type   string  `json:"type"`
	Button ButtonT `json:"button" input:"true"`
}

type FakeButtonT ButtonT

func (b *ButtonT) UnmarshalJSON(data []byte) error {

	var button = FakeButtonT{}
	if err := json.Unmarshal(data, &button); err != nil {
		return err
	}

	*b = ButtonT(button)

	//set defaults
	if b.ActiveValue == nil {
		(*b).ActiveValue = new(util.RawValue)
		*(*b).ActiveValue = util.DefaultTruthyRawValue
	}

	if b.InactiveValue == nil {
		(*b).InactiveValue = new(util.RawValue)
		*(*b).InactiveValue = util.DefaultFalsyRawValue
	}
	return nil
}

func (i *InputButton) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	src, out, ch, nan = i._Eval(c)
	i.Value = out
	i.IsNaN = nan

	return src, out, ch, nan
}

func (i *InputButton) _Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	input := i.Button.Input
	if input == nil {
		return nil, 0, -1, true
	}

	if src, _, _, _ = input.Eval(c); src == nil {
		return nil, 0, -1, true
	}

	var gamepad *devices.InputGamepad
	var ok bool

	switch in := (src).(type) {
	case *InputGamepad:
		if gamepad, ok = c.GetInputGamepad(in.Gamepad.Id); !ok {
			return nil, 0, -1, true
		}
		if gamepad.Button(int(i.Button.Number)) != 0 {
			return nil, *i.Button.ActiveValue, -1, false
		}
		return nil, *i.Button.InactiveValue, -1, false
	default:
		return nil, 0, -1, true
	}
}

func (i *InputButton) InputType() string {
	return i.Type
}

func (i *InputButton) InputValue() *util.RawValue {
	if i.IsNaN {
		return nil
	}
	return &i.Value
}

func (i *InputButton) InputId() string {
	return i.Id
}

func (i *InputButton) Children() (out *[]*IOHolder) {
	return GetChildren(i.Button.Input, nil)
}
