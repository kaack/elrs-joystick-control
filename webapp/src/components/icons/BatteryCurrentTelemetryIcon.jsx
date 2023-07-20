// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import * as React from "react";
import {SvgIcon} from "@mui/material";
const BatteryCurrentTelemetryIcon = (props) => (
    <SvgIcon

        {...props}
    >
        <defs />
        <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M 1.996 11.94 L 3.996 11.94 L 5.996 6.94 L 8.996 16.94 L 11.996 6.94 L 14.996 16.94 L 17.996 6.94 L 19.496 11.94 L 21.996 11.94"
            style={{
                stroke: "rgb(110, 110, 110)",
            }}
        />
    </SvgIcon>
);
export default BatteryCurrentTelemetryIcon;
