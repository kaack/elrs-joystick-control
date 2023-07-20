// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';

import {TopOutput} from "../handles/TopOutput";

import {TruthyInputHandle} from "../handles/TruthyInputHandle";
import {FalsyInputHandle} from "../handles/FalsyInputHandle";
import IfElseIcon from "../../../icons/IfElseIcon";
import {LeftSideConditionHandle} from "../handles/LeftSideConditionHandle";
import {GenericInputNode} from "./GenericInputNode";

function IfElseNode(node) {
    return (<GenericInputNode
        node={node}
        valueProps={{
            style: {marginTop: "-1px", marginBottom: "1px"}
        }}
        iconProps={{
            style: {marginBottom: "-6px"}
        }}
        labelProps={{
            style: {marginTop: "3px", marginBottom: "-2px"}
        }}
    >
        <TopOutput node={node}/>

        <TruthyInputHandle node={node} fieldName={"left"}/>
        <FalsyInputHandle node={node} fieldName={"right"}/>
        <LeftSideConditionHandle node={node} fieldName={"conditions"}/>

    </GenericInputNode>);
}

IfElseNode.type = "if";
IfElseNode.menuIcon = <IfElseIcon/>;


export default IfElseNode;
