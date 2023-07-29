// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package server

import (
	"encoding/json"
	"fmt"
	"github.com/kaack/elrs-joystick-control/pkg/proto/generated/pb"
	"strings"
)

//goland:noinspection GoUnusedExportedFunction
func LinkStateAsString(state *pb.LinkState) string {
	return fmt.Sprintf("ss: %d, ps: %d, recv: %d, sent: %d, error: %d", state.SupervisorState, state.PortState, state.ReceivedPacketsCount, state.SentPacketsCount, state.ErrorPacketsCount)
}

//goland:noinspection GoUnusedExportedFunction
func DeviceStateAsString(inputStates *pb.GamepadInputsStates) string {

	res := map[string]int32{}

	for _, inputState := range inputStates.GetInputsStates() {
		if inputState.Type == pb.GamepadInputType_AXIS {
			res[fmt.Sprintf("%s%d", "a", inputState.Index)] = inputState.Value
		} else if inputState.Type == pb.GamepadInputType_BUTTON {
			res[fmt.Sprintf("%s%d", "b", inputState.Index)] = inputState.Value
		}
	}

	return fmt.Sprintf("%v", res)
}

//goland:noinspection GoUnusedExportedFunction
func ChannelsAsString(channels *pb.TransmitterChannels) string {

	channelValues := [16]int32{}

	for _, channel := range channels.GetChannels() {
		channelValues[channel.GetChannelNumber()] = channel.GetChannelValue()
	}

	return fmt.Sprintf("%v", channelValues)
}

//goland:noinspection GoUnusedExportedFunction
func EvalAsString(states *pb.EvalStates) string {

	if bytes, err := json.Marshal(states); err == nil {
		return string(bytes)
	}

	return ""

}

// FixOptionsArrows HACK: ELRS uses 0xC0 and 0xC1 as UP/DOWN arrows, which are not valid UTF-8
func FixOptionsArrows(field *pb.CRSFDeviceFieldData) {
	if textSelect := field.GetTextSelect(); textSelect != nil {
		options := textSelect.GetOptions()
		for index, option := range options {
			option = strings.ReplaceAll(option, "\xc0", "⬆️")
			option = strings.ReplaceAll(option, "\xc1", "⬇️")
			textSelect.Options[index] = option
		}
	}
}
