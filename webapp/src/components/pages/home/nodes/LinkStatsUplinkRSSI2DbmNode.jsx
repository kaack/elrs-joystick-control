// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';

import {GenericTelemetryNode} from "./GenericTelemetryNode";
import RSSI2DbmTelemetryIcon from "../../../icons/RSSI2DbmTelemetryIcon";
import {LinkStatsData} from "../../../../pbwrap";

function LinkStatsUplinkRSSI2DbmNode(node) {
    return (<GenericTelemetryNode
        valueProps={{
            isValidTelemetryData: data => data instanceof LinkStatsData,
            getTelemetryValue: data => data.getUplinkRssi2()
        }}
        node={node}/>);

}

LinkStatsUplinkRSSI2DbmNode.type = "link_stats_ul_rssi2";
LinkStatsUplinkRSSI2DbmNode.menuIcon = <RSSI2DbmTelemetryIcon  />;


export default LinkStatsUplinkRSSI2DbmNode;
