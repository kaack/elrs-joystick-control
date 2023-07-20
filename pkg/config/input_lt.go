// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import "github.com/kaack/elrs-joystick-control/pkg/util"

type LtT struct {
	OutputFalse  *util.RawValue `json:"output_false"`
	OutputTrue   *util.RawValue `json:"output_true"`
	RightDefault *util.RawValue `json:"right_default"`
	Left         *IOHolder      `json:"left"`
	Right        *[]*IOHolder   `json:"right"`
}

// InputLt *** Less-Than ***
type InputLt struct {
	Id    string        `json:"id"`
	Value util.RawValue `json:"value"`
	IsNaN bool          `json:"-"`

	Type string `json:"type"`
	Lt   LtT    `json:"lt" input:"true"`
}

func CompareLt(left util.RawValue, right util.RawValue) bool {
	return left < right
}
func (i *InputLt) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	src, out, ch, nan = EvalRelational(c, i.Lt.Left, i.Lt.Right, i.Lt.RightDefault, i.Lt.OutputTrue, i.Lt.OutputFalse, CompareLt)
	i.Value = out
	i.IsNaN = nan

	return src, out, ch, nan
}

//
//func (i *InputLt) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
//	src, out, ch, nan = i._Eval(c)
//	i.Value = out
//	i.IsNaN = nan
//
//	return src, out, ch, nan
//}
//
//func (i *InputLt) _Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
//	//if there is no left argument, result is not a number
//	if i.Lt.Left == nil {
//		return nil, 0, -1, true
//	}
//
//	//get left value
//	_, out, ch, nan = (*i.Lt.Left).Eval(c)
//	//if left value is not a number, result is not a number
//	if nan {
//		return nil, 0, -1, true
//	}
//
//	//if there are no right values, result is truthy
//	if i.Lt.Right == nil || len(*i.Lt.Right) == 0 {
//		return nil, i.Lt.OutputTrue, ch, false
//	}
//
//	//otherwise left value must be less than all right values
//	var curr util.RawValue
//	for _, param := range *i.Lt.Right {
//		if param == nil {
//			continue
//		}
//		_, curr, _, nan = param.Eval(c)
//
//		//ignore nan values
//		if nan {
//			continue
//		}
//
//		//found one param where the check fails
//		if !(out < curr) {
//			return nil, i.Lt.OutputFalse, ch, false
//		}
//	}
//
//	//first param is less than all params
//	return nil, i.Lt.OutputTrue, ch, false
//}

func (i *InputLt) InputType() string {
	return i.Type
}

func (i *InputLt) InputValue() *util.RawValue {
	if i.IsNaN {
		return nil
	}
	return &i.Value
}

func (i *InputLt) InputId() string {
	return i.Id
}

func (i *InputLt) Children() (out *[]*IOHolder) {
	return GetChildren(i.Lt.Left, i.Lt.Right)
}
