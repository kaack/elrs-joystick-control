// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package joysticks

import (
	"encoding/json"
	"github.com/veandco/go-sdl2/sdl"
)

type RawInputDevice struct {
	Id   string `json:"id"`
	Name string `json:"name"`

	joy *sdl.Joystick
}

func (d *RawInputDevice) Axis(axis int) int32 {
	return int32(d.joy.Axis(axis))
}

func (d *RawInputDevice) Button(axis int) int32 {
	return int32(d.joy.Button(axis))
}

func (d *RawInputDevice) Hat(axis int) int32 {
	return int32(d.joy.Hat(axis))
}

func (d *RawInputDevice) Close() {
	d.joy.Close()
}

func (d *RawInputDevice) InstanceId() int32 {
	return int32(d.joy.InstanceID())
}
func (d *RawInputDevice) Axes() int32 {
	return int32(d.joy.NumAxes())
}

func (d *RawInputDevice) Buttons() int32 {
	return int32(d.joy.NumButtons())
}

func (d *RawInputDevice) Hats() int32 {
	return int32(d.joy.NumHats())
}

func NewDevice(joy *sdl.Joystick) RawInputDevice {
	return RawInputDevice{
		Id:   GetJoyStickId(joy),
		Name: joy.Name(),
		joy:  joy,
	}
}

type FakeRawInputDevice RawInputDevice

func (d *RawInputDevice) MarshalJSON() ([]byte, error) {
	return json.Marshal(struct {
		FakeRawInputDevice
		Axes    int32 `json:"axes"`
		Buttons int32 `json:"buttons"`
		Hats    int32 `json:"hats"`
	}{
		FakeRawInputDevice: FakeRawInputDevice(*d),
		Axes:               d.Axes(),
		Buttons:            d.Buttons(),
		Hats:               d.Hats(),
	})
}
