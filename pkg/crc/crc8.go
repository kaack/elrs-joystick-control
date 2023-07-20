// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package crc

import "github.com/sigurn/crc8"

var BATable *crc8.Table

func BA(data []uint8) uint8 {
	if BATable == nil {
		BATable = crc8.MakeTable(crc8.Params{Poly: 0xBA, RefIn: true, RefOut: true, Check: 0x25, Name: "0xBA"})
	}
	return crc8.Checksum(data, BATable)
}

var D5Table *crc8.Table

func D5(data []uint8) uint8 {
	if D5Table == nil {
		D5Table = crc8.MakeTable(crc8.CRC8_DVB_S2)
	}
	return crc8.Checksum(data, D5Table)
}
