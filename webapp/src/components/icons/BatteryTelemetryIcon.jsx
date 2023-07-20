// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import * as React from "react";
import {SvgIcon} from "@mui/material";
const BatteryTelemetryIcon = (props) => (
    <SvgIcon

        {...props}
    >
        <defs />
        <path
            d="M 10.139 25.001 L 10.139 14.706 L 4.988 14.706 L 13.57 -0.739 L 13.57 9.555 L 18.719 9.555 L 10.139 25.001 Z"
            style={{
                fill: "rgb(110, 110, 110)",
            }}
            transform="matrix(0.920923, 0.389745, -0.389745, 0.920923, 5.665337, -3.660557)"
        />
    </SvgIcon>
);
export default BatteryTelemetryIcon;
