// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package main

import (
	"fmt"
	cc "github.com/kaack/elrs-joystick-control/pkg/config"
	dc "github.com/kaack/elrs-joystick-control/pkg/joysticks"
	mc "github.com/kaack/elrs-joystick-control/pkg/mixer"
	sc "github.com/kaack/elrs-joystick-control/pkg/serial"

	"github.com/kaack/elrs-joystick-control/pkg/server"
	"github.com/kaack/elrs-joystick-control/pkg/server/pb"
	"google.golang.org/grpc/reflection"

	"google.golang.org/grpc"
	"log"
	"net"
)

func main() {
	var err error

	devicesCtl := dc.NewCtl()
	defer devicesCtl.Quit()

	serialCtl := sc.NewCtl()
	defer serialCtl.Quit()

	configCtl := cc.NewCtl(devicesCtl)
	defer configCtl.Quit()

	mixerCtl := mc.NewCtl(devicesCtl, serialCtl, configCtl)
	defer mixerCtl.Quit()

	port := 10000
	lis, err := net.Listen("tcp", fmt.Sprintf("localhost:%d", port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	var opts []grpc.ServerOption
	grpcServer := grpc.NewServer(opts...)
	reflection.Register(grpcServer)
	pb.RegisterJoystickControlServer(grpcServer, &server.GRPCServer{
		DevicesCtl: devicesCtl,
		SerialCtl:  serialCtl,
		ConfigCtl:  configCtl,
		MixerCtl:   mixerCtl,
	})

	fmt.Printf("gRPC server listenting on port %d\n", port)
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("Could not start gRPC server port port  %d\n", port)
	}

}
