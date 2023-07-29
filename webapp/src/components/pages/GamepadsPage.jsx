// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React, {useCallback, useEffect, useState} from 'react';
import {Card, Skeleton, Typography} from "@mui/material";

import Box from "@mui/material/Box";
import AxisNode from "./inputs_config/nodes/AxisNode";
import ButtonNode from "./inputs_config/nodes/ButtonNode";
import {GamepadViewer} from "./gamepads/GamepadViewer";
import i18n from "../misc/I18n";
import GamepadNode from "./inputs_config/nodes/GamepadNode";
import {showError, showWarning} from "../misc/notifications";
import {getGamepads} from "../misc/server";

function GamepadRow([label, value, icon]) {
    return <Box key={label} style={{margin: 10, textAlign: "center"}}>
        {React.cloneElement(icon, {fontSize: "large"})}
        <Typography style={{marginLeft: 10}}>{value} {label}</Typography>
    </Box>
}

const cardStyle = {
    cursor: "pointer", '&:hover': {
        cursor: "pointer"
    }
};

function GamepadCard({gamepad}) {
    const [open, setOpen] = React.useState(false);

    const handleViewerOpen = useCallback(function () {
        setOpen(true);
    }, []);

    const handleViewerClose = useCallback(function () {
        setOpen(false);
    }, []);

    //console.log("rendering gamepad card!");
    return (<>
        {open && <GamepadViewer gamepad={gamepad} open={open} onClose={handleViewerClose}/>}
        <Card sx={cardStyle}
              elevation={4}
              onClick={handleViewerOpen}
              style={{
                  padding: 10,
                  marginBottom: 20,
                  marginTop: 20,
                  marginLeft: "auto",
                  marginRight: "auto",
                  maxWidth: "80%",
                  width: 400,
                  borderRadius: 15,
                  backgroundColor: "#f8f8f8"
              }}>
            <Box style={{
                width: "100%", backgroundColor: "white", alignContent: "center", marginBottom: 15, borderRadius: 10
            }}>
                <Typography align="center" style={{
                    fontWeight: "bold",
                    color: "rgb(101, 101, 101)",
                    width: "100%",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    paddingLeft: "0px",
                    paddingRight: "0px",
                    textIndent: "10px",
                }}>{`${gamepad.getName()}`}</Typography>
            </Box>
            <Box style={{width: "100%", alignContent: "center", textAlign: "center"}}>
                {[[i18n("gamepad-card-axes-label"), gamepad.getAxes(), AxisNode.menuIcon], [i18n("gamepad-card-buttons-label"), gamepad.getButtons(), ButtonNode.menuIcon]].map(r => GamepadRow(r))}
            </Box>
        </Card>
    </>);
}

function GamepadCardSkeleton() {
    return <Skeleton variant={"rounded"} style={{
        padding: 10,
        marginBottom: 20,
        marginTop: 20,
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "80%",
        width: 400,
        borderRadius: 15,
        height: 200
    }}/>;
}

let timeoutId;
let successfulLoadAttempts = 0;
let failedLoadAttempts = 0;

export default function GamepadsPage({}) {
    const [gamepads, setGamepads] = useState([]);

    const loadGamepads = useCallback(async function () {
        try {
            //console.log("loading gamepads");
            let gamepads = await getGamepads();
            setGamepads(gamepads);

            successfulLoadAttempts++;
            failedLoadAttempts = 0;
            if (successfulLoadAttempts === 1 && gamepads.length === 0) {
                showWarning(i18n("error-msg-gamepads-not-detected"));
            }
        } catch (ex) {
            successfulLoadAttempts = 0;
            failedLoadAttempts++;
            if (failedLoadAttempts === 1) {
                showError(`${i18n("error-msg-gamepads-not-loaded")}`);
                setGamepads([]);
            }
            console.error(`could not load gamepads list. ${ex.message}`, ex);
        }
        timeoutId = setTimeout(loadGamepads, 5000)
    }, [gamepads])

    //check the gamepads list every few seconds, and update it
    useEffect(() => {
        successfulLoadAttempts = 0;
        failedLoadAttempts = 0;
        timeoutId = setTimeout(loadGamepads, 0);
        return () => clearTimeout(timeoutId)
    }, []);
    


    //console.log("rendering gamepad page");
    return (<Box style={{
        textAlign: "center", margin: 0, padding: 0, backgroundColor: "none", display: "flex", flexDirection: "column"
    }}>
        {(() => {
            if (gamepads == null || gamepads.length === 0) {
                return [<GamepadCardSkeleton key={"s1"}/>, <GamepadCardSkeleton key={"s2"}/>];
            } else {
                return gamepads.sort().map(g => <GamepadCard key={g.getId()} gamepad={g}/>)
            }
        })()}

    </Box>);
};

GamepadsPage.id = "gamepads";
GamepadsPage.title = i18n("main-menu-gamepads")
GamepadsPage.menuIcon = GamepadNode.menuIcon

