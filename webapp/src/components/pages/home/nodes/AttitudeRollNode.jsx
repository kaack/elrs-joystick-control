// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';

import {GenericTelemetryNode} from "./GenericTelemetryNode";
import RollTelemetryIcon from "../../../icons/RollTelemetryIcon";
import {AttitudeData} from "../../../../pbwrap";

function AttitudeRollNode(node) {
    return (<GenericTelemetryNode
        valueProps={{
            isValidTelemetryData: data => data instanceof AttitudeData,
            getTelemetryValue: data => data.getRoll()
        }}
        node={node}/>);

}

AttitudeRollNode.type = "attitude_roll";
AttitudeRollNode.menuIcon = <RollTelemetryIcon />;


export default AttitudeRollNode;
