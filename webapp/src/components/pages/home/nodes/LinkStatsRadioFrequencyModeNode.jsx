// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';

import {GenericTelemetryNode} from "./GenericTelemetryNode";
import RFModeTelemetryIcon from "../../../icons/RFModeTelemetryIcon";
import {LinkStatsData} from "../../../../pbwrap";

function LinkStatsRadioFrequencyModeNode(node) {
    return (<GenericTelemetryNode
        valueProps={{
            isValidTelemetryData: data => data instanceof LinkStatsData,
            getTelemetryValue: data => data.getRadioFrequencyMode()
        }}
        node={node}/>);

}

LinkStatsRadioFrequencyModeNode.type = "link_stats_rf_mode";
LinkStatsRadioFrequencyModeNode.menuIcon = <RFModeTelemetryIcon  />;


export default LinkStatsRadioFrequencyModeNode;
