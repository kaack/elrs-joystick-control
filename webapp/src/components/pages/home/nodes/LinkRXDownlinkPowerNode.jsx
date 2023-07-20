// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';

import {GenericTelemetryNode} from "./GenericTelemetryNode";
import SignalPowerTelemetryIcon from "../../../icons/SignalPowerTelemetryIcon";
import {LinkRXData} from "../../../../pbwrap";

function LinkRXDownlinkPowerNode(node) {
    return (<GenericTelemetryNode
        valueProps={{
            isValidTelemetryData: data => data instanceof LinkRXData,
            getTelemetryValue: data => data.getUplinkRssi()
        }}
        node={node}/>);

}

LinkRXDownlinkPowerNode.type = "link_rx_dl_power";
LinkRXDownlinkPowerNode.menuIcon = <SignalPowerTelemetryIcon  />;


export default LinkRXDownlinkPowerNode;
