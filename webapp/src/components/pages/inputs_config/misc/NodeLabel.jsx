// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React, {useEffect, useState} from 'react';
import {Typography} from "@mui/material";

export function NodeLabel({initialLabel, labelRef, style}) {
    const [label, setLabel] = useState(initialLabel);

    useEffect(function() {
        labelRef.current = {setLabel};
    }, [labelRef])

    return (<Typography style={{
        overflow: "hidden",
        fontSize: "0.5em",
        margin: 0,
        marginLeft: "-4px",
        marginRight: "-4px",
        marginTop: "0px",
        marginBottom: "-2px",
        padding: 0,
        lineHeight: "10px",
        textAlign: "center",
        textOverflow: "ellipsis",
        textWrap: "nowrap",
        color: "#656565",
        fontWeight: 500,
        fontFamily: "Roboto",
        ...style
    }}
    >{label}</Typography>)

}