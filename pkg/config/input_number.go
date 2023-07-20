// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import "github.com/kaack/elrs-joystick-control/pkg/util"

type NumberT struct {
	Output util.RawValue `json:"output"`
}

// InputNumber *** Number ***
type InputNumber struct {
	Id    string        `json:"id"`
	Value util.RawValue `json:"value"`
	IsNaN bool          `json:"-"`

	Type   string  `json:"type"`
	Number NumberT `json:"number" input:"true"`
}

func (i *InputNumber) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	src, out, ch, nan = i._Eval(c)
	i.Value = out
	i.IsNaN = nan

	return src, out, ch, nan
}

func (i *InputNumber) _Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	return nil, i.Number.Output, -1, false
}

func (i *InputNumber) InputType() string {
	return i.Type
}

func (i *InputNumber) InputValue() *util.RawValue {
	if i.IsNaN {
		return nil
	}
	return &i.Value
}

func (i *InputNumber) InputId() string {
	return i.Id
}

func (i *InputNumber) Children() (out *[]*IOHolder) {
	return nil
}
