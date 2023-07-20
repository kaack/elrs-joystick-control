// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';
import {AnimatedPaper} from "../../misc/AnimatedPaper";

export function HandleLabel(props) {
    return (<AnimatedPaper onMouseOver={() => console.log("over!")} {...props} translateX={"-50%"} translateY={"0%"} />);
}