// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';
import {SvgIcon} from "@mui/material";
import {TopOutput} from "../handles/TopOutput";
import {BottomInput} from "../handles/BottomInput";

import {GenericInputNode} from "./GenericInputNode";

function ChannelNode(node) {
    return (<GenericInputNode
        node={node}
        valueProps={{
            style: {marginTop: "0px", marginBottom: "-4px"}
        }}
        iconProps={{
            style: {}
        }}
        labelProps={{
            style: {marginTop: "-4px", marginBottom: "0px"}, appendField: "number"
        }}
    >
        <TopOutput node={node}/>

        <BottomInput node={node} fieldName={"input"}/>
    </GenericInputNode>);
}

ChannelNode.type = "channel";
ChannelNode.menuIcon = <SvgIcon>
    <path fill="#656565"
          d="M2.231 10.386a2.75 2.75 0 0 1 2.676-3.387H19.09a2.75 2.75 0 0 1 2.675 3.388l-1.074 4.502A2.75 2.75 0 0 1 18.017 17H5.978a2.75 2.75 0 0 1-2.675-2.113L2.23 10.386ZM7 11.5A.75.75 0 1 0 7 10a.75.75 0 0 0 0 1.5Zm3.25-.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Zm-2 3.25a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm3.25-.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Zm1.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm3.25-.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0ZM12 11.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm3.25-.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Zm1.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Z"/>
</SvgIcon>;

export default ChannelNode;
