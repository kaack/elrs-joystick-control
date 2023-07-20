// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';

import {GenericTelemetryNode} from "./GenericTelemetryNode";
import LinkQualityTelemetryIcon from "../../../icons/LinkQualityTelemetryIcon";
import {LinkStatsData} from "../../../../pbwrap";

function LinkStatsDownlinkLinkQualityNode(node) {
    return (<GenericTelemetryNode
        valueProps={{
            isValidTelemetryData: data => data instanceof LinkStatsData,
            getTelemetryValue: data => data.getDownlinkLinkQuality()
        }}
        node={node}/>);

}

LinkStatsDownlinkLinkQualityNode.type = "link_stats_dl_lq";
LinkStatsDownlinkLinkQualityNode.menuIcon = <LinkQualityTelemetryIcon  />;


export default LinkStatsDownlinkLinkQualityNode;
