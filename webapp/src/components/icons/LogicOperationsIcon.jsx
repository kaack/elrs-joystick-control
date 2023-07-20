// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';
import {SvgIcon} from "@mui/material";

let LogicOperationsIcon = (props) => (

    <SvgIcon {...props}>

        <g transform="scale(0.5 -0.5) rotate(270)">
            <mask id="ipSSTurnRight0">
                <g fill="none" stroke="#fff" strokeWidth={4}>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M30 24H13c-4 0-7-3-7-7s3-7 7-7h19M8 38h27c4 0 7-3 7-7s-3-7-7-7h-5"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m13 43l-5-5l5-5"
                    />
                    <circle
                        cx={37.176}
                        cy={10}
                        r={5}
                        fill="#fff"
                        transform="rotate(-180 37.176 10)"
                    />
                </g>
            </mask>
            <path fill="#656565" d="M0 0h48v48H0z" mask="url(#ipSSTurnRight0)" />
        </g>
    </SvgIcon>
);

export default LogicOperationsIcon;

