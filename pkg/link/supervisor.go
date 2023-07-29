// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package link

import (
	"errors"
	"fmt"
	"github.com/kaack/elrs-joystick-control/pkg/crossfire"
	"github.com/kaack/elrs-joystick-control/pkg/serial"
	"gopkg.in/tomb.v2"
)

func (c *Controller) StartSupervisor(port string, baudRate int32) error {

	if c.supervisorTomb != nil && c.supervisorTomb.Alive() {
		return errors.New("link is already active")
	}

	c.supervisorTomb = &tomb.Tomb{}
	c.supervisorTomb.Go(func() error {
		return c.SupervisorLoop(port, baudRate)
	})

	return nil
}

func (c *Controller) StopSupervisor() error {

	if c.supervisorTomb == nil || !c.supervisorTomb.Alive() {
		return nil
	}

	c.supervisorTomb.Kill(nil)
	if err := c.supervisorTomb.Wait(); err != nil {
		return err
	}
	return nil
}

func action(action string, err error) {
	if err != nil {
		fmt.Printf("error while %s. %s", action, err.Error())
	}
}
func (c *Controller) SupervisorLoop(port string, baudRate int32) error {
	fmt.Printf("(supervisor) starting, port: %s, baud: %v ...\n", port, baudRate)
	c.supervisorState = SupervisorActive

	refreshRate := crossfire.GetRefreshRate(baudRate)
	sport := &serial.Port{Name: port, BaudRate: baudRate, ReadTimeout: refreshRate * 4}

	sendChan := make(chan any)
	recvChan := make(chan any)
	portChan := make(chan any)

	c.sendChan = sendChan
	c.recvChan = recvChan

Supervisor:
	for {
		c.portState = PortDisconnected
		action("starting port loop", c.StartPortLoop(sport, portChan))
		select {
		case <-portChan:
			fmt.Printf("(supervisor) received port event ...\n")
			c.portState = PortConnected
		case <-c.portLoopTomb.Dying():
			fmt.Printf("(supervisor) port loop exited ...\n")
			break Supervisor
		case <-c.supervisorTomb.Dying():
			fmt.Printf("(supervisor) exiting loop...\n")
			c.portLoopTomb.Kill(nil)
			break Supervisor
		}

		action("starting send loop", c.StartSendLoop(sport, sendChan, recvChan))
		action("starting recv loop", c.StartRecvLoop(sport, sendChan, recvChan))

	Loop:
		for {
			select {
			case <-c.sendLoopTomb.Dying():
				fmt.Printf("(supervisor) send loop exited...\n")
				break Loop
			case <-c.recvLoopTomb.Dying():
				fmt.Printf("(supervisor) recv loop exited...\n")
				break Loop
			case <-c.supervisorTomb.Dying():
				fmt.Printf("(supervisor) exiting loop...\n")
				break Supervisor
			}
		}

		action("stopping recv loop", c.StopRecvLoop())
		action("stopping send loop", c.StopSendLoop())
		action("closing serial port", sport.Close())

	}

	action("stopping recv loop", c.StopRecvLoop())
	action("stopping send loop", c.StopSendLoop())
	action("closing serial port", sport.Close())

	c.portState = PortUnknown
	c.supervisorState = SupervisorInactive
	return nil
}
