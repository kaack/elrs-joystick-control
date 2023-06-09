// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

// InputGt *** Greater-Than ***
type InputGt struct {
	Type string `json:"type"`
	Gt   struct {
		OutputFalse int32         `json:"output_false"`
		OutputTrue  int32         `json:"output_true"`
		Params      []InputHolder `json:"params"`
	} `json:"gt" input:"true"`
}

func (i *InputGt) Eval(cc *Controller) (out int32, nan bool) {

	//If array has no elements, check fails
	if len(i.Gt.Params) == 0 {
		return i.Gt.OutputFalse, false
	}

	//get first element
	out, nan = i.Gt.Params[0].I.Eval(cc)
	if nan {
		return i.Gt.OutputFalse, false
	}

	//if array has only one element, check succeeds
	if len(i.Gt.Params) == 1 {
		return i.Gt.OutputTrue, false
	}

	//otherwise first value must be greater than the rest

	var curr int32
	for _, param := range i.Gt.Params[1:] {
		curr, nan = param.I.Eval(cc)
		if nan {
			return i.Gt.OutputFalse, false
		}

		//found one param where the check fails
		if !(out > curr) {
			return i.Gt.OutputFalse, false
		}
	}

	//first param is greater than all remaining params
	return i.Gt.OutputTrue, false
}

func (i *InputGt) InputType() string {
	return i.Type
}
