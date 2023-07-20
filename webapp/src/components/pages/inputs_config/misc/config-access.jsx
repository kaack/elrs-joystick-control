// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import * as conf from "./../../../misc/config-access-base";
import {InputsConfigKey} from "./constants";



export const saveConfigToStorage = function () {
    return conf.saveConfigToStorage(InputsConfigKey);
}

export const saveConfigToFile = function () {
    return conf.saveConfigToFile(InputsConfigKey);
}


export const loadConfigFromFile = function (file) {
    return conf.loadConfigFromFile(InputsConfigKey, file)
}

export const loadConfigFromStorage = function () {
    return conf.loadConfigFromStorage(InputsConfigKey)
}
