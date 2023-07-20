// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';
import {SvgIcon} from "@mui/material";
import {TopOutput} from "../handles/TopOutput";

import {FalsyInputHandle} from "../handles/FalsyInputHandle";
import {TruthyInputHandle} from "../handles/TruthyInputHandle";
import {GenericInputNode} from "./GenericInputNode";

function GreaterThanNode(node) {

    return (<GenericInputNode
        node={node}
        valueProps={{
            style: {marginTop: "0px", marginBottom: "-4px"}
        }}
        iconProps={{
            style: {}
        }}
        labelProps={{
            style: {marginTop: "-4px", marginBottom: "0px"}
        }}
    >
        <TopOutput node={node}/>

        <TruthyInputHandle node={node} fieldName={"left"}/>
        <FalsyInputHandle node={node} fieldName={"right"}/>

    </GenericInputNode>);
}

GreaterThanNode.type = "gt";
GreaterThanNode.menuIcon = <SvgIcon>
    <g fill="#656565" transform="rotate(180 12, 12)">
        <path d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
    </g>
</SvgIcon>;


export default GreaterThanNode;
