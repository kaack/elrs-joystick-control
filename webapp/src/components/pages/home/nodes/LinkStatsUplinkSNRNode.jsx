// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';

import {GenericTelemetryNode} from "./GenericTelemetryNode";
import SNRTelemetryIcon from "../../../icons/SNRTelemetryIcon";
import {LinkStatsData} from "../../../../pbwrap";

function LinkStatsUplinkSNRNode(node) {
    return (<GenericTelemetryNode
        valueProps={{
            isValidTelemetryData: data => data instanceof LinkStatsData,
            getTelemetryValue: data => data.getUplinkSnr()
        }}
        node={node}/>);

}

LinkStatsUplinkSNRNode.type = "link_stats_ul_snr";
LinkStatsUplinkSNRNode.menuIcon = <SNRTelemetryIcon  />;


export default LinkStatsUplinkSNRNode;
