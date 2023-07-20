// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import * as React from "react";
import {SvgIcon} from "@mui/material";

const SVGComponent = (props) => (
    <SvgIcon {...props}>
        <path
            d="M 3.907 20.397 L 5.247 20.403 C 6.587 20.409 9.268 20.42 10.499 19.052 C 11.729 17.683 11.511 14.933 11.427 13.505 C 11.343 12.076 11.395 11.967 11.411 10.671 C 11.428 9.374 11.411 6.89 12.207 5.6 C 13.003 4.311 14.613 4.216 15.418 4.169 L 16.223 4.122"
            style={{
                stroke: "rgb(101, 101, 101)",
                fill: "rgba(255, 255, 255, 0)",
                strokeWidth: 2,
            }}
        />
        <g transform="matrix(1.408258, 0, 0, 1.340355, -32.397675, -45.785267)">
            <ellipse
                cx={36.643}
                cy={37.221}
                rx={2.236}
                ry={2.286}
                style={{
                    fill: "rgba(101, 101, 101, 0)",
                    stroke: "rgb(101, 101, 101)",
                    strokeWidth: "1.31254px",
                }}
            />
        </g>
        <g transform="matrix(0.976192, 0.00928, -0.009155, 0.989513, -23.394592, -10.475846)">
            <polyline
                points="26.97 29.391 42.6 29.203"
                style={{
                    fill: "rgb(101, 101, 101)",
                    stroke: "rgb(101, 101, 101)",
                    strokeWidth: 0,
                }}
            />
        </g>
        <ellipse
            cx={3.705}
            cy={20.515}
            rx={3.227}
            ry={3.263}
            style={{
                stroke: "rgb(0, 0, 0)",
                strokeWidth: 0,
                fill: "rgb(101, 101, 101)",
            }}
        />
        <g transform="matrix(1.559367, 0, 0, 1.488159, -45.786156, -43.532127)">
            <ellipse
                cx={36.643}
                cy={37.221}
                rx={2.236}
                ry={2.286}
                style={{
                    strokeWidth: 0,
                    stroke: "rgb(101, 101, 101)",
                    fill: "rgb(101, 101, 101)",
                }}
            />
        </g>
    </SvgIcon>
);
export default SVGComponent;
