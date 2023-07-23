// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later


import {JoystickControlPromiseClient} from "../../generated/server_grpc_web_pb";
import {Empty, SetConfigReq, StartLinkReq, Struct} from "../../pbwrap";
import {getServerUrl, isMockBackend} from "./settings";
import * as mock from "../mock/JoystickControlPromiseClient"

export const getClient = function (serverUrl, credentials, options) {
    if (isMockBackend()) {
        //for demos, where there is no backend
        return new mock.JoystickControlPromiseClient(serverUrl, credentials, options)
    }

    return new JoystickControlPromiseClient(getServerUrl(), credentials, options);
};

export const getGamepads = async function () {
    let client = getClient(getServerUrl(), null, null);
    let res = await client.getGamepads(new Empty(), {});

    // noinspection JSUnresolvedReference
    return res.getGamepadsList();
};

export const getTransmitters = async function () {
    let client = getClient(getServerUrl(), null, null);
    let res = await client.getTransmitters(new Empty(), {});

    // noinspection JSUnresolvedReference
    return res.getTransmittersList();
};


export const setConfig = async function (config) {
    let client = getClient(getServerUrl(), null, null);
    let req = new SetConfigReq();
    req.setConfig(Struct.fromJavaScript(config));

    return client.setConfig(req);
};


export const startLink = async function ({port, baudRate}) {
    let client = getClient(getServerUrl(), null, null);
    let req = new StartLinkReq();
    req.setPort(port);
    req.setBaudRate(baudRate);
    // noinspection UnnecessaryLocalVariableJS
    let res = await client.startLink(req, {});

    // noinspection JSUnresolvedReference
    return res;
};

export const stopLink = async function () {
    let client = getClient(getServerUrl(), null, null);

    // noinspection UnnecessaryLocalVariableJS
    let res = await client.stopLink(new Empty(), {});
    return res;
};

export const getAppInfo = async function () {
    let client = getClient(getServerUrl(), null, null);
    // noinspection UnnecessaryLocalVariableJS
    let res = await client.getAppInfo(new Empty(), {});
    return res;
};

