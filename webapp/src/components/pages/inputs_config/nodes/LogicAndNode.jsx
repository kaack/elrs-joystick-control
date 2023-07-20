// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';
import {SvgIcon} from "@mui/material";
import {TopOutput} from "../handles/TopOutput";

import {TruthyInputHandle} from "../handles/TruthyInputHandle";
import {FalsyInputHandle} from "../handles/FalsyInputHandle";
import {GenericInputNode} from "./GenericInputNode";


function LogicAndNode(node) {
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

LogicAndNode.type = "and";
LogicAndNode.menuIcon = <SvgIcon>
    <g transform="rotate(-90 12 12)">
        <path
            fill="none"
            stroke="#656565"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M22 12h-5M2 9h5m-5 6h5M9 5c6 0 8 3.5 8 7s-2 7-8 7H7V5h2z"
        />
    </g>
</SvgIcon>;


export default LogicAndNode;
