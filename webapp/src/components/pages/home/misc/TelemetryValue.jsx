// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React, {useCallback, useEffect, useState} from 'react';
import {Typography} from "@mui/material";
import {getFieldSchema} from "./schema";
import Box from "@mui/material/Box";

const FIGURESPACE = `\u2007`;
const HAIRSPACE = `\u200A`;
const THINSPACE = `\u2009`;
const setDefaults = function (props) {
    let res = {...props}
    let value = parseInt(props.fixed_precision);
    if (!isNaN(value)) {
        //set_fixed_precision(value)
        res.fixed_precision = value;
    }

    value = parseInt(props.padding_count);
    if (!isNaN(value)) {
        //set_padding_count(value);
        res.padding_count = value;
    }

    if (typeof props?.padding_char !== "string" || props?.padding_char?.trim() === "" ) {
        res.padding_char = FIGURESPACE;
    } else {
        res.padding_char = props.padding_char.trim();
    }

    if (typeof props.padding_location !== "string") {
        res.padding_location = "start";
    }

    return res
}



export function TelemetryValue(props) {

    props = setDefaults(props);
    const {style, node, fieldName, valueRef} = props;
    const [value, setValue] = useState(null);


    //values that come from schema
    const [defaultValue, setDefaultValue] = useState("...");
    const [unit, setUnit] = useState(null);
    const [suffix, setSuffix] = useState(null);
    const [prefix, setPrefix] = useState(null);
    const [map, setMap] = useState({});
    const [dataType, setDataType] = useState(null);

    const updateTelemetryValue = useCallback(function(data) {
        let dataType = typeof data;

        if (data === null || dataType === "boolean" || dataType === "number" || dataType === "string") {
            setValue(data);
            return
        }

        if (props?.isValidTelemetryData?.(data)) {
            setValue(props.getTelemetryValue(data));
            // noinspection UnnecessaryReturnStatementJS
            return;
        }
    }, [value]);

    useEffect(function () {
        valueRef.current = {setValue: updateTelemetryValue};
    }, [valueRef, value]);


    useEffect(function () {
        let fieldSchema = getFieldSchema(node.type, fieldName || "value");

        //set the default value
        if (fieldSchema?.default !== null) {
            setDefaultValue(fieldSchema?.default)
        }

        //set the unit
        if (fieldSchema?.["$meta"]?.unit !== null) {
            setUnit(fieldSchema?.["$meta"]?.unit);
        }

        //set the suffix
        if (fieldSchema?.["$meta"]?.suffix !== null) {
            setSuffix(fieldSchema?.["$meta"]?.suffix);
        }

        //set the prefix
        if (fieldSchema?.["$meta"]?.prefix !== null) {
            setPrefix(fieldSchema?.["$meta"]?.prefix);
        }

        //set the lookup map
        if (fieldSchema?.["$meta"]?.map !== null) {
            setMap(fieldSchema?.["$meta"]?.map)
        }

        //set the data type
        if (fieldSchema?.type !== null) {
            setDataType(fieldSchema?.type);
        }

    }, []);


    const setPaddingAndUnits = useCallback(function (value) {
        //console.log(props);

        if (props.padding_location === "start") {
            value = `${value}`.padStart(parseInt(`${props.padding_count}`) || 0, props.padding_char);
        } else if (props.padding_location === "end") {
            value = `${value}`.padEnd(parseInt(`${props.padding_count}`) || 0, props.padding_char);
        }


        if (prefix) {
            value = `${prefix}${THINSPACE}${value}`
        }

        if (suffix) {
            value = `${value}${HAIRSPACE}${suffix}`
        }

        if (unit) {
            value = `${value}${HAIRSPACE}${unit}`;
        }
        return value

    },[props]);



    const getTelemetryIntegerValue = useCallback(function(value) {
        if (value === null || value === undefined) {
            value = defaultValue
        }

        let integer = parseInt(value);
        if (!isNaN(integer)) {
            value = integer;
        }

        if (map && map[value]) {
            value = map[value];
        }

        return setPaddingAndUnits(value)
    }, [defaultValue, setPaddingAndUnits]);

    const getTelemetryFloatValue = useCallback(function (value) {
        if (value === null || value === undefined) {
            value = defaultValue
        }

        let float = Number.parseFloat(value);
        if (!isNaN(float)) {
            value = value.toFixed(props.fixed_precision || 0);
        }

        if (map && map[value]) {
            value = map[value];
        }

        return setPaddingAndUnits(value)
    },[props,  defaultValue, setPaddingAndUnits]);

    const getTelemetryTextValue = useCallback(function (value) {
        if (value === null || value === undefined) {
            return defaultValue
        }
        return value;
    },[defaultValue])

    const getTelemetryValue = useCallback(function (v) {


        if (dataType === "string") {
            return getTelemetryTextValue(v);
        } else if (dataType === "integer" ) {
            return getTelemetryIntegerValue(v);
        } else if (dataType === "number") {
            return getTelemetryFloatValue(v);
        } else {
            return setPaddingAndUnits("...");
        }
    },[setPaddingAndUnits, getTelemetryFloatValue, getTelemetryIntegerValue, getTelemetryTextValue])



    let v = getTelemetryValue(value);
    //console.log(`rendering node: ${node.id}, type: ${node.type}, value: ${value}, as ${v}`);
    return (<Box
        style={{
            display: 'flex', direction: 'ltr'
        }}

    ><Typography style={{
        overflow: "hidden", // fontSize: "28px",
        // lineHeight: "22px",
        margin: 0,
        padding: 0,
        textAlign: "center",
        textOverflow: "ellipsis",
        textWrap: "nowrap",
        color: "#656565",
        fontWeight: 500,
        fontFamily: "Roboto",
        whiteSpace: 'pre',
        ...style,
        
    }}
    >{`${v}`}</Typography>
    </Box>)

}