// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import {boxMullerRandom, MapRange} from "../misc/util";

function constrain(value, min, max) {
    return Math.max(Math.min(value, max), min);
}

export const MockDrone = function () {
    this._itervalId = 0;

    //battery
    this._batteryInitialCapacity = 1500;  // in milli-amp-hours
    this._batteryCapacity = 1500;         // in milli-amp-hours
    this._batteryCurrent = 5000;          // in milli-amps

    //attitude
    this._pitch = 0; //in degrees
    this._roll = 0;  //in degrees
    this._yaw = 0;   //in degrees

    //gps
    this._gpsLatitude = 37.41250326986313;    //in degrees
    this._gpsLongitude = -121.99799906669494; //in degrees
    this._gpsSatellites = 0;
    this._gpsAltitude = 0;
    this._gpsGroundSpeed = 0;
    this._gpsHeading = 0;

    //barometer
    this._barometerAltitude = 0;

    //flight mode
    this._flightMode = "ACRO";

    // link stats
    this._uplinkRssi1 = -35;          // in dBm
    this._uplinkRssi2 = 0;            // in dBm
    this._uplinkLinkQuality = 100;   // in percent
    this._uplinkSnr = 15;             // in dB
    this._activeAntenna = 0;
    this._radioFrequencyMode = 7;    // index into table
    this._uplinkPower = 2;            // in milli-wats
    this._downlinkRssi = -25;         // in dBm
    this._downlinkLinkQuality = 100; // in percent
    this._downlinkSnr = 12;           // in dB

    //variometer
    this._vertical_speed = 0;          // m/s

    return this;
}

// noinspection PointlessArithmeticExpressionJS
let MILLIS_IN_1_HOUR = 1 * 60 * 60 * 1000;

MockDrone.prototype.start = function () {
    this._lastTime = Date.now();
    this._lastAltitude = this._barometerAltitude;

    // the data mocked here is not accurate, or even self-consistent
    // the idea is to generate data that looks more or less realistic
    // ideally, I should record telemetry from a real flight, and just replay it here.
    this._itervalId = setInterval((function () {
        let currentTime = Date.now();
        let elapsedMillis = currentTime - this._lastTime;
        this._lastTime = currentTime;
        let milliAmpsConsumed = (this._batteryCurrent * elapsedMillis) / MILLIS_IN_1_HOUR;

        // battery
        this._batteryCapacity = constrain(this._batteryCapacity - milliAmpsConsumed, 0, this._batteryInitialCapacity);
        this._batteryCurrent = constrain(this._batteryCurrent + boxMullerRandom() * 100, 5000, 12000);

        // flight mode
        if (this._batteryCapacity === 0) {
            this._flightMode = "!ERR*"
            return;
        }

        //attitude
        let turn = boxMullerRandom();
        let pitchChange = boxMullerRandom();
        if (this._barometerAltitude < 5) {
            pitchChange = Math.abs(pitchChange);
        }

        this._pitch = constrain(this._pitch + pitchChange, -15, 15);
        this._roll = constrain(this._roll + turn, -45, 45);
        this._yaw = constrain(this._yaw + turn, -90, 90)

        //barometer
        this._barometerAltitude = constrain(this._barometerAltitude + pitchChange / 10, 0, 120)

        //variometer
        let altitudeDelta = (this._barometerAltitude - this._lastAltitude);
        let timeDelta = (elapsedMillis / 1000);
        let vSpeed = altitudeDelta/timeDelta;
        this._vertical_speed = constrain(vSpeed, -2,2);
        this._lastAltitude = this._barometerAltitude;

        //GPS
        this._gpsAltitude = this._barometerAltitude;
        this._gpsSatellites = 12;
        this._gpsHeading = this._yaw;
        this._gpsGroundSpeed = constrain(this._gpsGroundSpeed + pitchChange , 0, 25)
        this._gpsLatitude = constrain(this._gpsLatitude + boxMullerRandom() / 100000, 37.41090245870364, 37.41367431960655);
        this._gpsLongitude = constrain(this._gpsLongitude + boxMullerRandom() / 100000, -122.00094058363636, -121.9933238050084);

        //link stats
        this._uplinkRssi1 = constrain(this._uplinkRssi1 + boxMullerRandom(), -85, -25);
        this._uplinkRssi2 = 0;
        this._uplinkLinkQuality = constrain(this._uplinkLinkQuality + boxMullerRandom(), 90, 100);
        this._uplinkSnr = constrain(this._uplinkSnr + boxMullerRandom(), 5, 20);
        this._activeAntenna = 0;
        this._radioFrequencyMode = 7;
        this._uplinkPower = 2;
        this._downlinkRssi = constrain(this._downlinkRssi + boxMullerRandom(), -85, -25);
        this._downlinkLinkQuality = constrain(this._downlinkLinkQuality + boxMullerRandom(), 90, 100);
        this._downlinkSnr = constrain(this._downlinkSnr + boxMullerRandom(), 5, 20);
    }).bind(this), 50);
}

MockDrone.prototype.stop = function () {
    clearInterval(this._itervalId);
}

MockDrone.prototype.getPitch = function () {
    return this._pitch;
}

MockDrone.prototype.getRoll = function () {
    return this._roll;
}

MockDrone.prototype.getYaw = function () {
    return this._yaw;
}

MockDrone.prototype.getCurrent = function () {
    return this._batteryCurrent;
}

MockDrone.prototype.getRemaining = function () {
    return this._batteryCapacity / this._batteryInitialCapacity * 100;
}

MockDrone.prototype.getFuel = function () {
    return this._batteryInitialCapacity - this._batteryCapacity;
}

MockDrone.prototype.getVoltage = function () {
    // approximate voltage based on the percentage of the battery capacity remaining
    return MapRange(this.getRemaining(), 20, 100, 21.5, 25.2);
}

MockDrone.prototype.getFlightMode = function () {
    return this._flightMode;
}

MockDrone.prototype.getBarometerAltitude = function () {
    return this._barometerAltitude;
}

MockDrone.prototype.getGPSAltitude = function () {
    return this._gpsAltitude;
}

MockDrone.prototype.getGPSSatellites = function () {
    return this._gpsSatellites;
}

MockDrone.prototype.getGPSHeading = function () {
    return this._gpsHeading;
}

MockDrone.prototype.getGPSLatitude = function () {
    return this._gpsLatitude;
}

MockDrone.prototype.getGPSLongitude = function () {
    return this._gpsLongitude;
}

MockDrone.prototype.getGPSGroundSpeed = function () {
    return this._gpsGroundSpeed;
}

MockDrone.prototype.getFlightMode = function () {
    return this._flightMode;
}

MockDrone.prototype.getUplinkRssi1 = function () {
    return this._uplinkRssi1;
}

MockDrone.prototype.getUplinkRssi2 = function () {
    return this._uplinkRssi2;
}

MockDrone.prototype.getUplinkLinkQuality = function () {
    return this._uplinkLinkQuality;
}

MockDrone.prototype.getUplinkSnr = function () {
    return this._uplinkSnr;
}

MockDrone.prototype.getActiveAntenna = function () {
    return this._activeAntenna;
}

MockDrone.prototype.getRadioFrequencyMode = function () {
    return this._radioFrequencyMode;
}

MockDrone.prototype.getUplinkPower = function () {
    return this._uplinkPower;
}

MockDrone.prototype.getDownlinkRssi = function () {
    return this._downlinkRssi;
}

MockDrone.prototype.getDownlinkLinkQuality = function () {
    return this._downlinkLinkQuality;
}

MockDrone.prototype.getDownlinkSnr = function () {
    return this._downlinkSnr;
}

MockDrone.prototype.getVerticalSpeed = function () {
    return this._vertical_speed;
}
