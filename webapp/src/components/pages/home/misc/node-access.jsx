// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later
// noinspection JSUnusedGlobalSymbols

import * as nodeAccess from "../../../misc/node-access-base"
import {HomeConfigKey} from "./constants";

import {getSchema} from "./schema";
import {InputsConfigKey} from "../../inputs_config/misc/constants";

export const clearNodeRef = function (node) {
    return nodeAccess.clearNodeRef(InputsConfigKey, node);
};

export const setNodeRef = function (node, ref) {
    return nodeAccess.setNodeRef(HomeConfigKey, node, ref)
};

export const getNodeData = function (node) {
    return nodeAccess.getNodeData(HomeConfigKey, node)
};

export const getDefaults = function (node) {
    return nodeAccess.getDefaults(getSchema(), HomeConfigKey, node)
};

export const setNodesShowValue = function (state) {
    return nodeAccess.setNodesShowValue(HomeConfigKey, state);
};

export const setNodeValue = function ({node, value}) {
    return nodeAccess.setNodeValue(HomeConfigKey, {node, value});
};

export const setNodesShowLabel = function (state) {
    return nodeAccess.setNodesShowLabel(HomeConfigKey, state);
};

export const onNodeSettings = function ({node}) {
    return nodeAccess.onNodeSettings(HomeConfigKey, {node});
};

//shared by both controlled and uncontrolled
export const deleteNode = function (node) {
    return nodeAccess.deleteNode(HomeConfigKey, node);
};

export const deselectAllNodes = function () {
    return nodeAccess.deselectAllNodes(HomeConfigKey);
};

export const createNewNode = function (node) {
    return nodeAccess.createNewNode(HomeConfigKey, node);
};







