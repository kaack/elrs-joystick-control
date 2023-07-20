// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import * as React from "react";
import {SvgIcon} from "@mui/material";

const SaveFileIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
            width: 22,
            height: 22,
        }}
        viewBox="0 0 22 22"
        {...props}
    >
        <g
            transform="scale(0.5 0.5) translate(-2 -2.5)"
            fill="none"
            stroke="#656565"
            strokeLinejoin="round"
            strokeWidth={4}
        >
            <path d="M5 8a2 2 0 0 1 2-2h12l5 6h17a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8Z" />
            <path strokeLinecap="round" d="m30 28l-6.007 6L18 28.013M24 20v14" />
        </g>
    </svg>

 );
export default SaveFileIcon;
