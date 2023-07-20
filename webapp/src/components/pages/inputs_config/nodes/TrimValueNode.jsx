// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';
import {TopOutput} from "../handles/TopOutput";
import {BottomInput} from "../handles/BottomInput";

import {LeftSideConditionHandle} from "../handles/LeftSideConditionHandle";
import {GenericInputNode} from "./GenericInputNode";
import TrimValueIcon from "../../../icons/TrimValueIcon";
import {Cond1Handle, Cond2Handle, Cond3Handle, In1Handle, In2Handle} from "../handles/util";

function TrimValueNode(node) {
    return (<GenericInputNode
        node={node}
        valueProps={{
            style: {marginTop: "-2px", marginBottom: "1px"}
        }}
        iconProps={{
            style: {}
        }}
        labelProps={{
            style: {marginTop: "2px", marginBottom: "-1px"}
        }}
    >
        <TopOutput node={node}/>

        <BottomInput handleId={In1Handle} node={node} fieldName="input" style={{left:"32%"}} />
        <BottomInput handleId={In2Handle} node={node} fieldName="sub_trim" style={{left:"70%"}} />


        <LeftSideConditionHandle handleId={Cond3Handle} node={node} fieldName={"main_trim_decrease_conditions"} style={{bottom:"unset", top: "50px"}} />
        <LeftSideConditionHandle handleId={Cond2Handle} node={node} fieldName={"main_trim_instant_conditions"}  style={{bottom:"unset", top: "32px"}} />
        <LeftSideConditionHandle handleId={Cond1Handle} node={node} fieldName={"main_trim_increase_conditions"} style={{bottom:"unset", top: "14px"}}/>


    </GenericInputNode>);
}

TrimValueNode.type = "trim";
TrimValueNode.menuIcon = <TrimValueIcon/>


export default TrimValueNode;
