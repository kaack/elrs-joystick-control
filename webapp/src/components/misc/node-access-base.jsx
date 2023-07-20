// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

//shared by both controlled and uncontrolled
import {NodeConfigError, NodeSchemaError} from "./errors";
import {
    getFieldName
} from "./schema-base";
import {addNodes, getEdges, getFlowRef, getNodes, setNodes, updateFlow} from "./config-common-base";
import {RpcError} from "grpc-web";
import {Status, ValidationErrors} from "../../pbwrap";
import {getNextNodeId} from "./id-system";
import * as __ from "lodash";
import {
    isArrayOfInputField,
    isArrayOfInteger, isBooleanField,
    isIntegerField,
    isIntegerMapField,
    isSingleInputField, isStringField
} from "./field-checks";

import {getNodeSchema} from "./schema-base";


let nodeRefs = document.nodeRefs = new Map();

const getNodeRefsMap = function(key) {
    if (!nodeRefs.has(key)) {
        nodeRefs.set(key, new Map());
    }

    return nodeRefs.get(key)
};

export const setNodeRef = function (key, node, ref) {
    getNodeRefsMap(key).set(node.id, ref);
};

export const clearNodeRef = function (key, node) {
    getNodeRefsMap(key).delete(node.id);
};

export const getNodeRef = function (key, node) {
    return getNodeRefsMap(key).get(node.id);
};

export const getNodeData = function (key, node) {
    // noinspection UnnecessaryLocalVariableJS

    let result = getNodeRefsMap(key).get(node.id)?.dataRef?.current;
    return result;
};

export const getDefaults = function (schema, key, node) {
    // noinspection UnnecessaryLocalVariableJS
    let defaults = {};

    let nodeSchema = getNodeSchema(schema, node.type);
    for (let fieldName in nodeSchema.properties) {
        let fieldSpec = nodeSchema.properties[fieldName];
        defaults[fieldName] = fieldSpec.default;
    }

    return defaults;
};


//shared by both controlled and uncontrolled
export const deleteNode = function (key, node) {
    setNodes(key, function (nds) {
        let nodes = [];
        for (let nd of nds) {
            if (nd.id === node.id) continue;
            nodes.push(nd);
        }

        return nodes;
    });
    updateFlow(key);
};

export const setNodesShowValue = function (key, state) {
    getNodeRefsList(key).forEach(function (ref) {
        ref.setShowValue(state);
    });
    updateFlow(key);
};

export const setNodeValue = function (key, {node, value}) {
    let ref = getNodeRef(key, node);
    ref?.valueRef?.current?.setValue?.(value);
};

export const deselectAllNodes = function (key) {
    setNodes(key, function (nds) {
        return nds.map(function (nd) {
            nd.selected = false;
            return nd;
        })
    });
    updateFlow(key);
};

export const setNodesShowLabel = function (key, state) {
    getNodeRefsList(key).forEach(function (ref) {
        ref.setShowLabel(state);
    });
    updateFlow(key);
};

export const onNodeSettings = function (key, {node}) {
    getNodeRef(key, node).setSettingsOpen(true);
};


export const createConfig = function (schema, key) {
    let graph = createGraph(key);


    getNodeRefsList(key).forEach(function (ref) {
        ref.setErrorMessage("");
        ref.setErrorReviewed(false);
    });


    let input_output_map = {};
    let allErrors = [];

    //find all the roots
    let roots = [];
    for (let id in graph) {
        if (graph[id].outputs && Object.keys(graph[id].outputs).length === 0) {
            roots.push(graph[id]);
        }
    }

    for (let root of roots) {
        let node = root.self;

        // if (graph[node.id].visited) {
        //     continue;
        // }

        let [config, errors] = visitNode(schema, key, {graph, node});

        if (errors && errors.length > 0) {
            allErrors = append(allErrors, errors);
        }

        input_output_map[node.id] = config
    }

    console.log(input_output_map);
    return [{input_output_map}, allErrors];

};

export const showNodeErrors = function (key, nodeErrors) {
    for (let id in nodeErrors) {
        let ref = getNodeRef(key, {id});
        if (!ref) continue;
        ref.setErrorMessage(nodeErrors[id].toString());
        ref.setErrorReviewed(false);
    }
}

export const showConfigErrors = function (key, {errors}) {

    //alert only one error per node at a time to avoid overwhelming user
    let errorsByNodeId = {};
    for (let error of errors) {
        if (!(error instanceof NodeConfigError)) {
            continue;
        }
        errorsByNodeId[error.nodeId] = error;
    }

    showNodeErrors(key, errorsByNodeId);
};

export const showSchemaErrors = function (key, {ex, config}) {
    let vErrors = getValidationErrors(ex);
    if (!Array.isArray(vErrors) || vErrors.length === 0) {
        return;
    }

    let rootCauses = getAllRootCauses(vErrors);

    let errorsByNodeId = {};
    for (let rootCause of rootCauses) {
        let nodeLocation = rootCause.getLocation().replaceAll("/", ".").substring(1);
        let fieldLocation = "";

        let node;
        while (nodeLocation.indexOf(".") > 0) {
            node = __.get({config}, nodeLocation);
            if (node.id) {
                break;
            }


            let parentLocation = nodeLocation.split(".").slice(0, -1).join(".");
            // noinspection UnnecessaryLocalVariableJS
            let childLocation = nodeLocation.split(".").at(-1);

            fieldLocation = childLocation;
            nodeLocation = parentLocation;
        }

        if (!node) {
            //there was a detailed validation error, that is not associated with any node
            continue;
        }

        errorsByNodeId[node.id] = new NodeSchemaError(node.id, fieldLocation, rootCause.getMessage());
    }

    showNodeErrors(key, errorsByNodeId)
};

export const initNode = function (node) {
    if (!node.data) {
        node.data = {}
    }
    node.selected = false;
    return node;
}

export const createNewNode = function (key, node) {
    let id = getNextNodeId();

    let position;
    if (node.position) {
        position = node.position
    } else {
        //try to find a clear position near the bottom
        position = getFlowRef(key).project({x: window.innerWidth / 2 - 75, y: window.innerHeight - 280});
    }

    position = findClearPositionNearby(key, position); //avoid overlapping with other nodes

    let label = `${node.type}${id}`

    addNodes(key, [{
        ...node, id, position, data: {
            ...(getNodeData(key, node)), label, ...(initNode(node).data)
        }
    }])

    updateFlow(key);
};


const getAllRootCauses = function (errors) {

    if (!errors || errors.length === 0) {
        return [];
    }

    let rootCauses = [];

    for (let error of errors) {
        let causes = error.getCausesList();
        if (!causes || causes.length === 0) {
            rootCauses.push(error);
            continue;
        }

        causes = getAllRootCauses(causes);
        if (causes && causes.length > 0) {
            rootCauses = rootCauses.concat(causes);
        }
    }

    return rootCauses;
};

const getValidationErrors = function (ex) {
    if (!(ex instanceof RpcError)) {
        return [];
    }

    let statusBase64 = ex?.metadata?.['grpc-status-details-bin'];
    if (!statusBase64) {
        return [];
    }

    let byteArray;
    try {
        byteArray = stringToUint8Array(atob(statusBase64));
    } catch (ex) {
        console.error("could not decode error status details. " + ex.message, ex);
        return [];
    }

    let status;
    try {
        status = Status.deserializeBinary(byteArray);
    } catch (ex) {
        console.error("could not de-serialize error as grpc-status. " + ex.message, ex)
        return [];
    }

    let detailsAny = status.getDetailsList()?.[0];
    if (!detailsAny) {
        return [];
    }

    try {
        let vErrors = ValidationErrors.deserializeBinary(detailsAny.getValue_asU8());
        return vErrors.getErrorsList();
    } catch (ex) {
        console.error("could not de-serialize error details as ValidationErrors. " + ex.message, ex);
        return [];
    }
};


const isInteger = function (value) {
    return !isNaN(value) && isFinite(value);
};

const visitStringField = function (schema, key, {node, fieldDef, fieldName, fieldValue, requiredFields}) {
    if (!fieldValue) {
        if (!requiredFields[fieldName]) {
            return [true, fieldValue, null];
        }
        return [false, fieldValue, [new NodeConfigError(node.id, `${getFieldName(fieldName, fieldDef)} field is required`)]];
    }

    return [false, fieldValue, []];
};

const visitIntegerField = function (schema, key, {node, fieldDef, fieldName, fieldValue, requiredFields}) {
    fieldValue = parseInt(fieldValue);
    if (isNaN(fieldValue)) {
        if (!requiredFields[fieldName]) {
            return [true, fieldValue, []];
        }

        return [false, fieldValue, [new NodeConfigError(node.id, `${getFieldName(fieldName, fieldDef)} field is required`)]];
    }

    return [false, fieldValue, []];
};

const visitBooleanField = function (schema, key, {node, fieldDef, fieldName, fieldValue, requiredFields}) {
    if (!fieldValue || !fieldValue.toLowerCase) { //cannot be an empty string
        if (!requiredFields[fieldName]) {
            return [true, fieldValue, []];
        }

        return [false, fieldValue, [new NodeConfigError(node.id, `${getFieldName(fieldName, fieldDef)} field is required`)]];
    }

    //make sure it's a proper boolean
    fieldValue = fieldValue.toLowerCase();
    if (!(fieldValue === "true" || fieldValue === "false")) {
        return [false, fieldValue, [new NodeConfigError(node.id, `${getFieldName(fieldName, fieldDef)} field must be true or false`)]];
    }

    fieldValue = (fieldValue === "true");

    return [false, fieldValue, []];
};

const visitArrayOfInteger = function (schema, key, {node, fieldDef, fieldName, fieldValue, requiredFields}) {
    if (!fieldValue || typeof fieldValue !== "string") {
        if (!requiredFields[fieldName]) {
            return [true, null, []]
        }
        return [false, {}, [new NodeConfigError(node.id, `${getFieldName(fieldName, fieldDef)} field is required`)]];
    }


    let minItems = fieldDef?.minItems || 0;
    let maxItems = fieldDef?.maxItems || Infinity;


    //try to parse the string into an array
    let values = fieldValue.split(",")

    const plural = (count) => count > 1 ? "s" : ""

    if (values.length < minItems) {
        return [false, fieldValue, new NodeConfigError(node.id, `${getFieldName(fieldName, fieldDef)} needs at least ${minItems} value${plural(minItems)}`)];
    }

    if (values.length > maxItems) {
        return [false, fieldValue, new NodeConfigError(node.id, `${getFieldName(fieldName, fieldDef)} has more than ${maxItems} value${plural(maxItems)}`)];
    }


    let integerList = [];
    //process the array of values, and verify they are all integers
    for (let index = 0; index < values.length; index++) {
        let value = values[index];
        if (!isInteger(value)) {
            return [false, fieldValue, new NodeConfigError(node.id, `${getFieldName(fieldName, fieldDef)} has non integer value "${value}" at position "${index}"`)];
        }

        integerList.push(parseInt(value))
    }

    fieldValue = integerList;
    return [false, fieldValue, []];
};

const visitIntegerMapField = function (schema, key, {node, fieldDef, fieldName, fieldValue, requiredFields}) {
    if (!Array.isArray(fieldValue)) {
        if (!requiredFields[fieldName]) {
            return [true, null, []]
        }
        return [false, {}, [new NodeConfigError(node.id, `${getFieldName(fieldName, fieldDef)} field is required`)]];
    }

    //verify that all keys and values are integers
    let integerMap = {};
    for (let row of fieldValue) {

        let mapKey = row?.rowData?.input
        let mapValue = row?.rowData?.output;

        if (mapKey === "" && mapValue === "") {
            //skip empty rows
            continue;
        }

        let numericMapKey = parseInt(mapKey);
        let numericMapValue = parseInt(mapValue);

        if (!isInteger(numericMapKey) && !isInteger(numericMapValue)) {
            return [false, fieldValue, [new NodeConfigError(node.id, `map entry "Int(${mapKey}) ⇒ Int(${mapValue})" is not valid`)]];
        }

        if (!isInteger(numericMapKey)) {
            return [false, fieldValue, [new NodeConfigError(node.id, `map entry "Int(${mapKey}) ⇒ Int(${mapValue})" contains non-integer key`)]];
        }

        if (!isInteger(numericMapValue)) {
            return [false, fieldValue, [new NodeConfigError(node.id, `map entry "Int(${mapKey}) ⇒ Int(${mapValue})" contains non-integer value`)]];
        }


        integerMap[numericMapKey] = numericMapValue
    }

    fieldValue = integerMap;
    return [false, fieldValue, []];
};

const visitChildNodes = function (schema, key, {graph, node, fieldDef}) {

    let inputHandle = fieldDef?.["$meta"]?.handle;
    let inputsMap = graph[node.id]?.inputs?.[inputHandle] || {}
    let inputKeys = Object.keys(inputsMap);

    let childNodesConfig = [];
    let allErrors = [];

    if (inputKeys.length === 0) {
        return [childNodesConfig, null];
    }

    for (let childId in inputsMap) {
        let childNode = inputsMap[childId].self;

        let [childConfig, errors] = visitNode(schema, key, {graph, node: childNode});
        graph[childNode.id].visited = true;

        allErrors = append(allErrors, errors);
        childNodesConfig.push(childConfig);
    }

    let compareFunction = ((graph) => (n1, n2) => {
        let n1X = graph[n1.id].self.position.x;
        let n2X = graph[n2.id].self.position.x;

        return n1X - n2X;

    })(graph);

    return [childNodesConfig.sort(compareFunction), allErrors];
};

const visitSingleInputField = function (schema, key, {graph, node, fieldDef, fieldName, fieldValue, requiredFields}) {

    let [children, errors] = visitChildNodes(schema, key, {graph, node, fieldDef});

    if (children.length === 0) {
        if (!requiredFields[fieldName]) {
            return [true, null, errors]
        }
        return [false, {}, [new NodeConfigError(node.id, `${getFieldName(fieldName, fieldDef)} handle has no input`)]];
    }

    if (children.length > 1) {
        return [false, fieldValue, append(errors, new NodeConfigError(node.id, `${getFieldName(fieldName, fieldDef)} handle allows only one input`))];
    }

    fieldValue = children?.[0];

    let expectedType = fieldDef?.["$meta"]?.expected

    if (!fieldValue) {
        if (!requiredFields[fieldName]) {
            return [true, fieldValue, errors];
        }

        if (expectedType) {
            return [false, fieldValue, append(errors, new NodeConfigError(node.id, `${getFieldName(fieldName, fieldDef)} handle has no "${expectedType}" input`))];
        } else {
            return [false, fieldValue, append(errors, new NodeConfigError(node.id, `${getFieldName(fieldName, fieldDef)} handle has no input`))];
        }
    }

    if (expectedType && expectedType !== fieldValue?.type) {
        return [false, fieldValue, append(errors, new NodeConfigError(node.id, `"${getFieldName(fieldName, fieldDef)}" handle allows only "${expectedType}" input`))];
    }

    return [false, fieldValue, errors];
};

const visitArrayOfInputsField = function (schema, key, {graph, node, fieldDef, fieldName, fieldValue, requiredFields}) {

    let minItems = fieldDef?.minItems || 0;
    let maxItems = fieldDef?.maxItems || Infinity;

    let expectedType = fieldDef?.["$meta"]?.expected;
    let [children, errors] = visitChildNodes(schema, key, {graph, node, fieldDef});

    if (children.length === 0) {
        if (!requiredFields[fieldName]) {
            return [true, null, errors]
        }
        return [false, {}, [new NodeConfigError(node.id, `${getFieldName(fieldName, fieldDef)} handle has no input`)]];
    }

    const plural = (count) => count > 1 ? "s" : ""

    if (children.length < minItems) {
        return [false, fieldValue, append(errors, new NodeConfigError(node.id, `${getFieldName(fieldName, fieldDef)} handle needs at least ${minItems} input${plural(minItems)}`))];
    }

    if (children.length > maxItems) {
        return [false, fieldValue, append(errors, new NodeConfigError(node.id, `${getFieldName(fieldName, fieldDef)} handle has more than ${maxItems} input${plural(maxItems)}`))];
    }

    if (expectedType) {
        for (let item of children) {
            if (expectedType !== item?.type) {
                return [false, fieldValue, append(errors, new NodeConfigError(node.id, `${getFieldName(fieldName, fieldDef)} handle allows only "${expectedType}" input`))];
            }
        }
    }

    fieldValue = children;

    return [false, fieldValue, errors];
};

const visitNode = function (schema, key, {graph, node}) {
    let nodeSchema = schema.definitions?.[node.type]?.properties?.[node.type];

    if (!nodeSchema) {
        throw new NodeConfigError(node.id, `no schema found for ${node.type} node type`);
    }

    let allErrors = [];
    let config = {
        id: node.id, type: node.type, [node.type]: {
            id: node.id
        }
    };

    let fields = config[node.type];
    let requiredFields = {};
    for (let fieldName of nodeSchema?.required || []) {
        requiredFields[fieldName] = true;
    }

    let checks = [[isStringField, visitStringField],
        [isIntegerField, visitIntegerField],
        [isBooleanField, visitBooleanField],
        [isIntegerMapField, visitIntegerMapField],
        [isSingleInputField, visitSingleInputField],
        [isArrayOfInputField, visitArrayOfInputsField],
        [isArrayOfInteger, visitArrayOfInteger]];


    for (let fieldName in nodeSchema.properties) {
        let fieldDef = nodeSchema.properties[fieldName];

        let defaultValue = fieldDef.default;
        let fieldValue = getNodeData(key, node)?.[fieldName] || defaultValue;
        let errors;
        let ignore = false;

        for (let [typeCheckFunction, validationFunction] of checks) {
            if (typeCheckFunction(fieldDef)) {
                [ignore, fieldValue, errors] = validationFunction(schema, key, {
                    graph, node, fieldDef, fieldName, fieldValue, requiredFields
                });
                allErrors = append(allErrors, errors);
                break;
            }
        }

        if (ignore) {
            continue
        }

        fields[fieldName] = fieldValue;
    }


    return [config, allErrors];
};

const createGraph = function (key) {

    let nds = getNodes(key);
    let eds = getEdges(key);
    let nodeLookup = {};

    for (let nd of nds) {
        nodeLookup[nd.id] = {
            visited: false, self: nd, inputs: {}, outputs: {},
        }
    }

    for (let ed of eds) {
        let sourceHandle = ed.sourceHandle;
        let targetHandle = ed.targetHandle;
        let sourceNode = nodeLookup[ed.source];
        let targetNode = nodeLookup[ed.target];

        if (sourceNode) {
            if (!sourceNode.outputs[sourceHandle] && targetNode) {
                sourceNode.outputs[sourceHandle] = {};
            }

            if (targetNode) {
                sourceNode.outputs[sourceHandle][targetNode.self.id] = targetNode;
            }
        }

        if (targetNode) {
            if (!targetNode.inputs[targetHandle] && sourceNode) {
                targetNode.inputs[targetHandle] = {};
            }

            if (sourceNode) {
                targetNode.inputs[targetHandle][sourceNode.self.id] = sourceNode;
            }
        }
    }

    return nodeLookup;
};


const getNodeRefsList = function (key) {
    return Array.from(getNodeRefsMap(key).values());
};

const findClearPositionNearby = function (key, insertPos) {
    let nodes = getNodes(key);

    if (nodes?.length === 0) {
        return insertPos;
    }

    //see if the position collides with the top-left corner +/-10 of another node
    //the idea is to avoid fully overlapping so that one node entire covers another
    let findCollision = function (pos, nodes) {
        for (let cn of nodes) {
            if (pos.x >= cn.position.x && pos.x <= cn.position.x + 10 && pos.y >= cn.position.y && pos.y <= cn.position.y + 10) {
                return cn;
            }
        }
        return null
    }

    let collision;
    while (collision = findCollision(insertPos, nodes)) {
        //try another position off to the top right from the collision's left corner
        insertPos = {x: collision.position.x + 10, y: collision.position.y - 10}
    }

    return insertPos;
}

const stringToUint8Array = function (str) {
    const buf = new ArrayBuffer(str.length);
    const bufView = new Uint8Array(buf);
    for (let i = 0; i < str.length; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return bufView;
};

const append = function (target, value) {
    target = Array.isArray(target) ? [...target] : []; //make a copy

    if (!value) {
        return target;
    }

    if (Array.isArray(value)) {
        return [...target, ...value];
    }

    return [...target, value];
};