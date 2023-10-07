// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package main

import (
	"bytes"
	"context"
	"flag"
	"fmt"
	"github.com/golang/protobuf/jsonpb"
	cc "github.com/kaack/elrs-joystick-control/pkg/config"
	dc "github.com/kaack/elrs-joystick-control/pkg/devices"
	hc "github.com/kaack/elrs-joystick-control/pkg/http"
	lc "github.com/kaack/elrs-joystick-control/pkg/link"
	"github.com/kaack/elrs-joystick-control/pkg/proto/generated/pb"
	sc "github.com/kaack/elrs-joystick-control/pkg/serial"
	gc "github.com/kaack/elrs-joystick-control/pkg/server"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
	"google.golang.org/protobuf/types/known/structpb"
	_ "net/http/pprof"
	"os"
	"os/signal"
	"time"
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
	flag.StringVar(configFilePath, "config-file-path", "", "tx Serial port baud rate")

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

	if (len(*txServerPortName) != 0 || len(*configFilePath) != 0) && *txServerPortBaudRate != 0 {
		ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
		defer cancel()

		var err error
		var conn *grpc.ClientConn
		if conn, err = grpc.DialContext(ctx, "localhost:10000"); err != nil {
			panic(err)
		}

		client := pb.NewJoystickControlClient(conn)
		var res *pb.Empty

		if len(*txServerPortName) != 0 && *txServerPortBaudRate != 0 {
			if res, err = client.StartLink(ctx, &pb.StartLinkReq{
				Port:     *txServerPortName,
				BaudRate: int32(*txServerPortBaudRate),
			}); err != nil {
				panic(err)
			}

			fmt.Printf("%v", res)
		}

		if len(*configFilePath) != 0 {

			var configJson []byte
			configJson, err = os.ReadFile(*configFilePath)
			if err != nil {
				panic(err)
			}
			fmt.Println(string(configJson))

			var configPb structpb.Struct
			m := jsonpb.Unmarshaler{}
			if err = m.Unmarshal(bytes.NewReader(configJson), &configPb); err != nil {
				panic(err)
			}

			if res, err = client.SetConfig(ctx, &pb.SetConfigReq{
				Config: &configPb,
			}); err != nil {
				panic(err)
			}

			fmt.Printf("%v", res)
		}
	}

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
