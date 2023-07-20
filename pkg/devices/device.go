// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package devices

import (
	"encoding/json"
	"github.com/kaack/elrs-joystick-control/pkg/util"
	"github.com/veandco/go-sdl2/sdl"
)

type InputGamepad struct {
	Id   string `json:"id"`
	Name string `json:"name"`

	Joy *sdl.Joystick `json:"-"`
}

func (d *InputGamepad) Axis(axis int) util.RawValue {
	return util.RawValue(d.Joy.Axis(axis))
}

func (d *InputGamepad) Button(button int) util.RawValue {
	return util.RawValue(d.Joy.Button(button))
}

func (d *InputGamepad) Hat(hat int) util.RawValue {
	return util.MapRange(util.RawValue(d.Joy.Hat(hat)), -1, 1, util.MinRaw, util.MaxRaw)
}

func (d *InputGamepad) Close() {
	d.Joy.Close()
}

func (d *InputGamepad) InstanceId() int32 {
	return int32(d.Joy.InstanceID())
}
func (d *InputGamepad) Axes() int32 {
	return int32(d.Joy.NumAxes())
}

func (d *InputGamepad) Buttons() int32 {
	return int32(d.Joy.NumButtons())
}

func (d *InputGamepad) Hats() int32 {
	return int32(d.Joy.NumHats())
}

func NewDevice(joy *sdl.Joystick) InputGamepad {
	return InputGamepad{
		Id:   GetJoyStickId(joy),
		Name: joy.Name(),
		Joy:  joy,
	}
}

type FakeInputGamepad InputGamepad

func (d *InputGamepad) MarshalJSON() ([]byte, error) {
	return json.Marshal(struct {
		FakeInputGamepad
		Axes    int32 `json:"axes"`
		Buttons int32 `json:"buttons"`
		Hats    int32 `json:"hats"`
	}{
		FakeInputGamepad: FakeInputGamepad(*d),
		Axes:             d.Axes(),
		Buttons:          d.Buttons(),
		Hats:             d.Hats(),
	})
}
