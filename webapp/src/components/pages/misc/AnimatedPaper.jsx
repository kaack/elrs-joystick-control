// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React, {useEffect, useState} from "react";
import {ClickAwayListener, Paper, Typography} from "@mui/material";
import {createPortal} from "react-dom";

function PaperWrapper({label, show, style, textStyle, translateX, translateY, onClose, delay}) {
    const [scale, setScale] = useState(0);

    useEffect(function () {
        if (show) {
            setTimeout(() => setScale(1), delay || 50);
        } else {
            setScale(0);
            onClose && onClose();
        }
    }, [show])

    useEffect(() => () => {
        setScale(0);
        onClose && onClose();
    }, []);

    return <ClickAwayListener onClickAway={() => setScale(0)}>
        <Paper
            onMouseOver={() => setScale(0)}
            style={{
                display: show ? "unset" : "none",
                cursor: "auto",
                top: 0,
                left: "50%",
                position: "absolute",
                transition: "transform 50ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                transform: `translateX(${translateX || "0%"}) translateY(${translateY || "0%"})  scale(${scale})`, ...style
            }}>
            <Typography
                style={{
                    padding: 4, maxWidth: "90%", textWrap: "nowrap", fontSize: "8px", lineHeight: "8px",
                    ...textStyle
                }}>{label}
            </Typography>
        </Paper>
    </ClickAwayListener>

}

export function AnimatedPaper(props) {
    let {portalElement} = props;

    if (portalElement) {
        return createPortal(<PaperWrapper {...props} />, portalElement)
    }
    return <PaperWrapper {...props} />;
}