// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React, {useCallback, useEffect, useState} from 'react';
import {Typography} from "@mui/material";

export function NodeValue({style, valueRef}) {
    const [value, setValue] = useState(null);
    
    useEffect(function() {
        valueRef.current = {setValue};
    },[valueRef]);

    const getNodeValue = useCallback(function (v) {
        v = parseInt(v);
        return isNaN(v) ? "..." : v;
    }, [value]);

    return (<Typography style={{
        overflow: "hidden",
        fontSize: "0.5em",
        margin: 0,
        marginLeft: "-4px",
        marginRight: "-4px",
        marginTop: "4px",
        marginBottom: "0px",
        padding: 0,
        lineHeight: "10px",
        textAlign: "center",
        textOverflow: "ellipsis",
        textWrap: "nowrap",
        color: "#656565",
        fontWeight: 500,
        fontFamily: "Roboto", ...style
    }}
    >[ {getNodeValue(value)} ]</Typography>)

}