// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';

import {GenericTelemetryNode} from "./GenericTelemetryNode";
import BatteryCurrentTelemetryIcon from "../../../icons/BatteryCurrentTelemetryIcon";
import {BatteryData} from "../../../../pbwrap";

function BatteryCurrentNode(node) {
    return (<GenericTelemetryNode
        valueProps={{
            isValidTelemetryData: data => data instanceof BatteryData,
            getTelemetryValue: data => data.getCurrent()
        }}
        node={node}/>);

}

BatteryCurrentNode.type = "battery_current";
BatteryCurrentNode.menuIcon = <BatteryCurrentTelemetryIcon />;


export default BatteryCurrentNode;
