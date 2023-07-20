// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import "github.com/kaack/elrs-joystick-control/pkg/util"

type AddT struct {
	RightDefault *util.RawValue `json:"right_default"`

	Left  *IOHolder    `json:"left"`
	Right *[]*IOHolder `json:"right"`
}

// InputAdd *** Equals ***
type InputAdd struct {
	Id    string        `json:"id"`
	Value util.RawValue `json:"value"`
	IsNaN bool          `json:"-"`

	Type string `json:"type"`
	Add  AddT   `json:"add" input:"true"`
}

func AddOperation(left util.RawValue, right util.RawValue) util.RawValue {
	return left + right
}

func (i *InputAdd) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	src, out, ch, nan = EvalOperation(c, i.Add.Left, i.Add.Right, i.Add.RightDefault, AddOperation)
	i.Value = out
	i.IsNaN = nan

	return src, out, ch, nan
}

//func (i *InputAdd) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
//	src, out, ch, nan = i._Eval(c)
//	i.Value = out
//	i.IsNaN = nan
//
//	return src, out, ch, nan
//}
//
//func (i *InputAdd) _Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
//	//if there are no inputs, check fails with nan
//	if i.Add.Params == nil || len(*i.Add.Params) == 0 {
//		return nil, 0, -1, true
//	}
//
//	allNan := true
//	res := util.ZeroRaw
//	for _, param := range *i.Add.Params {
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
//		res += out
//	}
//
//	//all parameters are nan, addition result is not a number
//	if allNan {
//		return nil, 0, -1, true
//	}
//
//	return nil, res, ch, false
//}

func (i *InputAdd) InputType() string {
	return i.Type
}

func (i *InputAdd) InputValue() *util.RawValue {
	if i.IsNaN {
		return nil
	}
	return &i.Value
}

func (i *InputAdd) InputId() string {
	return i.Id
}

func (i *InputAdd) Children() (out *[]*IOHolder) {
	return GetChildren(i.Add.Left, i.Add.Right)
}
