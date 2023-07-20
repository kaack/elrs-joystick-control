// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';

import {GenericTelemetryNode} from "./GenericTelemetryNode";

import BatteryFuelConsumedTelemetryIcon from "../../../icons/BatteryFuelConsumedTelemetryIcon";
import {BatteryData} from "../../../../pbwrap";

function BatteryFuelConsumedNode(node) {
    return (<GenericTelemetryNode
        valueProps={{
            isValidTelemetryData: data => data instanceof BatteryData,
            getTelemetryValue: data => data.getFuel()
        }}
        node={node}/>);

}

BatteryFuelConsumedNode.type = "battery_fuel";
BatteryFuelConsumedNode.menuIcon = <BatteryFuelConsumedTelemetryIcon />;


export default BatteryFuelConsumedNode;
