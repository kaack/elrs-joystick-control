// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import * as refs from "./config-refs";

import * as flow_impl from "./config-uncontrolled";
import {addEdge, applyEdgeChanges, applyNodeChanges} from "reactflow";

export const reloadFlow = refs.reloadFlow;
export const setReloadRef = refs.setReloadRef;

export const updateFlow = refs.updateFlow;
export const setUpdateRef = refs.setUpdateRef;

export const getFlowRef = refs.getFlowRef;
export const setFlowRef = refs.setFlowRef;

export const setDefaultNodes = flow_impl.setDefaultNodes;
export const setDefaultEdges = flow_impl.setDefaultEdges;

export const setDefaultViewport = flow_impl.setDefaultViewport;

export const getDefaultViewport = flow_impl.getDefaultViewport;



export const getDefaultNodes = flow_impl.getDefaultNodes
export const getDefaultEdges = flow_impl.getDefaultEdges;

export const getNodes = flow_impl.getNodes;
export const getEdges = flow_impl.getEdges;

export const getViewport = flow_impl.getViewport;

export const getMetadata = flow_impl.getMetadata;
export const setMetadata = flow_impl.setMetadata;


export const setNodes = flow_impl.setNodes;

export const setEdges = flow_impl.setEdges;

export const addNodes = flow_impl.addNodes;

//shared by both controlled and uncontrolled
export const deleteEdge = function (key, edge) {
    setEdges(key, function (eds) {
        let edges = [];
        for (let ed of eds) {
            if (ed.id === edge.id) continue;
            edges.push(ed);
        }

        return edges;
    });
};



//used only for a controlled flow
// noinspection JSUnusedGlobalSymbols

export const addEdges = function (key, edges) {
    setEdges(key, (eds) => [...eds, ...edges]);
};

//used only for a controlled flow
export const onNodesChange = function (key, changes) {
    setNodes(key, (nds) => applyNodeChanges(changes, nds));
    updateFlow(key);
}

//used only for a controlled flow
export const onEdgesChange = function (key, changes) {
    setEdges(key, (eds) => applyEdgeChanges(changes, eds));
    updateFlow(key);
}

//used only for a controlled flow
export const onConnect = function (key, connection) {
    setEdges(key, (eds) => addEdge(connection, eds));
    updateFlow(key);
}

//used only for a controlled flow
export const onNodesDelete = function (key, nodes) {
    setNodes(key, deleteById(getNodes(key), nodes));
    updateFlow(key);
}

//used only for a controlled flow
export const onEdgesDelete = function (key, edges) {
    setEdges(key, (eds) => deleteById(eds, edges));
    updateFlow(key);
}




function deleteById(srcList, deleteList) {
    let lookupMap = {};
    for (let i = 0; i < deleteList.length; i++) {
        lookupMap[deleteList[i].id] = true;
    }

    let newList = [];
    for (let i = 0; i < srcList.length; i++) {
        if (lookupMap[srcList[i].id]) {
            continue;
        }
        newList.push(srcList[i]);
    }

    return newList;
}

