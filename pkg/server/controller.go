// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package server

import (
	"errors"
	"fmt"
	cc "github.com/kaack/elrs-joystick-control/pkg/config"
	dc "github.com/kaack/elrs-joystick-control/pkg/devices"
	hc "github.com/kaack/elrs-joystick-control/pkg/http"
	lc "github.com/kaack/elrs-joystick-control/pkg/link"
	"github.com/kaack/elrs-joystick-control/pkg/proto/generated/pb"
	sc "github.com/kaack/elrs-joystick-control/pkg/serial"
	"google.golang.org/grpc"
	"gopkg.in/tomb.v2"
	"net"
)

type Controller struct {
	gRPCPort   int
	gRPCServer *grpc.Server
	devicesCtl *dc.Controller
	serialCtl  *sc.Controller
	configCtl  *cc.Controller
	linkCtl    *lc.Controller
	httpCtl    *hc.Controller

	gRPCTomb *tomb.Tomb
}

func NewCtl(gRPCPort int, gRPCServer *grpc.Server, devicesCtl *dc.Controller, serialCtl *sc.Controller, configCtl *cc.Controller, linkCtl *lc.Controller, httpCtl *hc.Controller) *Controller {
	serverCtl := &Controller{
		gRPCPort:   gRPCPort,
		gRPCServer: gRPCServer,
		devicesCtl: devicesCtl,
		serialCtl:  serialCtl,
		configCtl:  configCtl,
		linkCtl:    linkCtl,
		httpCtl:    httpCtl,
	}

	if err := serverCtl.Init(); err != nil {
		panic(err)
	}

	return serverCtl
}

func (c *Controller) Init() (err error) {

	if err = c.Start(); err != nil {
		return errors.Join(errors.New("could not start gRPC server"), err)
	}

	return nil
}

func (c *Controller) Start() (err error) {

	c.gRPCTomb = &tomb.Tomb{}
	c.gRPCTomb.Go(func() error {

		pb.RegisterJoystickControlServer(c.gRPCServer, &GRPCServer{
			DevicesCtl: c.devicesCtl,
			SerialCtl:  c.serialCtl,
			ConfigCtl:  c.configCtl,
			LinkCtl:    c.linkCtl,
			HTTPCtl:    c.httpCtl,
		})

		lis, err := net.Listen("tcp", fmt.Sprintf(":%d", c.gRPCPort))
		if err != nil {
			return errors.New(fmt.Sprintf("could not listen on http port %d. %v", c.gRPCPort, err))
		}

		fmt.Printf("⇨ gRPC server started on [::]:%d\n", c.gRPCPort)
		if err = c.gRPCServer.Serve(lis); err != nil {
			return errors.New(fmt.Sprintf("could not serve gRPC on port %d. %v", c.gRPCPort, err))
		}

		return nil
	})

	c.gRPCTomb.Go(func() error {
		<-c.gRPCTomb.Dying()
		c.gRPCServer.Stop()
		return nil
	})

	return nil
}

func (c *Controller) Stop() (err error) {

	if c.gRPCTomb == nil || !c.gRPCTomb.Alive() {
		return nil
	}

	c.gRPCTomb.Kill(nil)
	if err := c.gRPCTomb.Wait(); err != nil {
		return err
	}

	return nil
}

func (c *Controller) Quit() {
	if err := c.Stop(); err != nil {
		panic(fmt.Sprintf("(grpc) error while existing controller. %s\n", err.Error()))
	}
}

func (c *Controller) Wait() {
	if err := c.gRPCTomb.Wait(); err != nil {
		panic(err)
	}

}
