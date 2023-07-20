// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import i18n from "../../misc/I18n";

import {
    CRSFToCRSF,
    CRSFToDshot,
    CRSFToPercent,
    CRSFToPWM,
    CRSFToRaw,
    DshotToPercent,
    PWMtoPercent,
    RawToPercent
} from "../../misc/formats";

export const ChannelDisplayFormats = [
    {
        key: "CRSF",
        value: CRSFToCRSF,
        scale: CRSFToPercent,
        label: i18n("format-crsf-desc")
    },
    {
        key: "PWM",
        value: CRSFToPWM,
        scale: PWMtoPercent,
        label: i18n("format-pwm-desc")
    },
    {
        key: "DSHOT",
        value: CRSFToDshot,
        scale: DshotToPercent,
        label: i18n("format-dshot-desc")
    },
    {
        key: "RAW",
        value: CRSFToRaw,
        scale: RawToPercent,
        label: i18n("format-raw-desc")
    }

]

export function ChannelFormatChoices(formats) {
    return formats.map((format) => {
        return {
            link: format.key.toUpperCase(),
            value: format.key,
            label: format.label
        }
    });
}