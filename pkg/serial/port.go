// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package serial

import (
	"fmt"
	"go.bug.st/serial"
	"time"
)

type Port struct {
	Name        string `json:"name"`
	Product     string `json:"product"`
	port        *serial.Port
	BaudRate    int32
	ReadTimeout time.Duration
}

func (p *Port) Open() error {
	port, err := serial.Open(p.Name, &serial.Mode{
		BaudRate: int(p.BaudRate),
		Parity:   serial.NoParity,
		DataBits: 8,
		StopBits: serial.OneStopBit,
	})

	if err != nil {
		return err
	}

	if err = port.SetReadTimeout(p.ReadTimeout); err != nil {
		return err
	}

	p.port = &port

	return nil
}

func (p *Port) SetReadTimeout(duration time.Duration) error {
	return (*p.port).SetReadTimeout(duration)
}

func (p *Port) Write(bytes []byte) (int32, error) {
	count, err := (*p.port).Write(bytes)
	return int32(count), err
}

func (p *Port) Read(bytes []byte) (int, error) {
	count, err := (*p.port).Read(bytes)
	return count, err
}

func (p *Port) Close() error {
	if p == nil || p.port == nil || *p.port == nil {
		return nil
	}
	return (*p.port).Close()
}

func (p *Port) OpenWait() {

	var err error

	fmt.Printf("(supervisor)(initial) opening port %s\n", p.Name)
	if err = p.Open(); err == nil {
		fmt.Printf("(supervisor)(initial) port %s opened\n", p.Name)
		return
	}

	fmt.Printf("(supervisor)(initial) error opening port %s\n", p.Name)

	//try re-opening with exponential backoff
	attempts := 0
	maxAttempts := 8
	initialDelay := time.Millisecond * 32
	delay := initialDelay
	for {
		if attempts == 0 {
			fmt.Printf("(supervisor)(backoff) closing, and re-opening port %s\n", p.Name)
			if err = p.Close(); err != nil {
				fmt.Printf("(supervisor)(backoff) error closing port on %s. %s\n", p.Name, err.Error())
			}
		}

		attempts += 1

		if attempts > maxAttempts {
			attempts = 0
			delay = initialDelay
		}

		fmt.Printf("(supervisor)(backoff) re-opening port %s (attempt: %d)\n", p.Name, attempts)
		if err = p.Open(); err != nil {
			delay *= 2
			fmt.Printf("(supervisor)(backoff) error re-opening port (sleeping %s)\n", delay)
			time.Sleep(delay)
			continue
		}

		fmt.Printf("(supervisor)(backoff) port %s re-opened", p.Name)

		return
	}
}
