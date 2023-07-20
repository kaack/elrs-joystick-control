// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import * as React from "react";
import {SvgIcon} from "@mui/material";
const PitchTelemetryIcon = (props) => (
    <SvgIcon

        {...props}
    >
        <path
            d="M 14.322 11.824 L 9.68 7.182 L 14.322 2.539 L 14.322 6.138 C 19.615 6.671 23.607 9.015 23.607 11.824 C 23.607 14.633 19.615 16.977 14.322 17.51 L 14.322 15.201 C 18.326 14.807 21.286 13.449 21.286 11.824 C 21.286 10.199 18.326 8.841 14.322 8.447 L 14.322 11.824 M 2.716 11.824 C 2.716 13.449 5.676 14.807 9.68 15.201 L 9.68 17.51 C 4.387 16.977 0.395 14.633 0.395 11.824 C 0.395 9.318 3.575 7.182 8.032 6.369 L 7.22 7.182 L 8.612 8.586 C 5.165 9.085 2.716 10.35 2.716 11.824 M 13.161 23.43 L 10.841 23.43 L 10.841 10.664 L 13.161 12.984 L 13.161 23.43 M 13.161 0.218 L 13.161 1.379 L 10.841 3.7 L 10.841 0.218 L 13.161 0.218 Z"
            style={{
                fill: "rgb(110, 110, 110)",
            }}
            transform="matrix(-0.000084, -1, 1, -0.000084, 0.178009, 23.825993)"
        />
    </SvgIcon>
);
export default PitchTelemetryIcon;
