// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import * as schemaBase from '../../../misc/schema-base'
import schema from "../../../../../../pkg/config/schema.yaml";


export const getSchema = function() {
    return schema;
}

// noinspection JSUnusedGlobalSymbols
export const getFieldName = function (fieldName, fieldDef) {
    return schemaBase.getFieldName(fieldDef)
};

export const getNodeSchema = function (nodeType) {
    return schemaBase.getNodeSchema(getSchema(), nodeType)
}
export const getFieldSchema = function (nodeType, fieldName) {
    return schemaBase.getFieldSchema(getSchema(), nodeType, fieldName)
};

export const geNodeTitle = function (nodeType) {
    return schemaBase.geNodeTitle(schema, nodeType)
};

// noinspection JSUnusedGlobalSymbols
export const geNodeDescription = function (nodeType) {
    return schemaBase.geNodeDescription(schema, nodeType)
}
