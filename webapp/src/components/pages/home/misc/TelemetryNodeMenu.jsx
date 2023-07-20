// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import {useCallback, useMemo, useState} from "react";
import {geNodeTitle} from "./schema";
import {AnimatedPaper} from "../../misc/AnimatedPaper";
import {ClickAwayListener} from "@mui/material";
import Box from "@mui/material/Box";
import {MenuOpen} from "@mui/icons-material";
import {createNewNode, deselectAllNodes} from "./node-access";
import AttitudeIndicatorNode from "../nodes/AttitudeIndicatorNode";
import UplinkTelemetryIcon from "../../../icons/UplinkTelemetryIcon";
import DownlinkTelemetryIcon from "../../../icons/DownlinkTelemetryIcon";
import AttitudeTelemetryIcon from "../../../icons/AttitudeTelemetryIcon";
import GPSTelemetryIcon from "../../../icons/GPSTelemetryIcon";
import BatteryTelemetryIcon from "../../../icons/BatteryTelemetryIcon";
import GeneralTelemetryIcon from "../../../icons/GeneralTelemetryIcon";
import BatteryVoltageNode from "../nodes/BatteryVoltageNode";
import BatteryPercentageNode from "../nodes/BatteryPercentageNode";
import BatteryCurrentNode from "../nodes/BatteryCurrentNode";
import BatteryFuelConsumedNode from "../nodes/BatteryFuelConsumedNode";
import GPSLongitudeNode from "../nodes/GPSLongitudeNode";
import GPSLatitudeNode from "../nodes/GPSLatitudeNode";
import GPSGroundSpeedNode from "../nodes/GPSGroundSpeedNode";
import GPSHeadingNode from "../nodes/GPSHeadingNode";
import GPSAltitudeNode from "../nodes/GPSAltitudeNode";
import GPSSatellitesNode from "../nodes/GPSSatellitesNode";
import AttitudeYawNode from "../nodes/AttitudeYawNode";
import AttitudeRollNode from "../nodes/AttitudeRollNode";
import AttitudePitchNode from "../nodes/AttitudePitchNode";
import LinkStatsDownlinkRSSIDbmNode from "../nodes/LinkStatsDownlinkRSSIDbmNode";
import LinkStatsDownlinkSNRNode from "../nodes/LinkStatsDownlinkSNRNode";
import LinkStatsDownlinkLinkQualityNode from "../nodes/LinkStatsDownlinkLinkQualityNode";
import LinkStatsUplinkRSSI1DbmNode from "../nodes/LinkStatsUplinkRSSI1DbmNode";
import LinkStatsUplinkRSSI2DbmNode from "../nodes/LinkStatsUplinkRSSI2DbmNode";
import LinkStatsUplinkSNRNode from "../nodes/LinkStatsUplinkSNRNode";
import LinkStatsUplinkLinkQualityNode from "../nodes/LinkStatsUplinkLinkQualityNode";
import LinkStatsRadioFrequencyModeNode from "../nodes/LinkStatsRadioFrequencyModeNode";
import FlightModeNode from "../nodes/FlightModeNode";
import BarometerAltitudeNode from "../nodes/BarometerAltitudeNode";
import VariometerSpeedNode from "../nodes/VariometerSpeedNode";
import LinkStatsActiveAntennaNode from "../nodes/LinkStatsActiveAntennaNode";
import LinkStatsUplinkPowerNode from "../nodes/LinkStatsUplinkPowerNode";
import HeadingIndicatorNode from "../nodes/HeadingIndicatorNode";
import FuelIndicatorNode from "../nodes/FuelIndicatorNode";
import HeartbeatNode from "../nodes/HeartbeatNode";


const TelemetryNodeMenu = () => {
    // noinspection DuplicatedCode
    const [mainOpen, setMainOpen] = useState(false);

    const [tooltipText, setTooltipText] = useState("");
    const [tooltipShow, setTooltipShow] = useState(false);
    const [tooltipStyle, setTooltipStyle] = useState({});

    const showTooltip = useCallback(function (event, tooltipText) {
        setTooltipText(tooltipText);
        setTooltipShow(true);
        let currentTargetRect = event.currentTarget.getBoundingClientRect();
        let top = currentTargetRect.top + currentTargetRect.height / 2;
        let right = Math.abs(window.innerWidth - currentTargetRect.left);
        setTooltipStyle({position: "absolute", top, right, left: "unset", bottom: "unset"});
    }, [])

    const hideTooltip = useCallback(function () {
        setTooltipShow(false);
        setTooltipText("");
    }, []);

    const hideTooltipHandlers = useMemo(() => {
        return {
            onMouseLeave: hideTooltip,
            onTouchEndCapture: hideTooltip,
            onTouchCancelCapture: hideTooltip,
            onTouchCancel: hideTooltip,
            onClose: hideTooltip,
            onTouchEnd: hideTooltip,
        }
    }, null)

    const closeMainMenu = useCallback(function () {
        setMainOpen(false);
        setTimeout(() => stackClear(), 500);
    }, [mainOpen]);

    const getMenuAction = useCallback(function (item) {
        // noinspection DuplicatedCode
        switch (item.type) {
            case "node":
                return <SpeedDialAction
                    onClick={(event) => {
                        hideTooltip()
                        deselectAllNodes();
                        createNewNode({type: item.node.type, selected: true});
                        event.preventDefault();
                        event.stopPropagation();
                        setMainOpen(true);
                    }}
                    key={item.node.type}
                    icon={item.node.menuIcon}
                    onMouseOver={(event) => showTooltip(event, geNodeTitle(item.node.type))}
                    {...hideTooltipHandlers}
                />
            case "menu":
            case "action":
                return <SpeedDialAction
                    onClick={item.onClick}
                    key={item.key}
                    icon={item.icon}
                    onMouseOver={(event) => showTooltip(event, item.tooltipTitle)}
                    {...hideTooltipHandlers}
                />
        }
    }, []);



    let gpsTelemetry = [
        {type: "node", node: GPSLongitudeNode},
        {type: "node", node: GPSLatitudeNode},
        {type: "node", node: GPSGroundSpeedNode},
        {type: "node", node: GPSHeadingNode},
        {type: "node", node: GPSAltitudeNode},
        {type: "node", node: GPSSatellitesNode},
    ];

    let batteryTelemetry = [
        {type: "node", node: BatteryCurrentNode},
        {type: "node", node: BatteryFuelConsumedNode},
        {type: "node", node: BatteryVoltageNode},
        {type: "node", node: BatteryPercentageNode},
        {type: "node", node: FuelIndicatorNode}

    ];

    let attitudeTelemetry = [
        {type: "node", node: AttitudeYawNode},
        {type: "node", node: AttitudeRollNode},
        {type: "node", node: AttitudePitchNode},
        {type: "node", node: HeadingIndicatorNode},
        {type: "node", node: AttitudeIndicatorNode},
    ];

    let generalTelemetry = [
        {type: "node", node: HeartbeatNode},
        {type: "node", node: LinkStatsRadioFrequencyModeNode},
        {type: "node", node: FlightModeNode},
        {type: "node", node: BarometerAltitudeNode},
        {type: "node", node: VariometerSpeedNode},
    ];

    let downlinkTelemetry = [
        {type: "node", node: LinkStatsDownlinkRSSIDbmNode},
        {type: "node", node: LinkStatsDownlinkSNRNode},
        {type: "node", node: LinkStatsDownlinkLinkQualityNode},
    ];

    let uplinkTelemetry = [
        {type: "node", node: LinkStatsUplinkRSSI2DbmNode},
        {type: "node", node: LinkStatsUplinkRSSI1DbmNode},
        {type: "node", node: LinkStatsActiveAntennaNode},
        {type: "node", node: LinkStatsUplinkSNRNode},
        {type: "node", node: LinkStatsUplinkPowerNode},
        {type: "node", node: LinkStatsUplinkLinkQualityNode},
    ];

    let mainMenuItems = [
        {
            type: "menu",
            key: "rx-telemetry",
            tooltipTitle: "Downlink telemetry",
            icon: <DownlinkTelemetryIcon fontSize="medium"/>,
            onClick: (event) => openSubMenu(event, downlinkTelemetry)
        },
        {
            type: "menu",
            key: "tx-telemetry",
            tooltipTitle: "Uplink telemetry",
            icon: <UplinkTelemetryIcon fontSize="medium"/>,
            onClick: (event) => openSubMenu(event, uplinkTelemetry)
        },
        {
            type: "menu",
            key: "attitude-telemetry",
            tooltipTitle: "Attitude telemetry",
            icon: <AttitudeTelemetryIcon fontSize="medium"/>,
            onClick: (event) => openSubMenu(event, attitudeTelemetry)
        },
        {
            type: "menu",
            key: "gps-telemetry",
            tooltipTitle: "GPS telemetry",
            icon: <GPSTelemetryIcon fontSize="medium"/>,
            onClick: (event) => openSubMenu(event, gpsTelemetry)
        },
        {
            type: "menu",
            key: "power-telemetry",
            tooltipTitle: "Battery telemetry",
            icon: <BatteryTelemetryIcon fontSize="medium"/>,
            onClick: (event) => openSubMenu(event, batteryTelemetry)
        },
        {
            type: "menu",
            key: "general-telemetry",
            tooltipTitle: "General telemetry",
            icon: <GeneralTelemetryIcon fontSize="medium"/>,
            onClick: (event) => openSubMenu(event, generalTelemetry)
        }
    ];



    // noinspection DuplicatedCode
    const [menuStack, setMenuStack] = useState([mainMenuItems]);

    let stackPush = useCallback(function (menu) {
        setMenuStack([...menuStack, menu])
    }, [menuStack]);

    let stackPop = useCallback(function () {
        setMenuStack([...menuStack.slice(0, -1)])
    }, [menuStack]);

    let stackClear = useCallback(function () {
        setMenuStack([mainMenuItems])
    }, [menuStack]);

    let transitionMenu = useCallback(function (event, actionCallback) {
        event.preventDefault();
        hideTooltip();

        setMainOpen(false);
        setTimeout(() => {
            actionCallback && actionCallback(event);
            setTimeout(() => setMainOpen(true), 50);
        }, 100);
    }, [mainOpen]);

    let openSubMenu = useCallback(function (event, menu) {
        transitionMenu(event, () => stackPush(menu));
    }, [mainOpen])

    const closeSubMenu = useCallback(function (event) {
        transitionMenu(event, () => stackPop());
    }, [mainOpen]);


    if (menuStack.length === 0) {
        return <></>
    }

    return <ClickAwayListener onClickAway={() => closeMainMenu()}>
        <Box>
            <AnimatedPaper
                label={tooltipText} delay={500}
                show={tooltipShow && mainOpen}
                style={tooltipStyle} textStyle={{padding: 8, fontSize: "12px"}} translateX={"-10px"}
                translateY={"-50%"} portalElement={document.body}/>
            <SpeedDial
                // key={`menu-stack-${menuStack.length}-${menuStack.slice(-1).length}`}
                open={mainOpen}
                ariaLabel="ELRS Joystick Control"
                sx={{position: 'absolute', bottom: 16, right: 18}}
                icon={<SpeedDialIcon
                    openIcon={(() => {
                        if (mainOpen && menuStack.length === 1) {
                            return null;
                        } else if (mainOpen && menuStack.length > 1) {
                            return <MenuOpen/>;
                        } else {
                            return null
                        }
                    })()}/>}
                onClose={() => () => hideTooltip()}
                onClick={(event) => {
                    if (mainOpen && menuStack.length > 1) {
                        //transition down to previous menu
                        closeSubMenu(event);
                    } else {
                        setMainOpen(!mainOpen);
                    }
                }}>

                {menuStack.slice(-1)[0].map((item) => getMenuAction(item))}
            </SpeedDial>
        </Box>
    </ClickAwayListener>;

};

export default TelemetryNodeMenu;

