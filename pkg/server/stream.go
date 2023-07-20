// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package server

import (
	"fmt"
	"github.com/kaack/elrs-joystick-control/pkg/devices"
	pb2 "github.com/kaack/elrs-joystick-control/pkg/proto/generated/pb"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (s *GRPCServer) StreamRfDeviceChannels(device *pb2.Transmitter, channels *pb2.TransmitterChannels, server pb2.JoystickControl_GetTransmitterStreamServer) error {

	var err error
	channels = s.ConfigCtl.GetTransmitterChannels(device, channels)

	//fmt.Printf("tx-channels: %s\n", ChannelsAsString(channels))

	if err = server.Send(channels); err != nil {
		return status.Error(codes.Aborted, fmt.Sprintf("error sending device state. %s", err.Error()))
	}

	return nil
}

func (s *GRPCServer) StreamEvalStates(states *pb2.EvalStates, server pb2.JoystickControl_GetEvalStreamServer) error {

	var err error
	states = s.ConfigCtl.GetEvalStates(states)

	//fmt.Printf("eval-states: %s\n", EvalAsString(states))

	if err = server.Send(states); err != nil {
		return status.Error(codes.Aborted, fmt.Sprintf("error sending device state. %s", err.Error()))
	}

	return nil
}

func (s *GRPCServer) StreamDeviceState(device *devices.InputGamepad, states *pb2.GamepadInputsStates, server pb2.JoystickControl_GetGamepadStreamServer) error {
	var err error
	states = s.DevicesCtl.GetGamepadStates(device, states)

	//fmt.Printf("stream-gamepad: %v\n", DeviceStateAsString(states))
	if err = server.Send(states); err != nil {
		return status.Error(codes.Aborted, fmt.Sprintf("error sending device state. %s", err.Error()))
	}

	return nil
}

func (s *GRPCServer) StreamLinkState(state *pb2.LinkState, server pb2.JoystickControl_GetLinkStreamServer) error {
	var err error

	state = s.LinkCtl.GetLinkState(state)

	//fmt.Printf("stream-link: %v\n", LinkStateAsString(state))
	if err = server.Send(state); err != nil {
		return status.Error(codes.Aborted, fmt.Sprintf("error sending link state. %s", err.Error()))
	}

	return nil
}
