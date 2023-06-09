// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

// InputRead *** Read ****
type InputRead struct {
	Type string `json:"type"`
	Read struct {
		Source string `json:"source"`
	} `json:"read" input:"true"`
}

func (i *InputRead) Eval(cc *Controller) (out int32, nan bool) {
	return cc.EvalInput(i.Read.Source)
}

func (i *InputRead) InputType() string {
	return i.Type
}
