// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import (
	"encoding/json"
	"github.com/kaack/elrs-joystick-control/pkg/util"
	"time"
)

const MainTrimStepDefault = util.RawValue(1000)

type TrimT struct {
	MainTrimIncreaseConditions *[]*IOHolder `json:"main_trim_increase_conditions"`
	MainTrimInstantConditions  *[]*IOHolder `json:"main_trim_instant_conditions"`
	MainTrimDecreaseConditions *[]*IOHolder `json:"main_trim_decrease_conditions"`

	Input   *IOHolder `json:"input"`
	SubTrim *IOHolder `json:"sub_trim"`

	MainTrimStep          *util.RawValue `json:"main_trim_step"`
	MainTrimDefault       *util.RawValue `json:"main_trim_default"`
	SubTrimDefault        *util.RawValue `json:"sub_trim_default"`
	ActivationDurationMin util.RawValue  `json:"activation_duration_min"`

	Children      []*IOHolder `json:"-"` //pre-allocate the children holder
	mainTrimValue util.RawValue

	capturedInstant      util.RawValue
	trimIncreaseEdgeTime time.Time
	trimInstantEdgeTime  time.Time
	trimDecreaseEdgeTime time.Time
}

var ZeroInstant = time.Time{}

// InputTrim *** Switch Case ***
type InputTrim struct {
	Id    string        `json:"id"`
	Value util.RawValue `json:"value"`
	IsNaN bool          `json:"-"`

	Type string `json:"type"`
	Trim TrimT  `json:"trim" input:"true"`
}

type FakeTrimT TrimT

func (t *TrimT) UnmarshalJSON(data []byte) error {
	var trim = FakeTrimT{}
	if err := json.Unmarshal(data, &trim); err != nil {
		return err
	}

	*t = TrimT(trim)

	//set defaults
	if t.MainTrimDefault == nil {
		(*t).MainTrimDefault = new(util.RawValue)
		*(*t).MainTrimDefault = util.ZeroRaw
	}

	if t.MainTrimStep == nil {
		(*t).MainTrimStep = new(util.RawValue)
		*(*t).MainTrimStep = MainTrimStepDefault
	}

	if t.SubTrimDefault == nil {
		(*t).SubTrimDefault = new(util.RawValue)
		*(*t).SubTrimDefault = util.ZeroRaw
	}

	//initialize the main trim value to the default
	t.mainTrimValue = *t.MainTrimDefault

	if t.Input != nil {
		t.Children = append(t.Children, t.Input)
	}

	if t.MainTrimIncreaseConditions != nil {
		t.Children = append(t.Children, *(t.MainTrimIncreaseConditions)...)
	}

	if t.MainTrimInstantConditions != nil {
		t.Children = append(t.Children, *(t.MainTrimInstantConditions)...)
	}

	if t.MainTrimDecreaseConditions != nil {
		t.Children = append(t.Children, *(t.MainTrimDecreaseConditions)...)
	}

	return nil
}

func (i *InputTrim) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	src, out, ch, nan = i._Eval(c)
	i.Value = out
	i.IsNaN = nan

	return src, out, ch, nan
}

func EvalConditionsArray(c *Config, conditions *[]*IOHolder) (res bool, nan bool) {

	if conditions == nil {
		return false, true
	}

	allNan := true
	var out util.RawValue
	for _, param := range *conditions {
		if param == nil {
			continue
		}
		_, out, _, nan = param.Eval(c)

		//ignore nan values
		if nan {
			continue
		}

		allNan = false

		//at least one element is falsy (0), no need to check other conditions
		if out == 0 {
			return false, false
		}
	}

	if allNan {
		return false, true
	}

	return true, false
}

func isActivated(t1 time.Time, t2 time.Time, ActivationDurationMin util.RawValue) bool {
	if t1.IsZero() || t2.IsZero() {
		return false
	}

	return t1.Sub(t2) > time.Duration(ActivationDurationMin)*time.Millisecond
}

func (i *InputTrim) _Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	var subTrim util.RawValue
	var input util.RawValue

	src, input, ch, nan = i.Trim.Input.Eval(c)
	if nan {
		//no input value, so there is nothing to do
		return nil, 0, -1, true
	}

	if i.Trim.SubTrim == nil {
		subTrim = *i.Trim.SubTrimDefault
	} else if _, subTrim, _, nan = i.Trim.SubTrim.Eval(c); nan {
		//if the sub-trim input is not a number, use 0 instead
		//do not use the default, as that's only if there is no input wired
		subTrim = util.ZeroRaw
	}

	res := i.Trim.mainTrimValue + input + subTrim
	if res < util.MinRaw {
		res = util.MinRaw
	} else if res > util.MaxRaw {
		res = util.MaxRaw
	}

	cTime := time.Now()
	if mainTrimIncrease, _ := EvalConditionsArray(c, i.Trim.MainTrimIncreaseConditions); mainTrimIncrease {
		if i.Trim.trimIncreaseEdgeTime.IsZero() {
			i.Trim.trimIncreaseEdgeTime = cTime
		}
	} else if isActivated(cTime, i.Trim.trimIncreaseEdgeTime, i.Trim.ActivationDurationMin) {
		i.Trim.trimIncreaseEdgeTime = ZeroInstant
		i.Trim.mainTrimValue += *i.Trim.MainTrimStep
	} else if mainTrimInstant, _ := EvalConditionsArray(c, i.Trim.MainTrimInstantConditions); mainTrimInstant {
		if i.Trim.trimInstantEdgeTime.IsZero() {
			//capture the instant trim when the button is pressed
			//as there is a delay between pressing and releasing the button
			i.Trim.capturedInstant = res - subTrim
			i.Trim.trimInstantEdgeTime = cTime
		}
	} else if isActivated(cTime, i.Trim.trimInstantEdgeTime, i.Trim.ActivationDurationMin) {
		i.Trim.trimInstantEdgeTime = ZeroInstant
		i.Trim.mainTrimValue = i.Trim.capturedInstant
	} else if mainTrimDecrease, _ := EvalConditionsArray(c, i.Trim.MainTrimDecreaseConditions); mainTrimDecrease {
		if i.Trim.trimDecreaseEdgeTime.IsZero() {
			i.Trim.trimDecreaseEdgeTime = cTime
		}
	} else if isActivated(cTime, i.Trim.trimDecreaseEdgeTime, i.Trim.ActivationDurationMin) {
		i.Trim.trimDecreaseEdgeTime = ZeroInstant
		i.Trim.mainTrimValue -= *i.Trim.MainTrimStep
	}

	return src, res, ch, false
}

func (i *InputTrim) InputType() string {
	return i.Type
}

func (i *InputTrim) InputValue() *util.RawValue {
	if i.IsNaN {
		return nil
	}
	return &i.Value
}

func (i *InputTrim) InputId() string {
	return i.Id
}

func (i *InputTrim) Children() (out *[]*IOHolder) {
	return &i.Trim.Children
}
