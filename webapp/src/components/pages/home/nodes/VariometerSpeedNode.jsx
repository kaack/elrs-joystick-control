// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';

import {GenericTelemetryNode} from "./GenericTelemetryNode";
import VariometerSpeedTelemetryIcon from "../../../icons/VariometerSpeedTelemetryIcon";
import {VariometerData} from "../../../../pbwrap";

function VariometerSpeedNode(node) {
    return (<GenericTelemetryNode
        valueProps={{
            isValidTelemetryData: data => data instanceof VariometerData,
            getTelemetryValue: data => data.getVerticalSpeed()
        }}
        node={node}/>);

}

VariometerSpeedNode.type = "variometer_speed";
VariometerSpeedNode.menuIcon = <VariometerSpeedTelemetryIcon  />;


export default VariometerSpeedNode;
