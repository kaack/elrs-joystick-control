// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';

import {GenericTelemetryNode} from "./GenericTelemetryNode";
import FlightModeTelemetryIcon from "../../../icons/FlightModeTelemetryIcon";
import {FlightModeData} from "../../../../pbwrap";

function FlightModeNode(node) {
    return (<GenericTelemetryNode
        valueProps={{
            isValidTelemetryData: data => data instanceof FlightModeData,
            getTelemetryValue: data => data.getMode()
        }}
        node={node}/>);

}

FlightModeNode.type = "flight_mode";
FlightModeNode.menuIcon = <FlightModeTelemetryIcon  />;


export default FlightModeNode;
