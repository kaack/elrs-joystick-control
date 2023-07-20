// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import {Error} from "@mui/icons-material";
import React, {useCallback, useState} from "react";
import {AnimatedPaper} from "../../misc/AnimatedPaper";
import Box from "@mui/material/Box";

export function NodeErrorAlert({message, reviewed, onReview}) {
    const [showLabel, setShowLabel] = useState(false);

    const handleClose = useCallback(() => {
        setShowLabel(false);
    }, [])

    const handleMouseOver = useCallback(function () {
        setShowLabel(true);
    }, []);


    return <Box
        onMouseEnter={()=>{handleMouseOver();}}
        onMouseLeave={()=>{setShowLabel(false);}}
        onClickCapture={event => {onReview(true); event.stopPropagation()}}
        onTouchStartCapture={event => {event.stopPropagation()}}
        onMouseDownCapture={event => {event.stopPropagation()}}
    >
        <Error
            className={!reviewed?"shake":""}
            style={{
                zIndex: 1,
                cursor: "pointer",
                position: "fixed",
                top: "-12px",
                margin: "0",
                left: "-12px",
                color: "rgb(197 22 22)",
                borderRadius: "50%",
                borderStyle: "none",
                backgroundColor: "white",
                borderWidth: "0",
                padding: "0"
            }}>
        </Error>
        <AnimatedPaper show={showLabel} onClose={handleClose} style={{left:0, top:10}} label={message} translateX={"-50%"} translateY={"0%"} />
    </Box>

}

