// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

// InputAnd *** Logical And ***
type InputAnd struct {
	Type string `json:"type"`
	And  struct {
		OutputFalse int32         `json:"output_false"`
		OutputTrue  int32         `json:"output_true"`
		Params      []InputHolder `json:"params"`
	} `json:"and" input:"true"`
}

func (i *InputAnd) Eval(cc *Controller) (out int32, nan bool) {

	for _, param := range i.And.Params {
		out, nan = param.I.Eval(cc)

		//at least one element is falsy (0), or NaN
		if nan || out == 0 {
			return i.And.OutputFalse, false
		}
	}

	return i.And.OutputTrue, false
}

func (i *InputAnd) InputType() string {
	return i.Type
}
