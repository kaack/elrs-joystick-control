// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import EventEmitter from 'events';
import {GamepadInputState, GamepadInputsStates, GamepadInputType} from "../../pbwrap";

export const MockGamepadStream = function ({gamepad}) {
    this._gamepad = gamepad;
    this._emitter = new EventEmitter();
    this._intervalId = 0;
    this._isCanceled = false;

    const init = (function () {
        this._intervalId = setInterval(function () {
            let statesList = [];

            let buttons = this._gamepad.getButtons();
            for (let i = 0; i < buttons.length; i++) {
                let inputState = new GamepadInputState();
                inputState.setType(GamepadInputType.BUTTON);
                inputState.setIndex(i);
                inputState.setValue(buttons[i]);
                statesList.push(inputState);
            }

            let axes = this._gamepad.getAxes();
            for (let i = 0; i < axes.length; i++) {
                let inputState = new GamepadInputState();
                inputState.setType(GamepadInputType.AXIS);
                inputState.setIndex(i);
                inputState.setValue(axes[i]);
                statesList.push(inputState);
            }

            let res = new GamepadInputsStates();
            res.setInputsStatesList(statesList);
            this._emitter.emit("data", res);
        }.bind(this), 100);
    }).bind(this);

    init();

    return this;
}


MockGamepadStream.prototype.cancel = function () {
    if (this.isCanceled()) return;

    clearInterval(this._intervalId);
    this._emitter.emit("end", null)
    this._isCanceled = true;
}

MockGamepadStream.prototype.isCanceled = function () {
    return this._isCanceled;
}

MockGamepadStream.prototype.on = function (eventType, handler) {
    if (this.isCanceled()) return;

    this._emitter.on(eventType, handler);
}