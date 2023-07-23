// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import {StatusCode} from "grpc-web";
import {Empty, GetGamepadStreamReq, GetTransmitterStreamReq, Telemetry} from "../../pbwrap";
import {getServerUrl} from "./settings";
import {getClient} from "./server";


export const getTransmitterStream = async function (transmitter) {
    let client = getClient(getServerUrl(), null, null);
    let req = new GetTransmitterStreamReq();
    req.setTransmitter(transmitter);
    return client.getTransmitterStream(req)
};

export const getGamepadStream = async function (gamepad) {
    let client = getClient(getServerUrl(), null, null);
    let req = new GetGamepadStreamReq();
    req.setGamepad(gamepad);

    return client.getGamepadStream(req);
};

export const getEvalStream = async function () {
    let client = getClient(getServerUrl(), null, null);
    return client.getEvalStream(new Empty());
}

export const getLinkStream = async function () {
    let client = getClient(getServerUrl(), null, null);
    return client.getLinkStream(new Empty());
}


export const getTelemetryStream = async function () {
    let client = getClient(getServerUrl(), null, null);
    return client.getTelemetryStream(new Empty());
}


export async function streamValues({
                                       onStreamBegin, onStreamActive, onStreamData, onStreamError, onStreamEnd
                                   }) {

    let stream = await getEvalStream();

    onStreamBegin && onStreamBegin(stream);

    let firstData = null;

    stream.on('data', function (response) {
        let statesMap = response.getStatesMap();
        if (!firstData) {
            firstData = statesMap;
            onStreamActive && onStreamActive();
        }
        onStreamData && onStreamData(statesMap)
    });

    stream.on('status', function (status) {
        if (!status || status.code !== StatusCode.OK) {
            onStreamError && onStreamError(status);
        }
    });

    stream.on('end', function (end) {
        onStreamEnd && onStreamEnd(end)
    });

    return stream;
}


const TelemetryMap = new Map([
    [Telemetry.DataCase.LINK_STATS, t => t.getLinkStats()],
    [Telemetry.DataCase.ATTITUDE, t => t.getAttitude()],
    [Telemetry.DataCase.GPS, t => t.getGps()],
    [Telemetry.DataCase.BATTERY, t => t.getBattery()],
    [Telemetry.DataCase.FLIGHT_MODE, t => t.getFlightMode()],
    [Telemetry.DataCase.LINK_RX, t => t.getLinkRx()],
    [Telemetry.DataCase.LINK_TX, t => t.getLinkTx()],
    [Telemetry.DataCase.SYNC, t => t.getSync()],
    [Telemetry.DataCase.BAROMETER, t => t.getBarometer()],
    [Telemetry.DataCase.BAROMETER_VARIOMETER, t => t.getBarometerVariometer()],
    [Telemetry.DataCase.VARIOMETER, t => t.getVariometer()],
])

export async function streamTelemetry({
                                          onStreamBegin, onStreamActive, onStreamData, onStreamError, onStreamEnd
                                      }) {

    let stream = await getTelemetryStream();

    onStreamBegin && onStreamBegin(stream);

    let firstData = null;



    stream.on('data', function (response) {
        let dataCase = response.getDataCase();
        let data = TelemetryMap.get(dataCase)?.(response);

        if (!data) {
            return
        }

        if (!firstData) {
            firstData = data;
            onStreamActive && onStreamActive();
        }
        onStreamData && onStreamData(data)
    });

    stream.on('status', function (status) {
        if (!status || status.code !== StatusCode.OK) {
            onStreamError && onStreamError(status);
        }
    });

    stream.on('end', function (end) {
        onStreamEnd && onStreamEnd(end)
    });

    return stream;
}


export async function streamChannels(transmitter, {
    onStreamBegin, onStreamActive, onStreamData, onStreamError, onStreamEnd
}) {
    let stream = await getTransmitterStream(transmitter);

    onStreamBegin && onStreamBegin(stream);

    let firstData = null;

    stream.on('data', function (response) {
        let list = response.getChannelsList();
        if (!firstData) {
            firstData = list;
            onStreamActive && onStreamActive();
        }
        onStreamData && onStreamData(list)
    });

    stream.on('status', function (status) {
        if (!status || status.code !== StatusCode.OK) {
            onStreamError && onStreamError(status);
        }
    });

    stream.on('end', function (end) {
        onStreamEnd && onStreamEnd(end)
        //console.log("stream ended")
    });

    return stream;

}

export async function streamGamepadState(gamepad, {
    onStreamBegin, onStreamActive, onStreamData, onStreamError, onStreamEnd
}) {

    let stream = await getGamepadStream(gamepad);

    onStreamBegin && onStreamBegin(stream);

    let firstData = null;

    stream.on('data', function (response) {
        let list = response.getInputsStatesList();
        if (!firstData) {
            firstData = list;
            onStreamActive && onStreamActive();
        }
        onStreamData && onStreamData(list)
    });

    stream.on('status', function (status) {
        if (!status || status.code !== StatusCode.OK) {
            onStreamError && onStreamError(status);
        }
    });

    stream.on('end', function (end) {
        onStreamEnd && onStreamEnd(end)
        //console.log("stream ended")
    });

    return stream;
}


export async function streamLink({
                                     onStreamBegin, onStreamActive, onStreamData, onStreamError, onStreamEnd
                                 }) {

    let stream = await getLinkStream();

    onStreamBegin && onStreamBegin(stream);

    let firstData = null;

    stream.on('data', function (response) {
        let linkState = response;
        if (!firstData) {
            firstData = linkState;
            onStreamActive && onStreamActive();
        }
        onStreamData && onStreamData(linkState)
    });

    stream.on('status', function (status) {
        if (!status || status.code !== StatusCode.OK) {
            onStreamError && onStreamError(status);
        }
    });

    stream.on('end', function (end) {
        onStreamEnd && onStreamEnd(end)
    });

    return stream;
}