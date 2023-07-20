// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import "github.com/kaack/elrs-joystick-control/pkg/util"

type LteT struct {
	OutputFalse  *util.RawValue `json:"output_false"`
	OutputTrue   *util.RawValue `json:"output_true"`
	RightDefault *util.RawValue `json:"right_default"`

	Left  *IOHolder    `json:"left"`
	Right *[]*IOHolder `json:"right"`
}

// InputLte *** Less-Than-or-Equals ***
type InputLte struct {
	Id    string        `json:"id"`
	Value util.RawValue `json:"value"`
	IsNaN bool          `json:"-"`

	Type string `json:"type"`
	Lte  LteT   `json:"lte" input:"true"`
}

func CompareLte(left util.RawValue, right util.RawValue) bool {
	return left <= right
}
func (i *InputLte) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	src, out, ch, nan = EvalRelational(c, i.Lte.Left, i.Lte.Right, i.Lte.RightDefault, i.Lte.OutputTrue, i.Lte.OutputFalse, CompareLte)
	i.Value = out
	i.IsNaN = nan

	return src, out, ch, nan
}

func (i *InputLte) InputType() string {
	return i.Type
}

func (i *InputLte) InputValue() *util.RawValue {
	if i.IsNaN {
		return nil
	}
	return &i.Value
}

func (i *InputLte) InputId() string {
	return i.Id
}

func (i *InputLte) Children() (out *[]*IOHolder) {
	return GetChildren(i.Lte.Left, i.Lte.Right)
}
