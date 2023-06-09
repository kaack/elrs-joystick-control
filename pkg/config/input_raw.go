// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

// InputRaw *** Raw ***
type InputRaw struct {
	Type string `json:"type"`
	Raw  struct {
		InputDevice string `json:"input_device"`
		InputNumber int32  `json:"input_number"`
		InputType   string `json:"input_type"`
	} `json:"raw" input:"true"`
}

func (i *InputRaw) Eval(cc *Controller) (out int32, nan bool) {
	rawDeviceConfigKey := i.Raw.InputDevice
	if rawDeviceConfigKey == "" {
		return 0, true
	}

	var rawDeviceConfig *RawInputDevice
	var ok bool
	if rawDeviceConfig, ok = cc.Config.RawInputDevice(rawDeviceConfigKey); !ok {
		return 0, true
	}

	rawDevice := cc.deviceCtl.RawInputDevices[rawDeviceConfig.Id]

	if i.Raw.InputType[0] == 'a' {
		return rawDevice.Axis(int(i.Raw.InputNumber)), false
	}

	if i.Raw.InputType[0] == 'b' { //axis
		return rawDevice.Button(int(i.Raw.InputNumber)), false
	}

	if i.Raw.InputType[0] == 'h' { //axis
		return rawDevice.Hat(int(i.Raw.InputNumber)), false
	}

	return 0, true
}

func (i *InputRaw) InputType() string {
	return i.Type
}
