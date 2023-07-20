// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import (
	_ "embed"
	"github.com/kaack/elrs-joystick-control/pkg/devices"
	"github.com/kaack/elrs-joystick-control/pkg/util"
)

type Config struct {
	IOMap map[string]*IOHolder `json:"input_output_map"`
	Ctl   *Controller          `json:"-"`
}

func (c *Config) GetInputGamepad(deviceId string) (*devices.InputGamepad, bool) {
	var ok bool

	var res *devices.InputGamepad
	res, ok = c.Ctl.deviceCtl.Gamepads[deviceId]

	return res, ok
}

func NewTransmitter(port string) *OutputTransmitter {
	return &OutputTransmitter{
		Values: &[16]util.CRSFValue{},
		Transmitter: TransmitterT{
			Port:     port,
			Channels: &[]*IOHolder{},
		},
	}
}
func (c *Config) GetTransmitters() map[string]*IOHolder {
	//group serial ports by their port name
	var grouped = map[string]*IOHolder{}

	var curTransmitter *OutputTransmitter
	var ok bool
	for _, inout := range c.IOMap {
		if curTransmitter, ok = inout.IO.(*OutputTransmitter); !ok {
			continue
		}

		if _, ok = grouped[curTransmitter.Transmitter.Port]; !ok {
			//first time we see this port, add a new entry to the map
			grouped[curTransmitter.Transmitter.Port] = &IOHolder{
				IO:     NewTransmitter(curTransmitter.Transmitter.Port),
				Ctl:    c.Ctl,
				Config: c,
			}
		}

		if existing, ok := grouped[curTransmitter.Transmitter.Port].IO.(*OutputTransmitter); ok {
			if curTransmitter.Transmitter.Channels != nil {
				*existing.Transmitter.Channels = append(
					*existing.Transmitter.Channels,
					*curTransmitter.Transmitter.Channels...)
			}
		}
	}

	return grouped
}

func (c *Config) IO(name string) (*IOType, bool) {
	var ih *IOHolder
	var ok bool
	if ih, ok = c.IOMap[name]; !ok {
		return nil, false
	}
	return &ih.IO, true
}
