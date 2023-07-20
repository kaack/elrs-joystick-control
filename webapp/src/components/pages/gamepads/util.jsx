// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import i18n from "../../misc/I18n";

import {
    CRSFToPercent,
    DshotToPercent,
    PWMtoPercent,
    RawToCRSF,
    RawToDshot,
    RawToPercent,
    RawToPWM, RawToRaw
} from "../../misc/formats";

export const AxisDisplayFormats = [
    {
        key: "RAW",
        value: RawToRaw,
        scale: RawToPercent,
        label: i18n("format-raw-desc")
    },
    {
        key: "PWM",
        value: RawToPWM,
        scale: PWMtoPercent,
        label: i18n("format-pwm-desc")
    },
    {
        key: "DSHOT",
        value: RawToDshot,
        scale: DshotToPercent,
        label: i18n("format-dshot-desc")
    },
    {
        key: "CRSF",
        value: RawToCRSF,
        scale: CRSFToPercent,
        label: i18n("format-crsf-desc")
    },

]

export function AxisFormatChoices(formats) {
    return formats.map((format) => {
        return {
            link: format.key.toUpperCase(),
            value: format.key,
            label: format.label
        }
    });
}