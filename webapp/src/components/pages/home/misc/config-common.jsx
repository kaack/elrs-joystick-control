// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later
// noinspection JSUnusedGlobalSymbols

import *  as configCommonBase from "../../../misc/config-common-base";
import {HomeConfigKey} from "./constants";

export const reloadFlow = function() {
    return configCommonBase.reloadFlow();
}

export const setReloadRef = function(setReload) {
    return configCommonBase.setReloadRef(HomeConfigKey, setReload);
}

export const setUpdateRef = function (setUpdate) {
    return configCommonBase.setUpdateRef(HomeConfigKey, setUpdate);
}

export const getFlowRef = function () {
    return configCommonBase.getFlowRef(HomeConfigKey);
}
export const setFlowRef = function (flow) {
    return configCommonBase.setFlowRef(HomeConfigKey, flow);
}

export const setDefaultNodes = function(defaultNodes) {
    return configCommonBase.setDefaultNodes(HomeConfigKey, defaultNodes);
}

export const setDefaultEdges = function (defaultEdges) {
    return configCommonBase.setDefaultEdges(HomeConfigKey, defaultEdges);
}

export const getDefaultNodes = function () {
    return configCommonBase.getDefaultNodes(HomeConfigKey);
}

export const getDefaultEdges = function () {
    return configCommonBase.getDefaultEdges(HomeConfigKey);
}

export const getDefaultViewport = function (defaultValue) {
    return configCommonBase.getDefaultViewport(HomeConfigKey) || defaultValue;
}

export const getMetadataDetail = function(detailKey) {
    let metadata = configCommonBase.getMetadata(HomeConfigKey);
    return metadata?.details?.[detailKey] || {};
}

export const setMetadataDetail = function(detailKey, detailData) {
    let metadata = configCommonBase.getMetadata(HomeConfigKey);
    metadata = {
        ...metadata,
        details: {
            ...metadata.details,
            [detailKey]: detailData
        }
    };
    configCommonBase.setMetadata(HomeConfigKey, metadata);
}

export const getNodes = function() {
    return configCommonBase.getNodes(HomeConfigKey);
}
export const getEdges =  function() {
    return configCommonBase.getEdges(HomeConfigKey);
}

export const setNodes = function (funcOrNodes) {
    return configCommonBase.setNodes(HomeConfigKey, funcOrNodes);
}

export const setEdges = function(funcOrEdges) {
    return configCommonBase.setEdges(HomeConfigKey, funcOrEdges);
}

export const addNodes = function(nodes) {
    return configCommonBase.addNodes(HomeConfigKey, nodes);
}

//shared by both controlled and uncontrolled
export const deleteEdge = function(edge) {
    return configCommonBase.deleteEdge(HomeConfigKey, edge);
}


//used only for a controlled flow
// noinspection JSUnusedGlobalSymbols

export const addEdges = function (edges) {
    return configCommonBase.addEdges(HomeConfigKey, edges);
};

//used only for a controlled flow
export const onNodesChange = function (changes) {
    return configCommonBase.onNodesChange(HomeConfigKey, changes);

}

//used only for a controlled flow
export const onEdgesChange = function (changes) {
    return configCommonBase.onEdgesChange(HomeConfigKey, changes);
}

//used only for a controlled flow
export const onConnect = function (connection) {
    return configCommonBase.onConnect(HomeConfigKey, connection);
}

//used only for a controlled flow
export const onNodesDelete = function (nodes) {
    return configCommonBase.onNodesDelete(HomeConfigKey, nodes);
}

//used only for a controlled flow
export const onEdgesDelete = function (edges) {
    return configCommonBase.onEdgesDelete(HomeConfigKey, edges);
}





