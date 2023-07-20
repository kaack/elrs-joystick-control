// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import "github.com/kaack/elrs-joystick-control/pkg/util"

type SwitchT struct {
	Cases         *[]*IOHolder   `json:"cases"`
	OutputDefault *util.RawValue `json:"output_default"`
	OutputSticky  bool           `json:"output_sticky"`
	stickyValue   util.RawValue
	stickyChannel util.ChannelNumber
	stickySet     bool
}

// InputSwitch *** Switch Statement ****
type InputSwitch struct {
	Id    string        `json:"id"`
	Value util.RawValue `json:"value"`
	IsNaN bool          `json:"-"`

	Type   string  `json:"type"`
	Switch SwitchT `json:"switch" input:"true"`
}

func (i *InputSwitch) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	src, out, ch, nan = i._Eval(c)
	i.Value = out
	i.IsNaN = nan

	return src, out, ch, nan
}

func (i *InputSwitch) _Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {

	if i.Switch.Cases == nil {
		//if there are no cases, output default value
		return OutputOrNil(nil, i.Switch.OutputDefault, -1, false)
	}

	for _, outCase := range *i.Switch.Cases {
		if outCase == nil {
			continue
		}

		switch outCase.IO.(type) {
		case *InputCase:
			_, out, ch, nan = outCase.Eval(c)
			if nan {
				continue
			}
		default:
			//allow non-cases to be used as switch inputs (0 is considered falsy)
			_, out, ch, nan = outCase.Eval(c)
			if out == 0 {
				continue
			}
		}

		//one case evaluated to true
		if i.Switch.OutputSticky {
			i.Switch.stickyValue = out
			i.Switch.stickySet = true
			i.Switch.stickyChannel = ch
		}

		return nil, out, ch, false
	}

	//none of the cases evaluated to true
	if i.Switch.OutputSticky && i.Switch.stickySet {
		return nil, i.Switch.stickyValue, i.Switch.stickyChannel, false
	}

	return OutputOrNil(nil, i.Switch.OutputDefault, -1, false)
}

func (i *InputSwitch) InputType() string {
	return i.Type
}

func (i *InputSwitch) InputValue() *util.RawValue {
	if i.IsNaN {
		return nil
	}
	return &i.Value
}

func (i *InputSwitch) InputId() string {
	return i.Id
}

func (i *InputSwitch) Children() (out *[]*IOHolder) {
	return i.Switch.Cases
}
