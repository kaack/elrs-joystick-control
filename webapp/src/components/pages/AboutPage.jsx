// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React, {useEffect, useState} from 'react';
import {Typography} from "@mui/material";
import packageJSON from '../../../package.json';

import Box from "@mui/material/Box";

import i18n from "../misc/I18n";
import {Help} from "@mui/icons-material";
import MuiMarkdown from "mui-markdown";
import {getAppInfo} from "../misc/server";

import FAIR_SOURCE_LICENSE from "../../../../LICENSE-FAIR-SOURCE"
import GPL_LICENSE from "../../../../LICENSE-GPL"
import LICENSE from "../../../../LICENSE"
import {LicenseViewer} from "./misc/LicenseViewer";
import PayPalIcon from "../icons/PayPalIcon";
import IconButton from "@mui/material/IconButton";
import AppLogo from "../misc/AppLogo";
import YTIcon from "../icons/YTIcon";


export default function AboutPage({}) {
    const [appInfo, setAppInfo] = useState(null);
    useEffect(function () {
        (async () => {
            setAppInfo(await getAppInfo());
        })().catch((ex) => {
            console.error(`could not retrieve backend version.${ex.message}`, ex)
        });
    }, []);


    const getBackendVersionString = function (appInfo) {
        return `${appInfo.getReleaseTag()}-${appInfo.getCommitHash().substring(0, 7)}`;
    }

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };

    return (<Box style={{
        textAlign: "center", margin: 0, padding: 0, backgroundColor: "none", display: "flex", flexDirection: "column"
    }}>
        <Box>
            <Typography variant="h6" style={{marginBottom: 5, color: "#656565"}}>{i18n("app-title")}</Typography>
        </Box>
        <Box>
            <AppLogo style={{width: 200}}/>
        </Box>
        <Box style={{marginBottom: 10}}>
            <MuiMarkdown>{`${i18n("about-page-frontend-version")}: ${packageJSON.version}`}</MuiMarkdown>
            {appInfo &&
                <MuiMarkdown>{`${i18n("about-page-backend-version")}: ${getBackendVersionString(appInfo)}`}</MuiMarkdown>}
        </Box>
        <Box style={{
            display: 'flex', columnGap: '5px', marginBottom: '10px', justifyContent: 'center'
        }}>
            <MuiMarkdown>{i18n("about-page-made-by")}</MuiMarkdown>
            <Typography><a style={{
                display: 'flex', alignItems: 'center', columnGap: '2px', textDecoration: 'none'
            }} href="https://www.youtube.com/@oneeyefpv" target="_blank">
                <YTIcon/>@OneEyeFPV</a></Typography>
        </Box>

        <Box style={{
            marginBottom: '10px', display: 'flex', flexDirection: 'column', rowGap: '10px', alignItems: 'center'
        }}>
            <MuiMarkdown>{i18n("about-page-donate")}</MuiMarkdown>
            <IconButton
                onClick={() => openInNewTab("https://www.paypal.com/donate/?hosted_button_id=TRHRYKMZ8SM8W")}
                style={{
                    backgroundColor: 'rgb(255, 209, 64)',
                    borderRadius: '15px',
                    paddingLeft: '15px',
                    paddingRight: '15px',
                    width: '125px'
                }}>
                <PayPalIcon style={{height: 24, width: 100}}/>
            </IconButton>
        </Box>
        <Box style={{marginBottom: 10, textAlign: "left"}}>
            <MuiMarkdown>{i18n("about-page-thanks")}</MuiMarkdown>
        </Box>
        <Box>
            <Typography variant="h6" style={{marginBottom: 5, color: "#656565"}}>Licenses</Typography>
        </Box>
        <Box style={{
            marginBottom: 10, textAlign: "left"
        }}>
            <Typography>{LICENSE}</Typography>
        </Box>
        <Box style={{marginBottom: 10, textAlign: "left"}}>
            <LicenseViewer text={GPL_LICENSE}><Typography><a href={"#"}>GNU General Public
                License</a></Typography></LicenseViewer><br/>
            <LicenseViewer text={FAIR_SOURCE_LICENSE}><Typography><a href={"#"}>Fair Source
                License</a></Typography></LicenseViewer>
        </Box>
    </Box>);
};

AboutPage.id = "about";
AboutPage.title = i18n("main-menu-about")
AboutPage.menuIcon = <Help/>

