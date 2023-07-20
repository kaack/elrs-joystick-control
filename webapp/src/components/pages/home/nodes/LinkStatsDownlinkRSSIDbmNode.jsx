// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';

import {GenericTelemetryNode} from "./GenericTelemetryNode";
import RSSIDbmTelemetryIcon from "../../../icons/RSSIDbmTelemetryIcon";
import {LinkStatsData} from "../../../../pbwrap";

function LinkStatsDownlinkRSSIDbmNode(node) {
    return (<GenericTelemetryNode
        valueProps={{
            isValidTelemetryData: data => data instanceof LinkStatsData,
            getTelemetryValue: data => data.getDownlinkRssi()
        }}
        node={node}/>);

}

LinkStatsDownlinkRSSIDbmNode.type = "link_stats_dl_rssi";
LinkStatsDownlinkRSSIDbmNode.menuIcon = <RSSIDbmTelemetryIcon  />;


export default LinkStatsDownlinkRSSIDbmNode;
