// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later


import * as nodeAccess from "../../../misc/node-access-base"
import {InputsConfigKey} from "./constants";

import {getSchema} from "./schema"
import {HomeConfigKey} from "../../home/misc/constants";



export function clearNodeRef(node) {
    return nodeAccess.clearNodeRef(InputsConfigKey ,node);
}

export function setNodeRef(node, ref) {
    return nodeAccess.setNodeRef(InputsConfigKey ,node, ref);
}

export function getNodeData(node) {
    return nodeAccess.getNodeData(InputsConfigKey, node);
}

export function getDefaults(node) {
    return nodeAccess.getDefaults(getSchema(), HomeConfigKey, node)
}

export const setNodesShowValue = function (state) {
    return nodeAccess.setNodesShowValue(InputsConfigKey, state);
}

export const setNodeValue = function ({node, value}) {
    return nodeAccess.setNodeValue(InputsConfigKey, {node, value});
}
export const setNodesShowLabel = function (state) {
    return nodeAccess.setNodesShowLabel(InputsConfigKey, state);
}
export const onNodeSettings = function ({node}) {
    return nodeAccess.onNodeSettings(InputsConfigKey, {node});
};

//shared by both controlled and uncontrolled
export const deleteNode = function (node) {
    return nodeAccess.deleteNode(InputsConfigKey, node);
};

export const deselectAllNodes = function () {
    return nodeAccess.deselectAllNodes(InputsConfigKey);
};

export const createNewNode = function (node) {
    return nodeAccess.createNewNode(InputsConfigKey, node);
};

export const createConfig = function () {
  return nodeAccess.createConfig(getSchema(), InputsConfigKey);
};

export function showConfigErrors({errors}) {
    return nodeAccess.showConfigErrors(InputsConfigKey, {errors});

}

export function showSchemaErrors({ex, config}) {
    return nodeAccess.showSchemaErrors(InputsConfigKey, {ex, config});
}





