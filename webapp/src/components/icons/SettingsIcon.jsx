// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from "react";

import {SvgIcon} from "@mui/material";

let SettingsIcon = (props) => (
    <SvgIcon {...props}>
        <g fill="none" stroke="#656565" strokeLinecap="round" strokeWidth={2}>
            <path d="M3 5h4m14 0H11m-8 7h12m6 0h-2M3 19h2m16 0H9" />
            <circle cx={9} cy={5} r={2} />
            <circle cx={17} cy={12} r={2} />
            <circle cx={7} cy={19} r={2} />
        </g>
    </SvgIcon>
);

SettingsIcon.displayName = 'Function';
SettingsIcon.muiName = 'SvgIcon';

export default SettingsIcon;


