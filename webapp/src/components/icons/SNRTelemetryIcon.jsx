// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import * as React from "react";
import {SvgIcon} from "@mui/material";

const SNRTelemetryIcon = (props) => (
    <SvgIcon

        {...props}
    >
        <defs />
        <defs />
        <g
            fill="currentColor"
            transform="matrix(0.115135, 0, 0, 0.115135, -3.14216, -2.742568)"
            style={{}}
        >
            <path
                d="M208 96v64H48V96Z"
                opacity={0.2}
                style={{
                    fill: "rgb(110, 110, 110)",
                }}
            />
            <path
                d="M56 96v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0Zm32-72a8 8 0 0 0-8 8v192a8 8 0 0 0 16 0V32a8 8 0 0 0-8-8Zm40 32a8 8 0 0 0-8 8v128a8 8 0 0 0 16 0V64a8 8 0 0 0-8-8Zm40 32a8 8 0 0 0-8 8v64a8 8 0 0 0 16 0V96a8 8 0 0 0-8-8Zm40-16a8 8 0 0 0-8 8v96a8 8 0 0 0 16 0V80a8 8 0 0 0-8-8Z"
                style={{
                    fill: "rgb(110, 110, 110)",
                }}
            />
        </g>
    </SvgIcon>
);
export default SNRTelemetryIcon;
