// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';

import {
    generateArrayOfIntegerForm, generateBooleanForm, generateIntegerForm, generateIntegerMapForm, generateStringForm
} from "../../../misc/forms";
import {
    getNodeSchema,
} from "./schema";
import {
    isArrayOfInteger, isBooleanField, isIntegerField, isIntegerMapField, isStringField
} from "../../../misc/field-checks";
import {NodeSettings} from "../../../misc/NodeSettings";
import {nodeType} from "../nodes/constants";

function InputNodeSettings({node, data, onDismount}) {
    let generators = [[isStringField, generateStringForm], [isIntegerField, generateIntegerForm], [isBooleanField, generateBooleanForm], [isIntegerMapField, generateIntegerMapForm], [isArrayOfInteger, generateArrayOfIntegerForm]];

    return (<NodeSettings node={node} data={data} onDismount={onDismount} generators={generators} nodeSchema={getNodeSchema(node.type)} nodeClass={nodeType(node.type)}/>);
}

export default InputNodeSettings;

