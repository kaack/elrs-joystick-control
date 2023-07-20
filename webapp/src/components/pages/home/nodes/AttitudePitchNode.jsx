// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';

import {GenericTelemetryNode} from "./GenericTelemetryNode";
import PitchTelemetryIcon from "../../../icons/PitchTelemetryIcon";
import {AttitudeData} from "../../../../pbwrap";

function AttitudePitchNode(node) {
    return (<GenericTelemetryNode
        valueProps={{
            isValidTelemetryData: data => data instanceof AttitudeData,
            getTelemetryValue: data => data.getPitch()
        }}
        node={node}/>);

}

AttitudePitchNode.type = "attitude_pitch";
AttitudePitchNode.menuIcon = <PitchTelemetryIcon />;


export default AttitudePitchNode;
