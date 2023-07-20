// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';
import {SvgIcon} from "@mui/material";
import {TopOutput} from "../handles/TopOutput";

import {TruthyInputHandle} from "../handles/TruthyInputHandle";
import {FalsyInputHandle} from "../handles/FalsyInputHandle";
import {GenericInputNode} from "./GenericInputNode";


function LogicOrNode(node) {
    return (<GenericInputNode
        node={node}
        valueProps={{
            style: {marginTop: "0px", marginBottom: "2px"}
        }}
        iconProps={{
            style: {}
        }}
        labelProps={{
            style: {marginTop: "2px", marginBottom: "0px"}
        }}
    >
        <TopOutput node={node}/>


        <TruthyInputHandle node={node} fieldName={"left"}/>
        <FalsyInputHandle node={node} fieldName={"right"}/>
    </GenericInputNode>);
}

LogicOrNode.type = "or";
LogicOrNode.menuIcon = <SvgIcon>
    <g transform="rotate(-90 12 12)">
        <path
            fill="none"
            stroke="#656565"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M22 12h-6M2 9h7m-7 6h7M8 5c10.667 2.1 10.667 12.6 0 14c1.806-4.667 1.806-9.333 0-14z"
        />
    </g>
</SvgIcon>;


export default LogicOrNode;
