// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';

import {GenericTelemetryNode} from "./GenericTelemetryNode";
import GPSGroundSpeedTelemetryIcon from "../../../icons/GPSGroundSpeedTelemetryIcon";
import {GPSData} from "../../../../pbwrap";

function GPSGroundSpeedNode(node) {
    return (<GenericTelemetryNode
        valueProps={{
            isValidTelemetryData: data => data instanceof GPSData,
            getTelemetryValue: data => data.getGroundSpeed()
        }}
        node={node}/>);

}

GPSGroundSpeedNode.type = "gps_ground_speed";
GPSGroundSpeedNode.menuIcon = <GPSGroundSpeedTelemetryIcon />;


export default GPSGroundSpeedNode;
