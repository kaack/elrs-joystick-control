// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';
import {SvgIcon} from "@mui/material";
import {TopOutput} from "../handles/TopOutput";

import {TruthyInputHandle} from "../handles/TruthyInputHandle";
import {FalsyInputHandle} from "../handles/FalsyInputHandle";
import {GenericInputNode} from "./GenericInputNode";

function LessThanOrEqualsNode(node) {
    return (<GenericInputNode
        node={node}
        valueProps={{
            style: {marginTop: "0px", marginBottom: "-1px"}
        }}
        iconProps={{
            style: {}
        }}
        labelProps={{
            style: {marginTop: "1px", marginBottom: "0px"}
        }}
    >
        <TopOutput node={node}/>

        <TruthyInputHandle node={node} fieldName={"left"}/>
        <FalsyInputHandle node={node} fieldName={"right"}/>
    </GenericInputNode>);
}

LessThanOrEqualsNode.type = "lte";
LessThanOrEqualsNode.menuIcon = <SvgIcon>
    <g transform="translate(24 0) scale(-1 1)">
        <path
            fill="#656565"
            fillRule="evenodd"
            d="m6.5 15.5l8.25-5.5L6.5 4.5l1-1.5L18 10L7.5 17z"
        />
        <path fill="#656565" d="M18 20.998H6v-2h12z"/>
    </g>
</SvgIcon>;


export default LessThanOrEqualsNode;
