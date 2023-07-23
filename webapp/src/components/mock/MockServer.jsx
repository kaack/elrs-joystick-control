// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later


import {Empty, GetAppInfoRes, GetGamepadsRes, GetTransmitterRes} from "../../pbwrap";
import {MockLink} from "./MockLink";
import {MockLinkStream} from "./MockLinkStream";
import {MockTelemetryStream} from "./MockTelemetryStream";
import {MockDrone} from "./MockDrone";
import {MockTransmitter} from "./MockTransmitter";
import {MockGamepad} from "./MockGamepad";
import {Warning} from "../misc/errors";


export const MockServer = function () {
    this._link = null;
    this._linkStream = null;
    this._telemetryStream = null;
    this._transmitters = new Map([
        ["COM6", new MockTransmitter({port: "COM6", name: "Silicon Labs CP210x USB to UART Bridge"})]
    ]);
    this._gamepads = new Map([
        ["id1", new MockGamepad({id: "id1", name: "ThrustMaster Warthog", axes: 2, buttons: 19, hats: 1})],
        ["id2", new MockGamepad({id: "id2", name: "ThrustMaster T.16000M", axes: 4, buttons: 14, hats: 1})]
    ]);

    return this;
}


/**
 *
 * @returns {link | MockLink}
 */
MockServer.prototype.getLink = function () {
    return this._link;
}

MockServer.prototype.getDrone = function () {
    return this._drone;
}

/**
 *
 * @param req SetConfigReq
 * @type SetConfigReq
 * @returns {res | Empty}
 */
MockServer.prototype.setConfig = function (req) {
    throw new Warning("Applying config is not yet implemented for mocked backend");

    // TODO: implement mock validation based on schema
    // noinspection UnreachableCodeJS
    let config = req.getConfig();
    // noinspection JSUnusedLocalSymbols
    let configJSON = config.toJavaScript();
    return new Empty();
}

/**
 *
 * @param req
 * @type StartLinkReq
 * @returns {res | Empty}
 */
MockServer.prototype.startLink = function (req) {
    if (this._link !== null) {
        throw new Error("link is already active")
    }

    let port = req.getPort();
    let baudRate = req.getBaudRate();

    if (!port) {
        throw new Error("port is required");
    }

    if (!baudRate) {
        throw new Error("baud rate is required")
    }

    this._link = new MockLink({port, baudRate});
    this._link.start();

    this._drone = new MockDrone();
    this._drone.start();

    return new Empty();
}

// noinspection JSUnusedLocalSymbols
/**
 *
 * @param req
 * @type Empty
 */
MockServer.prototype.stopLink = function (req) {
    if (this._link === null) {
        throw new Error("link is not active");
    }

    this._link.stop();
    this._link = null;

    this._drone.stop();
    this._drone = null;

    return new Empty();
}

// noinspection JSUnusedLocalSymbols
/**
 * @param req
 * @type Empty
 * @returns {res | GetTransmitterRes}
 */
MockServer.prototype.getTransmitters = function (req) {
    let res = new GetTransmitterRes();
    res.setTransmittersList(Array.from(this._transmitters.values()).map( t => t.getProto()))
    return res;
}

// noinspection JSUnusedLocalSymbols
/**
 * @param req
 * @type Empty
 * @returns {res | GetGamepadsRes}
 */
MockServer.prototype.getGamepads = function (req) {
    let res = new GetGamepadsRes();
    res.setGamepadsList(Array.from(this._gamepads.values()).map(g => g.getProto()));
    return res;
}

// noinspection JSUnusedLocalSymbols
/**
 * @param req
 * @type Empty
 * @returns {res | GetAppInfoRes}
 */
MockServer.prototype.getAppInfo = function (req) {
    let res = new GetAppInfoRes();
    res.setReleaseTag("v0.1.0");
    res.setBranchName("mock");
    res.setCommitHash("mock")
    return res;
}

// noinspection JSUnusedLocalSymbols
/**
 * @param req
 * @type Empty
 */
MockServer.prototype.getLinkStream = function (req) {
    if (this._linkStream === null || this._linkStream.isCanceled()) {
        this._linkStream = new MockLinkStream({server: this});
    }

    return this._linkStream
}

// noinspection JSUnusedLocalSymbols
/**
 * @param req
 * @type Empty
 */
MockServer.prototype.getTelemetryStream = function (req) {
    if (this._telemetryStream === null || this._telemetryStream.isCanceled()) {
        this._telemetryStream = new MockTelemetryStream({server: this});
    }

    return this._telemetryStream
}

// noinspection JSUnusedLocalSymbols
/**
 * @param req
 * @type GetTransmitterStreamReq
 */
MockServer.prototype.getTransmitterStream = function (req) {

    let reqTransmitter = req.getTransmitter();
    if (!reqTransmitter) {
        throw new Error("transmitter field is required");
    }

    let port = reqTransmitter.getPort();
    if (!port) {
        throw new Error(`port field is required`)
    }

    if (!this._transmitters.has(port)) {
        throw new Error(`no transmitter found on port "${port}"`);
    }

    let mockTransmitter = this._transmitters.get(port);

    return mockTransmitter.getStream()
}


// noinspection JSUnusedLocalSymbols
/**
 * @param req
 * @type GetGamepadStreamReq
 */
MockServer.prototype.getGamepadStream = function (req) {

    let reqGamepad = req.getGamepad();
    if (!reqGamepad) {
        throw new Error("gamepad field is required");
    }

    let id = reqGamepad.getId();
    if (!id) {
        throw new Error(`id field is required`)
    }

    if (!this._gamepads.has(id)) {
        throw new Error(`no gamepad found with id "${id}"`);
    }

    let mockGamepad = this._gamepads.get(id);

    return mockGamepad.getStream()
}

// noinspection JSUnusedLocalSymbols
/**
 * @param req
 * @type Empty
 */
MockServer.prototype.getEvalStream = function (req) {
    throw new Warning("Values data stream is not yet implemented for mocked backend")
}