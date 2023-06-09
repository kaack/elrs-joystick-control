// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

// InputSwitch *** Switch ****

type InputSwitch struct {
	Type   string `json:"type"`
	Switch struct {
		OutputCases   []*InputCase `json:"output_cases"`
		OutputDefault int32        `json:"output_default"`
		OutputSticky  bool         `json:"output_sticky"`
		stickyValue   int32
		stickySet     bool
	} `json:"switch" input:"true"`
}

func (i *InputSwitch) Eval(cc *Controller) (out int32, nan bool) {
	for _, outCase := range i.Switch.OutputCases {
		out, nan = outCase.Case.Condition.I.Eval(cc)
		if out == 0 || nan {
			continue
		}

		//one case evaluated to true
		if i.Switch.OutputSticky {
			i.Switch.stickyValue = outCase.Case.Output
			i.Switch.stickySet = true
			return outCase.Case.Output, false
		}

		return outCase.Case.Output, false
	}

	//none of the cases evaluated to true
	if i.Switch.OutputSticky && i.Switch.stickySet {
		return i.Switch.stickyValue, false
	}

	return i.Switch.OutputDefault, false
}

func (i *InputSwitch) InputType() string {
	return i.Type
}
