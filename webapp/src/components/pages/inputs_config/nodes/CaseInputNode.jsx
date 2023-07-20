// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';

import {SvgIcon} from "@mui/material";
import {TopOutput} from "../handles/TopOutput";
import {BottomInput} from "../handles/BottomInput";

import {LeftSideConditionHandle} from "../handles/LeftSideConditionHandle";
import {GenericInputNode} from "./GenericInputNode";

function CaseInputNode(node) {
    return (<GenericInputNode
        node={node}
        valueProps={{
            style: {marginTop: "-2px", marginBottom: "1px"}
        }}
        iconProps={{
            style: {}
        }}
        labelProps={{
            style: {marginTop: "1px", marginBottom: "-1px"}
        }}
    >
        <TopOutput node={node}/>
        <BottomInput node={node} fieldName="input"/>
        <LeftSideConditionHandle node={node} fieldName="conditions"/>
    </GenericInputNode>);
}

CaseInputNode.type = "case";
CaseInputNode.menuIcon = <SvgIcon>
    <g transform="scale(0.1 0.1) translate(170 15) rotate(90 0 0) ">
        <circle fill="#656565" cx={167.098} cy={48.49} r={43.269}/>
        <path fill="#656565"
              d="M107.443,32.983L55.51,32.981V12.867c0-0.934-0.521-1.79-1.35-2.22c-0.829-0.429-1.827-0.361-2.591,0.177L1.06,46.445 C0.396,46.914,0,47.676,0,48.488s0.394,1.574,1.059,2.043l50.51,35.625c0.431,0.303,0.934,0.457,1.441,0.457 c0.393,0,0.788-0.093,1.15-0.28c0.829-0.43,1.35-1.286,1.35-2.22V63.995l51.934,0.002c0.662,0,1.299-0.264,1.768-0.733 c0.469-0.469,0.732-1.104,0.732-1.767V35.483C109.943,34.103,108.824,32.983,107.443,32.983z"/>
    </g>
</SvgIcon>;


export default CaseInputNode;
