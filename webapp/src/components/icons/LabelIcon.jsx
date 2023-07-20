// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import * as React from "react";
const LabelIcon = (props) => (


    <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
            width: 18,
            height: 18,
        }}
        viewBox="0 0 18 18"
        {...props}
    >
        <path
            transform="scale(1.1 1.1) translate(0.4 0.4)"
            fill="#656565"
            d="M12.5 4.9c-1.4 0-2.5.8-2.6.9l1.2 1.6s.7-.5 1.4-.5c1.4 0 1.5 1.2 1.5 1.6c-.4-.1-1.1-.3-2-.1c-1.4.3-2.8 2-2.1 3.9c.7 1.8 3.1 2.1 4.1.6v1h2V8.6c0-2.7-1.9-3.7-3.5-3.7zm-1 6.5C11.4 9.5 13 9.5 14 9.6v1c0 1.2-2.3 2.3-2.5.8zM6.9 14H9L5.8 2H3.1L0 14h2.1l1-4h2.7l1.1 4zM3.6 8l.8-3.2l.9 3.2H3.6z"
        />
    </svg>);
export default LabelIcon;
