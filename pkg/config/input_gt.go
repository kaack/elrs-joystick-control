// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import "github.com/kaack/elrs-joystick-control/pkg/util"

type GtT struct {
	OutputFalse  *util.RawValue `json:"output_false"`
	OutputTrue   *util.RawValue `json:"output_true"`
	RightDefault *util.RawValue `json:"right_default"`

	Left  *IOHolder    `json:"left"`
	Right *[]*IOHolder `json:"right"`
}

// InputGt *** Greater-Than ***
type InputGt struct {
	Id    string        `json:"id"`
	Value util.RawValue `json:"value"`
	IsNaN bool          `json:"-"`

	Type string `json:"type"`
	Gt   GtT    `json:"gt" input:"true"`
}

func CompareGt(left util.RawValue, right util.RawValue) bool {
	return left > right
}
func (i *InputGt) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	src, out, ch, nan = EvalRelational(c, i.Gt.Left, i.Gt.Right, i.Gt.RightDefault, i.Gt.OutputTrue, i.Gt.OutputFalse, CompareGt)
	i.Value = out
	i.IsNaN = nan

	return src, out, ch, nan
}

//func (i *InputGt) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
//	src, out, ch, nan = i._Eval(c)
//	i.Value = out
//	i.IsNaN = nan
//
//	return src, out, ch, nan
//}
//
//func (i *InputGt) _Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
//	//ff array has no elements, check fails with nan
//	if i.Gt.Params == nil || len(*i.Gt.Params) == 0 {
//		return nil, 0, -1, true
//	}
//
//	//get first element
//	_, out, ch, nan = (*i.Gt.Params)[0].Eval(c)
//	if nan {
//		return nil, 0, -1, true
//	}
//
//	//otherwise first value must be greater than the rest
//	if len(*i.Gt.Params) > 1 {
//		var curr util.RawValue
//		for _, param := range (*i.Gt.Params)[1:] {
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
//			//found one param where the check fails
//			if !(out > curr) {
//				return nil, i.Gt.OutputFalse, ch, false
//			}
//		}
//	}
//
//	//first param is greater than all remaining params
//	return nil, i.Gt.OutputTrue, ch, false
//}

func (i *InputGt) InputType() string {
	return i.Type
}
func (i *InputGt) InputValue() *util.RawValue {
	if i.IsNaN {
		return nil
	}
	return &i.Value
}

func (i *InputGt) InputId() string {
	return i.Id
}

func (i *InputGt) Children() (out *[]*IOHolder) {
	return GetChildren(i.Gt.Left, i.Gt.Right)
}
