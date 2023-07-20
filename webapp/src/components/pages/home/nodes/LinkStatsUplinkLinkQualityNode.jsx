// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';

import {GenericTelemetryNode} from "./GenericTelemetryNode";
import LinkQualityTelemetryIcon from "../../../icons/LinkQualityTelemetryIcon";
import {LinkStatsData} from "../../../../pbwrap";

function LinkStatsUplinkLinkQualityNode(node) {
    return (<GenericTelemetryNode
        valueProps={{
            isValidTelemetryData: data => data instanceof LinkStatsData,
            getTelemetryValue: data => data.getUplinkLinkQuality()
        }}
        node={node}/>);

}

LinkStatsUplinkLinkQualityNode.type = "link_stats_ul_lq";
LinkStatsUplinkLinkQualityNode.menuIcon = <LinkQualityTelemetryIcon  />;


export default LinkStatsUplinkLinkQualityNode;
