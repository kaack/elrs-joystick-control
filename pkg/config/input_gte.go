// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import "github.com/kaack/elrs-joystick-control/pkg/util"

type GteT struct {
	OutputFalse  *util.RawValue `json:"output_false"`
	OutputTrue   *util.RawValue `json:"output_true"`
	RightDefault *util.RawValue `json:"right_default"`

	Left  *IOHolder    `json:"left"`
	Right *[]*IOHolder `json:"right"`
}

// InputGte *** Greater-Than-or-Equals ***
type InputGte struct {
	Id    string        `json:"id"`
	Value util.RawValue `json:"value"`
	IsNaN bool          `json:"-"`

	Type string `json:"type"`
	Gte  GteT   `json:"gte" input:"true"`
}

func CompareGte(left util.RawValue, right util.RawValue) bool {
	return left >= right
}
func (i *InputGte) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	src, out, ch, nan = EvalRelational(c, i.Gte.Left, i.Gte.Right, i.Gte.RightDefault, i.Gte.OutputTrue, i.Gte.OutputFalse, CompareGte)
	i.Value = out
	i.IsNaN = nan

	return src, out, ch, nan
}

//func (i *InputGte) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
//	src, out, ch, nan = i._Eval(c)
//	i.Value = out
//	i.IsNaN = nan
//
//	return src, out, ch, nan
//}
//
//func (i *InputGte) _Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
//	//if array has no elements, check fails with nan
//	if i.Gte.Params == nil || len(*i.Gte.Params) == 0 {
//		return nil, 0, -1, true
//	}
//
//	//get first element
//	_, out, ch, nan = (*i.Gte.Params)[0].Eval(c)
//	if nan {
//		return nil, 0, -1, true
//	}
//
//	//otherwise first value must be greater than or equal to the rest
//	if len(*i.Gte.Params) > 1 {
//		var curr util.RawValue
//		for _, param := range (*i.Gte.Params)[1:] {
//			if param == nil {
//				continue
//			}
//			_, curr, _, nan = param.Eval(c)
//			if nan {
//				continue
//			}
//
//			//found one param where the check fails
//			if !(out >= curr) {
//				return nil, i.Gte.OutputFalse, ch, false
//			}
//		}
//	}
//
//	//first param is greater than all remaining params
//	return nil, i.Gte.OutputTrue, ch, false
//}

func (i *InputGte) InputType() string {
	return i.Type
}

func (i *InputGte) InputValue() *util.RawValue {
	if i.IsNaN {
		return nil
	}
	return &i.Value
}

func (i *InputGte) InputId() string {
	return i.Id
}

func (i *InputGte) Children() (out *[]*IOHolder) {
	return GetChildren(i.Gte.Left, i.Gte.Right)
}
