// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package main

import (
	"flag"
	"fmt"
	"github.com/kaack/elrs-joystick-control/pkg/client"
	cc "github.com/kaack/elrs-joystick-control/pkg/config"
	dc "github.com/kaack/elrs-joystick-control/pkg/devices"
	hc "github.com/kaack/elrs-joystick-control/pkg/http"
	lc "github.com/kaack/elrs-joystick-control/pkg/link"
	sc "github.com/kaack/elrs-joystick-control/pkg/serial"
	gc "github.com/kaack/elrs-joystick-control/pkg/server"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
	_ "net/http/pprof"
	"os"
	"os/signal"
)

func main() {

	webAppPort := new(int)
	flag.IntVar(webAppPort, "webapp-port", 3000, "Web Application port number")

	grpcPort := new(int)
	flag.IntVar(grpcPort, "grpc-port", 10000, "gRPC Server port number")

	txServerPortName := new(string)
	flag.StringVar(txServerPortName, "tx-serial-port-name", "", "tx Serial port name")

	txServerPortBaudRate := new(int)
	flag.IntVar(txServerPortBaudRate, "tx-serial-port-baud-rate", 921600, "tx Serial port baud rate")

	configFilePath := new(string)
	flag.StringVar(configFilePath, "config-file-path", "", "config json file path")

	disableWebUI := new(bool)
	flag.BoolVar(disableWebUI, "disable-web-ui", false, "disable the Web-UI HTTP server")

	flag.Parse()

	grpcServer := grpc.NewServer([]grpc.ServerOption{}...)
	reflection.Register(grpcServer)

	httpCtl := hc.NewCtl(*webAppPort, grpcServer)
	defer httpCtl.Quit()

	devicesCtl := dc.NewCtl()
	defer devicesCtl.Quit()

	configCtl := cc.NewCtl(devicesCtl)

	defer configCtl.Quit()

	serialCtl := sc.NewCtl()
	defer serialCtl.Quit()

	linkCtl := lc.NewCtl(devicesCtl, serialCtl, configCtl)
	defer linkCtl.Quit()

	serverCtl := gc.NewCtl(*grpcPort, grpcServer, devicesCtl, serialCtl, configCtl, linkCtl, httpCtl)
	defer serverCtl.Quit()

	// Automatically configure through gprc when conditions are met
	client.Init(*txServerPortName, *configFilePath, *txServerPortBaudRate, *grpcPort, *disableWebUI)

	go func() {
		sigChan := make(chan os.Signal)
		signal.Notify(sigChan, os.Interrupt)
		<-sigChan
		fmt.Println("Ctrl-C detected, exiting")
		if err := httpCtl.Stop(); err != nil {
			fmt.Printf("could not stop HTTP controller. %s\n", err.Error())
		}
		if err := serverCtl.Stop(); err != nil {
			fmt.Printf("could not stop HTTP controller. %s\n", err.Error())
		}
	}()

	serverCtl.Wait()
}
