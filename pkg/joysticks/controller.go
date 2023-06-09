// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package joysticks

import (
	"github.com/dlsniper/debugger"
	"github.com/veandco/go-sdl2/sdl"
	"gopkg.in/tomb.v2"
	"log"
)

type Controller struct {
	RawInputDevices map[string]*RawInputDevice
	t               *tomb.Tomb
}

func NewCtl() *Controller {
	devicesCtl := &Controller{}
	err := devicesCtl.Init()

	if err != nil {
		devicesCtl.Quit()
		log.Fatal(err)
	}

	return devicesCtl
}

func (c *Controller) RawInputDevice(id string) (*RawInputDevice, bool) {
	res, ok := c.RawInputDevices[id]
	return res, ok
}

func (c *Controller) Init() (err error) {
	if err = sdl.Init(sdl.INIT_EVERYTHING); err != nil {
		return err
	}
	c.RawInputDevices = EnumerateDevices()
	return err
}

func (c *Controller) StopPolling() error {
	sdl.JoystickEventState(sdl.DISABLE)
	if c.t == nil {
		return nil
	}

	c.t.Kill(nil)
	if err := c.t.Wait(); err != nil {
		return err
	}
	return nil
}

func (c *Controller) Quit() {
	for _, device := range c.RawInputDevices {
		device.Close()
	}
	sdl.Quit()
}

func (c *Controller) StartPolling(devices []*RawInputDevice) (events chan sdl.Event) {
	sdl.JoystickEventState(sdl.ENABLE)

	byId := make(map[int32]*RawInputDevice)
	for _, device := range devices {
		byId[device.InstanceId()] = device
	}

	events = make(chan sdl.Event)
	poll := func() sdl.Event {
		event := sdl.PollEvent()
		if event == nil {
			return nil
		}

		var deviceId int32 = -1
		switch e := event.(type) {
		case *sdl.JoyAxisEvent:
			deviceId = int32(e.Which)
		case *sdl.JoyButtonEvent:
			deviceId = int32(e.Which)
		}

		if _, ok := byId[deviceId]; !ok {
			return nil
		}

		return event
	}

	c.t = &tomb.Tomb{}
	c.t.Go(func() error {
		debugger.SetLabels(func() []string {
			return []string{
				"poller",
			}
		})

		var event sdl.Event
		for {
			select {
			case <-c.t.Dying():
				log.Println("(devices): exiting polling loop")
				return nil
			default:
				if event = poll(); event == nil {
					continue
				}
				events <- event
			}
		}
	})

	return events
}

//func (c *Controller) GetDevicesList() (sticks []config.RawInputDevice) {
//	for id, device := range c.Devices {
//		sticks = append(sticks, config.RawInputDevice{
//			Id:      id,
//			Name:    device.Name(),
//			Axes:    int32(device.NumAxes()),
//			Buttons: int32(device.NumButtons()),
//			Hats:    int32(device.NumHats()),
//		})
//	}
//	return sticks
//}
