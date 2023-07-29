// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package link

import (
	"errors"
	"fmt"
	crsf "github.com/kaack/elrs-joystick-control/pkg/crossfire"
	telem "github.com/kaack/elrs-joystick-control/pkg/crossfire/telemetry"
	"github.com/kaack/elrs-joystick-control/pkg/serial"
	"github.com/kaack/elrs-joystick-control/pkg/util"
	"gopkg.in/tomb.v2"
	"time"
)

func (c *Controller) StartSendLoop(port *serial.Port, sendChan chan any, recvChan chan any) error {

	if c.sendLoopTomb != nil && c.sendLoopTomb.Alive() {
		return errors.New("send loop is already active")
	}

	c.sendLoopTomb = &tomb.Tomb{}
	c.sendLoopTomb.Go(func() error {
		return c.SendLoop(port, sendChan, recvChan)
	})

	return nil
}

func (c *Controller) StopSendLoop() error {
	if c.sendLoopTomb == nil || !c.sendLoopTomb.Alive() {
		return nil
	}

	c.sendLoopTomb.Kill(nil)
	if err := c.sendLoopTomb.Wait(); err != nil {
		return err
	}
	return nil
}

//goland:noinspection GoUnusedParameter
func (c *Controller) SendLoop(port *serial.Port, sendChan chan any, recvChan chan any) error {

	currentRefreshRate := crsf.GetRefreshRate(port.BaudRate)
	nextRefreshRate := currentRefreshRate

	fmt.Printf("(send-loop) starting, refresh rate %v\n", currentRefreshRate)

	var err error
	var ok bool

	ticker := time.NewTicker(currentRefreshRate)

	var channelsDataMap *map[string]*[16]util.CRSFValue
	var channelsData *[16]util.CRSFValue

	c.sentPacketsCount = 0

Loop:
	for {
		select {
		case <-c.sendLoopTomb.Dying():
			break Loop
		case chData := <-sendChan:
			//fmt.Printf("chData: %v\n", chData)
			switch data := (chData).(type) {
			//receive data from the recv loop
			case ChannelRequest:
				if data == SendModelId {
					fmt.Printf("(send-loop) writing model id frame\n")
					if _, err = port.Write(crsf.CreateModelIDFrame(0)); err != nil {
						c.errorPacketsCount += 1
						fmt.Printf("(send-loop) could not write model id frame on port %s. %s\n", port.Name, err.Error())
						break
					}
					continue
				} else if data == PingDevices {
					fmt.Printf("(send-loop) pinging devices\n")
					if _, err = port.Write(crsf.CreatePingDevicesFrame()); err != nil {
						c.errorPacketsCount += 1
						fmt.Printf("(send-loop) could not write ping devices frame on port %s. %s\n", port.Name, err.Error())
						break
					}
				}
			case *ReadDeviceFieldsRequest:
				//fmt.Printf("(send-loop) reading device fields (deviceId: %v)\n", data.deviceId)
				if _, err = port.Write(crsf.CreateParameterSettingsReadFrame(data.deviceId, data.fieldId, data.fieldChunk)); err != nil {
					c.errorPacketsCount += 1
					fmt.Printf("(send-loop) could not write \"parameters-settings-read\" frame on port %s. %s\n", port.Name, err.Error())
					break
				}
			case *WriteDeviceFieldRequestUint8:
				fmt.Printf("(send-loop) setting device field (deviceId: %v, fieldId: %v, value(uint8): %v)\n", data.deviceId, data.fieldId, data.fieldValue)
				if _, err = port.Write(crsf.CreateParameterSettingWriteFrameUint8(data.deviceId, data.fieldId, data.fieldValue)); err != nil {
					c.errorPacketsCount += 1
					fmt.Printf("(send-loop) could not write \"parameters-settings-write-uint8\" frame on port %s. %s\n", port.Name, err.Error())
					break
				}
			case *WriteDeviceFieldRequestUint16:
				fmt.Printf("(send-loop) setting device field (deviceId: %v, fieldId: %v, value(uint16): %v)\n", data.deviceId, data.fieldId, data.fieldValue)
				if _, err = port.Write(crsf.CreateParameterSettingWriteFrameUint16(data.deviceId, data.fieldId, data.fieldValue)); err != nil {
					c.errorPacketsCount += 1
					fmt.Printf("(send-loop) could not write \"parameters-settings-write-uint16\" frame on port %s. %s\n", port.Name, err.Error())
					break
				}

			case *telem.TelemSyncType:
				nextRefreshRate = crsf.AdjustSendRate((*data).Rate(), (*data).Offset())
				ticker.Reset(nextRefreshRate)
				//fmt.Printf("(send-loop) rate: %v, offset: %v, newRate: %v\n", time.Duration((*data).Rate()/10)*time.Microsecond, time.Duration((*data).Offset()/10)*time.Microsecond, nextRefreshRate)
			default:
				fmt.Printf("(send-loop) unknown channel request\n")
			}

		case <-ticker.C:
			if channelsDataMap != c.configCtl.EvalDataMap && c.configCtl.EvalDataMap != nil {
				channelsDataMap = c.configCtl.EvalDataMap
			}

			if channelsDataMap == nil {
				channelsData = c.configCtl.EvalNoData
			} else if channelsData, ok = (*channelsDataMap)[port.Name]; !ok {
				channelsData = c.configCtl.EvalNoData
			}

			if channelsData != c.configCtl.EvalNoData {
				//PrintChannels(channelsData)
			}

			if _, err = port.Write(crsf.PackChannels(channelsData)); err != nil {
				//if _, err = port.Write(crsf.PackChannels(c.configCtl.EvalCenter)); err != nil {
				fmt.Printf("(send-loop) could not write channels on port %s. %s\n", port.Name, err.Error())
				break Loop
			}

			//if currentRefreshRate != nextRefreshRate {
			//	fmt.Printf("(send-loop) oldRate: %v, newRate: %v, packets: %v\n", currentRefreshRate, nextRefreshRate, c.sentPacketsCount)
			//	currentRefreshRate = nextRefreshRate
			//	ticker.Reset(nextRefreshRate)
			//}
			c.sentPacketsCount += 1
		}
	}

	fmt.Println("(send-loop): exiting send loop ...")

	return nil
}

//goland:noinspection GoUnusedFunction
func printChannels(channels *[16]util.CRSFValue) {
	fmt.Printf("(send-loop) r: %04d, p: %04d, t: %04d, y: %04d, arm: %04d, pre: %04d, mode: %04d\n", channels[0], channels[1], channels[2], channels[3], channels[4], channels[5], channels[6])
}
