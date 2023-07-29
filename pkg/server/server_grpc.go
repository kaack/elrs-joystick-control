// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package server

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"github.com/golang/protobuf/jsonpb"
	cc "github.com/kaack/elrs-joystick-control/pkg/config"
	dc "github.com/kaack/elrs-joystick-control/pkg/devices"
	"github.com/kaack/elrs-joystick-control/pkg/http"
	lc "github.com/kaack/elrs-joystick-control/pkg/link"
	"github.com/kaack/elrs-joystick-control/pkg/proto/generated/pb"
	sc "github.com/kaack/elrs-joystick-control/pkg/serial"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/encoding/protojson"
	"google.golang.org/protobuf/types/known/structpb"
	"time"
)

type GRPCServer struct {
	pb.UnimplementedJoystickControlServer
	DevicesCtl *dc.Controller
	SerialCtl  *sc.Controller
	ConfigCtl  *cc.Controller
	LinkCtl    *lc.Controller
	HTTPCtl    *http.Controller
}

func (s *GRPCServer) GetGamepads(context.Context, *pb.Empty) (*pb.GetGamepadsRes, error) {

	var res pb.GetGamepadsRes
	for _, device := range s.DevicesCtl.Gamepads {
		var (
			protoDevice pb.Gamepad
			deviceJson  []byte
			err         error
		)
		if deviceJson, err = json.Marshal(device); err != nil {
			return nil, status.Error(codes.Internal, err.Error())
		}

		if err := protojson.Unmarshal(deviceJson, &protoDevice); err != nil {
			return nil, status.Error(codes.InvalidArgument, err.Error())
		}
		res.Gamepads = append(res.Gamepads, &protoDevice)
	}

	return &res, nil
}

func (s *GRPCServer) GetTransmitters(context.Context, *pb.Empty) (*pb.GetTransmitterRes, error) {
	ports, err := s.SerialCtl.GetSerialPorts()
	if err != nil {
		return nil, err
	}

	var res pb.GetTransmitterRes
	for _, port := range ports {

		res.Transmitters = append(res.Transmitters, &pb.Transmitter{
			Port: port.Name,
			Name: port.Product,
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

	tmp := struct {
		Config *cc.Config `json:"config"`
	}{}

	err = json.Unmarshal([]byte(js), &tmp)

	s.ConfigCtl.SetConfig(tmp.Config)

	if err != nil {
		return nil, status.Error(codes.InvalidArgument, err.Error())
	}

	return &pb.Empty{}, nil
}

func (s *GRPCServer) StartHTTP(context.Context, *pb.Empty) (*pb.Empty, error) {
	if err := s.HTTPCtl.Start(); err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}
	return &pb.Empty{}, nil
}

func (s *GRPCServer) StopHTTP(context.Context, *pb.Empty) (*pb.Empty, error) {
	if err := s.HTTPCtl.Stop(); err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}
	return &pb.Empty{}, nil
}

func (s *GRPCServer) StartLink(_ context.Context, req *pb.StartLinkReq) (*pb.Empty, error) {

	if req.Port == "" {
		return nil, status.Error(codes.InvalidArgument, "port_name is required")
	}

	if req.BaudRate <= 0 {
		return nil, status.Error(codes.InvalidArgument, "baud_rate is required")
	}

	if err := s.LinkCtl.StartSupervisor(req.Port, req.BaudRate); err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}
	return &pb.Empty{}, nil
}

func (s *GRPCServer) StopLink(context.Context, *pb.Empty) (*pb.Empty, error) {
	if err := s.LinkCtl.StopSupervisor(); err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}
	return &pb.Empty{}, nil
}

func (s *GRPCServer) GetGamepadStream(req *pb.GetGamepadStreamReq, server pb.JoystickControl_GetGamepadStreamServer) error {

	if req.Gamepad == nil {
		return status.Error(codes.InvalidArgument, "device is required")
	}

	if req.Gamepad.Id == "" {
		return status.Error(codes.InvalidArgument, "device.id is required")
	}

	//fmt.Printf("fetch response for id : %s\n", req.Device.Id)

	var device *dc.InputGamepad
	var ok bool
	var err error
	if device, ok = s.DevicesCtl.Gamepad(req.Gamepad.Id); !ok {
		return status.Error(codes.InvalidArgument, fmt.Sprintf("gamepad(id: %s) device not found", req.Gamepad.Id))
	}

	state := s.DevicesCtl.GetGamepadStates(device, nil)
	if err = s.StreamDeviceState(device, state, server); err != nil {
		return err
	}

	ticker := time.NewTicker(time.Millisecond * 25)

	for {
		select {
		case <-ticker.C:
			s.DevicesCtl.AlertDeviceChan() //fake a device event to force evaluation
		case <-s.DevicesCtl.DeviceEventChan:
			if err = s.StreamDeviceState(device, state, server); err != nil {
				return err
			}
		}
	}

}

func (s *GRPCServer) GetTransmitterStream(req *pb.GetTransmitterStreamReq, server pb.JoystickControl_GetTransmitterStreamServer) error {

	if req.Transmitter == nil {
		return status.Error(codes.InvalidArgument, "device is required")
	}

	if req.Transmitter.Port == "" {
		return status.Error(codes.InvalidArgument, "device.port_name is required")
	}

	var err error

	ticker := time.NewTicker(25 * time.Millisecond)
	rfDeviceChannels := s.ConfigCtl.GetTransmitterChannels(req.Transmitter, nil)

	if err = s.StreamRfDeviceChannels(req.Transmitter, rfDeviceChannels, server); err != nil {
		return err
	}

	for {
		select {
		case <-ticker.C:
			s.DevicesCtl.AlertDeviceChan() //fake a device event to force evaluation
		case <-s.ConfigCtl.EvalEventChan:
			if err = s.StreamRfDeviceChannels(req.Transmitter, rfDeviceChannels, server); err != nil {
				return err
			}
		}
	}

}

func (s *GRPCServer) GetEvalStream(_ *pb.Empty, server pb.JoystickControl_GetEvalStreamServer) error {

	var err error

	ticker := time.NewTicker(25 * time.Millisecond)
	states := s.ConfigCtl.GetEvalStates(nil)

	if err = s.StreamEvalStates(states, server); err != nil {
		return err
	}

	for {
		select {
		case <-ticker.C:
			s.ConfigCtl.AlertStreamChan() //fake event to force config eval
		case <-s.ConfigCtl.EvalEventChan:
			if err = s.StreamEvalStates(states, server); err != nil {
				return err
			}
		}
	}
}

func (s *GRPCServer) GetLinkStream(_ *pb.Empty, server pb.JoystickControl_GetLinkStreamServer) error {

	var err error

	ticker := time.NewTicker(500 * time.Millisecond)
	state := s.LinkCtl.GetLinkState(nil)

	if err = s.StreamLinkState(state, server); err != nil {
		return err
	}

	for {
		select {
		case <-ticker.C:
			if err = s.StreamLinkState(state, server); err != nil {
				return err
			}
		}
	}

}

func (s *GRPCServer) GetTelemetryStream(_ *pb.Empty, server pb.JoystickControl_GetTelemetryStreamServer) error {

	var err error
	var telemetry *pb.Telemetry

	telemetryChan := s.LinkCtl.TelemetryBroadcaster.Subscribe()
	defer s.LinkCtl.TelemetryBroadcaster.Unsubscribe(telemetryChan)

	for {
		telemetry = <-telemetryChan
		if err = server.Send(telemetry); err != nil {
			return err
		}
	}

}

func (s *GRPCServer) GetAppInfo(_ context.Context, _ *pb.Empty) (*pb.GetAppInfoRes, error) {

	var info *VersionInfo
	var err error

	if info, err = GetVersionInfo(); err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("could not unmarshal version file. %s", err.Error()))
	}

	return &pb.GetAppInfoRes{
		ReleaseTag: info.ReleaseTag,
		CommitHash: info.CommitHash,
		BranchName: info.BranchName,
	}, nil
}

func (s *GRPCServer) GetCRSFDevices(_ context.Context, _ *pb.Empty) (*pb.GetCRSFDevicesRes, error) {

	luaChan := s.LinkCtl.DeviceInfoBroadcaster.Subscribe()
	defer s.LinkCtl.DeviceInfoBroadcaster.Unsubscribe(luaChan)

	var err error
	var devicesList []*pb.CRSFDeviceInfoData
	if devicesList, err = s.LinkCtl.GetCRSFDevices(); err != nil {
		return nil, status.Error(codes.InvalidArgument, fmt.Sprintf("could not get devices. %s", err.Error()))
	}

	res := pb.GetCRSFDevicesRes{
		Devices: devicesList,
	}

	return &res, nil
}

func (s *GRPCServer) GetCRSFDeviceFields(_ context.Context, req *pb.GetCRSFDeviceFieldsReq) (*pb.GetCRSFDeviceFieldsRes, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, fmt.Sprintf("request payload required"))
	}

	deviceInfo := req.GetDevice()

	if deviceInfo == nil {
		return nil, status.Error(codes.InvalidArgument, fmt.Sprintf("device info required"))
	}

	var err error
	var deviceFields []*pb.CRSFDeviceFieldData

	if deviceFields, err = s.LinkCtl.GetCRSFDeviceFields(deviceInfo); err != nil {
		return nil, status.Error(codes.InvalidArgument, fmt.Sprintf("could not get device fields. %s", err.Error()))
	}

	for _, field := range deviceFields {
		FixOptionsArrows(field)
	}

	res := pb.GetCRSFDeviceFieldsRes{
		Fields: deviceFields,
	}

	return &res, nil
}

func (s *GRPCServer) GetCRSFDeviceField(_ context.Context, req *pb.GetCRSFDeviceFieldReq) (*pb.GetCRSFDeviceFieldRes, error) {

	if req == nil {
		return nil, status.Error(codes.InvalidArgument, fmt.Sprintf("request payload required"))
	}

	deviceInfo := req.GetDevice()

	if deviceInfo == nil {
		return nil, status.Error(codes.InvalidArgument, fmt.Sprintf("device is required"))
	}

	var err error
	var deviceField *pb.CRSFDeviceFieldData

	if deviceField, err = s.LinkCtl.GetCRSFDeviceField(deviceInfo, req.GetFieldId(), time.Second); err != nil {
		return nil, status.Error(codes.InvalidArgument, fmt.Sprintf("could get device field. %s", err.Error()))
	}

	if deviceField == nil {
		return nil, status.Error(codes.NotFound, fmt.Sprintf("could not get device field. %s", err.Error()))
	}

	FixOptionsArrows(deviceField)

	res := pb.GetCRSFDeviceFieldRes{
		Field: deviceField,
	}

	return &res, nil
}

func (s *GRPCServer) SetCRSFDeviceField(_ context.Context, req *pb.SetCRSFDeviceFieldReq) (*pb.SetCRSFDeviceFieldRes, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, fmt.Sprintf("request payload required"))
	}

	var err error
	var deviceField *pb.CRSFDeviceFieldData

	if deviceField, err = s.LinkCtl.SetCRSFDeviceField(req.GetDevice(), req.GetField()); err != nil {
		return nil, status.Error(codes.InvalidArgument, fmt.Sprintf("could not set device field. %s", err.Error()))
	}

	res := pb.SetCRSFDeviceFieldRes{
		Field: deviceField,
	}

	return &res, nil
}

func (s *GRPCServer) GetCRSFDeviceLinkStatus(_ context.Context, _ *pb.Empty) (*pb.GetCRSFDeviceLinkStatusRes, error) {

	var err error
	var deviceLinkStatus *pb.CRSFDeviceLinkStatusData

	if deviceLinkStatus, err = s.LinkCtl.GetCRSFDeviceLinkStatus(5 * time.Second); err != nil {
		return nil, status.Error(codes.InvalidArgument, fmt.Sprintf("could not get device link status. %s", err.Error()))
	}

	res := pb.GetCRSFDeviceLinkStatusRes{
		LinkStatus: deviceLinkStatus,
	}

	return &res, nil
}

func (s *GRPCServer) ClearCRSFDeviceLinkCriticalFlags(_ context.Context, _ *pb.Empty) (*pb.Empty, error) {

	var err error

	if err = s.LinkCtl.ClearCRSFDeviceLinkCriticalFlags(); err != nil {
		return nil, status.Error(codes.InvalidArgument, fmt.Sprintf("could not clear device link critical flags. %s", err.Error()))
	}

	return &pb.Empty{}, nil
}
