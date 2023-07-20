// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import {AutoCompleteFunctions, getFieldAutoCompleteFunction} from "./autocomplete";

export function generateStringForm({fieldDef, fieldName}) {
    let autocomplete = getFieldAutoCompleteFunction(fieldDef);

    let defaultValue = typeof fieldDef?.default === "string" ? fieldDef?.default : "";
    return {
        type: autocomplete ? "auto-complete" : "text",
        key: fieldName,
        label: fieldDef?.title || "",
        help: fieldDef?.description,
        default: defaultValue,
        fetchOptionsMap: autocomplete
    }
}

export function generateArrayOfIntegerForm({fieldDef, fieldName}) {
    let autocomplete = getFieldAutoCompleteFunction(fieldDef);

    let defaultValue = "";
    let values = [];
    if (Array.isArray(fieldDef?.default)) {
        for (let value of fieldDef.default) {
            let valueParsed = parseInt(value);
            if (!isNaN(valueParsed)) {
                values.push(value);
            }
        }

        defaultValue = values.join(", ");
    }

    return {
        type: autocomplete ? "auto-complete" : "text",
        key: fieldName,
        label: fieldDef?.title || "",
        help: fieldDef?.description,
        default: defaultValue,
        fetchOptionsMap: autocomplete
    }
}

export function generateIntegerForm({fieldDef, fieldName}) {
    let autocomplete = getFieldAutoCompleteFunction(fieldDef);

    let defaultValue = fieldDef?.default;
    defaultValue = isNaN(defaultValue) ? null : `${defaultValue}`;

    return {
        type: autocomplete ? "auto-complete" : "text",
        key: fieldName,
        label: fieldDef?.title || "",
        help: fieldDef?.description,
        default: defaultValue,
        fetchOptionsMap: autocomplete
    }
}

export function generateBooleanForm({fieldDef, fieldName}) {
    let autocomplete = getFieldAutoCompleteFunction(fieldDef) || AutoCompleteFunctions.boolean;

    let defaultValue = fieldDef?.default;
    defaultValue = typeof defaultValue === typeof true ? `${defaultValue}` : null;

    return {
        type: "auto-complete",
        key: fieldName,
        label: fieldDef?.title || "",
        help: fieldDef?.description,
        default: defaultValue,
        fetchOptionsMap: autocomplete
    };
}


export function generateIntegerMapForm({fieldDef, fieldName}) {

    return {
        type: "lookup-table",
        key: fieldName,
        label: fieldDef?.title || "",
        help: fieldDef?.description,
        default: fieldDef?.default,
        style: {height: 220}
    };
}