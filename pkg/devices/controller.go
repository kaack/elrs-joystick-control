// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package devices

import (
	"fmt"
	"github.com/dlsniper/debugger"
	"github.com/kaack/elrs-joystick-control/pkg/proto/generated/pb"
	"github.com/veandco/go-sdl2/sdl"
	"gopkg.in/tomb.v2"
)

type Controller struct {
	Gamepads         map[string]*InputGamepad
	t                *tomb.Tomb
	DeviceEventCount int32
	DeviceEventChan  chan int32
}

func NewCtl() *Controller {
	devicesCtl := &Controller{}
	err := devicesCtl.Init()

	if err != nil {
		devicesCtl.Quit()
		panic(err)
	}

	return devicesCtl
}

func (c *Controller) Gamepad(id string) (*InputGamepad, bool) {
	res, ok := c.Gamepads[id]
	return res, ok
}

func (c *Controller) Init() (err error) {
	if err = sdl.Init(sdl.INIT_GAMECONTROLLER); err != nil {
		return err
	}
	c.Gamepads = EnumerateDevices()
	c.StartPolling()
	return err
}

func (c *Controller) Quit() {
	if err := c.StopPolling(); err != nil {
		fmt.Printf("error stopping polling loop. %s", err.Error())
	}

	for _, device := range c.Gamepads {
		device.Close()
	}
	sdl.Quit()
}

func (c *Controller) GetGamepadStates(device *InputGamepad, states *pb.GamepadInputsStates) *pb.GamepadInputsStates {

	axisNumber := 0
	axesCount := int(device.Axes())
	buttonNumber := 0
	buttonsCount := int(device.Buttons())

	if states != nil {
		for axisNumber = 0; axisNumber < axesCount; axisNumber++ {
			states.InputsStates[axisNumber].Value = int32(device.Axis(axisNumber))
		}

		for buttonNumber = 0; buttonNumber < buttonsCount; buttonNumber++ {
			states.InputsStates[axesCount+buttonNumber].Value = int32(device.Button(buttonNumber))
		}

		return states
	}

	inputStates := make([]*pb.GamepadInputState, axesCount+buttonsCount)

	for axisNumber = 0; axisNumber < axesCount; axisNumber++ {
		inputStates[axisNumber] = &pb.GamepadInputState{
			Type:  pb.GamepadInputType_AXIS,
			Index: int32(axisNumber),
			Value: int32(device.Axis(axisNumber)),
		}
	}

	for buttonNumber = 0; buttonNumber < buttonsCount; buttonNumber++ {
		inputStates[axesCount+buttonNumber] = &pb.GamepadInputState{
			Type:  pb.GamepadInputType_BUTTON,
			Index: int32(buttonNumber),
			Value: int32(device.Button(buttonNumber)),
		}
	}

	states = &pb.GamepadInputsStates{InputsStates: inputStates}

	return states
}

func (c *Controller) initDeviceChan() {
	c.DeviceEventCount = 0
	c.DeviceEventChan = make(chan int32)
}

func (c *Controller) AlertDeviceChan() {
	c.DeviceEventCount += 1 //it's okay if it overflows
	select {
	case c.DeviceEventChan <- c.DeviceEventCount:
		//fmt.Printf("event %d sent", c.EventCount)
	default:
		//no-op
	}
}

func (c *Controller) StartPolling() {

	sdl.JoystickEventState(sdl.ENABLE)

	c.t = &tomb.Tomb{}
	c.initDeviceChan()
	c.t.Go(func() error {
		debugger.SetLabels(func() []string {
			return []string{
				"poller",
			}
		})

		//var event sdl.Event
		for {
			select {
			case <-c.t.Dying():
				fmt.Println("(devices): exiting polling loop")
				return nil
			default:
				if event := sdl.PollEvent(); event != nil {
					c.AlertDeviceChan()
				}
			}
		}
	})
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
