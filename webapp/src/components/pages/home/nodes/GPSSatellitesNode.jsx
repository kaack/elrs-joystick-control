// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';

import {GenericTelemetryNode} from "./GenericTelemetryNode";
import GPSSatellitesTelemetryIcon from "../../../icons/GPSSatellitesTelemetryIcon";
import {GPSData} from "../../../../pbwrap";

function GPSSatellitesNode(node) {
    return (<GenericTelemetryNode
        valueProps={{
            isValidTelemetryData: data => data instanceof GPSData,
            getTelemetryValue: data => data.getSatellites()
        }}
        node={node}/>);

}

GPSSatellitesNode.type = "gps_satellites";
GPSSatellitesNode.menuIcon = <GPSSatellitesTelemetryIcon />;


export default GPSSatellitesNode;
