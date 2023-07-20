// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later


//reference to the flow

const flowRefs = document.flowRefs = new Map();

export const getFlowRef = function (key) {
    return flowRefs.get(key)
}

export const setFlowRef = function (key, flow) {
    flowRefs.set(key, flow)
};

//used to force the viewport to redraw
export const updateFlow = function (key) {
    getUpdateRef(key)?.setUpdate?.(r => ++r);
}

const updateRefs = document.updateRefs = new Map();

const getUpdateRef = function (key) {
    return updateRefs.get(key)
}

export const setUpdateRef = function (key, {setUpdate}) {
    updateRefs.set(key, {setUpdate})
}


//used to force the entire flow to reload
const reloadRefs = document.reloadRefs = new Map();
export const reloadFlow = function (key) {
    getReloadRef(key)?.setReload(r => ++r);
};

const getReloadRef = function (key) {
    return reloadRefs.get(key);
}

export const setReloadRef = function (key, {setReload}) {
    reloadRefs.set(key, {setReload})
}