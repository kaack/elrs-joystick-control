// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import * as React from "react";
import {SvgIcon} from "@mui/material";
const GPSTelemetryIcon = (props) => (
    <SvgIcon
        {...props}
    >
        <defs />
        <circle
            cx={12}
            cy={12}
            r={4}
            style={{
                fill: "rgb(110, 110, 110)",
            }}
        />
        <path
            d="M13 4.069V2h-2v2.069A8.01 8.01 0 0 0 4.069 11H2v2h2.069A8.008 8.008 0 0 0 11 19.931V22h2v-2.069A8.007 8.007 0 0 0 19.931 13H22v-2h-2.069A8.008 8.008 0 0 0 13 4.069zM12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6s6 2.691 6 6s-2.691 6-6 6z"
            style={{
                fill: "rgb(110, 110, 110)",
            }}
        />
    </SvgIcon>
);
export default GPSTelemetryIcon;
