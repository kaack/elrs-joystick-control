// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';
import {SvgIcon} from "@mui/material";
import {TopOutput} from "../handles/TopOutput";

import {GenericInputNode} from "./GenericInputNode";

function NumberNode(node) {

    return (<GenericInputNode
        node={node}
        valueProps={{
            style: {marginTop: "-2px", marginBottom: "-6px"}
        }}
        iconProps={{
            style: {marginBottom: "-6px"}
        }}
        labelProps={{
            style: {marginTop: "-4px", marginBottom: "-6px"}, appendField: "output"
        }}
    >
        <TopOutput node={node}/>


    </GenericInputNode>);
}

NumberNode.type = "number";
NumberNode.menuIcon = <SvgIcon>
    <path fill="#656565"
          d="M4 17V9H2V7h4v10H4m18-2a2 2 0 0 1-2 2h-4v-2h4v-2h-2v-2h2V9h-4V7h4a2 2 0 0 1 2 2v1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1 1.5 1.5V15m-8 0v2H8v-4a2 2 0 0 1 2-2h2V9H8V7h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v2h4Z"/>
</SvgIcon>;


export default NumberNode;
