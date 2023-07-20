// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import (
	"github.com/kaack/elrs-joystick-control/pkg/util"
)

type TransmitterT struct {
	Name     string       `json:"name"`
	Port     string       `json:"port"`
	Channels *[]*IOHolder `json:"channels"`
}

// OutputTransmitter *** Output Transmitter Device ***
type OutputTransmitter struct {
	Id     string              `json:"id"`
	Values *[16]util.CRSFValue `json:"values"`

	Type        string       `json:"type"`
	Transmitter TransmitterT `json:"tx" input:"true"`
	Holder      *IOHolder    `json:"-"`
}

func (i *OutputTransmitter) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {

	if i.Values == nil {
		i.Values = &[16]util.CRSFValue{}
	}

	//if there are no channels, out is not a number
	if i.Transmitter.Channels == nil {
		return nil, -1, -1, true
	}

	for _, ic := range *i.Transmitter.Channels {
		if ic == nil {
			continue
		}
		_, out, ch, nan = ic.Eval(c)
		if nan || ch < 1 || ch > 16 {
			continue
		}

		(*i.Values)[ch-1] = util.CRSFValue(out)
	}

	return nil, -1, -1, true
}

func (i *OutputTransmitter) InputType() string {
	return i.Type
}

func (i *OutputTransmitter) InputValue() *util.RawValue {
	//this is really a no-op, since transmitter state cannot be represented by a single value
	return nil
}

func (i *OutputTransmitter) InputId() string {
	return i.Id
}

func (i *OutputTransmitter) Children() (out *[]*IOHolder) {
	return i.Transmitter.Channels
}
