// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import EventEmitter from 'events';
import {
    AttitudeData,
    BarometerData,
    BatteryData,
    FlightModeData,
    GPSData,
    LinkStatsData,
    SyncData,
    Telemetry, VariometerData
} from "../../pbwrap";
import {boxMullerRandom} from "../misc/util";


const MockedTelemetryGenerators = new Map([
    [Telemetry.DataCase.SYNC, function ({server}) {
        let frame = new SyncData();
        frame.setRate(1000);
        frame.setOffset(Math.floor(boxMullerRandom() * 10000));

        let telem = new Telemetry();
        telem.setSync(frame);
        return telem;
    }],
    [Telemetry.DataCase.BATTERY, function({server}) {
        let drone = server.getDrone();
        let frame = new BatteryData();

        frame.setVoltage(drone.getVoltage());
        frame.setCurrent(drone.getCurrent());
        frame.setFuel(drone.getFuel());
        frame.setRemaining(drone.getRemaining());



        let telem = new Telemetry();
        telem.setBattery(frame);
        return telem;
    }],
    [Telemetry.DataCase.ATTITUDE, function({server}) {
        let drone = server.getDrone();
        let frame = new AttitudeData()

        frame.setPitch(drone.getPitch());
        frame.setRoll(drone.getRoll());
        frame.setYaw(drone.getYaw());

        let telem = new Telemetry();
        telem.setAttitude(frame);
        return telem;
    }],
    [Telemetry.DataCase.BAROMETER, function({server}) {
        let drone = server.getDrone();
        let frame = new BarometerData();

        frame.setAltitude(drone.getBarometerAltitude());

        let telem = new Telemetry();
        telem.setBarometer(frame);
        return telem;
    }],
    [Telemetry.DataCase.GPS, function({server}) {
        let drone = server.getDrone();
        let frame = new GPSData();
        frame.setAltitude(drone.getGPSAltitude());
        frame.setSatellites(drone.getGPSSatellites());
        frame.setHeading(drone.getGPSHeading());
        frame.setLatitude(drone.getGPSLatitude());
        frame.setLongitude(drone.getGPSLongitude());
        frame.setGroundSpeed(drone.getGPSGroundSpeed());

        let telem = new Telemetry();
        telem.setGps(frame);
        return telem;
    }],
    [Telemetry.DataCase.FLIGHT_MODE, function({server}) {
        let drone = server.getDrone();
        let frame = new FlightModeData();
        frame.setMode(drone.getFlightMode());

        let telem = new Telemetry();
        telem.setFlightMode(frame);
        return telem;
    }],
    [Telemetry.DataCase.LINK_STATS, function({server}) {
        let drone = server.getDrone();
        let frame = new LinkStatsData();
        frame.setUplinkRssi1(drone.getUplinkRssi1());
        frame.setUplinkRssi2(drone.getUplinkRssi2());
        frame.setUplinkLinkQuality(drone.getUplinkLinkQuality());
        frame.setUplinkSnr(drone.getUplinkSnr());
        frame.setActiveAntenna(drone.getActiveAntenna());
        frame.setRadioFrequencyMode(drone.getRadioFrequencyMode());
        frame.setUplinkPower(drone.getUplinkPower());
        frame.setDownlinkRssi(drone.getDownlinkRssi());
        frame.setDownlinkLinkQuality(drone.getDownlinkLinkQuality());
        frame.setDownlinkSnr(drone.getDownlinkSnr());

        let telem = new Telemetry();
        telem.setLinkStats(frame);
        return telem;
    }],
    [Telemetry.DataCase.VARIOMETER, function({server}) {
        let drone = server.getDrone();
        let frame = new VariometerData();
        frame.setVerticalSpeed(drone.getVerticalSpeed());

        let telem = new Telemetry();
        telem.setVariometer(frame);
        return telem;
    }]
])


export const MockTelemetryStream = function ({server}) {
    this._server = server
    this._emitter = new EventEmitter();
    this._intervalId = 0;
    this._isCanceled = false;
    this._context = {
        server
    };

    let telemTypes = Array.from(MockedTelemetryGenerators.keys());
    const init = (function () {
        this._intervalId = setInterval(function () {
            let link = this._server.getLink();
            if (!link) {
                //link not active, no telemetry
                return;
            }

            for (let telemType of telemTypes) {
                this._emitter.emit("data", MockedTelemetryGenerators.get(telemType)(this._context));
            }
        }.bind(this), 100);
    }).bind(this);

    init();

    return this;
}


MockTelemetryStream.prototype.cancel = function () {
    if (this.isCanceled()) return;

    clearInterval(this._intervalId);
    this._emitter.emit("end", null)
    this._isCanceled = true;
}

MockTelemetryStream.prototype.isCanceled = function () {
    return this._isCanceled;
}

MockTelemetryStream.prototype.on = function (eventType, handler) {
    if (this.isCanceled()) return;

    this._emitter.on(eventType, handler);
}