// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';

import {GenericTelemetryNode} from "./GenericTelemetryNode";
import GPSHomeDistanceTelemetryIcon from "../../../icons/GPSHomeDistanceTelemetryIcon";

// TODO: implement this
// this is not really a value that comes through telemetry
// this is a computed valued based on the initial latitude and longitude

function GPSHomeDistanceNode(node) {
    return (<GenericTelemetryNode
        node={node}/>);

}

GPSHomeDistanceNode.type = "gps_home_distance";
GPSHomeDistanceNode.menuIcon = <GPSHomeDistanceTelemetryIcon />;


export default GPSHomeDistanceNode;
