// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package telemetry

import (
	"errors"
	"fmt"
	"github.com/kaack/elrs-joystick-control/pkg/crc"
	"github.com/kaack/elrs-joystick-control/pkg/crossfire"
	"github.com/kaack/elrs-joystick-control/pkg/serial"
	"golang.org/x/exp/slices"
	"gopkg.in/tomb.v2"
	"io"
)

type Reader struct {
	Buffer []uint8
	Frame  *[]uint8
	Port   *serial.Port

	start           int
	end             int
	currentCapacity int
	initialCapacity int
	err             error
	eof             bool
}

func NewReader(port *serial.Port) *Reader {
	capacity := 1024
	return &Reader{
		Buffer:          make([]uint8, capacity),
		Port:            port,
		start:           0,
		end:             0,
		initialCapacity: capacity,
		currentCapacity: capacity,
		err:             nil,
		eof:             false,
	}

}

func (s *Reader) Next(tomb *tomb.Tomb) (TelemType, error) {
	var err error
	var skip int
	var count int
	var frame *[]uint8
	var newCap int
	var newBuf []uint8
	var tmp TelemType

	for {

		if s.start >= s.end {
			s.start = 0
			s.end = 0
			if s.currentCapacity > s.initialCapacity {
				//fmt.Printf("resetting buffer to initial capacity, start: %v, end: %v\n", s.start, s.end)
				s.Buffer = make([]uint8, s.initialCapacity)
				s.currentCapacity = s.initialCapacity
			}
		}

		//fmt.Printf("capacity: %v, start: %v, end: %v\n", s.currentCapacity, s.start, s.end)

		count = 0
		for count == 0 {
			if !tomb.Alive() {
				return nil, &InterruptedError{}
			}

			if count, err = s.Port.Read(s.Buffer[s.end:]); err != nil {
				s.err = err
				s.eof = true
				break
			}
		}

		if s.start >= s.end && err != nil {
			return nil, err
		}

		s.end += count
		if s.end == s.currentCapacity {
			//fmt.Printf("doubling capacity, start: %v, end: %v\n", s.start, s.end)
			newCap = s.currentCapacity * 2
			newBuf = make([]uint8, newCap)
			copy(newBuf, s.Buffer)
			s.Buffer = newBuf
			s.currentCapacity = newCap
		}

		skip, frame, err = Split(s.Buffer[s.start:s.end], s.eof)
		s.start += skip

		if frame != nil {
			if tmp, err = Unmarshal(*frame); err != nil {
				return nil, err
			} else if tmp == nil {
				//unknown telemetry frame, ignore it
				continue
			}

			return tmp, nil
		}

		if err != nil {
			return nil, err
		}
	}

}

func Split(data []byte, atEOF bool) (advance int, token *[]byte, err error) {
	dataLen := int32(len(data))

	//fmt.Printf("split: eof: %v, len: %d, data: %x\n", atEOF, dataLen, data)
	if atEOF && len(data) == 0 {
		return 0, nil, io.EOF
	}

	frameStart := int32(slices.IndexFunc(data, func(c byte) bool {
		return isTelemetryAddress(crossfire.Endpoint(c))
	}))

	//fmt.Printf("frameStart: %d\n", frameStart)

	if frameStart < 0 {
		//fmt.Printf("no frame found, skip entire data buffer\n")
		return len(data), nil, nil
	}

	if frameStart+1 == dataLen {
		if atEOF {
			return 0, nil, errors.New(fmt.Sprintf("incomplete frame, stopped at frame id %x", data[frameStart]))
		}
		//fmt.Printf("frame found at end of buffer, need more data\n")
		return 0, nil, nil
	}

	frameLength := int32(data[frameStart+1])
	remainingBytes := (dataLen - 1) - (frameStart + 1)

	if remainingBytes < frameLength {
		if atEOF {
			return 0, nil, errors.New(fmt.Sprintf("incomplete frame, need %d bytes but only %d remain", frameLength, remainingBytes))
		}
		//fmt.Printf("frameLength: %d, remainingBytes: %d, need more data ...\n", frameLength, remainingBytes)
		return 0, nil, nil
	}

	//fmt.Printf("frameLength: %d, remainingBytes: %d, have full frame, checking crc ...\n", frameLength, remainingBytes)

	if frameLength == 0 {
		return int(frameStart) + 1, nil, nil
	}

	// have enough data for a frame
	frame := data[frameStart : frameStart+1+frameLength+1]
	//fmt.Printf("frame: %x", frame)
	frameCrc8 := frame[len(frame)-1]

	//fmt.Printf("frameCrc8: %x\n", frameCrc8)
	computedCrc8 := crc.D5(frame[2 : len(frame)-1])
	//fmt.Printf("computedCrc8: %x\n", computedCrc8)
	if computedCrc8 != frameCrc8 {
		//bad frame detect at frameStart, skip this byte
		return int(frameStart) + 1, nil, errors.New("frame crc mismatch")
	}

	skip := frameStart + int32(len(frame))
	//fmt.Printf("skip: %d, frame: %x\n", skip, frame)
	return int(skip), &frame, nil
}

func Unmarshal(data []byte) (TelemType, error) {
	if len(data) < 3 {
		return nil, errors.New("cannot unmarshal %x as telemetry frame. length is too small")
	}

	fAddr := crossfire.Endpoint(data[0])
	fType := crossfire.FrameType(data[2])

	if fAddr == crossfire.HandsetEndpoint && fType == crossfire.StatusFrame {
		frame := StatusExtFrame{RawData: data}
		return &frame, nil
	} else if fAddr == crossfire.HandsetEndpoint && fType == crossfire.ParameterSettingsEntryFrame {
		if len(data) < MinExtendedFrameSize {
			return nil, errors.New(fmt.Sprintf("cannot unmarshal %x as extended device entry settings telemetry frame. length is too small", data))
		}
		return NewDeviceSettingsEntryExtFrame(data), nil
	} else if fAddr == crossfire.HandsetEndpoint && fType == crossfire.DeviceInfoFrame {
		if len(data) < MinExtendedFrameSize {
			return nil, errors.New(fmt.Sprintf("cannot unmarshal %x as extended device info telemetry frame. length is too small", data))
		}
		return NewDeviceInfoExtFrame(data), nil
	} else if fAddr == crossfire.HandsetEndpoint && fType == crossfire.RadioFrame {
		if len(data) < MinExtendedFrameSize {
			return nil, errors.New(fmt.Sprintf("cannot unmarshal %x as extended radio telemetry frame. length is too small", data))
		}
		fExtType := crossfire.FrameType(data[5])
		if fExtType == crossfire.OpenTxSyncFrame {
			frame := SyncExtFrame{RawData: data}
			return &frame, nil
		}
	} else if fAddr == crossfire.HandsetEndpoint && fType == crossfire.BatteryFrame {
		if len(data) != BatteryFrameSize {
			return nil, errors.New(fmt.Sprintf("cannot unmarshal %x as battery telemetry frame. expected length %d, but got %d", data, BatteryFrameSize, len(data)))
		}
		frame := BatteryFrame{RawData: data}
		return &frame, nil
	} else if fAddr == crossfire.HandsetEndpoint && fType == crossfire.AltitudeFrame {
		if len(data) < AttitudeFrameSize {
			return nil, errors.New(fmt.Sprintf("cannot unmarshal %x as attitude telemetry frame. expected length %d, but got %d", data, AttitudeFrameSize, len(data)))
		}
		frame := AttitudeFrame{RawData: data}
		return &frame, nil
	} else if fAddr == crossfire.HandsetEndpoint && fType == crossfire.FlightModeFrame {
		//frame is variable size (depends on the mode)
		frame := FlightModeFrame{RawData: data}
		return &frame, nil
	} else if fAddr == crossfire.HandsetEndpoint && fType == crossfire.LinkStatsFrame {
		if len(data) < LinkStatsFrameSize {
			return nil, errors.New(fmt.Sprintf("cannot unmarshal %x as link-stats telemetry frame. expected length %d, but got %d", data, LinkStatsFrameSize, len(data)))
		}
		frame := LinkStatsFrame{RawData: data}
		return &frame, nil
	} else if fAddr == crossfire.HandsetEndpoint && fType == crossfire.LinkRxFrame {
		if len(data) < LinkRXFrameSize {
			return nil, errors.New(fmt.Sprintf("cannot unmarshal %x as link-rx telemetry frame. expected length %d, but got %d", data, LinkRXFrameSize, len(data)))
		}
		frame := LinkRXFrame{RawData: data}
		return &frame, nil
	} else if fAddr == crossfire.HandsetEndpoint && fType == crossfire.LinkTxFrame {
		if len(data) < LinkTXFrameSize {
			return nil, errors.New(fmt.Sprintf("cannot unmarshal %x as link-tx telemetry frame. expected length %d, but got %d", data, LinkTXFrameSize, len(data)))
		}
		frame := LinkTXFrame{RawData: data}
		return &frame, nil
	} else if fAddr == crossfire.HandsetEndpoint && fType == crossfire.GpsFrame {
		if len(data) < GPSFrameSize {
			return nil, errors.New(fmt.Sprintf("cannot unmarshal %x as gps telemetry frame. expected length %d, but got %d", data, GPSFrameSize, len(data)))
		}
		frame := GPSFrame{RawData: data}
		return &frame, nil
	} else if fAddr == crossfire.HandsetEndpoint && fType == crossfire.BaroAltFrame {
		if len(data) == BarometerFrameSize {
			//TBS sends barometer data by itself
			frame := BarometerFrame{RawData: data}
			return &frame, nil
		} else if len(data) == BarometerVariometerFrameSize {
			frame := BarometerVariometerFrame{RawData: data}
			return &frame, nil
		}
	} else if fAddr == crossfire.HandsetEndpoint && fType == crossfire.VarioFrame {
		//TBS sends variometer data by itself
		if len(data) == VariometerFrameSize {
			frame := VariometerFrame{RawData: data}
			return &frame, nil
		}
	} else {
		fmt.Printf("(recv-loop) unknown frame: %x\n", data)
	}

	//unknown telemetry frame, ignore it
	return nil, nil
}
