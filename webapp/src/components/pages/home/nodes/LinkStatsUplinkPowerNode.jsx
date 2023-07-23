// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';

import {GenericTelemetryNode} from "./GenericTelemetryNode";
import SignalPowerTelemetryIcon from "../../../icons/SignalPowerTelemetryIcon";
import {LinkStatsData} from "../../../../pbwrap";

function LinkStatsUplinkPowerNode(node) {
    return (<GenericTelemetryNode
        valueProps={{
            isValidTelemetryData: data => data instanceof LinkStatsData,
            getTelemetryValue: data => data.getUplinkPower()
        }}
        node={node}/>);

}

LinkStatsUplinkPowerNode.type = "link_stats_ul_power";
LinkStatsUplinkPowerNode.menuIcon = <SignalPowerTelemetryIcon  />;


export default LinkStatsUplinkPowerNode;
