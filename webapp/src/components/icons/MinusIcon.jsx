// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import * as React from "react";
import {SvgIcon} from "@mui/material";
const MinusIcon = (props) => (
    <SvgIcon {...props}>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
        <g fill="#656565" transform="translate(0 13)">
            <path d="M0 0h32v4.2H0z" />
        </g>
    </svg>
    </SvgIcon>
);
export default MinusIcon;