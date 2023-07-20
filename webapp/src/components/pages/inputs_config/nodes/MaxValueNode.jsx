// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';
import {SvgIcon} from "@mui/material";
import {TopOutput} from "../handles/TopOutput";

import {TruthyInputHandle} from "../handles/TruthyInputHandle";
import {FalsyInputHandle} from "../handles/FalsyInputHandle";
import {GenericInputNode} from "./GenericInputNode";

function MaxValueNode(node) {
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

MaxValueNode.type = "max";
MaxValueNode.menuIcon = <SvgIcon>
    <g>
        <path
            transform="translate(1 1) scale(1.1 1.1)"
            fill="#656565"
            d="M3.75 2.75A.75.75 0 0 1 4.5 2h1.313a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm3.938 0a.75.75 0 0 1 .75-.75h2.624a.75.75 0 0 1 0 1.5H8.438a.75.75 0 0 1-.75-.75Zm5.25 0a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.313a.75.75 0 0 1-.75-.75ZM3.75 17.25a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm6.53-12.53a.75.75 0 0 0-1.06 0L4.97 8.97a.75.75 0 1 0 1.06 1.06L9 7.06v7.19a.75.75 0 0 0 1.5 0V7.06l2.97 2.97a.75.75 0 1 0 1.06-1.06l-4.25-4.25Z"
        />
    </g>
</SvgIcon>;


export default MaxValueNode;
