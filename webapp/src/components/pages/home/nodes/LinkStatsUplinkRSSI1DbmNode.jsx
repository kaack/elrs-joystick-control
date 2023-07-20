// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';

import {GenericTelemetryNode} from "./GenericTelemetryNode";
import RSSI1DbmTelemetryIcon from "../../../icons/RSSI1DbmTelemetryIcon";
import {LinkStatsData} from "../../../../pbwrap";

function LinkStatsUplinkRSSI1DbmNode(node) {
    return (<GenericTelemetryNode
        valueProps={{
            isValidTelemetryData: data => data instanceof LinkStatsData,
            getTelemetryValue: data => data.getUplinkRssi1()
        }}
        node={node}/>);

}

LinkStatsUplinkRSSI1DbmNode.type = "link_stats_ul_rssi1";
LinkStatsUplinkRSSI1DbmNode.menuIcon = <RSSI1DbmTelemetryIcon  />;


export default LinkStatsUplinkRSSI1DbmNode;
