// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package joysticks

import (
	"crypto/md5"
	"encoding/hex"
	"github.com/veandco/go-sdl2/sdl"
)

func GetJoyStickId(joystick *sdl.Joystick) string {
	guid := sdl.JoystickGetGUIDString(joystick.GUID())
	hash := md5.Sum([]byte(guid))
	return hex.EncodeToString(hash[:])[1:7]
}

func EnumerateDevices() map[string]*RawInputDevice {
	devices := make(map[string]*RawInputDevice)

	for i := 0; i < 16; i++ {
		stick := sdl.JoystickOpen(i)
		if stick == nil {
			continue
		}
		dev := NewDevice(stick)
		devices[dev.Id] = &dev
	}

	return devices
}
