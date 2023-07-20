// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package link

import (
	"github.com/kaack/elrs-joystick-control/pkg/proto/generated/pb"
	"sync"
)

type TelemetryBroadcaster struct {
	Listeners []chan *pb.Telemetry
	lock      sync.Mutex
}

func NewTelemetryBroadcaster() *TelemetryBroadcaster {
	broadcaster := TelemetryBroadcaster{
		Listeners: []chan *pb.Telemetry{},
		lock:      sync.Mutex{},
	}

	return &broadcaster
}

func (b *TelemetryBroadcaster) Broadcast(telemetry *pb.Telemetry) {

	b.lock.Lock()
	defer b.lock.Unlock()

	for _, listener := range b.Listeners {
		select {
		case listener <- telemetry:
		//no-op
		default:
			//no-op
		}
	}
}

func (b *TelemetryBroadcaster) Subscribe() chan *pb.Telemetry {
	listener := make(chan *pb.Telemetry, 1024)
	b.lock.Lock()
	defer b.lock.Unlock()
	b.Listeners = append(b.Listeners, listener)
	return listener
}

func (b *TelemetryBroadcaster) Unsubscribe(listener chan *pb.Telemetry) {
	b.lock.Lock()
	defer b.lock.Unlock()

	indexToRemove := -1
	for i := 0; i < len(b.Listeners); i++ {
		if b.Listeners[i] == listener {
			indexToRemove = i
			break
		}
	}

	if indexToRemove >= 0 {
		b.Listeners = append(b.Listeners[:indexToRemove], b.Listeners[indexToRemove+1:]...)
	}
}
