// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later
// noinspection JSUnusedGlobalSymbols

import {MockServer} from "./MockServer";

let mockServer = new MockServer();

export const JoystickControlPromiseClient = function (url, credentials, options) {
    if (!url) {
        throw new Error("url is required")
    }

    this._url = url;
    this._credentials = credentials;
    this._options = options;

    return this
}

JoystickControlPromiseClient.prototype.getGamepads = async function(req) {
    return mockServer.getGamepads(req);
}

JoystickControlPromiseClient.prototype.getTransmitters = async function(req) {
    return mockServer.getTransmitters(req);
}

JoystickControlPromiseClient.prototype.setConfig = async function(req) {
    return mockServer.setConfig(req);
}

JoystickControlPromiseClient.prototype.startLink = async function(req) {
    return mockServer.startLink(req);
}

JoystickControlPromiseClient.prototype.stopLink = async function(req) {
    return mockServer.stopLink(req);
}

JoystickControlPromiseClient.prototype.getAppInfo = async function(req) {
    return mockServer.getAppInfo(req)
}



JoystickControlPromiseClient.prototype.getCRSFDevices = async function (req) {
    return mockServer.getCRSFDevices(req);
};


JoystickControlPromiseClient.prototype.getCRSFDeviceFields = async function (req) {
    return mockServer.getCRSFDeviceFields(req);
};


JoystickControlPromiseClient.prototype.setCRSFDeviceField = async function (req) {
    return mockServer.setCRSFDeviceField(req);
};


JoystickControlPromiseClient.prototype.getLinkStream = async function(req) {
    return mockServer.getLinkStream(req);
}

JoystickControlPromiseClient.prototype.getTelemetryStream = async function(req) {
    return mockServer.getTelemetryStream(req);
}

JoystickControlPromiseClient.prototype.getTransmitterStream = async function(req) {
    return mockServer.getTransmitterStream(req);
}

JoystickControlPromiseClient.prototype.getGamepadStream = async function(req) {
    return mockServer.getGamepadStream(req);
}

JoystickControlPromiseClient.prototype.getEvalStream = async function(req) {
    return mockServer.getEvalStream(req);
}



