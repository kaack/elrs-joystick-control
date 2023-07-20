// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React, {useCallback, useEffect, useRef, useState} from "react";
import Box from "@mui/material/Box";
import {setNodeRef, getDefaults} from "../misc/node-access";
import {TelemetryIcon} from "../misc/TelemetryIcon";
import {TelemetryValue} from "../misc/TelemetryValue";
import TelemetryNodeActionMenu from "../misc/TelemetryNodeActionMenu";
import TelemetryNodeSettings from "../misc/TelemetryNodeSettings";

export function GenericTelemetryNode({
                                         node,
                                         children,
                                         valueProps,
                                         iconProps,
                                         selectedStyle,
                                         unSelectedStyle,
                                         showIcon,
                                         showValue,
                                         onValueChange,
                                     }) {
    let defaults = {...getDefaults(node), ...node.data};

    const [settingsOpen, setSettingsOpen] = useState(false);
    // noinspection JSUnusedLocalSymbols
    const [update, setUpdate] = useState(0);
    const [data, setData] = useState(defaults);


    const dataRef = useRef(defaults);
    const valueRef = useRef(null);

    useEffect(function () {
        if (showValue === false && onValueChange) {
            //allow custom parent nodes to receive value changes
            valueRef.current = {setValue: onValueChange}
        }
        setNodeRef(node, {
            dataRef, setSettingsOpen, setData, valueRef, setUpdate, setShowValue: () => {
            }
        });
    }, []);


    const updateData = useCallback(function (data) {
        //console.log("updating data")
        //console.log(data);
        setData(data);
        dataRef.current = data;
    }, [data])

    const onSettingsDismount = useCallback(function (data) {
        //console.log("closing settings");
        updateData(data);
        setSettingsOpen(false);
    }, [updateData]);


    //console.log(`rendering node ${node.id}`);
    return <Box
        sx={node.selected ? {
            display: "inline-flex",
            width: 'unset',
            padding: '2px',
            border: '2px solid #1976d2',
            alignItems: 'center',
            backgroundColor: 'unset',
            borderRadius: "5px",
            '& svg,p': {
                fontSize: `${data?.["font_size"] || 22}px`, lineHeight: `${data?.["font_size"] || 22}px`
            }, ...selectedStyle,
        } : {
            display: "inline-flex",
            width: 'unset',
            padding: '2px',
            border: '2px solid #65656500',
            alignItems: 'center',
            backgroundColor: 'unset',
            borderRadius: "5px",
            '& svg,p': {
                fontSize: `${data?.["font_size"] || 22}px`, lineHeight: `${data?.["font_size"] || 22}px`
            }, ...unSelectedStyle,
        }}
        selected={node.selected}>

        <TelemetryNodeActionMenu node={node}/>
        {children}
        {showIcon !== false && data?.["icon_location"] === "left" && <TelemetryIcon node={node}  {...iconProps} />}
        {showValue !== false && <TelemetryValue node={node} {...dataRef.current} {...valueProps} valueRef={valueRef}/>}
        {showIcon !== false && data?.["icon_location"] === "right" && <TelemetryIcon node={node}  {...iconProps} />}
        {settingsOpen && <TelemetryNodeSettings key={`${node.id}-edit-form`} node={node} data={data}
                                                onDismount={onSettingsDismount}/>}
    </Box>
}