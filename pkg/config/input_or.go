// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

// InputOr *** Logical Or ***
type InputOr struct {
	Type string `json:"type"`
	Or   struct {
		OutputFalse int32         `json:"output_false"`
		OutputTrue  int32         `json:"output_true"`
		Params      []InputHolder `json:"params"`
	} `json:"or" input:"true"`
}

func (i *InputOr) Eval(cc *Controller) (out int32, nan bool) {

	for _, param := range i.Or.Params {
		out, nan = param.I.Eval(cc)
		if nan {
			return i.Or.OutputFalse, false
		}

		//at least one element is truthy (not 0)
		if out != 0 {
			return i.Or.OutputTrue, false
		}
	}

	return i.Or.OutputFalse, false
}

func (i *InputOr) InputType() string {
	return i.Type
}
