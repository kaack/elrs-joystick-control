// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import "math"

// InputLinear *** Linear ***
type InputLinear struct {
	Type   string `json:"type,omitempty"`
	Linear struct {
		Input        InputHolder `json:"input"`
		InputMin     int32       `json:"input_min"`
		InputMax     int32       `json:"input_max"`
		InputInvert  bool        `json:"input_invert"`
		OutputMin    int32       `json:"output_min"`
		OutputMax    int32       `json:"output_max"`
		OutputInvert bool        `json:"output_invert"`
	} `json:"linear" input:"true"`
}

func (i *InputLinear) Eval(cc *Controller) (out int32, nan bool) {
	out, nan = i.Linear.Input.I.Eval(cc)
	if nan {
		return 0, nan
	}

	if i.Linear.InputInvert {
		out *= -1
	}

	out = _MapRange(
		out,
		i.Linear.InputMin,
		i.Linear.InputMax,
		i.Linear.OutputMin,
		i.Linear.OutputMax,
	)

	if i.Linear.OutputInvert {
		out *= -1
	}

	return out, false
}

func (i *InputLinear) InputType() string {
	return i.Type
}

func _MapRange(sourceValue int32, sourceMin int32, sourceMax int32, targetMin int32, targetMax int32) int32 {
	sourceRange := float64(sourceMax - sourceMin)
	targetRange := float64(targetMax - targetMin)

	offset := (math.Max(float64(sourceValue-sourceMin), 0) / sourceRange) * targetRange
	offset = math.Min(offset, float64(targetMax))

	targetValue := targetMin + int32(offset)
	return targetValue
}
