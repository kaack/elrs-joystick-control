// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

// InputLte *** Less-Than-or-Equals ***
type InputLte struct {
	Type string `json:"type"`
	Lte  struct {
		OutputFalse int32         `json:"output_false"`
		OutputTrue  int32         `json:"output_true"`
		Params      []InputHolder `json:"params"`
	} `json:"lte" input:"true"`
}

func (i *InputLte) Eval(cc *Controller) (out int32, nan bool) {
	//if array has no elements, check fails
	if len(i.Lte.Params) == 0 {
		return i.Lte.OutputFalse, false
	}

	//get first element
	out, nan = i.Lte.Params[0].I.Eval(cc)
	if nan {
		return i.Lte.OutputFalse, false
	}

	//if array has only one element, check succeeds
	if len(i.Lte.Params) == 1 {
		return i.Lte.OutputTrue, false
	}

	//otherwise first value must be less than or equal to the rest
	var curr int32
	for _, param := range i.Lte.Params[1:] {
		curr, nan = param.I.Eval(cc)
		if nan {
			return i.Lte.OutputFalse, false
		}

		//found one param where the check fails
		if !(out <= curr) {
			return i.Lte.OutputFalse, false
		}
	}

	//first param is less than all remaining params
	return i.Lte.OutputTrue, false
}

func (i *InputLte) InputType() string {
	return i.Type
}
