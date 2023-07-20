// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';
import {SvgIcon} from "@mui/material";
import {TopOutput} from "../handles/TopOutput";
import {BottomInput} from "../handles/BottomInput";

import {GenericInputNode} from "./GenericInputNode";

function ButtonNode(node) {
    return (<GenericInputNode
        node={node}
        valueProps={{
            style: {marginTop: "-1px", marginBottom: "2px"}
        }}
        iconProps={{
            style: {}
        }}
        labelProps={{
            style: {marginTop: "1px", marginBottom: "-2px"}, appendField: "number"
        }}
    >

        <TopOutput node={node}/>


        <BottomInput node={node} fieldName={"input"}/>
    </GenericInputNode>);
}

ButtonNode.type = "button";
ButtonNode.menuIcon = <SvgIcon>
    <path fill="#656565"
          d="M5 8a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m7-7a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 14a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m7-7a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-7 7a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0-14a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"/>
</SvgIcon>;


export default ButtonNode;
