// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later


import {CRSFMax, CRSFMin, DShotMax, DShotMin, PWMMax, PWMMin, RawMax, RawMin} from "./constants";
import {MapRange} from "./util";

export function CRSFToCRSF(x) {
    //this looks stupid, but it just makes sure the value stays within range
    return MapRange(x, CRSFMin, CRSFMax, CRSFMin, CRSFMax)
}

export function CRSFToRaw(x) {
    return MapRange(x, CRSFMin, CRSFMax, RawMin, RawMax)
}

export function CRSFToPWM(x) {
    return MapRange(x, CRSFMin, CRSFMax, PWMMin, PWMMax)
}

export function CRSFToDshot(x) {
    if (x === 0) {
        return 0; //0 is reserved for disarmed
    } else {
        return MapRange(x, CRSFMin + 1, CRSFMax, DShotMin, DShotMax)
    }
}

export function RawToRaw(x) {
    //this looks stupid, but it just makes sure the value stays within range
    return MapRange(x, RawMin, RawMax, RawMin, RawMax)
}

export function RawToPWM(x) {
    return MapRange(x, RawMin, RawMax, PWMMin, PWMMax)
}

export function RawToCRSF(x) {
    return MapRange(x, RawMin, RawMax, CRSFMin, CRSFMax)
}

export function PWMtoPercent(x) {
    return MapRange(x, PWMMin, PWMMax, 0, 100)
}

export function CRSFToPercent(x) {
    return MapRange(x, CRSFMin, CRSFMax, 0, 100)
}

export function RawToPercent(x) {
    return MapRange(x, RawMin, RawMax, 0, 100)
}

export function RawToDshot(x) {
    if (x === RawMin) {
        return 0; //0 is reserved for disarmed
    } else {
        return MapRange(x, RawMin + 1, RawMax, DShotMin, DShotMax)
    }
}


export function DshotToPercent(x) {
    if (x === 0) {
        return 0
    } else {
        return MapRange(x, DShotMin, DShotMax, 1, 100)
    }
}