// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React, {useCallback, useState} from 'react';

import {GenericTelemetryNode} from "./GenericTelemetryNode";
import {AttitudeData} from "../../../../pbwrap";
import HeadingIndicatorInstrument from "../misc/HeadingIndicatorInstrument";
import HeadingIndicatorIcon from "../../../icons/HeadingIndicatorIcon";

function HeadingIndicatorNode(node) {
    const [heading, setHeading] = useState(0);


    const onValueChange = useCallback(function(data) {
        if (data instanceof AttitudeData) {
            setHeading(data.getYaw() * -1)
        }
    },[heading])

    return (<GenericTelemetryNode
        node={node}
        showValue={false}
        showIcon={false}
        selectedStyle={{borderRadius:"100%", width:"unset", height:"unset", paddingRight: "2px"}}
        unSelectedStyle={{borderRadius:"100%",  width:"unset", height:"unset", paddingRight: "2px"}}
        onValueChange={onValueChange}
    >
      <HeadingIndicatorInstrument heading={heading} style={{position: "relative"}}  ></HeadingIndicatorInstrument>
    </GenericTelemetryNode>);
}

HeadingIndicatorNode.type = "heading_indicator";
HeadingIndicatorNode.menuIcon = <HeadingIndicatorIcon />


export default HeadingIndicatorNode;
