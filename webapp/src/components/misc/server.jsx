// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later


import {JoystickControlPromiseClient} from "../../generated/server_grpc_web_pb";
import {Empty, SetConfigReq, StartLinkReq, Struct} from "../../pbwrap";
import {getServerUrl} from "./settings";

export const getGamepads = async function () {
    let client = new JoystickControlPromiseClient(getServerUrl(), null, null);
    let res = await client.getGamepads(new Empty(), {});

    // noinspection JSUnresolvedReference
    return res.getGamepadsList();
};

export const getTransmitters = async function () {
    let client = new JoystickControlPromiseClient(getServerUrl(), null, null);
    let res = await client.getTransmitters(new Empty(), {});

    // noinspection JSUnresolvedReference
    return res.getTransmittersList();
};


export const setConfig = async function (config) {
    let client = new JoystickControlPromiseClient(getServerUrl(), null, null);
    let req = new SetConfigReq();
    req.setConfig(Struct.fromJavaScript(config));

    return client.setConfig(req);
};


export const startLink = async function ({port, baudRate}) {
    let client = new JoystickControlPromiseClient(getServerUrl(), null, null);
    let req = new StartLinkReq();
    req.setPort(port);
    req.setBaudRate(baudRate);
    // noinspection UnnecessaryLocalVariableJS
    let res = await client.startLink(req, {});

    // noinspection JSUnresolvedReference
    return res;
};

export const stopLink = async function () {
    let client = new JoystickControlPromiseClient(getServerUrl(), null, null);

    // noinspection UnnecessaryLocalVariableJS
    let res = await client.stopLink(new Empty(), {});
    return res;
};

export const getAppInfo = async function () {
    let client = new JoystickControlPromiseClient(getServerUrl(), null, null);

    // noinspection UnnecessaryLocalVariableJS
    let res = await client.getAppInfo(new Empty(), {});
    return res;
};

