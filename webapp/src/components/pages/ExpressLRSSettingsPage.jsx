// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React, {useCallback, useState, useEffect} from 'react';
import {Card, Skeleton, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import i18n from "../misc/I18n";
import {showError, showWarning} from "../misc/notifications";
import {getCRSFDevices} from "../misc/server";
import SettingsIcon from "../icons/SettingsIcon";
import {CRSFDeviceViewer} from "./express_lrs_settings/CRSFDeviceViewer";
import {RpcError, StatusCode} from "grpc-web";


const cardStyle = {
    cursor: "pointer", '&:hover': {
        cursor: "pointer"
    }
};

function CRSFDeviceCard({device}) {
    const [open, setOpen] = React.useState(false);
    const handleViewerOpen = useCallback(function () {
        setOpen(true);
    }, []);

    const handleViewerClose = useCallback(function () {
        setOpen(false);
    }, []);

    return (<>
            {open ? <CRSFDeviceViewer device={device} open={open} onClose={handleViewerClose}/> : ""}
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
                    }}>{`${device.getName()}`}</Typography>
                </Box>
                <Box style={{width: "100%", alignContent: "center", textAlign: "center"}}>
                    <Box key={"software-version"} style={{
                        margin: '10px',
                        textAlign: 'center',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Typography style={{marginLeft: 10, fontWeight: 400}}>version:</Typography>
                        <Typography style={{marginLeft: 10, fontWeight: 500}}>{device.getSoftwareVersion()}</Typography>
                    </Box>
                </Box>
            </Card>
        </>

    );
}

function CRSFDeviceSkeleton() {
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

export default function ExpressLRSSettingsPage({}) {
    const [devices, setDevices] = useState(null);
    const loadDevices = useCallback(async function () {
        try {
            setDevices(await getCRSFDevices())
            failedLoadAttempts = 0;
        } catch (ex) {
            failedLoadAttempts++;
            if (failedLoadAttempts === 1) {
                if (ex instanceof RpcError && (ex.code === StatusCode.INVALID_ARGUMENT || ex.code === StatusCode.INTERNAL)) {
                    showWarning(`${ex.message}`);
                } else {
                    showError(`${i18n("error-msg-crsf-devices-not-loaded")}`);
                }
                setDevices([]);
                timeoutId = setTimeout(loadDevices, 5000)
            }
            console.error(`could not load crsf devices list. ${ex.message}`, ex);
        }

    }, [devices])

    //check the devices list every few seconds, and update it
    useEffect(() => {
        failedLoadAttempts = 0;
        timeoutId = setTimeout(loadDevices, 0);
        return () => clearTimeout(timeoutId)
    }, []);

    return (<Box style={{
        textAlign: "center", margin: 0, padding: 0, backgroundColor: "none", display: "flex", flexDirection: "column"
    }}>
        {(() => {
            if (devices === null || devices?.length === 0) {
                return [<CRSFDeviceSkeleton key={"s1"}/>, <CRSFDeviceSkeleton key={"s2"}/>];
            } else {
                return devices.sort().map(d => <CRSFDeviceCard key={d.getName()} device={d}/>)
            }
        })()}

    </Box>);
};

ExpressLRSSettingsPage.id = "elrs_settings";
ExpressLRSSettingsPage.title = i18n("main-menu-elrs-settings");
ExpressLRSSettingsPage.menuIcon = <SettingsIcon/>;