// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ControlButton, Controls, useReactFlow, useStore} from 'reactflow';
import 'reactflow/dist/style.css';
import {styled} from '@mui/material/styles';
import FitScreenIcon from "../../../icons/FitScreenIcon";
import LockOpenIcon from "../../../icons/LockOpenIcon";
import {useStoreApi} from "@reactflow/core";
import {shallow} from "zustand/shallow";
import LockClosedIcon from "../../../icons/LockClosedIcon";

import SaveFileIcon from "../../../icons/SaveFileIcon";
import OpenFileIcon from "../../../icons/OpenFileIcon";
import {Zoom} from "@mui/material";
import Box from "@mui/material/Box";
import {Add} from "@mui/icons-material";

// noinspection ES6UnusedImports
import {StatusCode} from "grpc-web";
import {showError, showSuccess} from "../../../misc/notifications";
import {
    getDefaultViewport,
    getMetadataDetail,
    setMetadataDetail
} from "./config-common";

import {loadConfigFromFile, saveConfigToFile} from "./config-access";
import StartLinkIcon from "../../../icons/StartLinkIcon";
import {RFLinkManager} from "./RFLinkManager";
// noinspection DuplicatedCode
import i18n from "../../../misc/I18n";

export const CustomControlButton = styled(ControlButton)(({_}) => ({
    WebkitTapHighlightColor: "transparent",
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 6,
    paddingRight: 6,
    width: 22,
    height: 22,
    '& svg': {
        width: 16, height: 16, maxWidth: "none", maxHeight: "none",
    },
    '& svg svg': {
        width: 16, height: 16, maxWidth: "none", maxHeight: "none",
    }
}));

const selector = (s) => ({
    isInteractive: s.nodesDraggable || s.nodesConnectable || s.elementsSelectable || s.paneDragging,
    minZoomReached: s.transform[2] <= s.minZoom,
    maxZoomReached: s.transform[2] >= s.maxZoom,
});


export function LinkControls({setAllowPanning}) {
    const {fitView, setCenter, fitBounds} = useReactFlow();

    const store = useStoreApi();
    const {isInteractive} = useStore(selector, shallow);
    const [menuExpanded, setMenuExpanded] = useState(false);
    const [linkManagerOpen, setLinkManagerOpen] = useState(false);
    const inputFile = useRef(null);

    const linkDataRef = useRef(getMetadataDetail("link"));

    useEffect(() => {
        // lock the home screen view by default to prevent user from accidentally changing the layout
        store.setState({
            nodesDraggable: false, nodesConnectable: false, elementsSelectable: false, panOnDrag: false
        });
    },[]);

    const resetView = useCallback(function () {
        fitView({
            minZoom: 1.8,
            maxZoom: 2,
        });
    }, [fitView, fitBounds, setCenter]);

    useEffect(() => {
        function updateSize() {
            resetView();
        }

        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, [resetView]);

    useEffect(() => {
        if (!getDefaultViewport()) {
            //reset view when loading the default telemetry config
            resetView();
        }
    }, [resetView]);



    const onToggleInteractivity = () => {
        store.setState({
            nodesDraggable: !isInteractive, nodesConnectable: !isInteractive, elementsSelectable: !isInteractive, panOnDrag: !isInteractive,
        });
        setAllowPanning(!isInteractive);
    };

    const onOpenLinkManager = useCallback(function () {
        setLinkManagerOpen(true);

    }, [linkManagerOpen]);

    const onCloseLinkManager = useCallback(function () {
        setLinkManagerOpen(false)
        setMetadataDetail("link", linkDataRef.current);
        //console.log(linkDataRef.current);
    }, [linkManagerOpen]);

    const onSaveToFile = useCallback(() => {
        saveConfigToFile();
    }, []);

    const onLoadFromFile = useCallback(async (event) => {
        // noinspection DuplicatedCode
        let file = event?.target?.files?.[0];
        if (!file) return; //no selection was made

        try {
            await loadConfigFromFile(file);
        } catch (ex) {
            event.target.value = null;
            showError(`${i18n("error-msg-no-config")} ${ex.message}`);
            return;
        }

        event.target.value = null;
        showSuccess(`${i18n("notif-config-loaded")}`);

    }, []);


    const onExpandMenu = useCallback(() => {
        setMenuExpanded(!menuExpanded);
    }, [menuExpanded]);


    //console.log("rendering controls");
    return (<>
        {linkManagerOpen && <RFLinkManager key={`link-manager`} onClose={onCloseLinkManager} dataRef={linkDataRef}/>}

        <Controls style={{borderRadius: 22}} showZoom={false} showFitView={false} showInteractive={false}>
            <CustomControlButton
                onClick={onOpenLinkManager}
                style={{
                    animation: linkManagerOpen ? "fadeInOut 1.5s ease-in-out 0.5s infinite" : "",
                    cursor: "pointer",
                    paddingBottom: 12,
                    paddingTop: 12
                }}
                title="Start / Stop RF Link">
                <StartLinkIcon/>
            </CustomControlButton>

            {(() => {
                if (menuExpanded) {
                    return (<>
                        <CustomControlButton
                            onClick={onToggleInteractivity}
                            style={{
                                paddingBottom: 6, paddingTop: 6, cursor: "pointer",
                            }}
                            title="Toggle edits">
                            <Zoom
                                in={true} timeout={250}>
                                <Box component="svg" style={{width: 22, height: 22}}>
                                    {isInteractive ? <LockOpenIcon/> : <LockClosedIcon/>}
                                </Box>
                            </Zoom>
                        </CustomControlButton>
                        <CustomControlButton onClick={() => resetView()} title="Fit to screen">
                            <Zoom
                                in={true} timeout={300}>
                                <Box component="svg" style={{width: 18, height: 18}}>
                                    <FitScreenIcon/>
                                </Box>
                            </Zoom>
                        </CustomControlButton>
                        <CustomControlButton
                            onClick={() => inputFile.current.click()}
                            style={{
                                paddingBottom: 8, paddingTop: 8, cursor: "pointer",
                            }}
                            title="Load from file">
                            <input type="file" onChange={onLoadFromFile} accept={"application/json"} ref={inputFile}
                                   hidden={true}/>
                            <Zoom
                                in={true} timeout={350}>
                                <Box component="svg" style={{width: 22, height: 32}}>
                                    <OpenFileIcon/>
                                </Box>
                            </Zoom>
                        </CustomControlButton>
                        <CustomControlButton
                            onClick={onSaveToFile}
                            style={{
                                paddingBottom: 8, paddingTop: 8, cursor: "pointer",
                            }}
                            title="Save to file">
                            <Zoom
                                in={true} timeout={400}>
                                <Box component="svg" style={{width: 22, height: 32}}>
                                    <SaveFileIcon/>
                                </Box>
                            </Zoom>
                        </CustomControlButton>
                    </>)
                }
            })()}

            <CustomControlButton
                onClick={onExpandMenu}
                style={{
                    boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
                    marginTop: 4,
                    height: 26,
                    paddingBottom: 4,
                    paddingTop: 4,
                    cursor: "pointer",
                    backgroundColor: "rgb(101 101 101)",
                    borderRadius: 22,
                    outline: 0,
                    transform: menuExpanded ? "rotate(45deg)" : "",
                    transition: "transform .1s ease-in-out",
                }}
                title={menuExpanded ? "Collapse menu" : "Expand menu"}>
                <Add style={{color: "#ffffff", width: 22, height: 22}}/>
            </CustomControlButton>

        </Controls>
    </>);
}



