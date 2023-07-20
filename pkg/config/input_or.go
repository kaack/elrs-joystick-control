// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import "github.com/kaack/elrs-joystick-control/pkg/util"

type OrT struct {
	OutputFalse *util.RawValue `json:"output_false"`
	OutputTrue  *util.RawValue `json:"output_true"`
	Left        *IOHolder      `json:"left"`
	Right       *[]*IOHolder   `json:"right"`
}

// InputOr *** Logical Or ***
type InputOr struct {
	Id    string        `json:"id"`
	Value util.RawValue `json:"value"`
	IsNaN bool          `json:"-"`

	Type string `json:"type"`
	Or   OrT    `json:"or" input:"true"`
}

func (i *InputOr) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	src, out, ch, nan = i._Eval(c)
	i.Value = out
	i.IsNaN = nan

	return src, out, ch, nan
}

func (i *InputOr) _Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {

	//if both left and right are missing, result is not a number
	if i.Or.Left == nil && i.Or.Right == nil {
		return nil, 0, -1, true
	}

	//evaluate the left argument first
	if i.Or.Left != nil {
		_, out, ch, nan = i.Or.Left.Eval(c)
		//the left argument is truthy, check succeeds
		if !nan && isTruthy(out) {
			return OutputOrNil(nil, i.Or.OutputTrue, ch, false)
		}
	}

	//first argument is either unset or not truthy, check right side

	//if right side is missing, or has no values, result is not a number
	if i.Or.Right == nil || len(*i.Or.Right) == 0 {
		return nil, 0, -1, true
	}

	//otherwise, check each individual value on the right side
	allNan := true
	for _, param := range *i.Or.Right {
		if param == nil {
			continue
		}
		_, out, ch, nan = param.Eval(c)

		//ignore nan values
		if nan {
			continue
		}

		allNan = false

		//at least one element is truthy, check succeeds
		if isTruthy(out) {
			return OutputOrNil(nil, i.Or.OutputTrue, ch, false)
		}
	}

	//all values on right side are not number, check fails
	if allNan {
		return nil, 0, -1, true
	}

	//all parameters on right side are falsy, check fails
	return OutputOrNil(nil, i.Or.OutputFalse, ch, false)
}

func (i *InputOr) InputType() string {
	return i.Type
}

func (i *InputOr) InputValue() *util.RawValue {
	if i.IsNaN {
		return nil
	}
	return &i.Value
}

func (i *InputOr) InputId() string {
	return i.Id
}

func (i *InputOr) Children() (out *[]*IOHolder) {
	return GetChildren(i.Or.Left, i.Or.Right)
}
