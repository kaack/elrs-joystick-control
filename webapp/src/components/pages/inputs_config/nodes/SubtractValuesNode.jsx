// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';

import {SvgIcon} from "@mui/material";
import {TopOutput} from "../handles/TopOutput";

import {TruthyInputHandle} from "../handles/TruthyInputHandle";
import {FalsyInputHandle} from "../handles/FalsyInputHandle";
import {GenericInputNode} from "./GenericInputNode";

function SubtractValuesNode(node) {

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


        <TruthyInputHandle node={node} fieldName={"left"}/>
        <FalsyInputHandle node={node} fieldName={"right"}/>
    </GenericInputNode>);
}

SubtractValuesNode.type = "subtract";
SubtractValuesNode.menuIcon = <SvgIcon>
    <g>
        <path
            fill="none"
            stroke="#656565"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m2 9l6 6m-6 0l6-6m8 0l3 5.063M22 9l-4.8 9M10 12h4"
        />
    </g>
</SvgIcon>;


export default SubtractValuesNode;
