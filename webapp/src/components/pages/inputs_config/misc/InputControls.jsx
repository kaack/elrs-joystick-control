// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ControlButton, Controls, useReactFlow, useStore} from 'reactflow';
import 'reactflow/dist/style.css';
import {styled} from '@mui/material/styles';
import FitScreenIcon from "../../../icons/FitScreenIcon";
import MinusIcon from "../../../icons/MinusIcon";
import PlusIcon from "../../../icons/PlusIcon";
import LockOpenIcon from "../../../icons/LockOpenIcon";
import {useStoreApi} from "@reactflow/core";
import {shallow} from "zustand/shallow";
import LockClosedIcon from "../../../icons/LockClosedIcon";
import ApplyConfigIcon from "../../../icons/ApplyConfigIcon";
import LabelIcon from "../../../icons/LabelIcon";
import SaveFileIcon from "../../../icons/SaveFileIcon";
import OpenFileIcon from "../../../icons/OpenFileIcon";
import {Zoom} from "@mui/material";
import Box from "@mui/material/Box";
import {Add} from "@mui/icons-material";
import ValueIcon from "../../../icons/ValueIcon";
// noinspection ES6UnusedImports
import {StatusCode} from "grpc-web";
import {streamValues} from "../../../misc/streams";
import {showError, showSuccess, showWarning} from "../../../misc/notifications";
import {setConfig} from "../../../misc/server";
import {
    getNodes
} from "./config-common";
import {
    createConfig,
    setNodesShowLabel,
    setNodesShowValue,
    setNodeValue,
    showConfigErrors, showSchemaErrors
} from "./node-access";

import {loadConfigFromFile, saveConfigToFile} from "./config-access";
import {NodeConfigError, Warning} from "../../../misc/errors";
// noinspection DuplicatedCode
import i18n from "../../../misc/I18n";

// noinspection DuplicatedCode
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
    isInteractive: s.nodesDraggable || s.nodesConnectable || s.elementsSelectable,
    minZoomReached: s.transform[2] <= s.minZoom,
    maxZoomReached: s.transform[2] >= s.maxZoom,
});


export function InputControls() {
    const {zoomIn, zoomOut, fitView} = useReactFlow();

    const store = useStoreApi();
    const {isInteractive, minZoomReached, maxZoomReached} = useStore(selector, shallow);
    const [applyingConfig, setApplyingConfig] = useState(false);
    const [menuExpanded, setMenuExpanded] = useState(false);
    const [showValues, setShowValues] = useState(false);
    const [showLabels, setShowLabels] = useState(false);
    const inputFile = useRef(null);
    const streamRef = useRef();


    const onToggleInteractivity = () => {
        store.setState({
            nodesDraggable: !isInteractive, nodesConnectable: !isInteractive, elementsSelectable: !isInteractive,
        });
    };

    const onApplyConfig = useCallback(() => {
        if (applyingConfig) {
            return;
        }

        let config, errors;
        try {
            [config, errors] = createConfig();

            if (errors && errors.length > 0) {
                showConfigErrors({errors, config});
                showError(`${i18n("error-msg-config-errors")}`);

                setApplyingConfig(false);
                return;
            }

        } catch (ex) {
            if (ex instanceof NodeConfigError) {
                showError(ex);
            } else {
                throw ex;
            }

            setApplyingConfig(false);

            return;
        }

        (async function () {
            try {
                await setConfig(config)
                showSuccess(`${i18n("notif-config-applied")}`);

            } catch (ex) {
                if (ex instanceof Warning) {
                    showWarning(ex);
                } else {
                    showError(`${i18n("error-msg-no-config")} ${ex.message}`);
                    showSchemaErrors({ex, config});
                }
            }
            setApplyingConfig(false);
        })()
    }, []);

    const toggleLabels = useCallback(() => {
        setShowLabels(!showLabels);
        setNodesShowLabel(!showLabels);
    }, [showLabels]);

    const cancelStream = useCallback(function () {
        streamRef?.current?.cancel()
    }, [streamRef]);

    useEffect(() => () => {
        cancelStream();
    }, []);

    const toggleShowValues = useCallback(() => {

        setShowValues(!showValues);

        if (showValues) {
            setNodesShowValue(false);
            cancelStream();
            return;
        }

        //reset all node values
        getNodes().forEach((node) => {
            setNodeValue({node, value: null});
        });

        setNodesShowValue(true);

        streamValues({
            onStreamActive: () => {

            },
            onStreamData: (data) => {
                getNodes().forEach((node) => {
                    let state = data.get(node.id);
                    if (!state) return;
                    let value = state.getIsnan() ? null : state.getValue();
                    setNodeValue({node, value});
                });
            },
            onStreamError: (status) => {
                showError(`${i18n("error-msg-eval-stream-closed")} ${status.details}`);
            },
            onStreamEnd: () => {
                streamRef.current = null;
            }
        }).then((stream) => {
            streamRef.current = stream;
        }).catch(function (ex) {
            showError(ex);
        });

    }, [showValues]);

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
        showSuccess(`config successfully loaded`);

    }, []);


    const onExpandMenu = useCallback(() => {
        setMenuExpanded(!menuExpanded);

    }, [menuExpanded]);

    const zoomInStyle = maxZoomReached ? {backgroundColor: "rgb(238 235 235)"} : {};
    const zoomOutStyle = minZoomReached ? {backgroundColor: "rgb(238 235 235)"} : {};

    //console.log("rendering controls");
    return (<Controls style={{borderRadius: 22}} showZoom={false} showFitView={false} showInteractive={false}>
        <CustomControlButton
            onClick={onApplyConfig}
            style={{
                animation: applyingConfig ? "fadeInOut 1.5s ease-in-out 0.5s infinite" : "",
                cursor: "pointer",
                paddingBottom: 12,
                paddingTop: 12
            }}
            title="Apply config">
            <ApplyConfigIcon style={{width: 22, height: 32}}/>
        </CustomControlButton>
        <CustomControlButton
            onClick={zoomIn}
            style={{...zoomInStyle}}
            title="Zoom in">
            <PlusIcon/>
        </CustomControlButton>
        <CustomControlButton
            onClick={zoomOut}
            style={{...zoomOutStyle}}
            title="Zoom out">
            <MinusIcon/>
        </CustomControlButton>
        <CustomControlButton onClick={fitView} title="Fit to screen">
            <FitScreenIcon/>
        </CustomControlButton>
        {(() => {
            if (menuExpanded) {
                return (<>
                    <CustomControlButton
                        onClick={toggleLabels}
                        style={{
                            cursor: "pointer", paddingBottom: 6, paddingTop: 6
                        }}
                        title="Toggle labels">
                        <Zoom
                            in={true} timeout={200}>
                            <Box component="svg" style={{width: 18, height: 18}}>
                                <LabelIcon/>
                            </Box>
                        </Zoom>
                    </CustomControlButton>
                    <CustomControlButton
                        onClick={toggleShowValues}
                        style={{
                            paddingBottom: 8, paddingTop: 8, cursor: "pointer",
                        }}
                        title="Toggle values">
                        <Zoom
                            in={true} timeout={250}>
                            <Box component="svg" style={{width: 22, height: 32}}>
                                <ValueIcon/>
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
                            in={true} timeout={250}>
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
                            in={true} timeout={300}>
                            <Box component="svg" style={{width: 22, height: 32}}>
                                <SaveFileIcon/>
                            </Box>
                        </Zoom>
                    </CustomControlButton>
                    <CustomControlButton
                        onClick={onToggleInteractivity}
                        style={{
                            paddingBottom: 6, paddingTop: 6, cursor: "pointer",
                        }}
                        title="Toggle edits">
                        <Zoom
                            in={true} timeout={350}>
                            <Box component="svg" style={{width: 22, height: 32}}>
                                {isInteractive ? <LockOpenIcon/> : <LockClosedIcon/>}
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

    </Controls>);
}



