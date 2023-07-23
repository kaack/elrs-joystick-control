// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import EventEmitter from 'events';
import {TransmitterChannels, TransmitterChannel} from "../../pbwrap";

export const MockTransmitterStream = function ({transmitter}) {
    this._transmitter = transmitter;
    this._emitter = new EventEmitter();
    this._intervalId = 0;
    this._isCanceled = false;

    const init = (function () {
        this._intervalId = setInterval(function () {
            let channels = this._transmitter.getChannels();
            let channelsList = [];
            for (let i = 0; i < channels.length; i++) {
                let channel = new TransmitterChannel();
                channel.setChannelNumber(i+1);
                channel.setChannelValue(channels[i]);
                channelsList.push(channel);
            }

            let res = new TransmitterChannels();
            res.setChannelsList(channelsList);
            this._emitter.emit("data", res);
        }.bind(this), 100);
    }).bind(this);

    init();

    return this;
}


MockTransmitterStream.prototype.cancel = function () {
    if (this.isCanceled()) return;

    clearInterval(this._intervalId);
    this._emitter.emit("end", null)
    this._isCanceled = true;
}

MockTransmitterStream.prototype.isCanceled = function () {
    return this._isCanceled;
}

MockTransmitterStream.prototype.on = function (eventType, handler) {
    if (this.isCanceled()) return;

    this._emitter.on(eventType, handler);
}