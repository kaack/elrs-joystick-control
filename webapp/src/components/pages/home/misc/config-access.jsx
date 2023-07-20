// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import * as conf from "./../../../misc/config-access-base";
import defaultConfig from "./default-config.json"

import {HomeConfigKey} from "./constants";

export const saveConfigToStorage = function () {
    return conf.saveConfigToStorage(HomeConfigKey);
}

export const saveConfigToFile = function () {
    return conf.saveConfigToFile(HomeConfigKey);
}

export const loadConfigFromFile = function (file) {
    return conf.loadConfigFromFile(HomeConfigKey, file)
}

export const loadConfigFromStorage = function () {
    return conf.loadConfigFromStorage(HomeConfigKey, defaultConfig)
}

