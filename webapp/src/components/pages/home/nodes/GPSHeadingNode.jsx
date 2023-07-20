// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';

import {GenericTelemetryNode} from "./GenericTelemetryNode";
import GPSHeadingTelemetryIcon from "../../../icons/GPSHeadingTelemetryIcon";
import {GPSData} from "../../../../pbwrap";

function GPSHeadingNode(node) {
    return (<GenericTelemetryNode
        valueProps={{
            isValidTelemetryData: data => data instanceof GPSData,
            getTelemetryValue: data => data.getHeading()
        }}
        node={node}/>);

}

GPSHeadingNode.type = "gps_heading";
GPSHeadingNode.menuIcon = <GPSHeadingTelemetryIcon />;


export default GPSHeadingNode;
