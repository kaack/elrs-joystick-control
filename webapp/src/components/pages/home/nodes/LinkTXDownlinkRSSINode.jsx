// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';

import {GenericTelemetryNode} from "./GenericTelemetryNode";
import RSSIPercentTelemetryIcon from "../../../icons/RSSIPercentTelemetryIcon";
import {LinkTXData} from "../../../../pbwrap";


function LinkTXDownlinkRSSINode(node) {
    return (<GenericTelemetryNode
        valueProps={{
            isValidTelemetryData: data => data instanceof LinkTXData,
            getTelemetryValue: data => data.getDownlinkRssi()
        }}
        node={node}/>);

}

LinkTXDownlinkRSSINode.type = "link_tx_dl_rssi";
LinkTXDownlinkRSSINode.menuIcon = <RSSIPercentTelemetryIcon  />;


export default LinkTXDownlinkRSSINode;
