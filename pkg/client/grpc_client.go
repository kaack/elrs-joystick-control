// SPDX-FileCopyrightText: © 2023 ZhouYixun 291028775@qq.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package client

import (
	"bytes"
	"context"
	"fmt"
	"github.com/golang/protobuf/jsonpb"
	"github.com/kaack/elrs-joystick-control/pkg/proto/generated/pb"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/protobuf/types/known/structpb"
	"os"
	"time"
)

func Init(txServerPortName, configFilePath string, txServerPortBaudRate, grpcPort int, disableWebUI bool) {
	if (len(txServerPortName) != 0 && txServerPortBaudRate != 0 ) || len(configFilePath) != 0 || disableWebUI {
		ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
		defer cancel()

		var err error
		var conn *grpc.ClientConn
		if conn, err = grpc.DialContext(ctx, fmt.Sprintf("localhost:%d", grpcPort), grpc.WithTransportCredentials(insecure.NewCredentials())); err != nil {
			panic(err)
		}
		defer conn.Close()

		client := pb.NewJoystickControlClient(conn)
		var res *pb.Empty

		if len(txServerPortName) != 0 && txServerPortBaudRate != 0 {
			if res, err = client.StartLink(ctx, &pb.StartLinkReq{
				Port:     txServerPortName,
				BaudRate: int32(txServerPortBaudRate),
			}); err != nil {
				panic(err)
			}

			fmt.Printf("%v", res)
		}

		if len(configFilePath) != 0 {

			var configJson []byte
			configJson, err = os.ReadFile(configFilePath)
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

		if disableWebUI {
			if res, err = client.StopHTTP(ctx, &pb.Empty{}); err != nil {
				panic(err)
			}

			fmt.Printf("%v", res)
		}
	}
}
