// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';
import {SvgIcon} from "@mui/material";

let DuplicateIcon = (props) => (
    <SvgIcon {...props}>
        <g
            fill="currentColor"
            transform="rotate(-90 256 256) translate(511 1) scale(-0.042 0.042)"
        >
            <path d="M112 80h288V56a24 24 0 0 0-24-24H66a34 34 0 0 0-34 34v310a24 24 0 0 0 24 24h24V112a32 32 0 0 1 32-32Z" />
            <path d="M456 112H136a24 24 0 0 0-24 24v320a24 24 0 0 0 24 24h320a24 24 0 0 0 24-24V136a24 24 0 0 0-24-24Zm-64 200h-80v80h-32v-80h-80v-32h80v-80h32v80h80Z" />
        </g>
    </SvgIcon>
);

DuplicateIcon.displayName = 'Duplicate';
DuplicateIcon.muiName = 'SvgIcon';

export default DuplicateIcon;

