// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package link

import (
	"errors"
	"fmt"
	"github.com/kaack/elrs-joystick-control/pkg/crossfire"
	telem "github.com/kaack/elrs-joystick-control/pkg/crossfire/telemetry"
	"github.com/kaack/elrs-joystick-control/pkg/serial"
	"gopkg.in/tomb.v2"
	"time"
)

func (c *Controller) StartRecvLoop(port *serial.Port, sendChan chan any, recvChan chan any) error {

	if c.recvLoopTomb != nil && c.recvLoopTomb.Alive() {
		return errors.New("send loop is already active")
	}

	c.recvLoopTomb = &tomb.Tomb{}
	c.recvLoopTomb.Go(func() error {
		return c.RecvLoop(port, sendChan, recvChan)
	})

	return nil
}

func (c *Controller) StopRecvLoop() error {
	if c.recvLoopTomb == nil || !c.recvLoopTomb.Alive() {
		return nil
	}

	c.recvLoopTomb.Kill(nil)
	if err := c.recvLoopTomb.Wait(); err != nil {
		return err
	}
	return nil
}

func (c *Controller) RecvLoop(port *serial.Port, sendChan chan any, recvChan chan any) error {
	//time.Sleep(5 * time.Second)
	refreshRate := crossfire.GetRefreshRate(port.BaudRate)
	maxInactivityTime := refreshRate * 4
	fmt.Printf("(recv-loop) starting, refresh rate %v, max inactivity: %v\n", refreshRate, maxInactivityTime)
	ticker := time.NewTicker(refreshRate)

	telemPacketCount := 1
	telemErrorCount := 0
	tickCount := uint64(0)
	currentTickTime := time.Now()
	lastRecvTelemTime := time.Now()
	lastSyncReqTime := time.Now()

	reader := telem.NewReader(port)

	var tPacket telem.TelemType
	var err error

	c.recvPacketsCount = 0
	c.errorPacketsCount = 0
Loop:
	for {
		select {
		case <-c.recvLoopTomb.Dying():
			break Loop

		case chData := <-recvChan:
			switch chData.(type) {
			//receive data from the send loop
			default:
				//no-op
			}

		case <-ticker.C:
			tickCount += 1
			currentTickTime = time.Now()

			timeSinceLastTelem := currentTickTime.Sub(lastRecvTelemTime) / time.Millisecond
			timeSinceLastSyncReq := currentTickTime.Sub(lastSyncReqTime) / time.Millisecond
			if timeSinceLastTelem > maxInactivityTime && timeSinceLastSyncReq > maxInactivityTime {
				fmt.Printf("(recv-loop) requesting TelemSync lt:%d, ls:%d\n", timeSinceLastTelem, timeSinceLastSyncReq)
				lastSyncReqTime = currentTickTime
				sendChan <- SendModelId
			}

			if tPacket, err = reader.Next(c.recvLoopTomb); err != nil {
				if _, ok := err.(*telem.InterruptedError); ok {
					//exit silently
					break
				}

				fmt.Printf("(recv-loop) error reading telemetry data. error: %s\n", err.Error())
				telemErrorCount += 1
				c.errorPacketsCount += 1
				break
			}

			telemPacketCount += 1
			c.recvPacketsCount += 1

			switch tFrame := (tPacket).(type) {
			case telem.TelemStatusExtType:
				//fmt.Printf("(recv-loop) %s\n", tFrame)
				c.DeviceStatusBroadcaster.Broadcast(tFrame.Proto())
			case telem.TelemSyncType:
				c.TelemetryBroadcaster.Broadcast(tFrame.Proto())
				sendChan <- &tFrame
			case telem.TelemGPSType,
				telem.TelemLinkStatsType,           //ELRS only (originates from RX)
				telem.TelemBatteryType,             //ELRS, TBS (originates from FC)
				telem.TelemAttitudeType,            //ELRS, TBS (originates from FC)
				telem.TelemFlightModeType,          //ELRS, TBS (originates from FC)
				telem.TelemLinkTXType,              //TBS only
				telem.TelemLinkRXType,              //TBS only
				telem.TelemBarometerType,           //TBS only
				telem.TelemVariometerType,          //TBS Only
				telem.TelemBarometerVariometerType: // ELRS only
				//fmt.Printf("(recv-loop) %s\n", tFrame)
				c.TelemetryBroadcaster.Broadcast(tFrame.Proto())
			case telem.TelemDeviceInfoExtType:
				//fmt.Printf("(recv-loop) %s\n", tFrame)
				c.DeviceInfoBroadcaster.Broadcast(tFrame.Proto())
			case telem.TelemDeviceSettingsEntryExtType:
				//fmt.Printf("(recv-loop) %s\n", tFrame)
				c.DeviceFieldBroadcaster.Broadcast(tFrame.Proto())
			default:
				//fmt.Printf("(recv-loop) tData: %x\n", tData)
			}
		}

	}
	fmt.Printf("(recv-loop) exiting recv telemetry loop...\n")

	return nil
}
