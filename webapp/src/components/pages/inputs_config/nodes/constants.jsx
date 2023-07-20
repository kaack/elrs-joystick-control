// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import TrimValueNode from "./TrimValueNode";
import SequenceNode from "./SequenceNode";
import IfElseNode from "./IfElseNode";
import LessThanOrEqualsNode from "./LessThanOrEqualsNode";
import GreaterThanOrEqualsNode from "./GreaterThanOrEqualsNode";
import NotEqualsNode from "./NotEqualsNode";
import InvertValueNode from "./InvertValueNode";
import AddValuesNode from "./AddValuesNode";
import SubtractValuesNode from "./SubtractValuesNode";
import MinValueNode from "./MinValueNode";
import MaxValueNode from "./MaxValueNode";
import GamepadNode from "./GamepadNode";
import ChannelNode from "./ChannelNode";
import TransmitterNode from "./TransmitterNode";
import ButtonNode from "./ButtonNode";
import AxisNode from "./AxisNode";
import SwitchNode from "./SwitchNode";
import CaseInputNode from "./CaseInputNode";
import LinearNode from "./LinearNode";
import MapNode from "./MapNode";
import GreaterThanNode from "./GreaterThanNode";
import LessThanNode from "./LessThanNode";
import LogicAndNode from "./LogicAndNode";
import LogicOrNode from "./LogicOrNode";
import NumberNode from "./NumberNode";
import EqualsNode from "./EqualsNode";
import RemovableEdge from "../edges/RemovableEdge";


let _nodeTypes;
export const nodeTypes = () => {
    if (_nodeTypes) return _nodeTypes;
    return _nodeTypes = {
        [TrimValueNode.type]: TrimValueNode,
        [SequenceNode.type]: SequenceNode,
        [IfElseNode.type]: IfElseNode,
        [LessThanOrEqualsNode.type]: LessThanOrEqualsNode,
        [GreaterThanOrEqualsNode.type]: GreaterThanOrEqualsNode,
        [NotEqualsNode.type]: NotEqualsNode,
        [InvertValueNode.type]: InvertValueNode,
        [AddValuesNode.type]: AddValuesNode,
        [SubtractValuesNode.type]: SubtractValuesNode,
        [MinValueNode.type]: MinValueNode,
        [MaxValueNode.type]: MaxValueNode,
        [GamepadNode.type]: GamepadNode,
        [ChannelNode.type]: ChannelNode,
        [TransmitterNode.type]: TransmitterNode,
        [ButtonNode.type]: ButtonNode,
        [AxisNode.type]: AxisNode,
        [SwitchNode.type]: SwitchNode,
        [CaseInputNode.type]: CaseInputNode,
        [LinearNode.type]: LinearNode,
        [MapNode.type]: MapNode,
        [GreaterThanNode.type]: GreaterThanNode,
        [LessThanNode.type]: LessThanNode,
        [LogicAndNode.type]: LogicAndNode,
        [LogicOrNode.type]: LogicOrNode,
        [NumberNode.type]: NumberNode,
        [EqualsNode.type]: EqualsNode
    }
}


let _edgeTypes
export const edgeTypes = () => {
    if (_edgeTypes) return _edgeTypes;
    return _edgeTypes = {
        [RemovableEdge.type]: RemovableEdge,
        [RemovableEdge.name]: RemovableEdge
    };
}

export const nodeType = (type) => {
    return nodeTypes()[type];
};

// noinspection JSUnusedGlobalSymbols
export const edgeType = (type) => {
    return edgeTypes()[type];
};
