// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from "react";

import {SvgIcon} from "@mui/material";

let FunctionIcon = (props) => (
    <SvgIcon {...props}>
        <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 19a2 2 0 0 0 2 2c2 0 2-4 3-9s1-9 3-9a2 2 0 0 1 2 2m-8 7h6m4 0l6 6m-6 0l6-6"
        />
    </SvgIcon>
);

FunctionIcon.displayName = 'Function';
FunctionIcon.muiName = 'SvgIcon';

export default FunctionIcon;


