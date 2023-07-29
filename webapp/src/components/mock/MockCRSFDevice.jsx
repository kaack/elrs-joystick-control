// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import {
    CRSFDeviceFieldCommand, CRSFDeviceFieldCommandStep,
    CRSFDeviceFieldData,
    CRSFDeviceFieldFolder,
    CRSFDeviceFieldTextSelect, CRSFDeviceFieldType,
    CRSFDeviceInfoData,
} from "../../pbwrap";
import deviceFieldsJson from "./mock-device-fields.json";
import {RpcError, StatusCode} from "grpc-web";

const MockCRSFDeviceFieldConstructors = new Map([
    [CRSFDeviceFieldType.TEXT_SELECT, function ({obj}) {
        let proto = new CRSFDeviceFieldTextSelect();
        proto.setName(obj['name']);
        proto.setType(obj['type']);
        proto.setId(obj['id']);
        proto.setParentId(obj['parent_id']);
        proto.setOptionsList(obj['options']);
        proto.setValue(obj['value']);
        proto.setMin(obj['min']);
        proto.setMax(obj['max']);
        proto.setDefault(obj['default']);
        proto.setUnits(obj['units']);

        let field = new CRSFDeviceFieldData();
        field.setTextSelect(proto);
        return field;
    }],
    [CRSFDeviceFieldType.FOLDER, function ({obj}) {
        let proto = new CRSFDeviceFieldFolder();
        proto.setName(obj['name']);
        proto.setType(obj['type']);
        proto.setId(obj['id']);
        proto.setParentId(obj['parent_id']);

        let field = new CRSFDeviceFieldData();
        field.setFolder(proto);
        return field;
    }],
    [CRSFDeviceFieldType.COMMAND, function ({obj}) {
        let proto = new CRSFDeviceFieldCommand();
        proto.setName(obj['name']);
        proto.setType(obj['type']);
        proto.setId(obj['id']);
        proto.setParentId(obj['parent_id']);
        proto.setStep(obj['step']);
        proto.setTimeout(obj['timeout']);
        proto.setMessage(obj['message']);


        let field = new CRSFDeviceFieldData();
        field.setCommand(proto)
        return field;
    }],
]);

const CRSFFieldFromObject = function (obj) {

    let typeName = obj['type'];
    if (!typeName) {
        throw new Error(`type field is missing`);
    }

    let typeNumber = CRSFDeviceFieldType[typeName];
    if (typeNumber === null || typeNumber === undefined) {
        throw new Error(`type ${typeName} is not known`)
    }

    let constructor = MockCRSFDeviceFieldConstructors.get(typeNumber);
    if (!constructor) {
        throw new Error(`no constructor found for type ${typeName}`);
    }

    return constructor({obj})
}

export const nextCommandState = function(command) {
    let nextCommand = new CRSFDeviceFieldCommand();
    nextCommand.setName(command.getName());
    nextCommand.setType(command.getType());
    nextCommand.setId(command.getId());
    nextCommand.setParentId(command.getParentId());
    nextCommand.setTimeout(200);

    let step = command.getStep();
    switch (step) {
        case CRSFDeviceFieldCommandStep.CLICK:
            nextCommand.setStep(CRSFDeviceFieldCommandStep.ASK_CONFIRM);
            nextCommand.setMessage("Execute command ?");
            break;
        case CRSFDeviceFieldCommandStep.CONFIRMED:
        case CRSFDeviceFieldCommandStep.QUERY:
            nextCommand.setStep(CRSFDeviceFieldCommandStep.EXECUTING);
            nextCommand.setMessage("Executing ...");
            break;
        case CRSFDeviceFieldCommandStep.CANCEL:
        default:
            nextCommand.setStep(CRSFDeviceFieldCommandStep.IDLE);
            nextCommand.setMessage("");
            break;
    }

    let res = new CRSFDeviceFieldData();
    res.setCommand(nextCommand);
    return res;
}

export const MockCRSFDevice = function ({id, name, hardwareVersion, softwareVersion, fieldCount}) {
    this._proto = new CRSFDeviceInfoData();

    this._proto.setId(id)
    this._proto.setName(name)
    this._proto.setSerialNumber(1162629715);
    this._proto.setHardwareVersion(hardwareVersion)
    this._proto.setSoftwareVersion(softwareVersion);
    this._proto.setFieldCount(fieldCount);
    this._proto.setParameterVersion(0);

    this._fields = (function () {
        let fieldsList = [];
        for (let field of deviceFieldsJson.fields) {
            let proto = CRSFFieldFromObject(Object.values(field)[0]);
            fieldsList.push(proto)
        }
        return fieldsList;
    })();

    return this
}

MockCRSFDevice.prototype.getProto = function () {
    return this._proto;
}

MockCRSFDevice.prototype.getFieldsList = function () {
    return this._fields;
}

MockCRSFDevice.prototype.setField = function(field) {
    if (!field || !(field instanceof CRSFDeviceFieldData)) {
        throw new RpcError(StatusCode.INVALID_ARGUMENT,"field is required", null);
    }

    let res = null;

    let command = field.getCommand();
    if (command) {
        res = nextCommandState(command)
    }

    return res;
}
