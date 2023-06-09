// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

// InputGte *** Greater-Than-or-Equals ***
type InputGte struct {
	Type string `json:"type"`
	Gte  struct {
		OutputFalse int32         `json:"output_false"`
		OutputTrue  int32         `json:"output_true"`
		Params      []InputHolder `json:"params"`
	} `json:"gte" input:"true"`
}

func (i *InputGte) Eval(cc *Controller) (out int32, nan bool) {
	//if array has no elements, check fails
	if len(i.Gte.Params) == 0 {
		return i.Gte.OutputFalse, false
	}

	//get first element
	out, nan = i.Gte.Params[0].I.Eval(cc)
	if nan {
		return i.Gte.OutputFalse, false
	}

	//if array has only one element, check succeeds
	if len(i.Gte.Params) == 1 {
		return i.Gte.OutputTrue, false
	}

	//otherwise first value must be greater than or equal to the rest
	var curr int32
	for _, param := range i.Gte.Params[1:] {
		curr, nan = param.I.Eval(cc)
		if nan {
			return i.Gte.OutputFalse, false
		}

		//found one param where the check fails
		if !(out >= curr) {
			return i.Gte.OutputFalse, false
		}
	}

	//first param is greater than all remaining params
	return i.Gte.OutputTrue, false
}

func (i *InputGte) InputType() string {
	return i.Type
}
