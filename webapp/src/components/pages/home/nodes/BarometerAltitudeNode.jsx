// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';

import {GenericTelemetryNode} from "./GenericTelemetryNode";
import BarometerAltitudeTelemetryIcon from "../../../icons/BarometerAltitudeTelemetryIcon";
import {BarometerData, BarometerVariometerData} from "../../../../pbwrap";

function BarometerAltitudeNode(node) {
    return (<GenericTelemetryNode
        valueProps={{
            isValidTelemetryData: data => data instanceof BarometerVariometerData || data instanceof BarometerData,
            getTelemetryValue: data => data.getAltitude()
        }}
        node={node}/>);

}

BarometerAltitudeNode.type = "barometer_altitude";
BarometerAltitudeNode.menuIcon = <BarometerAltitudeTelemetryIcon  />;


export default BarometerAltitudeNode;
