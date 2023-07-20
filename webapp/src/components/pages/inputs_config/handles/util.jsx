// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later


import {getFieldSchema} from "../misc/schema";

export const In1Handle = "in1";
export const In2Handle = "in2";
export const Out1Handle = "out1";
export const Cond1Handle = "cond1";
export const Cond2Handle = "cond2";
export const Cond3Handle = "cond3";




function numberToWord(number) {
    switch (number) {
        case 0:
            return "zero";
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7:
            return "seven";
        case 8:
            return "eight";
        case 9:
            return "nine";
    }
    return `${number}`
}

export const getHandleFieldLabel = function (nodeType, fieldName) {
    let fieldSchema = getFieldSchema(nodeType, fieldName);
    let minItems = fieldSchema?.minItems;
    let title = fieldSchema?.title;

    if (!title) {
        return "";
    }

    if (minItems > 0) {
        title = `${title} (${numberToWord(minItems)} or more)`
    }

    return title;
}