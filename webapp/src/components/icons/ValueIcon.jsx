// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import * as React from "react";
const ValueIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
            width: 22,
            height: 32,
        }}
        viewBox="0 0 22 32"
        {...props}
    >
        <path
            transform="scale(0.88 0.80) translate(-3.5 3.5)"
            fill="#656565"
            d="M26 28h-4v-2h4V6h-4V4h4a2.002 2.002 0 0 1 2 2v20a2.002 2.002 0 0 1-2 2zm-6-17h-2l-2 3.897L14 11h-2l2.905 5L12 21h2l2-3.799L18 21h2l-2.902-5L20 11zM10 28H6a2.002 2.002 0 0 1-2-2V6a2.002 2.002 0 0 1 2-2h4v2H6v20h4z"
        />
    </svg>
);
export default ValueIcon;
