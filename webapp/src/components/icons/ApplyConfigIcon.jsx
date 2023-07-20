// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import * as React from "react";

const ApplyConfigIcon = (props) => (


    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        viewBox="0 0 32 32"
        {...props}
    >
        <path
            transform="matrix(2, 0, 0, 2, -8, -8)"
            fill="none"
            stroke="#656565"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M 19.5 14.25 L 19.5 11.625 C 19.5 9.761 17.989 8.25 16.125 8.25 L 14.625 8.25 C 14.004 8.25 13.5 7.746 13.5 7.125 L 13.5 5.625 C 13.5 3.761 11.989 2.25 10.125 2.25 L 8.25 2.25 M 10.5 2.25 L 5.625 2.25 C 5.004 2.25 4.5 2.754 4.5 3.375 L 4.5 20.625 C 4.5 21.246 5.004 21.75 5.625 21.75 L 18.375 21.75 C 18.996 21.75 19.5 21.246 19.5 20.625 L 19.5 11.25 C 19.5 6.279 15.471 2.25 10.5 2.25 Z"
        />
        <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            transform="matrix(1, 0, 0, 1, 2.903276, 4.036879)"
        >
            <path
                d="M 6.66 17.673 L 10.915 21.969 L 17.298 12.517"
                style={{
                    stroke: "rgb(101, 101, 101)",
                }}
            />
        </g>
    </svg>);
export default ApplyConfigIcon;
