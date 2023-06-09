// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import (
	dc "github.com/kaack/elrs-joystick-control/pkg/joysticks"
	"log"
)

type Controller struct {
	Config    *Config `json:"config"`
	deviceCtl *dc.Controller
}

func NewCtl(dc *dc.Controller) *Controller {
	configCtl := &Controller{deviceCtl: dc}
	err := configCtl.Init()

	if err != nil {
		configCtl.Quit()
		log.Fatal(err)
	}

	return configCtl
}

func (c *Controller) Init() error {
	return nil

}

func (c *Controller) Quit() {

}

func (c *Controller) EvalInput(name string) (out int32, nan bool) {
	var input *InputT
	var ok bool

	if input, ok = c.Config.Input(name); !ok {
		return 0, true
	}

	if input == nil {
		return 0, true
	}

	return (*input).Eval(c)

}
