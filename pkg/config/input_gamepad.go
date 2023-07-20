// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import "github.com/kaack/elrs-joystick-control/pkg/util"

type GamepadT struct {
	Id   string `json:"id"`
	Name string `json:"name"`
}

// InputGamepad *** Gamepad ***
type InputGamepad struct {
	Id    string        `json:"id"`
	Value util.RawValue `json:"-"`
	IsNaN bool          `json:"-"`

	Type    string    `json:"type"`
	Gamepad GamepadT  `json:"gamepad" input:"true"`
	Holder  *IOHolder `json:"-"`
}

func (i *InputGamepad) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	src, out, ch, nan = i._Eval(c)
	i.Value = out
	i.IsNaN = nan

	return src, out, ch, nan
}

//goland:noinspection GoUnusedParameter
func (i *InputGamepad) _Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	return i, -1, -1, true
}

func (i *InputGamepad) InputType() string {
	return i.Type
}

func (i *InputGamepad) InputValue() *util.RawValue {
	if i.IsNaN {
		return nil
	}
	return &i.Value
}

func (i *InputGamepad) InputId() string {
	return i.Id
}

func (i *InputGamepad) Children() (out *[]*IOHolder) {
	return nil
}
