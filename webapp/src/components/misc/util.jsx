// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

export function MapRange(ix, ixMin, ixMax, iyMin, iyMax) {
    //use floats to avoid overflows
    let fx = parseFloat(ix)
    let fxMin = parseFloat(ixMin)
    let fxMax = parseFloat(ixMax)
    let fyMin = parseFloat(iyMin)
    let fyMax = parseFloat(iyMax)

    let fy = fyMin + (fyMax - fyMin) * (fx - fxMin) / (fxMax - fxMin)
    fy = Math.max(fy, fyMin)
    fy = Math.min(fy, fyMax)
    return fy

}

export function boxMullerRandom() {
    // noinspection JSUnusedLocalSymbols
    let phase = false,
        x1, x2, w, z;

    return (function () {
        // noinspection JSAssignmentUsedAsCondition
        if (phase = !phase) {
            do {
                x1 = 2.0 * Math.random() - 1.0;
                x2 = 2.0 * Math.random() - 1.0;
                w = x1 * x1 + x2 * x2;
            } while (w >= 1.0);

            w = Math.sqrt((-2.0 * Math.log(w)) / w);
            return x1 * w;
        } else {
            return x2 * w;
        }
    })();
}

export function randomPlusOrMinus() {
    return (Math.round(Math.random()) * 2 - 1)
}