// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React, {useCallback, useState} from 'react';
import {GenericTelemetryNode} from "./GenericTelemetryNode";
import {BatteryData} from "../../../../pbwrap";
import FuelIndicatorInstrument from "../misc/FuelIndicatorInstrument";
import FuelIndicatorIcon from "../../../icons/FuelIndicatorIcon";



function FuelIndicatorNode(node) {
    const [voltage, setVoltage] = useState(0);
    const [percent, setPercent] = useState(0);


    const onValueChange = useCallback(function(data) {
        if (data instanceof BatteryData) {
            setVoltage(data.getVoltage())
            setPercent(data.getRemaining());
        }
    },[voltage, percent])

    return (<GenericTelemetryNode
        node={node}
        showValue={false}
        showIcon={false}
        selectedStyle={{borderRadius:"100%", width:"unset", height:"unset", paddingRight: "2px"}}
        unSelectedStyle={{borderRadius:"100%",  width:"unset", height:"unset", paddingRight: "2px"}}
        onValueChange={onValueChange}
    >
      <FuelIndicatorInstrument percent={percent} voltage={voltage} style={{position: "relative"}}  ></FuelIndicatorInstrument>
    </GenericTelemetryNode>);
}

FuelIndicatorNode.type = "fuel_indicator";
FuelIndicatorNode.menuIcon = <FuelIndicatorIcon />


export default FuelIndicatorNode;
