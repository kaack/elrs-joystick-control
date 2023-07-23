// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import {USE_LOCAL_STORAGE_KEY} from "./settings";

export const memoryStorage = new (class MemoryStorage {
    data = {};

    setItem(key, value) {
        this.data[key] = value;
    }

    getItem(key) {
        return this.data[key];
    }
})

export function isLocalStorageActive() {
    return (localStorage && localStorage.getItem(USE_LOCAL_STORAGE_KEY) === "true") ||
        (localStorage && localStorage.getItem(USE_LOCAL_STORAGE_KEY) !== "false"); //this is needed for very first time
}

export function isString(value) {
    return (typeof value === 'string' || value instanceof String)
}

export function storageSet(key, value, async = false) {
    if (async) {
        return new Promise((resolve) => {
            return resolve(storageSet(key, value, false));
        })
    }

    if (!isString(value)) {
        value = JSON.stringify(value)
    }

    if (isLocalStorageActive()) {
        localStorage.setItem(key, value);
    } else {
        memoryStorage.setItem(key, value);
    }

    return true;
}

export function storageGet(key) {
    if (isLocalStorageActive()) {
        return localStorage.getItem(key)
    }
    return memoryStorage.getItem(key)
}