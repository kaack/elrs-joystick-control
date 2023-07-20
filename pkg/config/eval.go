// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import (
	"errors"
	"fmt"
	"github.com/kaack/elrs-joystick-control/pkg/util"
	"golang.org/x/exp/maps"
	"gopkg.in/tomb.v2"
)

func (c *Controller) alertEvalChan() {
	c.EvalEventCount += 1 // it's okay if it overflows
	select {
	case c.EvalEventChan <- c.EvalEventCount:
	//no-op
	default:
		//no-op
	}
}

func (c *Controller) AlertStreamChan() {
	c.StreamEventCount += 1 // it's okay if it overflows
	select {
	case c.StreamEventChan <- c.EvalEventCount:
	//no-op
	default:
		//no-op
	}
}

func (c *Controller) initEvalChan() {
	c.EvalEventCount = int32(0)
	c.EvalEventChan = make(chan int32)
}

func (c *Controller) initStreamChan() {
	c.StreamEventCount = int32(0)
	c.StreamEventChan = make(chan int32)
}

func EvalAll(config *Config) {
	if config == nil {
		return
	}

	var io *IOHolder
	//evaluate all config items
	for _, io = range config.IOMap {
		if io == nil {
			continue
		}
		io.Eval(config)
	}
}

func (c *Controller) EvalLoop() error {

	c.initEvalChan()
	c.initStreamChan()

	var config *Config
	//goland:noinspection GoPreferNilSlice
	holders := []*IOHolder{}

	EvalAll(c.Config)

Loop:
	for {
		select {
		case <-c.evalTomb.Dying():
			fmt.Println("(config): exiting eval loop")
			break Loop

		case config = <-c.ConfigEventChan:
			if config == nil {
				holders = []*IOHolder{}
				c.EvalDataMap = &map[string]*[16]util.CRSFValue{} //delete all existing entries
				continue
			}

			holders = maps.Values(config.GetTransmitters())
			c.EvalDataMap = &map[string]*[16]util.CRSFValue{} //delete all existing entries

			for _, holder := range holders {
				if tx, ok := holder.IO.(*OutputTransmitter); ok {
					(*c.EvalDataMap)[tx.Transmitter.Port] = tx.Values
				}
			}
			EvalAll(config)
			c.alertEvalChan()
		case _ = <-c.StreamEventChan:
			if config == nil {
				continue
			}
			//evaluate all top-level configs, not just the transmitters
			for _, holder := range config.IOMap {
				holder.Eval(config)
				c.alertEvalChan()
			}
		case _ = <-c.deviceCtl.DeviceEventChan:
			for _, holder := range holders {
				if tx, ok := holder.IO.(*OutputTransmitter); ok {
					tx.Eval(holder.Config)
					c.alertEvalChan()
				}
				//fmt.Printf("eval: %v\n", (*c.ChannelsDataMap)[sport.TX.Port])
			}
		}
	}
	return nil

}

func (c *Controller) StartEvalLoop() error {

	if c.evalTomb != nil && c.evalTomb.Alive() {
		return errors.New("(config) eval loop already active")
	}

	c.evalTomb = &tomb.Tomb{}
	c.evalTomb.Go(func() error {
		return c.EvalLoop()
	})

	return nil
}

func (c *Controller) StopEvalLoop() error {
	if c.evalTomb == nil || !c.evalTomb.Alive() {
		return nil
	}

	c.evalTomb.Kill(nil)
	if err := c.evalTomb.Wait(); err != nil {
		return err
	}
	return nil
}
