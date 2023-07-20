// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React, {useCallback, useState} from 'react';

import {GenericTelemetryNode} from "./GenericTelemetryNode";
import PitchRollIndicatorInstrument from "../misc/PitchRollIndicatorInstrument";
import AttitudeIndicatorIcon from "../../../icons/AttitudeIndicatorIcon";
import {AttitudeData} from "../../../../pbwrap";

function AttitudeIndicatorNode(node) {
    const [pitch, setPitch] = useState(0);
    const [roll, setRoll] = useState(0);


    const onValueChange = useCallback(function(data) {
        if (data instanceof AttitudeData) {
            setPitch(data.getPitch() * -1)
            setRoll(data.getRoll());
        }
    },[pitch, roll])

    return (<GenericTelemetryNode
        node={node}
        showValue={false}
        showIcon={false}
        selectedStyle={{borderRadius:"100%", width:"unset", height:"unset", paddingRight: "2px"}}
        unSelectedStyle={{borderRadius:"100%",  width:"unset", height:"unset", paddingRight: "2px"}}
        onValueChange={onValueChange}
    >
      <PitchRollIndicatorInstrument pitch={pitch} roll={roll} style={{position: "relative"}}  ></PitchRollIndicatorInstrument>
    </GenericTelemetryNode>);
}

AttitudeIndicatorNode.type = "attitude_indicator";
AttitudeIndicatorNode.menuIcon = <AttitudeIndicatorIcon />


export default AttitudeIndicatorNode;
