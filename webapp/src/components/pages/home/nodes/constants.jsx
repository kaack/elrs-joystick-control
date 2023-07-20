// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import AttitudeIndicatorNode from "./AttitudeIndicatorNode";
import BatteryVoltageNode from "./BatteryVoltageNode";
import BatteryPercentageNode from "./BatteryPercentageNode";
import BatteryCurrentNode from "./BatteryCurrentNode";
import BatteryFuelConsumedNode from "./BatteryFuelConsumedNode";
import GPSLongitudeNode from "./GPSLongitudeNode";
import GPSLatitudeNode from "./GPSLatitudeNode";
import GPSGroundSpeedNode from "./GPSGroundSpeedNode";
import GPSHomeDistanceNode from "./GPSHomeDistanceNode";
import GPSHeadingNode from "./GPSHeadingNode";
import GPSAltitudeNode from "./GPSAltitudeNode";
import GPSSatellitesNode from "./GPSSatellitesNode";
import AttitudePitchNode from "./AttitudePitchNode";
import AttitudeRollNode from "./AttitudeRollNode";
import AttitudeYawNode from "./AttitudeYawNode";
import LinkStatsUplinkLinkQualityNode from "./LinkStatsUplinkLinkQualityNode";
import LinkRXDownlinkPowerNode from "./LinkRXDownlinkPowerNode";
import LinkStatsUplinkRSSI1DbmNode from "./LinkStatsUplinkRSSI1DbmNode";
import LinkStatsUplinkRSSI2DbmNode from "./LinkStatsUplinkRSSI2DbmNode";
import LinkRXUplinkRSSINode from "./LinkRXUplinkRSSINode";
import LinkStatsUplinkSNRNode from "./LinkStatsUplinkSNRNode";
import LinkStatsDownlinkLinkQualityNode from "./LinkStatsDownlinkLinkQualityNode";
import LinkStatsDownlinkRSSIDbmNode from "./LinkStatsDownlinkRSSIDbmNode";
import LinkTXDownlinkRSSINode from "./LinkTXDownlinkRSSINode";
import LinkStatsDownlinkSNRNode from "./LinkStatsDownlinkSNRNode";
import BarometerAltitudeNode from "./BarometerAltitudeNode";
import VariometerSpeedNode from "./VariometerSpeedNode";
import LinkStatsRadioFrequencyModeNode from "./LinkStatsRadioFrequencyModeNode";
import FlightModeNode from "./FlightModeNode";
import LinkStatsActiveAntennaNode from "./LinkStatsActiveAntennaNode";
import LinkStatsUplinkPowerNode from "./LinkStatsUplinkPowerNode";
import LinkTXUplinkPowerNode from "./LinkTXUplinkPowerNode";
import HeadingIndicatorNode from "./HeadingIndicatorNode";
import FuelIndicatorNode from "./FuelIndicatorNode";
import HeartbeatNode from "./HeartbeatNode";


let _nodeTypes;
export const nodeTypes = () => {
    if (_nodeTypes) return _nodeTypes;
    return _nodeTypes = {

        // Battery frame (raw values)
        [BatteryVoltageNode.type]: BatteryVoltageNode,
        [BatteryPercentageNode.type]: BatteryPercentageNode,
        [BatteryCurrentNode.type]: BatteryCurrentNode,
        [BatteryFuelConsumedNode.type]: BatteryFuelConsumedNode,

        // GPS frame (raw values)
        [GPSLongitudeNode.type]:GPSLongitudeNode,
        [GPSLatitudeNode.type]:GPSLatitudeNode,
        [GPSGroundSpeedNode.type]:GPSGroundSpeedNode,
        [GPSHomeDistanceNode.type]:GPSHomeDistanceNode,
        [GPSHeadingNode.type]:GPSHeadingNode,
        [GPSAltitudeNode.type]:GPSAltitudeNode,
        [GPSSatellitesNode.type]:GPSSatellitesNode,

        // Attitude frame (raw values)
        [AttitudePitchNode.type]:AttitudePitchNode,
        [AttitudeRollNode.type]:AttitudeRollNode,
        [AttitudeYawNode.type]:AttitudeYawNode,

        // LinkStats frame (raw values)
        [LinkStatsUplinkPowerNode.type]:LinkStatsUplinkPowerNode,
        [LinkStatsUplinkLinkQualityNode.type]:LinkStatsUplinkLinkQualityNode,
        [LinkStatsUplinkRSSI1DbmNode.type]:LinkStatsUplinkRSSI1DbmNode,
        [LinkStatsUplinkRSSI2DbmNode.type]:LinkStatsUplinkRSSI2DbmNode,
        [LinkStatsUplinkSNRNode.type]:LinkStatsUplinkSNRNode,
        [LinkStatsDownlinkLinkQualityNode.type]:LinkStatsDownlinkLinkQualityNode,
        [LinkStatsDownlinkRSSIDbmNode.type]:LinkStatsDownlinkRSSIDbmNode,
        [LinkStatsDownlinkSNRNode.type]:LinkStatsDownlinkSNRNode,
        [LinkStatsActiveAntennaNode.type]:LinkStatsActiveAntennaNode,
        [LinkStatsRadioFrequencyModeNode.type]:LinkStatsRadioFrequencyModeNode,


        // LinkRX frame (raw values)
        [LinkRXDownlinkPowerNode.type]:LinkRXDownlinkPowerNode,
        [LinkRXUplinkRSSINode.type]:LinkRXUplinkRSSINode,

        // LinkTX frame (raw value)
        [LinkTXUplinkPowerNode.type]:LinkTXUplinkPowerNode,
        [LinkTXDownlinkRSSINode.type]:LinkTXDownlinkRSSINode,

        // Other frames (raw values)
        [FlightModeNode.type]:FlightModeNode,
        [BarometerAltitudeNode.type]:BarometerAltitudeNode,
        [VariometerSpeedNode.type]:VariometerSpeedNode,

        // Indicators (combines multiple raw values)
        [AttitudeIndicatorNode.type]: AttitudeIndicatorNode,
        [HeadingIndicatorNode.type]: HeadingIndicatorNode,
        [FuelIndicatorNode.type]: FuelIndicatorNode,

        // Charts
        [HeartbeatNode.type]: HeartbeatNode

    }
}


let _edgeTypes
export const edgeTypes = () => {
    if (_edgeTypes) return _edgeTypes;
    return _edgeTypes = {};
}

export const nodeType = (type) => {
    return nodeTypes()[type];
};

// noinspection JSUnusedGlobalSymbols
export const edgeType = (type) => {
    return edgeTypes()[type];
};
