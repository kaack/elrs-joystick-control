// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package devices

import (
	"crypto/md5"
	"encoding/hex"
	"fmt"
	"github.com/veandco/go-sdl2/sdl"
)

func GetJoyStickId(joystick *sdl.Joystick) string {
	guid := sdl.JoystickGetGUIDString(joystick.GUID())
	name := joystick.Name()
	// on linux, the SDL GUID is not unique, use the name as well
	combined := fmt.Sprintf("guid: %s, name: %s", guid, name)
	hash := md5.Sum([]byte(combined))
	return hex.EncodeToString(hash[:])[1:7]
}

func EnumerateDevices() map[string]*InputGamepad {
	devices := make(map[string]*InputGamepad)

	for i := 0; i < 16; i++ {
		stick := sdl.JoystickOpen(i)
		if stick == nil {
			continue
		}
		dev := NewDevice(stick)

		if _, ok := devices[dev.Id]; ok {
			//device is already on the map, re-assign the ID to include index
			dev.Id = fmt.Sprintf("%s_%d", dev.Id, i)
		}
		devices[dev.Id] = &dev
	}

	return devices
}
