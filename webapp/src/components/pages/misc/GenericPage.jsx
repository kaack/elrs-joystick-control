// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';
import {Container, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export default function GenericPage({title,children,containerStyle}) {
    return (
        <Box style={{
            position: "absolute",
            margin: 0,
            padding: 0,
            width: "100%",
        }}>
            <Typography
                style={{
                    color: "rgb(101 101 101)",
                    fontSize: "16px",
                    margin: "auto",
                    marginLeft: 48,
                    marginTop: 12,
                    fontWeight: 800,

                }}
                align={"left"} variant="h6">{title}</Typography>

            <Divider style={{marginTop: "10px", width: "100%"}}/>
            <Box style={{
                position: "fixed",
                top: "50px",
                left: 0,
                backgroundColor: "none",
                height: "calc(100vh - 50px)",
                width: "100%",
                overflowY: "scroll",
                ...containerStyle
            }}>
                <Container sx={{mt: 2, mb: 2}} style={{ minWidth: 350, maxWidth: "50%", marginTop:0, marginBottom:0, padding:0, backgroundColor: "none"}} >
                    {children}
                </Container>

            </Box>
        </Box>


    );
};

