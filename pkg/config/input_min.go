// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import (
	"github.com/kaack/elrs-joystick-control/pkg/util"
)

type MinT struct {
	RightDefault *util.RawValue `json:"right_default"`

	Left  *IOHolder    `json:"left"`
	Right *[]*IOHolder `json:"right"`
}

// InputMin *** Equals ***
type InputMin struct {
	Id    string        `json:"id"`
	Value util.RawValue `json:"value"`
	IsNaN bool          `json:"-"`

	Type string `json:"type"`
	Min  MinT   `json:"min" input:"true"`
}

func MinOperation(left util.RawValue, right util.RawValue) util.RawValue {
	if left < right {
		return left
	}
	return right
}

func (i *InputMin) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	src, out, ch, nan = EvalOperation(c, i.Min.Left, i.Min.Right, i.Min.RightDefault, MinOperation)
	i.Value = out
	i.IsNaN = nan

	return src, out, ch, nan
}

//func (i *InputMin) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
//	src, out, ch, nan = i._Eval(c)
//	i.Value = out
//	i.IsNaN = nan
//
//	return src, out, ch, nan
//}

//func (i *InputMin) _Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
//	//if there are no inputs, result is not a number
//	if i.Min.Params == nil || len(*i.Min.Params) == 0 {
//		return nil, 0, -1, true
//	}
//
//	allNan := true
//	res := util.MaxRaw
//	for _, param := range *i.Min.Params {
//		if param == nil {
//			continue
//		}
//		_, out, ch, nan = param.Eval(c)
//
//		//ignore nan values
//		if nan {
//			continue
//		}
//
//		allNan = false
//
//		if out < res {
//			res = out
//		}
//	}
//
//	//all parameters are nan, result is not a number
//	if allNan {
//		return nil, 0, -1, true
//	}
//
//	return nil, res, ch, false
//}

func (i *InputMin) InputType() string {
	return i.Type
}

func (i *InputMin) InputValue() *util.RawValue {
	if i.IsNaN {
		return nil
	}
	return &i.Value
}

func (i *InputMin) InputId() string {
	return i.Id
}

func (i *InputMin) Children() (out *[]*IOHolder) {
	return GetChildren(i.Min.Left, i.Min.Right)
}
