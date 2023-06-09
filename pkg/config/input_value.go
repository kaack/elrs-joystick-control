// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

// InputValue *** Value ***
type InputValue struct {
	Type  string `json:"type"`
	Value struct {
		Output int32 `json:"output"`
	} `json:"value" input:"true"`
}

func (i *InputValue) Eval(_ *Controller) (out int32, nan bool) {
	return i.Value.Output, false
}

func (i *InputValue) InputType() string {
	return i.Type
}
