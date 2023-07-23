// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React, {useCallback, useRef, useEffect, useState} from 'react';
import {
    Card,
    FormControlLabel,
    FormLabel,
    Switch,
    TextField,
} from "@mui/material";
import {isLocalStorageActive, storageSet} from "../misc/storage";
import i18n from "../misc/I18n";
import SettingsIcon from "@mui/icons-material/Settings";
import {getServerUrl, isMockBackend, MOCK_BACKEND_KEY, USE_LOCAL_STORAGE_KEY} from "../misc/settings";

const SettingsCard = function({label, children}) {
    return <Card elevation={1} style={{
        paddingTop: 15,
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 25,
        marginBottom: 20,
        marginTop: 20,
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "80%",
        width: 500,
        borderRadius: 10,
        backgroundColor: "#fcfcfc"
    }}>
        <FormLabel style={{marginBottom: 10}} component="legend">{label}</FormLabel>
        {children}
    </Card>
}

export default function SettingsPage({}) {

    const [fullScreen, setFullScreen] = React.useState(!!document.fullscreenElement);
    const [serverUrl, setServerUrl] = useState(getServerUrl());
    const [useLocalStorage, setUseLocalStorage] = useState(isLocalStorageActive())
    const [mockBackend, setMockBackend] = useState(isMockBackend())


    const intervalRef = useRef(null);
    useEffect(() => {
        intervalRef.current = setInterval(function () {
            const isFullScreen = !!document.fullscreenElement;
            setFullScreen(isFullScreen)
        }, 250)

    }, []);

    useEffect(() => () => {
        clearInterval(intervalRef.current);
    }, [])

    const handleFullScreen = useCallback(async () => {
        let newState = !fullScreen;
        try {
            if (newState) {
                await document.documentElement.requestFullscreen();
            } else {
                await document.exitFullscreen()
            }
        } catch (ex) {
            console.error("could not complete fullscreen request. " + ex.message, ex);
        }
    }, null);

    const handleLocalStorage = useCallback(() => {
        let flipped = !useLocalStorage;
        setUseLocalStorage(flipped)
        localStorage.setItem(USE_LOCAL_STORAGE_KEY, flipped.toString()); //this is the only one we always store in local storage
    }, null);

    const handleMockBackend = useCallback(() => {
        let flipped = !mockBackend;
        setMockBackend(flipped)
        storageSet(MOCK_BACKEND_KEY, flipped.toString());
    }, null);

    const handleServerUrl = useCallback(function(e) {
        let serverUrl = e.target.value;
        setServerUrl(serverUrl);
        storageSet("serverUrl", serverUrl);
    }, null);

    return (
        <>
            <SettingsCard label={"Display"}>
                <FormControlLabel
                    control={
                        <Switch checked={fullScreen} onChange={handleFullScreen} name="fullscreen"/>
                    }
                    label="Full screen"
                />
            </SettingsCard>
            <SettingsCard label={"Persistence"}>
                <FormControlLabel
                    control={
                        <Switch checked={Boolean(useLocalStorage)} onChange={handleLocalStorage} name="fullscreen"/>
                    }
                    label="Use browser local storage"
                />
            </SettingsCard>

            {!mockBackend && <SettingsCard label={"Connection"}>
                <TextField
                    value={serverUrl || ''}
                    onChange={handleServerUrl}
                    label={"Server URL"}
                    style={{marginTop: "10px", width: "100%", backgroundColor: "white"}}/>
            </SettingsCard> }

            <SettingsCard label={"Mock"}>
                <FormControlLabel
                    control={
                        <Switch checked={Boolean(mockBackend)} onChange={handleMockBackend} name="mock"/>
                    }
                    label="Mock backend server"
                />
            </SettingsCard>
        </>
    );
};


SettingsPage.id = "settings";
SettingsPage.title = i18n("main-menu-settings");
SettingsPage.menuIcon = <SettingsIcon/>;
