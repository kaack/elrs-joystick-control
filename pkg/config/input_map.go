// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import "github.com/kaack/elrs-joystick-control/pkg/util"

type MapT struct {
	Input         *IOHolder                       `json:"input"`
	OutputDefault util.RawValue                   `json:"output_default"`
	OutputMap     map[util.RawValue]util.RawValue `json:"output_map"`
}

// InputMap *** Map ***
type InputMap struct {
	Id    string        `json:"id"`
	Value util.RawValue `json:"value"`
	IsNaN bool          `json:"-"`

	Type string `json:"type"`
	Map  MapT   `json:"map" input:"true"`
}

func (i *InputMap) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	src, out, ch, nan = i._Eval(c)
	i.Value = out
	i.IsNaN = nan

	return src, out, ch, nan
}

func (i *InputMap) _Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {

	//there is no input, result is default value
	if i.Map.Input == nil {
		return nil, i.Map.OutputDefault, -1, false
	}

	//output default value when input is not a number
	_, out, ch, nan = i.Map.Input.Eval(c)
	if nan {
		return nil, i.Map.OutputDefault, -1, true
	}

	var ok bool
	var res util.RawValue
	if res, ok = i.Map.OutputMap[out]; !ok {
		return nil, i.Map.OutputDefault, ch, false
	}

	return nil, res, ch, false
}

func (i *InputMap) InputType() string {
	return i.Type
}

func (i *InputMap) InputValue() *util.RawValue {
	if i.IsNaN {
		return nil
	}
	return &i.Value
}

func (i *InputMap) InputId() string {
	return i.Id
}

func (i *InputMap) Children() (out *[]*IOHolder) {
	return GetChildren(i.Map.Input, nil)

}
