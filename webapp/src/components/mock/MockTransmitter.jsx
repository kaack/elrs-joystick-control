// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import {Transmitter} from "../../pbwrap";
import {MockTransmitterStream} from "./MockTransmitterStream";

function isValidChannel(number) {
    return number >= 1 || number <= 16;
}

export const MockTransmitter = function ({name, port}) {
    this._proto = new Transmitter();
    this._proto.setName(name);
    this._proto.setPort(port);

    this._channels = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    this._stream = null;
    return this
}

MockTransmitter.prototype.getProto = function () {
    return this._proto;
}

// noinspection JSUnusedGlobalSymbols
MockTransmitter.prototype.getChannel = function (channelNumber) {
    if (!isValidChannel(channelNumber)) {
        return NaN;
    }

    return this._channels[channelNumber - 1];
}

// noinspection JSUnusedGlobalSymbols
MockTransmitter.prototype.setChannel = function (channelNumber, value) {
    if (!isValidChannel(channelNumber)) {
        return;
    }

    if (isNaN(value)) {
        return
    }

    this._channels[channelNumber - 1] = value;
}

MockTransmitter.prototype.getChannels = function () {
    return this._channels;
}

MockTransmitter.prototype.getStream = function () {
    if (this._stream == null || this._stream.isCanceled()) {
        this._stream = new MockTransmitterStream({transmitter: this})
    }

    return this._stream;
}
