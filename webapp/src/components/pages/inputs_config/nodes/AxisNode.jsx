// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';
import {SvgIcon} from "@mui/material";
import {TopOutput} from "../handles/TopOutput";
import {BottomInput} from "../handles/BottomInput";

import {GenericInputNode} from "./GenericInputNode";

function AxisNode(node) {
    return (<GenericInputNode
        node={node}
        valueProps={{
            style: {marginTop: "-2px", marginBottom: "1px"}
        }}
        iconProps={{
            style: {}
        }}
        labelProps={{
            style: {marginTop: "2px", marginBottom: "-2px"}, appendField: "number"
        }}
    >

        <TopOutput node={node}/>


        <BottomInput node={node} fieldName={"input"}/>
    </GenericInputNode>);
}

AxisNode.type = "axis";
AxisNode.menuIcon = <SvgIcon>
    <path fill="#656565"
          d="m12 2l4 4h-3v7.85l6.53 3.76L21 15.03l1.5 5.47l-5.5 1.46l1.53-2.61L12 15.58l-6.53 3.77L7 21.96L1.5 20.5L3 15.03l1.47 2.58L11 13.85V6H8l4-4Z"/>
</SvgIcon>;

export default AxisNode;
