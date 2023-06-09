// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package server

import (
	"bytes"
	"context"
	"encoding/json"
	"github.com/golang/protobuf/jsonpb"
	cc "github.com/kaack/elrs-joystick-control/pkg/config"
	jc "github.com/kaack/elrs-joystick-control/pkg/joysticks"
	mc "github.com/kaack/elrs-joystick-control/pkg/mixer"
	sc "github.com/kaack/elrs-joystick-control/pkg/serial"
	"github.com/kaack/elrs-joystick-control/pkg/server/pb"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/encoding/protojson"
	"google.golang.org/protobuf/types/known/structpb"
)

type GRPCServer struct {
	pb.UnimplementedJoystickControlServer
	DevicesCtl *jc.Controller
	SerialCtl  *sc.Controller
	ConfigCtl  *cc.Controller
	MixerCtl   *mc.Controller
}

func (s *GRPCServer) GetRawInputDevices(context.Context, *pb.Empty) (*pb.GetRawInputDevicesRes, error) {

	var res pb.GetRawInputDevicesRes
	for _, device := range s.DevicesCtl.RawInputDevices {
		var (
			protoDevice pb.RawInputDevice
			deviceJson  []byte
			err         error
		)
		if deviceJson, err = json.Marshal(device); err != nil {
			return nil, status.Error(codes.Internal, err.Error())
		}

		if err := protojson.Unmarshal(deviceJson, &protoDevice); err != nil {
			return nil, status.Error(codes.InvalidArgument, err.Error())
		}
		res.RawInputDevices = append(res.RawInputDevices, &protoDevice)
	}

	return &res, nil
}

func (s *GRPCServer) GetSerialPorts(context.Context, *pb.Empty) (*pb.GetSerialPortsRes, error) {
	ports, err := s.SerialCtl.GetSerialPorts()
	if err != nil {
		return nil, err
	}

	var res pb.GetSerialPortsRes
	for _, port := range ports {

		res.Ports = append(res.Ports, &pb.SerialPort{
			Port:    port.Name,
			Product: port.Product,
		})
	}

	return &res, nil
}

func (s *GRPCServer) GetConfig(context.Context, *pb.Empty) (*pb.GetConfigRes, error) {
	var configJson []byte
	var err error

	if configJson, err = json.Marshal(s.ConfigCtl.Config); err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	var configPb structpb.Struct
	m := jsonpb.Unmarshaler{}
	if err = m.Unmarshal(bytes.NewReader(configJson), &configPb); err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	res := &pb.GetConfigRes{
		Config: &configPb,
	}

	return res, nil
}

func (s *GRPCServer) SetConfig(_ context.Context, req *pb.SetConfigReq) (*pb.Empty, error) {
	m := jsonpb.Marshaler{}
	js, err := m.MarshalToString(req)

	sch := cc.GetSchema()

	v := make(map[string]any)
	if err := json.Unmarshal([]byte(js), &v); err != nil {
		return nil, status.Error(codes.InvalidArgument, err.Error())
	}

	if err := sch.Validate(v); err != nil {
		return nil, cc.ValidationError(codes.InvalidArgument,
			"could not validate config against schema",
			err)
	}

	err = json.Unmarshal([]byte(js), s.ConfigCtl)

	if err != nil {
		return nil, status.Error(codes.InvalidArgument, err.Error())
	}

	//log.Println(js)

	return &pb.Empty{}, nil
}

func (s *GRPCServer) StartMixer(context.Context, *pb.Empty) (*pb.Empty, error) {
	if err := s.MixerCtl.Start(); err != nil {
		return nil, status.Error(codes.InvalidArgument, err.Error())
	}
	return &pb.Empty{}, nil
}

func (s *GRPCServer) StopMixer(context.Context, *pb.Empty) (*pb.Empty, error) {
	if err := s.MixerCtl.Stop(); err != nil {
		return nil, status.Error(codes.InvalidArgument, err.Error())
	}
	return &pb.Empty{}, nil
}
