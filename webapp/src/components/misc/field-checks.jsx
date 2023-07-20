const INPUT_TYPE = "#/definitions/input"

export const isStringField = function (fieldDef) {
    return fieldDef.type === "string"
};
export const isBooleanField = function (fieldDef) {
    return fieldDef.type === "boolean"
}
export const isIntegerField = function (fieldDef) {
    return fieldDef.type === "integer"
};
export const isArrayOfInputField = function (fieldDef) {
    return fieldDef.type === "array" && fieldDef?.items?.["$ref"] === INPUT_TYPE;
};
export const isArrayOfInteger = function (fieldDef) {
    return fieldDef.type === "array" && fieldDef?.items?.["type"] === "integer";
};
export const isSingleInputField = function (fieldDef) {
    return fieldDef?.["$ref"] === INPUT_TYPE
};
export const isIntegerMapField = function (fieldDef) {
    return fieldDef.type === "object" && (fieldDef?.['unevaluatedProperties']?.type === "integer" || fieldDef?.['additionalProperties']?.type === "integer")
};