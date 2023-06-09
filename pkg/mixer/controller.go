// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package mixer

import (
	"errors"
	cc "github.com/kaack/elrs-joystick-control/pkg/config"
	dc "github.com/kaack/elrs-joystick-control/pkg/joysticks"
	sc "github.com/kaack/elrs-joystick-control/pkg/serial"
	"gopkg.in/tomb.v2"
	"log"
)

type Controller struct {
	devicesCtl *dc.Controller
	serialCtl  *sc.Controller
	configCtl  *cc.Controller
	channels   [16]uint16
	t          *tomb.Tomb
}

func NewCtl(dc *dc.Controller, sc *sc.Controller, cc *cc.Controller) *Controller {
	mixerCtl := &Controller{devicesCtl: dc, serialCtl: sc, configCtl: cc}
	err := mixerCtl.Init()

	if err != nil {
		mixerCtl.Quit()
		log.Fatal(err)
	}
	return mixerCtl
}

func (c *Controller) Start() error {
	var err error
	//FIXME: validate config against active devices, and serial ports
	log.Println("(mixer) serial:" + c.configCtl.Config.ExternalRfPortName)

	//FIXME: this list should be populated from config
	var devices []*dc.RawInputDevice
	for _, device := range c.devicesCtl.RawInputDevices {
		devices = append(devices, device)
	}

	//look for the port the external port
	portName := c.configCtl.Config.ExternalRfPortName
	var port *sc.Port
	if port, err = sc.FindPort(portName); err != nil {
		return err
	}

	if port == nil {
		return errors.New("could not find serial port \"" + portName + "\"")
	}

	if err = port.Open(&sc.PortMode{
		Baudrate: 921600, //BetaFPV 1W Micro
	}); err != nil {
		return err
	}

	c.t = &tomb.Tomb{}
	c.t.Go(func() error {
		return c.Mix(devices, port)
	})

	return err
}

func (c *Controller) Stop() error {
	if c.t == nil {
		return nil
	}

	c.t.Kill(nil)
	if err := c.t.Wait(); err != nil {
		return err
	}
	return nil
}

func (c *Controller) Init() (err error) {

	return err
}

func (c *Controller) Quit() {

}
