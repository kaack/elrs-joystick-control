// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import (
	_ "embed"
	"github.com/kaack/elrs-joystick-control/pkg/joysticks"
)

type RawInputDevice joysticks.RawInputDevice
type Config struct {
	RawInputDevices    map[string]*RawInputDevice `json:"raw_input_devices_map"`
	ExternalRfPortName string                     `json:"external_rf_port_name"`
	InputsMap          map[string]*InputHolder    `json:"inputs_mixer_map"`
	ChannelsInputsMap  map[int32]string           `json:"channels_inputs_map"`
}

func (c *Config) RawInputDevice(name string) (*RawInputDevice, bool) {
	res, ok := c.RawInputDevices[name]
	return res, ok
}

func (c *Config) Input(name string) (*InputT, bool) {
	var ih *InputHolder
	var ok bool
	if ih, ok = c.InputsMap[name]; !ok {
		return nil, false
	}
	return &ih.I, true
}
