// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';
import {SvgIcon} from "@mui/material";
import {TopOutput} from "../handles/TopOutput";
import {BottomInput} from "../handles/BottomInput";

import {GenericInputNode} from "./GenericInputNode";

function SwitchNode(node) {

    return (<GenericInputNode
        node={node}
        valueProps={{
            style: {marginTop: "0px", marginBottom: "0px"}
        }}
        iconProps={{
            style: {marginTop: "5px"}
        }}
        labelProps={{
            style: {marginTop: "0px", marginBottom: "0px"}
        }}
    >
        <TopOutput node={node}/>

        <BottomInput node={node} fieldName={"cases"}/>
    </GenericInputNode>);
}

SwitchNode.type = "switch";
SwitchNode.menuIcon = <SvgIcon>
    <g transform="rotate(270 11 11) ">
        <path fill="#656565"
              d="m22 12-4 4-1.41-1.41L18.17 13h-5.23c-.34 3.1-2.26 5.72-4.94 7.05C7.96 21.69 6.64 23 5 23c-1.66 0-3-1.34-3-3s1.34-3 3-3c.95 0 1.78.45 2.33 1.14 1.9-1.03 3.26-2.91 3.58-5.14h-3.1C7.4 14.16 6.3 15 5 15c-1.66 0-3-1.34-3-3s1.34-3 3-3c1.3 0 2.4.84 2.82 2h3.1c-.32-2.23-1.69-4.1-3.59-5.14C6.78 6.55 5.95 7 5 7 3.34 7 2 5.66 2 4s1.34-3 3-3c1.64 0 2.96 1.31 2.99 2.95 2.68 1.33 4.6 3.95 4.94 7.05h5.23l-1.58-1.59L18 8l4 4z"></path>
    </g>
</SvgIcon>;

export default SwitchNode;
