// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package link

type ChannelRequest int32

const (
	SendModelId ChannelRequest = iota
)

type PortState int32

const (
	PortUnknown      PortState = iota
	PortDisconnected PortState = iota
	PortConnected    PortState = iota
)

type SupervisorState int32

//goland:noinspection GoUnusedConst
const (
	SupervisorUnknown  SupervisorState = iota
	SupervisorInactive SupervisorState = iota
	SupervisorActive   SupervisorState = iota
)
