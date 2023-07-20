// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React, {useCallback} from "react";
import HelpIcon from "@mui/icons-material/Help";
import {Popover} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MuiMarkdown from "mui-markdown";
import Box from "@mui/material/Box";


export function HelpIconWithText({style, anchorOrigin, children, textStyle}) {
    const [anchor, setAnchor] = React.useState(null);

    const handleClick = useCallback((event) => {
        setAnchor(event.currentTarget);
    }, []);

    const handleClose = useCallback(() => {
        setAnchor(null);
    }, [])

    // noinspection JSValidateTypes
    return <>
        <IconButton onClick={handleClick} style={{...style}}>
            <HelpIcon style={{cursor: "pointer", color: "#656565"}}/>
        </IconButton>
        {anchor ? <Popover
            open={Boolean(anchor)}
            anchorEl={anchor}
            onClose={handleClose}
            slotProps={{
                paper: {
                    style: {borderRadius: 15}
                }
            }}
            anchorOrigin={{
                vertical: 'bottom', horizontal: 'left', ...anchorOrigin
            }}
        ><Box
            component={'div'}

            style={{
                inlineSize: "fit-content",
                width: "unset",
                maxWidth: "500px",
                padding: 12,
                ...textStyle
            }}

            // sx={{
            //     '&>p': {margin: 0, padding: 0,  whiteSpace: 'pre-line'}
            // }}
        ><MuiMarkdown>{children}</MuiMarkdown></Box></Popover> : ""}
    </>


}