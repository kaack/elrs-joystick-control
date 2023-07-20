// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React, {useCallback, useEffect, useRef, useState} from "react";
import Box from "@mui/material/Box";
import {NodeErrorAlert} from "../misc/NodeErrorAlert";
import InputNodeActionMenu from "../misc/InputNodeActionMenu";
import {NodeValue} from "../../../misc/NodeValue";
import {NodeIcon} from "../misc/NodeIcon";
import {NodeLabel} from "../misc/NodeLabel";
import {setNodeRef, getDefaults} from "../misc/node-access";
import InputNodeSettings from "../misc/InputNodeSettings";

export function GenericInputNode({node, children, onInspectOpen, valueProps, iconProps, labelProps}) {
    let defaults= {...getDefaults(node), ...node.data};

    const [settingsOpen, setSettingsOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [errorReviewed, setErrorReviewed] = useState(false);
    const [showValue, setShowValue] = useState(false);
    const [showLabel, setShowLabel] = useState(false);
    // noinspection JSUnusedLocalSymbols
    const [update, setUpdate] = useState(0);
    const [data, setData] = useState(defaults);

    const dataRef = useRef(defaults);
    const valueRef = useRef(null);
    const labelRef = useRef(null);

    useEffect(function () {
        setNodeRef(node, {
            setSettingsOpen, dataRef, setErrorMessage, setErrorReviewed, setShowLabel, setShowValue, valueRef, setUpdate,
        });
    }, []);


    const getLabel = useCallback(function(data) {
        let label =  data?.label;
        if (!labelProps.appendField) {
            return label;
        }

        let fieldValue = data?.[labelProps.appendField];
        if (!fieldValue) {
            return label;
        }

        return label + `(${fieldValue})`
    }, []);


    const updateLabel = useCallback(function(data) {
        labelRef?.current?.setLabel(getLabel(data));
    }, []);


    const updateData = useCallback(function(data) {
        setData(data);
        dataRef.current = data;
        updateLabel(data);
    }, [data])

    const onSettingsDismount = useCallback(function (data) {
        updateData(data);
        setSettingsOpen(false);
    }, [updateData]);

    return <Box
        sx={node.selected ? {
            textAlign: 'center',
            border: '2px solid #1976d2',
            padding: '12px',
            borderRadius: '5px',
            background: '#ffffff',
            width: '44px',
            minHeight: '35px'
        } : {
            textAlign: 'center',
            border: '2px solid #656565',
            padding: '12px',
            borderRadius: '5px',
            background: 'white',
            width: '44px',
            minHeight: '35px'
        }}
        selected={node.selected}>
        <InputNodeActionMenu node={node} onInspectOpen={onInspectOpen}/>
        {errorMessage && <NodeErrorAlert message={errorMessage} reviewed={errorReviewed} onReview={setErrorReviewed}/>}
        {children}
        {valueProps && showValue && <NodeValue node={node}  {...valueProps} valueRef={valueRef}/>}
        {iconProps && <NodeIcon node={node}  {...iconProps} />}
        {labelProps && showLabel && <NodeLabel initialLabel={getLabel(dataRef.current)} labelRef={labelRef} {...labelProps} />}
        {settingsOpen && <InputNodeSettings key={`${node.id}-edit-form`} node={node} data={data} onDismount={onSettingsDismount}/>}
    </Box>
}