// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import "github.com/kaack/elrs-joystick-control/pkg/util"

type AndT struct {
	OutputFalse *util.RawValue `json:"output_false"`
	OutputTrue  *util.RawValue `json:"output_true"`
	Left        *IOHolder      `json:"left"`
	Right       *[]*IOHolder   `json:"right"`
}

// InputAnd *** Logical And ***
type InputAnd struct {
	Id    string        `json:"id"`
	Value util.RawValue `json:"value"`
	IsNaN bool          `json:"-"`

	Type string `json:"type"`
	And  AndT   `json:"and" input:"true"`
}

func (i *InputAnd) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	src, out, ch, nan = i._Eval(c)
	i.Value = out
	i.IsNaN = nan

	return src, out, ch, nan
}

func (i *InputAnd) _Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {

	//if both left and right are missing, result is not a number
	if i.And.Left == nil && i.And.Right == nil {
		return nil, 0, -1, true
	}

	//evaluate the left argument left first
	if i.And.Left != nil {
		_, out, ch, nan = i.And.Left.Eval(c)
		//the left argument is falsy, check fails (exit early)
		if !nan && isFalsy(out) {
			return OutputOrNil(nil, i.And.OutputFalse, ch, false)
		}
	}

	//first argument is either unset, not falsy, check right side

	//if right side is missing, or has no values, result is not a number
	if i.And.Right == nil || len(*i.And.Right) == 0 {
		return nil, 0, -1, true
	}

	//otherwise, check each individual value on the right side
	allNan := true
	for _, param := range *i.And.Right {
		if param == nil {
			continue
		}
		_, out, ch, nan = param.Eval(c)

		//ignore nan values
		if nan {
			continue
		}

		allNan = false

		//at least one element is falsy, check fails
		if isFalsy(out) {
			return OutputOrNil(nil, i.And.OutputFalse, ch, false)
		}
	}

	//all values on right side are not numbers, check fails
	if allNan {
		return nil, 0, -1, true
	}

	//all parameters on right side are truthy, check passes
	return OutputOrNil(nil, i.And.OutputTrue, ch, false)
}

func (i *InputAnd) InputType() string {
	return i.Type
}

func (i *InputAnd) InputValue() *util.RawValue {
	if i.IsNaN {
		return nil
	}
	return &i.Value
}

func (i *InputAnd) InputId() string {
	return i.Id
}

func (i *InputAnd) Children() (out *[]*IOHolder) {
	return GetChildren(i.And.Left, i.And.Right)
}
