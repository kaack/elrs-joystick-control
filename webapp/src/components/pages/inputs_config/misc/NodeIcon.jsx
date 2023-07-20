// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React, {cloneElement, useMemo} from "react";
import {nodeType} from "../nodes/constants";

export const NodeIcon = function ({node,style}) {

    const icon = useMemo(function() {
        return nodeType(node.type).menuIcon
    },[])

    return (<>
        {cloneElement(icon, {fontSize: "large", style: {marginBottom:"-5px",...style}})}
    </>);
}
