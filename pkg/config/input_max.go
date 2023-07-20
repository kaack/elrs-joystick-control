// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import (
	"github.com/kaack/elrs-joystick-control/pkg/util"
)

type MaxT struct {
	RightDefault *util.RawValue `json:"right_default"`

	Left  *IOHolder    `json:"left"`
	Right *[]*IOHolder `json:"right"`
}

// InputMax *** Equals ***
type InputMax struct {
	Id    string        `json:"id"`
	Value util.RawValue `json:"value"`
	IsNaN bool          `json:"-"`

	Type string `json:"type"`
	Max  MaxT   `json:"max" input:"true"`
}

func MaxOperation(left util.RawValue, right util.RawValue) util.RawValue {
	if left > right {
		return left
	}
	return right
}

func (i *InputMax) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	src, out, ch, nan = EvalOperation(c, i.Max.Left, i.Max.Right, i.Max.RightDefault, MaxOperation)
	i.Value = out
	i.IsNaN = nan

	return src, out, ch, nan
}

//
//func (i *InputMax) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
//	src, out, ch, nan = i._Eval(c)
//	i.Value = out
//	i.IsNaN = nan
//
//	return src, out, ch, nan
//}
//
//func (i *InputMax) _Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
//	//if there are no inputs, result is not a number
//	if i.Max.Params == nil || len(*i.Max.Params) == 0 {
//		return nil, 0, -1, true
//	}
//
//	allNan := true
//	res := util.MinRaw
//	for _, param := range *i.Max.Params {
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
//		if out > res {
//			res = out
//		}
//	}
//
//	//all parameters are nan, there is no maximum
//	if allNan {
//		return nil, 0, -1, true
//	}
//
//	return nil, res, ch, false
//}

func (i *InputMax) InputType() string {
	return i.Type
}

func (i *InputMax) InputValue() *util.RawValue {
	if i.IsNaN {
		return nil
	}
	return &i.Value
}

func (i *InputMax) InputId() string {
	return i.Id
}

func (i *InputMax) Children() (out *[]*IOHolder) {
	return GetChildren(i.Max.Left, i.Max.Right)
}
