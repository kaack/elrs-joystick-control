// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import "github.com/kaack/elrs-joystick-control/pkg/util"

type NeqT struct {
	OutputFalse  *util.RawValue `json:"output_false"`
	OutputTrue   *util.RawValue `json:"output_true"`
	RightDefault *util.RawValue `json:"right_default"`

	Left  *IOHolder    `json:"left"`
	Right *[]*IOHolder `json:"right"`
}

// InputNeq *** Not Equals ***
type InputNeq struct {
	Id    string        `json:"id"`
	Value util.RawValue `json:"value"`
	IsNaN bool          `json:"-"`

	Type string `json:"type"`
	Neq  NeqT   `json:"neq" input:"true"`
}

func CompareNeq(left util.RawValue, right util.RawValue) bool {
	return left != right
}
func (i *InputNeq) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	src, out, ch, nan = EvalRelational(c, i.Neq.Left, i.Neq.Right, i.Neq.RightDefault, i.Neq.OutputTrue, i.Neq.OutputFalse, CompareNeq)
	i.Value = out
	i.IsNaN = nan

	return src, out, ch, nan
}

func (i *InputNeq) InputType() string {
	return i.Type
}

func (i *InputNeq) InputValue() *util.RawValue {
	if i.IsNaN {
		return nil
	}
	return &i.Value
}

func (i *InputNeq) InputId() string {
	return i.Id
}

func (i *InputNeq) Children() (out *[]*IOHolder) {
	return GetChildren(i.Neq.Left, i.Neq.Right)
}
