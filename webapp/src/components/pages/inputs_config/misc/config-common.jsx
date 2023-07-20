// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later
// noinspection JSUnusedGlobalSymbols

import *  as configCommonBase from "../../../misc/config-common-base";

import {InputsConfigKey} from "./constants";

export const reloadFlow = function() {
    return configCommonBase.reloadFlow(InputsConfigKey);
};

export const setReloadRef = function(setReload) {
    return configCommonBase.setReloadRef(InputsConfigKey, setReload);
};

export const setUpdateRef = function (setUpdate) {
    return configCommonBase.setUpdateRef(InputsConfigKey, setUpdate);
};

export const getFlowRef = function () {
    return configCommonBase.getFlowRef(InputsConfigKey);
};

export const setFlowRef = function (flow) {
    return configCommonBase.setFlowRef(InputsConfigKey, flow);
};

export const setDefaultNodes = function(defaultNodes) {
    return configCommonBase.setDefaultNodes(InputsConfigKey, defaultNodes);
};

export const setDefaultEdges = function (defaultEdges) {
    return configCommonBase.setDefaultEdges(InputsConfigKey, defaultEdges);
};

export const getDefaultNodes = function () {
    return configCommonBase.getDefaultNodes(InputsConfigKey);
};

export const getDefaultEdges = function () {
    return configCommonBase.getDefaultEdges(InputsConfigKey);
};

export const getDefaultViewport = function (defaultValue) {
    return configCommonBase.getDefaultViewport(InputsConfigKey) || defaultValue;
};

export const getNodes = function() {
    return configCommonBase.getNodes(InputsConfigKey);
};

export const getEdges =  function() {
    return configCommonBase.getEdges(InputsConfigKey);
};

export const setNodes = function (funcOrNodes) {
    return configCommonBase.setNodes(InputsConfigKey, funcOrNodes);
};

export const setEdges = function(funcOrEdges) {
    return configCommonBase.setEdges(InputsConfigKey, funcOrEdges);
};

export const addNodes = function(nodes) {
    return configCommonBase.addNodes(InputsConfigKey, nodes);
};

//shared by both controlled and uncontrolled
export const deleteEdge = function(edge) {
    return configCommonBase.deleteEdge(InputsConfigKey, edge);
};


//used only for a controlled flow
// noinspection JSUnusedGlobalSymbols
export const addEdges = function (edges) {
    return configCommonBase.addEdges(InputsConfigKey, edges);
};

//used only for a controlled flow
export const onNodesChange = function (changes) {
    return configCommonBase.onNodesChange(InputsConfigKey, changes);
};

//used only for a controlled flow
export const onEdgesChange = function (changes) {
    return configCommonBase.onEdgesChange(InputsConfigKey, changes);
};

//used only for a controlled flow
export const onConnect = function (connection) {
    return configCommonBase.onConnect(InputsConfigKey, connection);
};

//used only for a controlled flow
export const onNodesDelete = function (nodes) {
    return configCommonBase.onNodesDelete(InputsConfigKey, nodes);
};

//used only for a controlled flow
export const onEdgesDelete = function (edges) {
    return configCommonBase.onEdgesDelete(InputsConfigKey, edges);
};



