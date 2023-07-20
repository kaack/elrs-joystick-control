// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package link

import (
	cc "github.com/kaack/elrs-joystick-control/pkg/config"
	dc "github.com/kaack/elrs-joystick-control/pkg/devices"
	"github.com/kaack/elrs-joystick-control/pkg/proto/generated/pb"
	sc "github.com/kaack/elrs-joystick-control/pkg/serial"
	"gopkg.in/tomb.v2"
)

type Controller struct {
	devicesCtl *dc.Controller
	serialCtl  *sc.Controller
	configCtl  *cc.Controller

	channels [16]uint16

	portState       PortState
	supervisorState SupervisorState

	sentPacketsCount  uint64
	recvPacketsCount  uint64
	errorPacketsCount uint64

	supervisorTomb *tomb.Tomb
	sendLoopTomb   *tomb.Tomb
	recvLoopTomb   *tomb.Tomb
	portLoopTomb   *tomb.Tomb

	TelemetryBroadcaster *TelemetryBroadcaster
}

func NewCtl(dc *dc.Controller, sc *sc.Controller, cc *cc.Controller) *Controller {
	linkCtl := &Controller{
		portState:            PortUnknown,
		supervisorState:      SupervisorInactive,
		devicesCtl:           dc,
		serialCtl:            sc,
		configCtl:            cc,
		TelemetryBroadcaster: NewTelemetryBroadcaster(),
	}
	err := linkCtl.Init()

	if err != nil {
		linkCtl.Quit()
		panic(err)
	}
	return linkCtl
}

func (c *Controller) Init() (err error) {

	return err
}

func (c *Controller) Quit() {

}

func (c *Controller) GetLinkState(state *pb.LinkState) *pb.LinkState {
	if state == nil {
		state = &pb.LinkState{}
	}

	state.SupervisorState = pb.SupervisorState(c.supervisorState)
	state.PortState = pb.PortState(c.portState)
	state.ReceivedPacketsCount = c.recvPacketsCount
	state.SentPacketsCount = c.sentPacketsCount
	state.ErrorPacketsCount = c.errorPacketsCount

	return state
}
