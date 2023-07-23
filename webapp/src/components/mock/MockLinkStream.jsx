// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import EventEmitter from 'events';
import {LinkState, PortState, SupervisorState} from "../../pbwrap";

export const MockLinkStream = function({server}) {
    this._server = server
    this._emitter = new EventEmitter();
    this._intervalId = 0;
    this._isCanceled = false;

    const init = (function() {
        this._intervalId = setInterval(function () {
            let state = new LinkState();
            let link = this._server.getLink();

            if (!link) {
                state.setSupervisorState(SupervisorState.SUPERVISORINACTIVE);
                state.setPortState(PortState.PORTUNKNOWN);
            } else {
                state.setSupervisorState(SupervisorState.SUPERVISORACTIVE);
                state.setPortState(PortState.PORTCONNECTED);
                state.setReceivedPacketsCount(link.getReceivedPacketsCount());
                state.setSentPacketsCount(link.getSentPacketsCount());
                state.setErrorPacketsCount(link.getErrorPacketsCount());
            }

            this._emitter.emit("data", state)

        }.bind(this), 500);
    }).bind(this);

    init();

    return this;
}


MockLinkStream.prototype.cancel = function() {
    if (this.isCanceled()) return;

    clearInterval(this._intervalId);
    this._emitter.emit("end", null)
    this._isCanceled = true;
}

MockLinkStream.prototype.isCanceled = function() {
    return this._isCanceled;
}

MockLinkStream.prototype.on = function(eventType, handler) {
    if (this.isCanceled()) return;

    this._emitter.on(eventType, handler);
}