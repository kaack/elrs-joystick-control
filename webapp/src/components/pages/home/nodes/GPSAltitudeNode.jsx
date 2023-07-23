// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';

import {GenericTelemetryNode} from "./GenericTelemetryNode";
import GPSAltitudeTelemetryIcon from "../../../icons/GPSAltitudeTelemetryIcon";
import {GPSData} from "../../../../pbwrap";

function GPSAltitudeNode(node) {
    return (<GenericTelemetryNode
        valueProps={{
            isValidTelemetryData: data => data instanceof GPSData,
            getTelemetryValue: data => data.getAltitude()
        }}
        node={node}/>);

}

GPSAltitudeNode.type = "gps_altitude";
GPSAltitudeNode.menuIcon = <GPSAltitudeTelemetryIcon  />;


export default GPSAltitudeNode;
