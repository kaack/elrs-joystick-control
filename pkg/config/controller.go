// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import (
	"encoding/json"
	"errors"
	"fmt"
	dc "github.com/kaack/elrs-joystick-control/pkg/devices"
	"github.com/kaack/elrs-joystick-control/pkg/proto/generated/pb"
	"github.com/kaack/elrs-joystick-control/pkg/util"
	"gopkg.in/tomb.v2"
)

type Controller struct {
	Config *Config `json:"config"`

	deviceCtl   *dc.Controller
	EvalDataMap *map[string]*[16]util.CRSFValue `json:"-"`
	EvalNoData  *[16]util.CRSFValue
	EvalCenter  *[16]util.CRSFValue

	//channelsTomb      *tomb.Tomb
	//ChannelEventCount int32
	//ChannelEventChan  chan int32

	evalTomb       *tomb.Tomb
	EvalEventCount int32
	EvalEventChan  chan int32

	StreamEventCount int32
	StreamEventChan  chan int32

	ConfigEventChan chan *Config
}

func NewCtl(dc *dc.Controller) *Controller {
	configCtl := &Controller{
		deviceCtl:  dc,
		EvalNoData: &[16]util.CRSFValue{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
		EvalCenter: &[16]util.CRSFValue{992, 992, 992, 992, 992, 992, 992, 992, 992, 992, 992, 992, 992, 992, 992, 992},
	}
	err := configCtl.Init()

	if err != nil {
		configCtl.Quit()
		panic(err)
	}

	return configCtl
}

func (c *Controller) Init() error {
	//if err := c.StartChannelsLoop(); err != nil {
	//	return err
	//}

	c.initConfigChan()

	if err := c.StartEvalLoop(); err != nil {
		return err
	}

	return nil
}

func (c *Controller) Quit() {
	//if err := c.StopChannelsLoop(); err != nil {
	//	fmt.Printf("error stopping channels loop. %s\n", err.Error())
	//}

	if err := c.StopEvalLoop(); err != nil {
		fmt.Printf("error halting eval loop. %s\n", err.Error())
	}
}

func (c *Controller) UnmarshalJSON(configJson []byte) error {
	var err error

	var rawData json.RawMessage
	if err = json.Unmarshal(configJson, &rawData); err != nil {
		return errors.New(err.Error())
	}

	var tmp struct {
		Config *Config `json:"config"`
	}

	if err = json.Unmarshal(rawData, &tmp); err != nil {
		return errors.New(err.Error())
	}

	c.Config = tmp.Config

	//propagate the config controller to all children
	c.Config.Ctl = c

	return nil
}

func (c *Controller) GetTransmitterChannels(device *pb.Transmitter, channels *pb.TransmitterChannels) *pb.TransmitterChannels {

	var ok bool
	var channelsData *[16]util.CRSFValue

	if c.EvalDataMap == nil {
		channelsData = c.EvalNoData
	} else if channelsData, ok = (*c.EvalDataMap)[device.Port]; !ok {
		channelsData = c.EvalNoData
	}

	if channels == nil {
		channels = &pb.TransmitterChannels{
			Channels: make([]*pb.TransmitterChannel, 16),
		}

		for i := 0; i < 16; i++ {
			channels.Channels[i] = &pb.TransmitterChannel{
				ChannelNumber: int32(i) + 1,
				ChannelValue:  int32(channelsData[i]),
			}
		}

		return channels
	}

	for i := 0; i < 16; i++ {
		channels.Channels[i].ChannelValue = int32(channelsData[i])
	}

	return channels
}

func setStates(c *Config, states *map[string]*pb.EvalState, ih *IOHolder) {
	if ih == nil || states == nil {
		return
	}

	id := ih.InputId()

	//evaluate node unconditionally
	//this makes easier to troubleshoot when viewing values in the editor
	ih.Eval(c)
	if (*states)[id] == nil {
		(*states)[id] = &pb.EvalState{}
	}

	value := ih.InputValue()
	if value == nil {
		(*states)[ih.InputId()].IsNaN = true
		(*states)[ih.InputId()].Value = 0
	} else {
		(*states)[ih.InputId()].IsNaN = false
		(*states)[ih.InputId()].Value = int32(*value)
	}

	children := ih.Children()
	if children != nil {
		for _, ih := range *children {
			setStates(c, states, ih)
		}
	}
}

func (c *Controller) GetEvalStates(states *pb.EvalStates) *pb.EvalStates {
	if states == nil {
		states = &pb.EvalStates{
			States: map[string]*pb.EvalState{},
		}
	}

	config := c.Config
	if config == nil {
		return states
	}

	for _, ih := range config.IOMap {
		setStates(c.Config, &states.States, ih)
	}

	return states
}

func (c *Controller) SetConfig(config *Config) {
	config.Ctl = c
	c.Config = config
	c.alertConfigChan()
}

func (c *Controller) alertConfigChan() {
	select {
	case c.ConfigEventChan <- c.Config:
	//no-op
	default:
		//no-op
	}
}

func (c *Controller) initConfigChan() {
	c.ConfigEventChan = make(chan *Config)
}
