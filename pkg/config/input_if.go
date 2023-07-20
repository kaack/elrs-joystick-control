// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import "github.com/kaack/elrs-joystick-control/pkg/util"

type IfT struct {
	Conditions      *[]*IOHolder   `json:"conditions"`
	NegateCondition bool           `json:"negate_condition"`
	LeftDefault     *util.RawValue `json:"left_default"`
	RightDefault    *util.RawValue `json:"right_default"`
	Left            *IOHolder      `json:"left"`
	Right           *IOHolder      `json:"right"`
}

// InputIf *** If-Then-Else ***
type InputIf struct {
	Id    string        `json:"id"`
	Value util.RawValue `json:"value"`
	IsNaN bool          `json:"-"`

	Type string `json:"type"`
	If   IfT    `json:"if" input:"true"`
}

func (i *InputIf) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	src, out, ch, nan = i._Eval(c)
	i.Value = out
	i.IsNaN = nan

	return src, out, ch, nan
}

func (i *InputIf) _Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {

	//no condition, result is not a number
	if i.If.Conditions == nil {
		return nil, 0, -1, true
	}

	//evaluate all conditions
	//if there are no conditions, output is not a number
	if len(*i.If.Conditions) == 0 {
		return nil, 0, -1, true
	}

	//check to see if at least one condition is falsy
	allNan := true
	allTrue := true
	for _, param := range *i.If.Conditions {
		if param == nil {
			continue
		}
		_, out, ch, nan = param.Eval(c)

		//ignore nan values
		if nan {
			continue
		}

		allNan = false

		//at least one element is falsy (0), no need to check other conditions
		if out == 0 {
			allTrue = false
			break
		}
	}

	//if all conditions are not numbers, output is not a number
	if allNan {
		return nil, 0, -1, true
	}

	if i.If.NegateCondition {
		allTrue = !allTrue
	}

	var input *IOHolder
	var inputDefault *util.RawValue

	if allTrue {
		//use the left input
		input = i.If.Left
		inputDefault = i.If.LeftDefault

	} else {
		//use the right input
		input = i.If.Right
		inputDefault = i.If.RightDefault
	}

	//if there is no input, use the default value
	if input == nil {
		return OutputOrNil(nil, inputDefault, ch, false)
	}

	_, out, ch, nan = input.Eval(c)
	//if input is not a number, output is not a number as well (default value ignored on purpose)
	if nan {
		return nil, 0, -1, true
	}

	//otherwise pass-through the input value
	return nil, out, ch, false
}

func (i *InputIf) InputType() string {
	return i.Type
}

func (i *InputIf) InputValue() *util.RawValue {
	if i.IsNaN {
		return nil
	}
	return &i.Value
}

func (i *InputIf) InputId() string {
	return i.Id
}

func (i *InputIf) Children() (out *[]*IOHolder) {
	var children []*IOHolder

	if i.If.Left != nil {
		children = append(children, i.If.Left)
	}

	if i.If.Right != nil {
		children = append(children, i.If.Right)
	}

	if i.If.Conditions != nil {
		children = append(children, *i.If.Conditions...)
	}

	return &children
}
