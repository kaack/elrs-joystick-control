// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import * as React from "react";
import {SvgIcon} from "@mui/material";
const BatteryPercentageTelemetryIcon = (props) => (
    <SvgIcon

        {...props}
    >
        <path
            d="M 17.354 2.814 C 18.196 2.814 18.88 3.497 18.88 4.341 L 18.88 21.938 C 18.88 22.777 18.192 23.465 17.354 23.465 L 6.638 23.465 C 5.8 23.465 5.112 22.777 5.112 21.938 L 5.112 4.341 C 5.112 3.497 5.795 2.814 6.638 2.814 L 8.555 2.814 L 8.555 0.519 L 15.437 0.519 L 15.437 2.814 L 17.354 2.814 M 7.407 13.139 L 16.585 13.139 L 16.585 5.108 L 7.407 5.108 L 7.407 13.139 Z"
            style={{
                fill: "rgb(110, 110, 110)",
            }}
        />
    </SvgIcon>
);
export default BatteryPercentageTelemetryIcon;
