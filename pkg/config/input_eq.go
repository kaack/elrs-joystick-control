// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import "github.com/kaack/elrs-joystick-control/pkg/util"

type EqT struct {
	OutputFalse  *util.RawValue `json:"output_false"`
	OutputTrue   *util.RawValue `json:"output_true"`
	RightDefault *util.RawValue `json:"right_default"`

	Left  *IOHolder    `json:"left"`
	Right *[]*IOHolder `json:"right"`
}

// InputEq *** Equals ***
type InputEq struct {
	Id    string        `json:"id"`
	Value util.RawValue `json:"value"`
	IsNaN bool          `json:"-"`

	Type string `json:"type"`
	Eq   EqT    `json:"eq" input:"true"`
}

func CompareEq(left util.RawValue, right util.RawValue) bool {
	return left == right
}
func (i *InputEq) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	src, out, ch, nan = EvalRelational(c, i.Eq.Left, i.Eq.Right, i.Eq.RightDefault, i.Eq.OutputTrue, i.Eq.OutputFalse, CompareEq)
	i.Value = out
	i.IsNaN = nan

	return src, out, ch, nan
}

//func (i *InputEq) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
//	src, out, ch, nan = i._Eval(c)
//	i.Value = out
//	i.IsNaN = nan
//
//	return src, out, ch, nan
//}
//
//func (i *InputEq) _Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
//	//If array has no elements, equality check fails with nan
//	if i.Eq.Params == nil || len(*i.Eq.Params) == 0 {
//		return nil, 0, -1, true
//	}
//
//	_, out, ch, nan = (*i.Eq.Params)[0].Eval(c)
//	if nan {
//		return nil, 0, -1, true
//	}
//
//	//all array elements must have same value as first
//	if len(*i.Eq.Params) > 1 {
//		var curr util.RawValue
//		for _, param := range (*i.Eq.Params)[1:] {
//			if param == nil {
//				continue
//			}
//			_, curr, _, nan = param.Eval(c)
//
//			//ignore nan values
//			if nan {
//				continue
//			}
//
//			//found one element with different value, equality check fails
//			if curr != out {
//				return nil, i.Eq.OutputFalse, ch, false
//			}
//		}
//	}
//
//	//all elements in the params array have the same value
//	return nil, i.Eq.OutputTrue, ch, false
//}

func (i *InputEq) InputType() string {
	return i.Type
}

func (i *InputEq) InputValue() *util.RawValue {
	if i.IsNaN {
		return nil
	}
	return &i.Value
}

func (i *InputEq) InputId() string {
	return i.Id
}

func (i *InputEq) Children() (out *[]*IOHolder) {
	return GetChildren(i.Eq.Left, i.Eq.Right)
}
