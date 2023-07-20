// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import * as React from "react";
import {SvgIcon} from "@mui/material";
const YawTelemetryIcon = (props) => (
    <SvgIcon
        {...props}
    >
        <path
            d="M 14.322 11.985 L 9.68 16.627 L 14.322 21.27 L 14.322 17.671 C 19.615 17.138 23.607 14.794 23.607 11.985 C 23.607 9.176 19.615 6.832 14.322 6.299 L 14.322 8.608 C 18.326 9.002 21.286 10.36 21.286 11.985 C 21.286 13.61 18.326 14.968 14.322 15.362 L 14.322 11.985 M 2.716 11.985 C 2.716 10.36 5.676 9.002 9.68 8.608 L 9.68 6.299 C 4.387 6.832 0.395 9.176 0.395 11.985 C 0.395 14.491 3.575 16.627 8.032 17.44 L 7.22 16.627 L 8.612 15.223 C 5.165 14.724 2.716 13.459 2.716 11.985 M 13.161 0.379 L 10.841 0.379 L 10.841 13.145 L 13.161 10.825 L 13.161 0.379 M 13.161 23.591 L 13.161 22.43 L 10.841 20.109 L 10.841 23.591 L 13.161 23.591 Z"
            style={{
                fill: "rgb(110, 110, 110)",
            }}
        />
    </SvgIcon>
);
export default YawTelemetryIcon;
