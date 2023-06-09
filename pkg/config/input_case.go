// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

// InputCase *** Switch Case ***
type InputCase struct {
	Type string `json:"type"`
	Case struct {
		Condition InputHolder `json:"condition"`
		Output    int32       `json:"output"`
	} `json:"case" input:"true"`
}

func (i *InputCase) Eval(cc *Controller) (out int32, nan bool) {

	if out, nan = i.Case.Condition.I.Eval(cc); !nan && out != 0 {
		return i.Case.Output, false
	}

	return 0, true
}

func (i *InputCase) InputType() string {
	return i.Type
}
