// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import * as React from "react";
import {SvgIcon} from "@mui/material";
const PlusIcon = (props) => (
    <SvgIcon {...props}>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
        <path fill="#656565" d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" />
    </svg>
    </SvgIcon>
);
export default PlusIcon;