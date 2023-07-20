// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';

import {SvgIcon} from "@mui/material";
import {TopOutput} from "../handles/TopOutput";
import {BottomInput} from "../handles/BottomInput";

import {GenericInputNode} from "./GenericInputNode";

function InvertValueNode(node) {
    return (<GenericInputNode
        node={node}
        valueProps={{
            style: {marginTop: "0px", marginBottom: "2px"}
        }}
        iconProps={{
            style: {marginBottom: "-6px"}
        }}
        labelProps={{
            style: {marginTop: "2px", marginBottom: "0px"}
        }}
    >
        <TopOutput node={node}/>

        <BottomInput node={node} fieldName={"input"}/>
    </GenericInputNode>);
}

InvertValueNode.type = "invert";
InvertValueNode.menuIcon = <SvgIcon>
    <g>
        <path
            fill="#656565"
            d="M12.984 15a1 1 0 0 0 1.848.53l2.688-2.687a1 1 0 0 0-1.415-1.414l-1.12 1.12V5a1 1 0 0 0-2 0v10Zm-1.968-6a1 1 0 0 0-1.848-.53l-2.687 2.687a1 1 0 1 0 1.414 1.414l1.121-1.12V19a1 1 0 1 0 2 0V9Z"
        />
    </g>
</SvgIcon>;


export default InvertValueNode;
