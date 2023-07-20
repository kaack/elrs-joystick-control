// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';

import {GenericTelemetryNode} from "./GenericTelemetryNode";

import BatteryPercentageTelemetryIcon from "../../../icons/BatteryPercentageTelemetryIcon";
import {BatteryData} from "../../../../pbwrap";

function BatteryPercentageNode(node) {
    return (<GenericTelemetryNode
        valueProps={{
            isValidTelemetryData: data => data instanceof BatteryData,
            getTelemetryValue: data => data.getRemaining()
        }}
        node={node}/>);

}

BatteryPercentageNode.type = "battery_percent";
BatteryPercentageNode.menuIcon = <BatteryPercentageTelemetryIcon />;


export default BatteryPercentageNode;
