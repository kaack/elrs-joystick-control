// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

// InputLt *** Less-Than ***
type InputLt struct {
	Type string `json:"type"`
	Lt   struct {
		OutputFalse int32         `json:"output_false"`
		OutputTrue  int32         `json:"output_true"`
		Params      []InputHolder `json:"params"`
	} `json:"lt" input:"true"`
}

func (i *InputLt) Eval(cc *Controller) (out int32, nan bool) {
	//if array has no elements, check fails
	if len(i.Lt.Params) == 0 {
		return i.Lt.OutputFalse, false
	}

	//get first element
	out, nan = i.Lt.Params[0].I.Eval(cc)
	if nan {
		return i.Lt.OutputFalse, false
	}

	//if array has only one element, check succeeds
	if len(i.Lt.Params) == 1 {
		return i.Lt.OutputTrue, false
	}

	//otherwise first value must be less than the rest
	var curr int32
	for _, param := range i.Lt.Params[1:] {
		curr, nan = param.I.Eval(cc)
		if nan {
			return i.Lt.OutputFalse, false
		}

		//found one param where the check fails
		if !(out < curr) {
			return i.Lt.OutputFalse, false
		}
	}

	//first param is less than all remaining params
	return i.Lt.OutputTrue, false
}

func (i *InputLt) InputType() string {
	return i.Type
}
