// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';

let HeartbeatIcon = (props) => (

    <svg
        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        style={{
                marginRight: 4,
                marginLeft: 4,
        }}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
            <defs />
            <path
                d="M 15.357 12.342 L 14.17 9.979 L 10.844 16.62 C 10.673 16.984 10.299 17.208 9.892 17.208 C 9.485 17.208 9.112 16.984 8.94 16.62 L 7.09 12.93 L 1.336 12.93 L 1.336 18.278 C 1.336 19.454 2.299 20.417 3.475 20.417 L 20.587 20.417 C 21.763 20.417 22.726 19.454 22.726 18.278 L 22.726 12.93 L 16.31 12.93 C 15.903 12.93 15.528 12.706 15.357 12.342 Z"
                style={{
                        fill: "rgb(110, 110, 110)",
                        transformBox: "fill-box",
                        transformOrigin: "50% 50%",
                }}
            />
            <path
                d="M 20.587 3.305 L 3.475 3.305 C 2.299 3.305 1.336 4.268 1.336 5.444 L 1.336 10.792 L 7.753 10.792 C 8.159 10.792 8.534 11.016 8.705 11.38 L 9.892 13.743 L 13.218 7.102 C 13.582 6.374 14.769 6.374 15.132 7.102 L 16.972 10.792 L 22.726 10.792 L 22.726 5.444 C 22.726 4.268 21.763 3.305 20.587 3.305 Z"
                style={{
                        fill: "rgb(110, 110, 110)",
                        transformBox: "fill-box",
                        transformOrigin: "50% 50%",
                }}
            />
    </svg>);

HeartbeatIcon.displayName = 'HeartbeatIcon';
HeartbeatIcon.muiName = 'SvgIcon';

export default HeartbeatIcon;

