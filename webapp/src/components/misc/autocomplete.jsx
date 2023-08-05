// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import {getGamepads, getTransmitters} from "./server";
import {showError} from "./notifications";
import i18n from "./I18n";

export const AutoCompleteFunctions = {
    'baud-rate': async () => {
        return new Map([
            ["115200", "115200"],
            ["400000", "400000"],
            ["921600", "921600"],
            ["1870000", "1870000"],
            ["3750000", "3750000"],
            ["5250000", "5250000"]
        ]);
    },
    'precision-coordinate': async () => {
        return new Map([
            ["0", "0 decimals - 100,000 m"],
            ["1", "1 decimal - 10,000 m"],
            ["2", "2 decimals - 1,000 m"],
            ["3", "3 decimals - 100 m"],
            ["4", "4 decimals - 10 m"],
            ["5", "5 decimals - 1 m"],
            ["6", "6 decimals - 0.1 m"],
            ["7", "7 decimals - 0.01 m"],
            ["8", "8 decimals - 0.001 m"],
        ])
    },
    'font-size': async () => {
        return new Map([
            ["14", "Small"],
            ["18", "Medium"],
            ["22", "Large"],
        ])
    },
    'padding-location': async () => {
        return new Map([
            ["start", "Start"],
            ["end", "End"],
        ])
    },
    'location-lr': async () => {
        return new Map([
            ["left", "Left"],
            ["right", "Right"]
        ])
    },
    'transmitters': async () => {
        let transmitters = new Map();
        try {
            for (let transmitter of await getTransmitters()) {
                let port = transmitter.getPort();
                let name = transmitter.getName() || port;
                if (!port) {
                    continue;
                }
                transmitters.set(port, name);
            }
        } catch (e) {
            showError(`${i18n("error-msg-transmitters-not-loaded")}`);
        }

        if (transmitters.size === 0) {
            for (let i = 1; i <= 16; i++) {
                transmitters.set(`COM${i}`, `COM${i}`);
            }
        }
        return transmitters;
    }, 'crsf': async () => {
        return new Map([
            ["0", "CRSF Min (0)"],
            ["992", "CRSF Mid (992)"],
            ["1984", "CRSF Max(1984)"]
        ]);
    }, 'raw': async () => {
        return new Map([
            ["-32768", "RAW Min (-32768)"],
            ["-16384", "RAW QT1 (-16384)"],
            ["0", "RAW Mid (0)"],
            ["16384", "RAW QT3 (16384)"],
            ["32767", "RAW Max (32767)"]
        ]);
    }, 'boolean': async () => {
        return new Map([
            ["false", "False"],
            ["true", "True"]
        ])
    }, 'traverse': async () => {
        return new Map([
            ["clockwise", "Clockwise circular"],
            ["ping-pong", "Ping-Pong"]
        ]);
    }, 'axes': async () => {
        let axes = new Map();
        for (let i = 0; i < 32; i++) {
            axes.set(`${i}`, `Axis ${i}`)
        }
        return axes;
    }, 'buttons': async () => {
        let buttons = new Map();
        for (let i = 0; i < 32; i++) {
            buttons.set(`${i}`, `Button ${i}`);
        }
        return buttons;
    }, 'channels': async () => {
        let i = 0;
        let channels = new Map();

        channels.set(`${++i}`, `Channel ${i} (Aileron / Roll)`);
        channels.set(`${++i}`, `Channel ${i} (Elevator / Pitch)`);
        channels.set(`${++i}`, `Channel ${i} (Throttle)`);
        channels.set(`${++i}`, `Channel ${i} (Rudder / Yaw)`);

        for (i++; i <= 16; i++) {
            channels.set(`${i}`, `Channel ${i} (AUX ${i - 4})`);
        }

        return channels;
    }, 'gamepads': async () => {
        let inputDevices = new Map();
        try {
            for (let dev of await getGamepads()) {
                inputDevices.set(`${dev.getId()}`, dev.getName() + ` (${dev.getId()})`);
            }
        } catch (e) {
            showError(`${i18n("error-msg-gamepads-not-loaded")}`);
        }
        return inputDevices;
    }
}

export function getFieldAutoCompleteFunction(fieldDef) {
    return AutoCompleteFunctions?.[fieldDef?.["$meta"]?.autocomplete]
}

export const getAutoCompleteKey = (value, map) => {
    if (value === null) {
        return ""
    }

    if (!map || !(map instanceof Map)) {
        return value
    }

    for (let entry of map.entries()) {
        if (entry[1] === value) {
            return entry[0]
        }
    }

    return value
}
export const getAutoCompleteValue = (value, map) => {
    if (value === null || value === undefined) {
        return ""
    }

    if (map instanceof Map && map.has(`${value}`)) {
        value = map.get(`${value}`);
    }

    if (typeof value === "string" || typeof value === "number") {
        return value;
    }

    return `${value}`;

}