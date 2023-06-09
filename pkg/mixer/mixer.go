// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package mixer

import (
	"errors"
	"github.com/dlsniper/debugger"
	dc "github.com/kaack/elrs-joystick-control/pkg/joysticks"
	sc "github.com/kaack/elrs-joystick-control/pkg/serial"
	"github.com/sigurn/crc8"
	"log"
	"time"
)

func (c *Controller) Tick(channels []*chPair) {
	out, nan := int32(0), false
	for _, pair := range channels {
		if out, nan = c.configCtl.EvalInput(pair.input); !nan {
			c.channels[pair.number] = uint16(out)
		}
	}

}

type chPair struct {
	number int32
	input  string
}

func (c *Controller) Mix(devices []*dc.RawInputDevice, port *sc.Port) error {
	debugger.SetLabels(func() []string {
		return []string{
			"mixer", port.Name,
		}
	})
	events := c.devicesCtl.StartPolling(devices)

	log.Printf("(serial) port %s - %s opened\n", port.Name, port.Product)

	defer func() {
		if err := port.Close(); err != nil {
			log.Println("error occurred when closing port " + port.Name + ": " + err.Error())
		}
	}()

	ticker := time.NewTicker(20 * time.Millisecond)

	var channels []*chPair
	for n, i := range c.configCtl.Config.ChannelsInputsMap {
		channels = append(channels, &chPair{number: n, input: i})
	}

	for {
		select {
		case <-c.t.Dying():
			log.Println("(devices): exiting mixer loop")
			if err := c.devicesCtl.StopPolling(); err != nil {
				log.Println("error occurred halting device polling: " + err.Error())
			}
			return nil
		case <-events:
			c.Tick(channels)
			c.PrintChannels()

		case <-ticker.C:
			c.Tick(channels)
			c.PrintChannels()
			if _, err := port.Write(c.PackChannels()); err != nil {
				c.t.Kill(errors.New("could not write to serial port " + port.Name))
			}
		}
	}
}

func (c *Controller) PrintChannels() {
	log.Printf("(mixer) r: %04d, p: %04d, t: %04d, y: %04d, arm: %04d, pre: %04d, mode: %04d\n", c.channels[0], c.channels[1], c.channels[2], c.channels[3], c.channels[4], c.channels[5], c.channels[6])
}
func (c *Controller) PackChannels() (result []byte) {
	var CrossfireChBits uint8 = 11
	var buf [26]byte
	var offset uint8 = 0
	var bits uint32
	var bitsAvailable uint8 = 0

	buf[offset] = 0xEE
	offset += 1

	buf[offset] = 24 // 1(ID) + 22 + 1(CRC)
	offset += 1

	buf[offset] = 0x16
	offset += 1

	for i := 0; i < 16; i++ {
		var val = uint32(c.channels[i])
		shifted := val << bitsAvailable
		bits |= shifted
		bitsAvailable += CrossfireChBits
		for bitsAvailable >= 8 {
			buf[offset] = byte(bits)
			offset += 1
			bits >>= 8
			bitsAvailable -= 8
		}
	}

	table := crc8.MakeTable(crc8.CRC8_DVB_S2)
	buf[25] = crc8.Checksum(buf[2:25], table)
	return buf[:]
}
