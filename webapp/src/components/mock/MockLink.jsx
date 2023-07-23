// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

export const MockLink = function ({port, baudRate}) {
    this.port = port;
    this.baudRate = baudRate;

    this.sentPackets = 0;
    this.recvPackets = 0;
    // noinspection JSUnusedGlobalSymbols
    this.errorPackets = 0;

    this.intervalId = 0;
}

MockLink.prototype.start = function () {
    this.intervalId = setInterval(function() {
        let packets = Math.floor(Math.random() * 100) + 1;
        this.sentPackets +=  packets
        this.recvPackets += Math.floor(packets / 10)
    }.bind(this), 500)

}

MockLink.prototype.stop = function() {
    clearInterval(this.intervalId);
    this.intervalId = 0
}

MockLink.prototype.getSentPacketsCount = function() {
    return this.sentPackets;
}

MockLink.prototype.getReceivedPacketsCount = function() {
    return this.recvPackets;
}

MockLink.prototype.getErrorPacketsCount = function() {
    return 0;
}

