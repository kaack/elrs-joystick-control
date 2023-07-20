// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import (
	"github.com/kaack/elrs-joystick-control/pkg/util"
)

type LinearT struct {
	Input        *IOHolder     `json:"input"`
	InputMin     util.RawValue `json:"input_min"`
	InputMax     util.RawValue `json:"input_max"`
	InputInvert  bool          `json:"input_invert"`
	OutputMin    util.RawValue `json:"output_min"`
	OutputMax    util.RawValue `json:"output_max"`
	OutputInvert bool          `json:"output_invert"`
}

// InputLinear *** Linear ***
type InputLinear struct {
	Id    string        `json:"id"`
	Value util.RawValue `json:"value"`
	IsNaN bool          `json:"-"`

	Type   string  `json:"type,omitempty"`
	Linear LinearT `json:"linear" input:"true"`
}

func (i *InputLinear) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	src, out, ch, nan = i._Eval(c)
	i.Value = out
	i.IsNaN = nan

	return src, out, ch, nan
}

func (i *InputLinear) _Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {

	//no input, result is not a number
	if i.Linear.Input == nil {
		return nil, 0, -1, true
	}

	_, out, ch, nan = i.Linear.Input.Eval(c)
	if nan {
		return nil, 0, -1, true
	}

	if i.Linear.InputInvert {
		out *= -1
	}

	out = util.MapRange(
		out,
		i.Linear.InputMin,
		i.Linear.InputMax,
		i.Linear.OutputMin,
		i.Linear.OutputMax,
	)

	if i.Linear.OutputInvert {
		out *= -1
	}

	return nil, out, ch, false
}

func (i *InputLinear) InputType() string {
	return i.Type
}

func (i *InputLinear) InputValue() *util.RawValue {
	if i.IsNaN {
		return nil
	}
	return &i.Value
}

func (i *InputLinear) InputId() string {
	return i.Id
}

func (i *InputLinear) Children() (out *[]*IOHolder) {
	return GetChildren(i.Linear.Input, nil)
}
