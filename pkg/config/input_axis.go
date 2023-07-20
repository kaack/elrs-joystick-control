// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import (
	"encoding/json"
	"github.com/kaack/elrs-joystick-control/pkg/devices"
	"github.com/kaack/elrs-joystick-control/pkg/util"
	"math"
)

type AxisT struct {
	Input        *IOHolder      `json:"input"`
	Number       int32          `json:"number"`
	OutputInvert bool           `json:"output_invert"`
	Deadzone     *util.RawValue `json:"deadzone"`
}

// InputAxis *** Axis ***
type InputAxis struct {
	Id    string        `json:"id"`
	Value util.RawValue `json:"value"`
	IsNaN bool          `json:"-"`

	Type string `json:"type"`
	Axis AxisT  `json:"axis" input:"true"`
}

type FakeAxisT AxisT

func (a *AxisT) UnmarshalJSON(data []byte) error {

	var axis = FakeAxisT{}
	if err := json.Unmarshal(data, &axis); err != nil {
		return err
	}

	*a = AxisT(axis)

	//set defaults
	if a.Deadzone == nil {
		(*a).Deadzone = new(util.RawValue)
		*(*a).Deadzone = util.ZeroRaw
	} else {
		//ensure the value is always positive
		*(*a).Deadzone = util.RawValue(math.Abs(float64(*(*a).Deadzone)))
	}

	return nil
}

func (i *InputAxis) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	src, out, ch, nan = i._Eval(c)
	i.Value = out
	i.IsNaN = nan

	return src, out, ch, nan
}

//func scaledDeadzone(val util.RawValue, mini util.RawValue, maxi util.RawValue, dz util.RawValue) {
//	scaled = filters.mapRange(val,mini,maxi, -1.0,1.0)
//	output = 0.0
//	if abs(scaled) > dz:
//	output = filters.mapRange(abs(scaled), dz, 1.0, 0.0, 1.0) * sign(val)
//	return filters.mapRange(output,-1.0,1.0, mini,maxi)
//
//}

func (i *InputAxis) _Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	input := i.Axis.Input
	if input == nil {
		return nil, 0, -1, true
	}

	if src, _, _, _ = input.Eval(c); src == nil {
		return nil, 0, -1, true
	}

	var gamepad *devices.InputGamepad
	var ok bool
	var invert util.RawValue

	switch in := (src).(type) {
	case *InputGamepad:
		if gamepad, ok = c.GetInputGamepad(in.Gamepad.Id); !ok {
			return nil, 0, -1, true
		}

		if i.Axis.OutputInvert {
			invert = -1
		} else {
			invert = 1
		}

		if *i.Axis.Deadzone == 0 {
			// no deadzone, exit early
			return nil, gamepad.Axis(int(i.Axis.Number)) * invert, -1, false
		} else {
			//re-scale the value for the deadzone
			value := gamepad.Axis(int(i.Axis.Number))
			if value < 0 {
				return nil, util.MapRange(value, util.MinRaw, *i.Axis.Deadzone*-1, util.MinRaw, 0) * invert, -1, false
			} else {
				return nil, util.MapRange(value, *i.Axis.Deadzone, util.MaxRaw, 0, util.MaxRaw) * invert, -1, false
			}
		}

	default:
		return nil, 0, -1, true
	}
}

func (i *InputAxis) InputType() string {
	return i.Type
}

func (i *InputAxis) InputValue() *util.RawValue {
	if i.IsNaN {
		return nil
	}
	return &i.Value
}

func (i *InputAxis) InputId() string {
	return i.Id
}

func (i *InputAxis) Children() (out *[]*IOHolder) {
	return GetChildren(i.Axis.Input, nil)
}
