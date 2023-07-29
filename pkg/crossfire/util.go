// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package crossfire

import (
	"github.com/kaack/elrs-joystick-control/pkg/crc"
	"github.com/kaack/elrs-joystick-control/pkg/util"
	"time"
)

func CreateModelIDFrame(modelId uint8) []uint8 {
	frame := []uint8{
		/* 0: */ uint8(UartSyncFrame),
		/* 1: */ 8,
		/* 2: */ uint8(CommandFrame),
		/* 3: */ uint8(ModuleEndpoint),
		/* 4: */ uint8(HandsetEndpoint),
		/* 5: */ uint8(SubcommandFrame),
		/* 6: */ uint8(CmdModelSelectFrame),
		/* 7: */ modelId, //model id
		/* 8: */ 0, //crc BA
		/* 9: */ 0, //crc D5
	}

	frame[8] = crc.BA(frame[2:8])
	frame[9] = crc.D5(frame[2:9])
	return frame
}

func CreatePingDevicesFrame() []uint8 {
	frame := []uint8{
		/* 0: */ uint8(UartSyncFrame),
		/* 1: */ 5,
		/* 2: */ uint8(PingDevicesFrame),
		/* 3: */ uint8(AllEndpoint),
		/* 4: */ uint8(LuaEndpoint),
		/* 5: */ 0, //crc BA
		/* 6: */ 0, //crc D5
	}

	frame[5] = crc.BA(frame[2:5])
	frame[6] = crc.D5(frame[2:6])
	return frame
}

func CreateParameterSettingsReadFrame(deviceId uint8, fieldId uint8, fieldChunk uint8) []uint8 {
	frame := []uint8{
		/* 0: */ uint8(UartSyncFrame),
		/* 1: */ 7,
		/* 2: */ uint8(ParameterSettingsReadFrame),
		/* 3: */ deviceId,
		/* 4: */ uint8(LuaEndpoint),
		/* 5: */ fieldId,
		/* 6: */ fieldChunk,
		/* 7: */ 0, //crc BA
		/* 8: */ 0, //crc D5
	}

	frame[7] = crc.BA(frame[2:7])
	frame[8] = crc.D5(frame[2:8])
	return frame
}

func CreateParameterSettingWriteFrameUint8(deviceId uint8, fieldId uint8, fieldValue uint8) []uint8 {
	frame := []uint8{
		/* 0: */ uint8(UartSyncFrame),
		/* 1: */ 7,
		/* 2: */ uint8(ParameterSettingsWriteFrame),
		/* 3: */ deviceId,
		/* 4: */ uint8(LuaEndpoint),
		/* 5: */ fieldId,
		/* 6: */ fieldValue,
		/* 7: */ 0, //crc BA
		/* 8: */ 0, //crc D5
	}

	frame[7] = crc.BA(frame[2:7])
	frame[8] = crc.D5(frame[2:8])
	//fmt.Printf("%x\n", frame)
	return frame
}

// CreateParameterSettingWriteFrameUint16
// not sure if this would work, ELRS seems to throw away the least-significant-byte of the fieldValue
func CreateParameterSettingWriteFrameUint16(deviceId uint8, fieldId uint8, fieldValue uint16) []uint8 {
	frame := []uint8{
		/* 0: */ uint8(UartSyncFrame),
		/* 1: */ 8,
		/* 2: */ uint8(ParameterSettingsWriteFrame),
		/* 3: */ deviceId,
		/* 4: */ uint8(LuaEndpoint),
		/* 5: */ fieldId,
		/* 6: */ uint8((fieldValue >> 8) & 0x0F),
		/* 7: */ uint8(fieldValue & 0x0F),
		/* 8: */ 0, //crc BA
		/* 9: */ 0, //crc D5
	}

	frame[8] = crc.BA(frame[2:8])
	frame[9] = crc.D5(frame[2:9])
	return frame
}

func GetRefreshRate(baudRate int32) time.Duration {
	if baudRate <= 115200 {
		return 16 * 1000 * time.Microsecond
	}

	if baudRate <= 400000 {
		return 4 * 1000 * time.Microsecond
	}

	//921600, 1870000, 3750000, 5250000
	return MinRefreshRate
}

func PackChannels(channels *[16]util.CRSFValue) (result []byte) {
	var CrossfireChBits uint8 = 11
	var buf [26]byte
	var offset uint8 = 0
	var bits util.CRSFValue
	var bitsAvailable uint8 = 0

	buf[offset] = 0xEE
	offset += 1

	buf[offset] = 24 // 1(ID) + 22 + 1(CRC)
	offset += 1

	buf[offset] = 0x16
	offset += 1

	for i := 0; i < 16; i++ {
		var val = channels[i]
		shifted := val << bitsAvailable
		bits |= shifted
		bitsAvailable += CrossfireChBits
		for bitsAvailable >= 8 {
			buf[offset] = byte(bits)
			offset += 1
			bits >>= 8
			bitsAvailable -= 8
		}
	}

	buf[25] = crc.D5(buf[2:25])
	//fmt.Printf("%d\n", channels)
	//fmt.Printf("%x\n", buf)
	return buf[:]
}

func AdjustSendRate(rate int32, offset int32) time.Duration {
	duration := time.Duration((rate+offset)/10) * time.Microsecond
	if duration <= 0 {
		return MinRefreshRate
	}

	if duration > MaxRefreshRate {
		return MaxRefreshRate
	}

	return duration
}
