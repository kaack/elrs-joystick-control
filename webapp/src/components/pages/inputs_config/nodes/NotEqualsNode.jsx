// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';
import {SvgIcon} from "@mui/material";
import {TopOutput} from "../handles/TopOutput";

import {TruthyInputHandle} from "../handles/TruthyInputHandle";
import {FalsyInputHandle} from "../handles/FalsyInputHandle";
import {GenericInputNode} from "./GenericInputNode";

function NotEqualsNode(node) {

    return (<GenericInputNode
        node={node}
        valueProps={{
            style: {marginTop: "0px", marginBottom: "-4px"}
        }}
        iconProps={{
            style: {marginBottom: "-12px"}
        }}
        labelProps={{
            style: {marginTop: "4px", marginBottom: "0px"}
        }}
    >
        <TopOutput node={node}/>


        <TruthyInputHandle node={node} fieldName={"left"}/>
        <FalsyInputHandle node={node} fieldName={"right"}/>
    </GenericInputNode>);
}

NotEqualsNode.type = "neq";
NotEqualsNode.menuIcon = <SvgIcon>
    <path fill="#656565" d="M19 9.998H5v-2h14zm0 6H5v-2h14z"/>
    <path fill="#656565" d="m14.08 4.605l1.84.79l-6 14l-1.84-.79z"/>
</SvgIcon>;


export default NotEqualsNode;
