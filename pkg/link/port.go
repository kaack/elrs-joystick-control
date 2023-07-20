// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package link

import (
	"errors"
	"fmt"
	"github.com/kaack/elrs-joystick-control/pkg/serial"
	"gopkg.in/tomb.v2"
	"time"
)

func (c *Controller) StartPortLoop(port *serial.Port, portChan chan any) error {

	if c.portLoopTomb != nil && c.portLoopTomb.Alive() {
		return errors.New("port loop is already active")
	}

	c.portLoopTomb = &tomb.Tomb{}
	c.portLoopTomb.Go(func() error {
		return c.PortLoop(port, portChan)
	})

	return nil
}

func (c *Controller) StopPortLoop() error {
	if c.portLoopTomb == nil || !c.portLoopTomb.Alive() {
		return nil
	}

	c.portLoopTomb.Kill(nil)
	if err := c.portLoopTomb.Wait(); err != nil {
		return err
	}
	return nil
}

func (c *Controller) PortLoop(port *serial.Port, portChan chan any) error {

	fmt.Printf("(port-loop) starting, port %v\n", port)

	var err error

	fmt.Printf("(port-loop)(initial) opening port %s\n", port.Name)
	if err = port.Open(); err == nil {
		fmt.Printf("(port-loop)(initial) port %s opened\n", port.Name)
		portChan <- nil
		return nil
	}

	fmt.Printf("(port-loop)(initial) error opening port %s\n", port.Name)

	//try re-opening with exponential backoff
	attempts := 0
	maxAttempts := 8
	initialDelay := time.Millisecond * 32
	currentDelay := initialDelay
	ticker := time.NewTicker(currentDelay)

Loop:
	for {
		select {
		case <-c.portLoopTomb.Dying():
			break Loop
		case <-ticker.C:
			attempts += 1
			if attempts == 1 {
				fmt.Printf("(port-loop)(backoff) closing, and re-opening port %s\n", port.Name)
				if err = port.Close(); err != nil {
					fmt.Printf("(supervisor)(backoff) error closing port on %s. %s\n", port.Name, err.Error())
				}
			}

			if attempts > maxAttempts {
				attempts = 0
				currentDelay = initialDelay
			}

			fmt.Printf("(port-loop)(backoff) re-opening port %s (attempt: %d)\n", port.Name, attempts)
			if err = port.Open(); err != nil {
				fmt.Printf("(port-loop)(backoff) error re-opening port (sleeping %s)\n", currentDelay)
				ticker = time.NewTicker(currentDelay)
				currentDelay *= 2

				continue
			}

			fmt.Printf("(port-loop)(backoff) port %s re-opened\n", port.Name)
			portChan <- nil
			break Loop
		}
	}

	fmt.Println("(port-loop): exiting port loop ...")
	return nil
}
