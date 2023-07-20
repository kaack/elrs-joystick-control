// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';
import {SvgIcon} from "@mui/material";

let DeleteXIcon = (props) => (
    <SvgIcon {...props}>
        <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.172 14.828L12.001 12m2.828-2.828L12.001 12m0 0L9.172 9.172M12.001 12l2.828 2.828M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"
        />
    </SvgIcon>
);

DeleteXIcon.displayName = 'DeleteX';
DeleteXIcon.muiName = 'SvgIcon';

export default DeleteXIcon;






