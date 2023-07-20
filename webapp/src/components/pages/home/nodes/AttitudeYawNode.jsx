// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';

import {GenericTelemetryNode} from "./GenericTelemetryNode";
import YawTelemetryIcon from "../../../icons/YawTelemetryIcon";
import {AttitudeData} from "../../../../pbwrap";


function AttitudeYawNode(node) {
    return (<GenericTelemetryNode
        valueProps={{
            isValidTelemetryData: data => data instanceof AttitudeData,
            getTelemetryValue: data => data.getYaw()
        }}

        node={node}/>);
}

AttitudeYawNode.type = "attitude_yaw";
AttitudeYawNode.menuIcon = <YawTelemetryIcon/>;


export default AttitudeYawNode;
