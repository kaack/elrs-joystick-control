// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

// InputEq *** Equals ***
type InputEq struct {
	Type string `json:"type"`
	Eq   struct {
		OutputFalse int32         `json:"output_false"`
		OutputTrue  int32         `json:"output_true"`
		Params      []InputHolder `json:"params"`
	} `json:"eq" input:"true"`
}

func (i *InputEq) Eval(cc *Controller) (out int32, nan bool) {
	//If array has no elements, equality check fails
	if len(i.Eq.Params) == 0 {
		return i.Eq.OutputFalse, false
	}

	out, nan = i.Eq.Params[0].I.Eval(cc)
	if nan {
		return i.Eq.OutputFalse, false
	}

	//if array has only one element, equality check succeeds
	if len(i.Eq.Params) == 1 {
		return i.Eq.OutputTrue, false
	}

	//otherwise all array elements must have same value
	out, nan = i.Eq.Params[0].I.Eval(cc)
	if nan {
		return i.Eq.OutputFalse, false
	}

	var curr int32
	for _, param := range i.Eq.Params[1:] {
		curr, nan = param.I.Eval(cc)
		if nan {
			return i.Eq.OutputFalse, false
		}

		//found one element with different value, equality check fails
		if curr != out {
			return i.Eq.OutputFalse, false
		}
	}

	//all elements in the params array have the same value
	return i.Eq.OutputTrue, false
}

func (i *InputEq) InputType() string {
	return i.Type
}
