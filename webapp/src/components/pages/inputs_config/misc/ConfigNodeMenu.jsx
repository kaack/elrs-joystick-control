// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import LogicOperationsIcon from "../../../icons/LogicOperationsIcon";
import {useCallback, useMemo, useState} from "react";
import FunctionIcon from "../../../icons/FunctionIcon";
import RelationalOperationsIcon from "../../../icons/RelationalOperationsIcon";
import {AnimatedPaper} from "../../misc/AnimatedPaper";
import {ClickAwayListener} from "@mui/material";
import Box from "@mui/material/Box";
import {MenuOpen} from "@mui/icons-material";
import {createNewNode, deselectAllNodes} from "./node-access";

//Import Nodes
import MapNode from "../nodes/MapNode";
import LinearNode from "../nodes/LinearNode";
import SwitchNode from "../nodes/SwitchNode";
import CaseInputNode from "../nodes/CaseInputNode";
import GreaterThanNode from "../nodes/GreaterThanNode";
import LessThanNode from "../nodes/LessThanNode";
import LogicAndNode from "../nodes/LogicAndNode";
import LogicOrNode from "../nodes/LogicOrNode";
import NumberNode from "../nodes/NumberNode";
import GamepadNode from "../nodes/GamepadNode";
import ButtonNode from "../nodes/ButtonNode";
import AxisNode from "../nodes/AxisNode";
import ChannelNode from "../nodes/ChannelNode";
import TransmitterNode from "../nodes/TransmitterNode";
import EqualsNode from "../nodes/EqualsNode";
import MinValueNode from "../nodes/MinValueNode";
import MaxValueNode from "../nodes/MaxValueNode";
import AddValuesNode from "../nodes/AddValuesNode";
import SubtractValuesNode from "../nodes/SubtractValuesNode";
import InvertValueNode from "../nodes/InvertValueNode";
import NotEqualsNode from "../nodes/NotEqualsNode";
import GreaterThanOrEqualsNode from "../nodes/GreaterThanOrEqualsNode";
import LessThanOrEqualsNode from "../nodes/LessThanOrEqualsNode";
import IfElseNode from "../nodes/IfElseNode";
import SequenceNode from "../nodes/SequenceNode";
import TrimValueNode from "../nodes/TrimValueNode";
import {geNodeTitle} from "./schema";

const ConfigNodeMenu = () => {
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
                return <SpeedDialAction
                    onClick={item.onClick}
                    key={item.key}
                    icon={item.icon}
                    onMouseOver={(event) => showTooltip(event, item.tooltipTitle)}
                    {...hideTooltipHandlers}
                />
        }
    }, []);

    let functionMenuItems = [
        {type: "node", node: LinearNode},
        {type: "node", node: MapNode},
        {type: "node", node: MinValueNode},
        {type: "node", node: MaxValueNode},
        {type: "node", node: TrimValueNode},
        {type: "node", node: AddValuesNode},
        {type: "node", node: SubtractValuesNode},
        {type: "node", node: InvertValueNode},
    ];

    let logicMenuItems = [
        {type: "node", node: CaseInputNode},
        {type: "node", node: SwitchNode},
        {type: "node", node: IfElseNode},
        {type: "node", node: SequenceNode},
        {type: "node", node: LogicAndNode},
        {type: "node", node: LogicOrNode},
        {type: "node", node: NumberNode},
    ];

    let relationMenuItems = [
        {type: "node", node: GreaterThanNode},
        {type: "node", node: LessThanNode},
        {type: "node", node: GreaterThanOrEqualsNode},
        {type: "node", node: LessThanOrEqualsNode},
        {type: "node", node: EqualsNode},
        {type: "node", node: NotEqualsNode},
        {type: "node", node: NumberNode},
    ];

    let mainMenuItems = [
        {type: "node", node: GamepadNode},
        {type: "node", node: ButtonNode},
        {type: "node", node: AxisNode},
        {
            type: "menu",
            key: "logic",
            tooltipTitle: "Logical",
            icon: <LogicOperationsIcon fontSize="medium"/>,
            onClick: (event) => openSubMenu(event, logicMenuItems)
        }, {
            type: "menu",
            key: "relation",
            tooltipTitle: "Relational",
            icon: <RelationalOperationsIcon fontSize="medium"/>,
            onClick: (event) => openSubMenu(event, relationMenuItems)
        }, {
            type: "menu",
            key: "functions",
            tooltipTitle: "Functions",
            icon: <FunctionIcon fontSize="medium"/>,
            onClick: (event) => openSubMenu(event, functionMenuItems)
        },
        {type: "node", node: ChannelNode},
        {type: "node", node: TransmitterNode}
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

export default ConfigNodeMenu;

