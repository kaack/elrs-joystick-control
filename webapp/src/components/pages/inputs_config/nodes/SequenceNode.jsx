// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';
import {TopOutput} from "../handles/TopOutput";

import {LeftSideConditionHandle} from "../handles/LeftSideConditionHandle";
import SequenceIcon from "../../../icons/SequenceIcon";
import {GenericInputNode} from "./GenericInputNode";

function SequenceNode(node) {

    return (<GenericInputNode
        node={node}
        valueProps={{
            style: {marginTop: "-1px", marginBottom: "2px"}
        }}
        iconProps={{
            style: {marginBottom: "-6px"}
        }}
        labelProps={{
            style: {marginTop: "4px", marginBottom: "-8px"}
        }}
    >
        <TopOutput node={node}/>


        <LeftSideConditionHandle node={node} fieldName={"conditions"}/>
    </GenericInputNode>);
}

SequenceNode.type = "seq";
SequenceNode.menuIcon = <SequenceIcon/>;


export default SequenceNode;
