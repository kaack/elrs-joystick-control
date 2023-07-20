// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';

import {GenericTelemetryNode} from "./GenericTelemetryNode";
import SignalPowerTelemetryIcon from "../../../icons/SignalPowerTelemetryIcon";
import {LinkTXData} from "../../../../pbwrap";

function LinkTXUplinkPowerNode(node) {
    return (<GenericTelemetryNode
        valueProps={{
            isValidTelemetryData: data => data instanceof LinkTXData,
            getTelemetryValue: data => data.getUplinkPower()
        }}
        node={node}/>);

}

LinkTXUplinkPowerNode.type = "link_tx_ul_power";
LinkTXUplinkPowerNode.menuIcon = <SignalPowerTelemetryIcon  />;


export default LinkTXUplinkPowerNode;
