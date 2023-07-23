// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import {Gamepad} from "../../pbwrap";
import {MockGamepadStream} from "./MockGamepadStream";

export const MockGamepad = function ({id, name, axes, buttons, hats}) {
    this._proto = new Gamepad();

    this._proto.setId(id)
    this._proto.setName(name)
    this._proto.setAxes(axes)
    this._proto.setButtons(buttons);
    this._proto.setHats(hats);

    this._buttons = [];
    for (let i = 0; i < buttons; i++) {
        this._buttons.push(0);
    }

    this._axes = [];
    for (let i = 0; i < axes; i++) {
        this._axes.push(0)
    }

    this._hats = [];
    for (let i = 0; i < hats; i++) {
        this._hats.push(0)
    }

    this._stream = null;

    return this
}

MockGamepad.prototype.getProto = function () {
    return this._proto;
}

// noinspection JSUnusedGlobalSymbols
MockGamepad.prototype.getAxis = function(index) {
    if (index < 0 || index > this._axes.length - 1) {
        return NaN;
    }
    return this._axes[index];
}

// noinspection JSUnusedGlobalSymbols
MockGamepad.prototype.setAxis = function(index, value) {
    if (index < 0 || index > this._axes.length - 1 || isNaN(value)) {
        return
    }

    this._axes[index] = value;
}

// noinspection JSUnusedGlobalSymbols
MockGamepad.prototype.getButton = function(index) {
    if (index < 0 || index > this._buttons.length - 1) {
        return NaN;
    }
    return this._buttons[index];
}

// noinspection JSUnusedGlobalSymbols
MockGamepad.prototype.setButton = function(index, value) {
    if (index < 0 || index > this._buttons.length - 1 || isNaN(value)) {
        return
    }

    this._buttons[index] = value;
}

// noinspection JSUnusedGlobalSymbols
MockGamepad.prototype.getHat = function(index) {
    if (index < 0 || index > this._hats.length - 1) {
        return NaN;
    }
    return this._hats[index];
}

// noinspection JSUnusedGlobalSymbols
MockGamepad.prototype.setHat= function(index, value) {
    if (index < 0 || index > this._hats.length - 1 || isNaN(value)) {
        return
    }

    this._hats[index] = value;
}

MockGamepad.prototype.getAxes = function() {
    return this._axes;
}

MockGamepad.prototype.getButtons = function() {
    return this._buttons;
}

// noinspection JSUnusedGlobalSymbols
MockGamepad.prototype.getHats = function() {
    return this._hats;
}

MockGamepad.prototype.getStream = function () {
    if (this._stream == null || this._stream.isCanceled()) {
        this._stream = new MockGamepadStream({gamepad: this})
    }

    return this._stream;
}
