// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';

import {GenericTelemetryNode} from "./GenericTelemetryNode";
import ActiveAntennaTelemetryIcon from "../../../icons/ActiveAntennaTelemetryIcon";
import {LinkStatsData} from "../../../../pbwrap";

function LinkStatsActiveAntennaNode(node) {
    return (<GenericTelemetryNode
        valueProps={{
            isValidTelemetryData: data => data instanceof LinkStatsData,
            getTelemetryValue: data => data.getActiveAntenna()
        }}
        node={node}/>);

}

LinkStatsActiveAntennaNode.type = "rx_antenna";
LinkStatsActiveAntennaNode.menuIcon = <ActiveAntennaTelemetryIcon  />;


export default LinkStatsActiveAntennaNode;
