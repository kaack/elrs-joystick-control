// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package serial

import (
	se "go.bug.st/serial/enumerator"
	"gopkg.in/tomb.v2"
)

type Controller struct {
	linkTomb      *tomb.Tomb
	telemetryTomb *tomb.Tomb
}

func NewCtl() *Controller {
	serialCtl := &Controller{}
	err := serialCtl.Init()

	if err != nil {
		serialCtl.Quit()
		panic(err)
	}

	return serialCtl
}

func (c *Controller) Init() error {
	return nil
}

func (c *Controller) Quit() {

}

func (c *Controller) GetSerialPorts() ([]Port, error) {
	ports, err := se.GetDetailedPortsList()
	if err != nil {
		return nil, err
	}

	if len(ports) == 0 {
		return nil, nil
	}

	var res []Port
	for _, port := range ports {
		res = append(res, Port{Name: port.Name, Product: port.Product})
	}

	return res, nil
}
