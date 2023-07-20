// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import "github.com/kaack/elrs-joystick-control/pkg/util"

type InvertT struct {
	Input *IOHolder `json:"input"`
}

// InputInvert *** Equals ***
type InputInvert struct {
	Id    string        `json:"id"`
	Value util.RawValue `json:"value"`
	IsNaN bool          `json:"-"`

	Type   string  `json:"type"`
	Invert InvertT `json:"invert" input:"true"`
}

func (i *InputInvert) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	src, out, ch, nan = i._Eval(c)
	i.Value = out
	i.IsNaN = nan

	return src, out, ch, nan
}

func (i *InputInvert) _Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	//if there is no input, result is not a number
	if i.Invert.Input == nil {
		return nil, 0, -1, true
	}

	_, out, ch, nan = i.Invert.Input.Eval(c)

	if nan {
		return nil, 0, -1, true
	}

	return nil, -out, -1, false
}

func (i *InputInvert) InputType() string {
	return i.Type
}

func (i *InputInvert) InputValue() *util.RawValue {
	if i.IsNaN {
		return nil
	}
	return &i.Value
}

func (i *InputInvert) InputId() string {
	return i.Id
}

func (i *InputInvert) Children() (out *[]*IOHolder) {
	return GetChildren(i.Invert.Input, nil)

}
