// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import "github.com/kaack/elrs-joystick-control/pkg/util"

type CaseT struct {
	Conditions      *[]*IOHolder   `json:"conditions"`
	Input           *IOHolder      `json:"input"`
	NegateCondition bool           `json:"negate_condition"`
	InputDefault    *util.RawValue `json:"input_default"`
}

// InputCase *** Switch Case ***
type InputCase struct {
	Id    string        `json:"id"`
	Value util.RawValue `json:"value"`
	IsNaN bool          `json:"-"`

	Type string `json:"type"`
	Case CaseT  `json:"case" input:"true"`
}

func (i *InputCase) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	src, out, ch, nan = i._Eval(c)
	i.Value = out
	i.IsNaN = nan

	return src, out, ch, nan
}

func (i *InputCase) _Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {

	//no condition, result is not a number
	if i.Case.Conditions == nil {
		return nil, 0, -1, true
	}

	//evaluate all conditions
	//if there are no conditions, output is not a number
	if len(*i.Case.Conditions) == 0 {
		return nil, 0, -1, true
	}

	//check to see if at least one param is falsy
	allNan := true
	allTrue := true
	for _, param := range *i.Case.Conditions {
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

	if i.Case.NegateCondition {
		allTrue = !allTrue
	}

	//if condition false, output is not a number
	if !allTrue {
		return nil, 0, -1, true
	}

	//if there is no input, output default value
	if i.Case.Input == nil {
		return OutputOrNil(nil, i.Case.InputDefault, ch, false)
	}

	_, out, ch, nan = i.Case.Input.Eval(c)
	//if input is not a number, output is not a number as well
	if nan {
		return nil, 0, -1, true
	}

	//otherwise pass-through the input value

	return nil, out, ch, false
}

func (i *InputCase) InputType() string {
	return i.Type
}

func (i *InputCase) InputValue() *util.RawValue {
	if i.IsNaN {
		return nil
	}
	return &i.Value
}

func (i *InputCase) InputId() string {
	return i.Id
}

func (i *InputCase) Children() (out *[]*IOHolder) {
	return GetChildren(i.Case.Input, i.Case.Conditions)
}
