// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later


import {getNodeData, initNode} from "./node-access-base";
import {
    getEdges,
    getNodes,
    reloadFlow,
    setDefaultEdges,
    setDefaultNodes,
    updateFlow,
    getViewport,
    setDefaultViewport,
    getMetadata, setMetadata
} from "./config-common-base";
import {storageGet, storageSet} from "./storage";

import {saveAs} from 'file-saver';
import {initIdSystem} from "./id-system";

export const saveConfigToStorage = function (key) {
    let config = getLiveConfig(key)

    storageSet(key, config);
}

export const loadConfigFromStorage = function (key, defaultValue) {

    let config = defaultValue || {} ;
    let fromStorage = storageGet(key);

    if (fromStorage !== null) {
        try {
            config = initConfig(JSON.parse(fromStorage));
            if (!config.nodes || config.nodes.length === 0) {
                //if there are no nodes, use the default value
                config = initConfig(defaultValue || {})
            }
        } catch (ex) {
            //no-op
            console.error("could not load config from storage. " + ex.message, ex);
        }
    } else {
        initConfig(config);
    }

    config = removeOrphanEdges({config});

    initIdSystem(config.nodes);
    setDefaultNodes(key, config.nodes);
    setDefaultEdges(key, config.edges);
    setDefaultViewport(key, config.viewport);
    setMetadata(key, config.metadata)
    updateFlow(key);
}

export const saveConfigToFile = function (key) {

    let fileConfig = getLiveConfig(key);

    let cDate = new Date();
    let fileName = `${key}-` + cDate.getUTCFullYear() + "-" + String(cDate.getUTCMonth()).padStart(2, "0") + "-" + String(cDate.getUTCDate()).padStart(2, "0") + "T" + String(cDate.getUTCHours()).padStart(2, "0") + String(cDate.getUTCMinutes()).padStart(2, "0") + String(cDate.getUTCSeconds()).padStart(2, "0") + "Z" + ".json"

    let blob = new Blob([JSON.stringify(fileConfig, null, 2)], {type: "text/plain;charset=utf-8"});
    saveAs(blob, fileName);
}

export const loadConfigFromFile = async function (key, file) {
    let text = await readFileText(file);

    let config;
    try {
        config = JSON.parse(text);
    } catch (ex) {
        throw new Error("config file is not valid JSON");
    }

    if (!config.nodes) {
        throw new Error("config is missing nodes data");
    }

    if (!config.edges) {
        throw new Error("config file is missing edges data");
    }

    if (!config.metadata) {
        throw new Error("config file does not contain metadata");
    }

    if (config.metadata.key !== key) {
        throw new Error(`config file type "${config.metadata.key}" is not valid`);
    }

    config = removeOrphanEdges({config});

    initIdSystem(config.nodes);

    setDefaultNodes(key, config.nodes);
    setDefaultEdges(key, config.edges);
    setDefaultViewport(key, config.viewport);
    setMetadata(key, config.metadata);
    reloadFlow(key);
}


const removeOrphanEdges = ({config}) => {
    if (!Array.isArray(config.edges) || config.edges.length === 0) {
        return config;
    }

    if (!Array.isArray(config.nodes)) {
        return config;
    }

    let nodesLookup = new Map(config?.nodes?.map?.(node => [node.id, node]));

    let newEdges = [];
    for (let edge of config.edges) {
        if (!nodesLookup.has(edge.source) || !nodesLookup.has(edge.target)) continue;
        newEdges.push(edge);
    }

    config.edges = newEdges;

    return config;
};


/**
 * @return {Promise<String>}
 */
function readFileText(file) {
    return new Promise((resolve, reject) => {
        if (!file) {
            return reject(new Error("file not specified"));
        }

        const reader = new FileReader();
        reader.addEventListener("load", () => {
            resolve(reader.result);
        }, false);

        reader.readAsText(file);
    });
}

const getLiveConfig = function (key) {
    let nodes = getNodes(key);
    let edges = getEdges(key);
    let viewport = getViewport(key);
    let metadata = getMetadata(key);


    //add data data for each node
    for (let node of nodes) {
        node.data = getNodeData(key, node);
    }

    let config ={
        nodes, edges, viewport, metadata
    };

    return removeOrphanEdges({config});
}

const initConfig = function (config) {
    config = config || {};
    config.nodes = config.nodes || [];
    config.edges = config.edges || [];
    config.nodes = config.nodes.map((node) => initNode(node));
    return config;

}

