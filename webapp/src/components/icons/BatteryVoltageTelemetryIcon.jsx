// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import * as React from "react";
import {SvgIcon} from "@mui/material";
const BatteryVoltageTelemetryIcon = (props) => (
    <SvgIcon

        {...props}
    >
        <defs />
        <path
            d="M 17.356 2.985 L 15.476 2.985 L 15.476 0.734 L 8.722 0.734 L 8.722 2.985 L 6.842 2.985 C 6.015 2.985 5.344 3.656 5.344 4.482 L 5.344 21.742 C 5.344 22.574 6.019 23.25 6.842 23.25 L 17.345 23.25 C 18.179 23.25 18.854 22.574 18.854 21.753 L 18.854 4.482 C 18.854 3.662 18.179 2.985 17.356 2.985 M 10.973 20.999 L 10.973 14.807 L 8.722 14.807 L 13.225 6.364 L 13.225 12.555 L 15.476 12.555"
            style={{
                fill: "rgb(110, 110, 110)",
            }}
        />
    </SvgIcon>
);
export default BatteryVoltageTelemetryIcon;
