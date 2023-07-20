// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';

import {GenericTelemetryNode} from "./GenericTelemetryNode";

import BatteryVoltageTelemetryIcon from "../../../icons/BatteryVoltageTelemetryIcon";
import {BatteryData} from "../../../../pbwrap";

function BatteryVoltageNode(node) {
    return (<GenericTelemetryNode
        valueProps={{
            isValidTelemetryData: data => data instanceof BatteryData,
            getTelemetryValue: data => data.getVoltage()
        }}
        node={node}/>);

}

BatteryVoltageNode.type = "battery_voltage";
BatteryVoltageNode.menuIcon = <BatteryVoltageTelemetryIcon />;


export default BatteryVoltageNode;
