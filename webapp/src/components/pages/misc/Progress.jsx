// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import Box from "@mui/material/Box";
import LinearProgress, {linearProgressClasses} from "@mui/material/LinearProgress";
import {Typography} from "@mui/material";
import React from "react";

export const Progress = function ({index, value, sx, loading, scale, unit}) {
    return <Box sx={{height: "25px", marginBottom: "10px", backgroundColor: "none", width: "100%"}}>
        <LinearProgress color="primary" variant="determinate" value={loading ? 0 : scale(value)} sx={{
            ...sx,
            height: "100%", width: "100%", borderRadius: 0, [`&.${linearProgressClasses.colorPrimary}`]: {
                borderRadius: 0, backgroundColor: "#ececec", transition: 'none'
            }, [`& .${linearProgressClasses.bar}`]: {
                borderRadius: 0, backgroundColor: "#9d9d9d", transition: 'none'
            },
            animation: loading ? "fadeInOut 1.5s ease-in-out 0.5s infinite" : ""

        }}
        />

        <Typography style={{
            textAlign: "left",
            width: "100%",
            backgroundColor: "none",
            position: "relative",
            top: "-24px",
            paddingLeft: "15px"
        }}>{loading ? "" : ` ${index}`}{unit?` ${unit}`:""}</Typography>

        <Typography style={{
            textAlign: "center", width: "100%", backgroundColor: "none", position: "relative", top: "-48px"
        }}>{loading ? "" : Math.round(value)}</Typography>
    </Box>
}
export const ProgressSkeleton = function () {
    return <Progress loading={true}/>
}