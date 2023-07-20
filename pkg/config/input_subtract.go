// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import "github.com/kaack/elrs-joystick-control/pkg/util"

type SubtractT struct {
	RightDefault *util.RawValue `json:"right_default"`

	Left  *IOHolder    `json:"left"`
	Right *[]*IOHolder `json:"right"`
}

// InputSubtract *** Equals ***
type InputSubtract struct {
	Id    string        `json:"id"`
	Value util.RawValue `json:"value"`
	IsNaN bool          `json:"-"`

	Type     string    `json:"type"`
	Subtract SubtractT `json:"subtract" input:"true"`
	Holder   *IOHolder `json:"-"`
}

func SubtractOperation(left util.RawValue, right util.RawValue) util.RawValue {
	return left - right
}

func (i *InputSubtract) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	src, out, ch, nan = EvalOperation(c, i.Subtract.Left, i.Subtract.Right, i.Subtract.RightDefault, SubtractOperation)
	i.Value = out
	i.IsNaN = nan

	return src, out, ch, nan
}

//func (i *InputSubtract) _Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
//	//if there is no left value, result is not a number
//	if i.Subtract.Left == nil {
//		return nil, 0, -1, true
//	}
//
//	//get the left value
//	src, out, ch, nan = (*i.Subtract.Left).Eval(c)
//
//	//if the left value is not a number, result is not a number
//	if nan {
//		return nil, 0, ch, true
//	}
//
//	//if there are no right values, result is the left number itself
//	if i.Subtract.Right == nil || len(*i.Subtract.Right) == 0 {
//		return src, out, ch, nan
//	}
//
//	//otherwise subtract the right values
//	res := out
//	for _, param := range *i.Subtract.Right {
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
//		res -= out
//	}
//	return nil, res, ch, false
//
//}

//
//func (i *InputSubtract) _Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
//	//if there are no inputs, check fails with nan
//	if i.Subtract.Params == nil || len(*i.Subtract.Params) == 0 {
//		return nil, 0, -1, true
//	}
//
//	//evaluate the first parameter
//	src, out, ch, nan = (*i.Subtract.Params)[0].Eval(c)
//
//	//if there is only one param, or if first param is not a number, exit early
//	if nan || len(*i.Subtract.Params) == 1 {
//		return src, out, ch, nan
//	}
//
//	res := out
//	for _, param := range *i.Subtract.Params {
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
//		res -= out
//	}
//
//	return nil, res, ch, false
//}

func (i *InputSubtract) InputType() string {
	return i.Type
}

func (i *InputSubtract) InputValue() *util.RawValue {
	if i.IsNaN {
		return nil
	}
	return &i.Value
}

func (i *InputSubtract) InputId() string {
	return i.Id
}

func (i *InputSubtract) Children() (out *[]*IOHolder) {
	return GetChildren(i.Subtract.Left, i.Subtract.Right)
}
