// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import "github.com/kaack/elrs-joystick-control/pkg/util"

type ReadT struct {
	Source string `json:"source"`
}

// InputRead *** Read ****
type InputRead struct {
	Id    string        `json:"id"`
	Value util.RawValue `json:"value"`
	IsNaN bool          `json:"-"`

	Type string `json:"type"`
	Read ReadT  `json:"read" input:"true"`
}

func (i *InputRead) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	src, out, ch, nan = i._Eval(c)
	i.Value = out
	i.IsNaN = nan

	return src, out, ch, nan
}

func (i *InputRead) _Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {

	var holder *IOHolder
	var ok bool

	if holder, ok = c.IOMap[i.Read.Source]; !ok {
		return nil, 0, -1, true
	}

	if holder == nil {
		return nil, 0, -1, true
	}

	return holder.IO.Eval(c)
}

func (i *InputRead) InputType() string {
	return i.Type
}

func (i *InputRead) InputValue() *util.RawValue {
	if i.IsNaN {
		return nil
	}
	return &i.Value
}

func (i *InputRead) InputId() string {
	return i.Id
}

func (i *InputRead) Children() (out *[]*IOHolder) {
	return nil
}
