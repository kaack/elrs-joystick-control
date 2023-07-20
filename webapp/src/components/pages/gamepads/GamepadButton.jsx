// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import {Typography} from "@mui/material";
import React from "react";
export function GamepadButton({index, rawValue, loading}) {

    return <Typography
        style={{
            display: "inline-block",
            width: "24px",
            height: "24px",
            borderRadius: "15px",
            borderWidth: "3px",
            borderColor: "#9d9d9d",
            backgroundColor: rawValue ? "#9d9d9d" : "#ececec",
            margin: "5px",
            borderStyle: "solid",
            textAlign: "center",
            verticalAlign: "middle",
            animation: loading ? "fadeInOut 1.5s ease-in-out 0.5s infinite" : ""
        }}>{loading ? "" : index}</Typography>;
}

export function GamepadButtonSkeleton() {
    return <GamepadButton loading={true}/>
}