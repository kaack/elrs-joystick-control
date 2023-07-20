// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import * as React from "react";

const OpenFileIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
            width: 48,
            height: 48,
        }}
        viewBox="0 0 48 48"
        {...props}
    >
        <g
            transform="scale(1.1 1.1) translate(-2.5 -2.5)"
            fill="none"
            stroke="#656565"
            strokeLinejoin="round"
            strokeWidth={4}
        >
            <path d="M5 8a2 2 0 0 1 2-2h12l5 6h17a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8Z" />
            <path strokeLinecap="round" d="M30 25.987L24 20l-6 6m6-6v14" />
        </g>
    </svg>);
export default OpenFileIcon;
