// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import * as React from "react";
import {SvgIcon} from "@mui/material";
const GeneralTelemetryIcon = (props) => (
    <SvgIcon

        {...props}
    >
        <defs />
        <defs />
        <mask id="ipSMoreFour0">
            <path
                fill="#fff"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M 7.737 4.573 L 11.81 0.495 L 15.887 4.573 L 11.811 8.649 L 7.737 4.573 Z M 15.23 12.067 L 19.305 7.989 L 23.381 12.067 L 19.305 16.143 L 15.23 12.067 Z M 0.242 12.067 L 4.319 7.989 L 8.395 12.067 L 4.319 16.143 L 0.242 12.067 Z M 7.737 19.559 L 11.81 15.483 L 15.887 19.559 L 11.811 23.637 L 7.737 19.559 Z"
                style={{
                    strokeWidth: 2,
                }}
            />
        </mask>
        <path
            d="M -2.063 -1.768 L 25.605 -1.768 L 25.132 25.747 L -2.063 25.9 L -2.063 -1.768 Z"
            mask="url(#ipSMoreFour0)"
            style={{
                fill: "rgb(110, 110, 110)",
            }}
            transform="matrix(0.70712, 0.707094, -0.707094, 0.70712, 11.979284, -4.789308)"
        />
    </SvgIcon>
);
export default GeneralTelemetryIcon;
