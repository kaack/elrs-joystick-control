// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package serial

import (
	"go.bug.st/serial"
	se "go.bug.st/serial/enumerator"
	"strings"
)

type Port struct {
	Name        string `json:"name"`
	Product     string `json:"product"`
	portDetails *se.PortDetails
	port        *serial.Port
}

type PortMode struct {
	Baudrate int32
}

func NewPort(portDetails *se.PortDetails) *Port {
	return &Port{
		Name:        portDetails.Name,
		Product:     portDetails.Product,
		portDetails: portDetails,
	}
}

func FindPort(portName string) (port *Port, err error) {
	ports, err := se.GetDetailedPortsList()
	if err != nil {
		return nil, err
	}

	if len(ports) == 0 {
		return nil, nil
	}

	for i := 0; i < len(ports); i++ {
		portDetails := ports[i]
		if !strings.Contains(strings.ToLower(portDetails.Name), strings.ToLower(portName)) {
			continue
		}
		return NewPort(portDetails), nil
	}

	return nil, nil
}

func (p *Port) Open(mode *PortMode) error {
	port, err := serial.Open(p.Name, &serial.Mode{
		BaudRate: int(mode.Baudrate),
		Parity:   serial.NoParity,
		DataBits: 8,
		StopBits: serial.OneStopBit,
	})

	if err != nil {
		return err
	}

	p.port = &port

	return nil
}

func (p *Port) Write(bytes []byte) (int32, error) {
	count, err := (*p.port).Write(bytes)
	return int32(count), err
}

func (p *Port) Close() error {
	return (*p.port).Close()
}
