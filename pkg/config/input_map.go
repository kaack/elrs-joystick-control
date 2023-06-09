// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

// InputMap *** Map ***
type InputMap struct {
	Type string `json:"type"`
	Map  struct {
		InputKey      InputHolder     `json:"input_key"`
		OutputDefault int32           `json:"output_default"`
		OutputMap     map[int32]int32 `json:"output_map"`
	} `json:"map" input:"true"`
}

func (i *InputMap) Eval(cc *Controller) (out int32, nan bool) {
	out, nan = i.Map.InputKey.I.Eval(cc)
	if nan {
		return i.Map.OutputDefault, false
	}

	var ok bool
	if out, ok = i.Map.OutputMap[out]; !ok {
		return i.Map.OutputDefault, false
	}

	return out, false
}

func (i *InputMap) InputType() string {
	return i.Type
}
