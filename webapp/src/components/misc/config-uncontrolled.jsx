// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later


import React from "react";
import * as refs from "./config-refs";

let defaultNodes = document.defaultNodes = new Map();
let defaultEdges = document.defaultEdges = new Map();
let defaultViewport = document.defaultViewport = new Map();

export const setDefaultNodes = (key, nodes) => {
    defaultNodes.set(key, nodes)
    return nodes;
}

export const setDefaultEdges = (key, edges) => {
    defaultEdges.set(key, edges);
    return edges;
}
export const setDefaultViewport = (key, viewport) => {
    defaultViewport.set(key, viewport);
    return viewport
}

export const getDefaultViewport = (key) => {
    return defaultViewport.get(key);
}

export const getDefaultNodes = (key) => {
    return defaultNodes.get(key);
};
export const getDefaultEdges = (key) => {
    return defaultEdges.get(key);
};

export const getNodes = (key) => refs.getFlowRef(key)?.getNodes();
export const getEdges = (key) => refs.getFlowRef(key)?.getEdges();

export const getViewport = (key) => refs.getFlowRef(key).getViewport();


let metadataMap = document.metadata = new Map();

export const getMetadata = (key) => {
    let metadata = metadataMap.get(key) || {}
    metadata = {
        details: {}, //empty default
        ...metadata,
        key, //override the key
    }

    return metadata;
}

export const setMetadata = (key, metadata) => {
    metadata = {
        details: {}, //empty default
        ...metadata,
        key, //override the key
    }
    metadataMap.set(key, metadata)
}



export const setNodes = (key, nodes) => refs.getFlowRef(key).setNodes(nodes);

export const setEdges = (key, edges) => refs.getFlowRef(key).setEdges(edges);

export const addNodes = (key, nodes) => refs.getFlowRef(key).addNodes(nodes);







