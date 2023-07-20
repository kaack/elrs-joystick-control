// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React, {useCallback} from "react";
import {Popover, Typography} from "@mui/material";
import Box from "@mui/material/Box";


export function LicenseViewer({text, style, anchorOrigin, children, textStyle}) {
    const [anchor, setAnchor] = React.useState(null);

    const handleClick = useCallback((event) => {
        setAnchor(event.currentTarget);
    }, []);

    const handleClose = useCallback(() => {
        setAnchor(null);
    }, [])


    // noinspection JSValidateTypes
    return <>
        <Box onClick={handleClick} style={{...style}}>{children}</Box>
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
                maxHeight: "600px",
                whiteSpace: "pre",
                overflowY: "scroll",
                overflowX: "scroll",
                padding: 20,
                ...textStyle
            }}

        ><Typography>{text}</Typography></Box></Popover> : ""}
    </>


}