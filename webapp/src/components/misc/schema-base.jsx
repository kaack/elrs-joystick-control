// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

export const getFieldName = function (fieldName, fieldDef) {
    return JSON.stringify(fieldDef?.title) || fieldName;
};
export const getNodeSchema = function (schema, nodeType) {
    return schema.definitions?.[nodeType]?.properties?.[nodeType];
}
export const getFieldSchema = function (schema, nodeType, fieldName) {
    let nodeSchema = getNodeSchema(schema, nodeType);
    return nodeSchema?.properties?.[fieldName];
}
export const geNodeTitle = function (schema, nodeType) {
    let nodeSchema = getNodeSchema(schema, nodeType);
    return nodeSchema?.title;
}
// noinspection JSUnusedGlobalSymbols
export const geNodeDescription = function (schema, nodeType) {
    let nodeSchema = getNodeSchema(schema, nodeType);
    return nodeSchema?.title;
}

