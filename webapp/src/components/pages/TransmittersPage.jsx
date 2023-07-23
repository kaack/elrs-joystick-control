// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React, {useCallback, useState, useEffect} from 'react';
import {Card, Skeleton, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import TransmitterNode from "./inputs_config/nodes/TransmitterNode";
import {TransmitterViewer} from "./transmitters/TransmitterViewer";
import i18n from "../misc/I18n";
import {showError} from "../misc/notifications";
import {getTransmitters} from "../misc/server";

const cardStyle = {
    cursor: "pointer", '&:hover': {
        cursor: "pointer"
    }
};

function TransmitterCard({transmitter}) {

    const [open, setOpen] = React.useState(false);

    const handleViewerOpen = useCallback(function () {
        setOpen(true);
    }, []);

    const handleViewerClose = useCallback(function () {
        setOpen(false);
    }, []);


    return (<>
            {open ? <TransmitterViewer transmitter={transmitter} open={open} onClose={handleViewerClose}/> : ""}
            <Card
                sx={cardStyle}
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

                        textOverflow: "ellipsis"
                    }}>{`${transmitter.getPort()}` + (transmitter.getName() ? ` - ${transmitter.getName()}` : "")}</Typography>
                </Box>
                <Box style={{width: "100%", alignContent: "center", textAlign: "center"}}>
                    {React.cloneElement(TransmitterNode.menuIcon, {style: {width: 64, height: 64, padding: 25}})}
                </Box>
            </Card>
        </>

    );
}

function TransmitterSkeleton() {
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
let failedLoadAttempts = 0;

export default function TransmittersPage({}) {

    const [transmitters, setTransmitters] = useState(null);

    const loadTransmitters = useCallback(async function () {
        try {
            //console.log("loading transmitters");
            setTransmitters(await getTransmitters())
            failedLoadAttempts = 0;
        } catch (ex) {
            failedLoadAttempts++;
            if (failedLoadAttempts === 1) {
                showError(`${i18n("error-msg-transmitters-not-loaded")}`);
                setTransmitters([]);
            }
            console.error(`could not load transmitters list. ${ex.message}`, ex);
        }
        timeoutId = setTimeout(loadTransmitters, 5000)
    }, [transmitters])

    //check the transmitters list every few seconds, and update it
    useEffect(() => {
        failedLoadAttempts = 0;
        timeoutId = setTimeout(loadTransmitters, 0);
        return () => clearTimeout(timeoutId)
    }, []);



    return (<Box style={{
        textAlign: "center", margin: 0, padding: 0, backgroundColor: "none", display: "flex", flexDirection: "column"
    }}>
        {(() => {
            if (transmitters === null || transmitters?.length === 0) {
                return [<TransmitterSkeleton key={"s1"}/>, <TransmitterSkeleton key={"s2"}/>];
            } else {
                return transmitters.sort().map(t => <TransmitterCard key={t.getPort()} transmitter={t}/>)
            }
        })()}

    </Box>);
};

TransmittersPage.id = "tx";
TransmittersPage.title = i18n("main-menu-tx");
TransmittersPage.menuIcon = TransmitterNode.menuIcon;