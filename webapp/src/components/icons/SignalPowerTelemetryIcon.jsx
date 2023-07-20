// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import * as React from "react";
import {SvgIcon} from "@mui/material";
const SignalPowerTelemetryIcon = (props) => (
    <SvgIcon

        {...props}
    >
        <path
            d="M 11.988 23.518 L 11.978 23.505 L 0.056 6.155 C 0.518 5.748 5.098 1.367 11.988 1.367 C 18.864 1.367 23.458 5.748 23.918 6.155 L 11.997 23.505 L 11.988 23.518 Z M 15.925 9.344 L 12.866 9.344 L 12.866 2.595 L 8.298 13.1 L 11.476 13.1 L 11.476 19.852 L 15.925 9.344 Z"
            style={{
                fill: "rgb(110, 110, 110)",
                transformBox: "fill-box",
                transformOrigin: "50% 50%",
            }}
        />
    </SvgIcon>
);
export default SignalPowerTelemetryIcon;
