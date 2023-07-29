// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React, {useCallback, useEffect, useRef, useState} from "react";
import {
    getDefaultEdges,
    getDefaultNodes,
    getDefaultViewport,
    getNodes,
    setFlowRef,
    setReloadRef
} from "../misc/config-common";
import {loadConfigFromStorage, saveConfigToStorage} from "../misc/config-access";
import Box from "@mui/material/Box";
import ReactFlow, {SelectionMode} from "reactflow";
import {edgeTypes, nodeTypes} from "../nodes/constants";
import {onNodeSettings, setNodeValue} from "../misc/node-access";
import {LinkControls} from "../misc/LinkControls";
import AppMenu from "../misc/TelemetryNodeMenu";
import {streamTelemetry} from "../../../misc/streams";
import {showError} from "../../../misc/notifications";
import i18n from "../../../misc/I18n";

const selectionKeyCodes = ['Shift', 'Alt', 'Control'];
const deleteKeyCodes = ["Backspace", "Delete"];


let failedInitAttempts = 0;
let timeoutId = 0;
export const TelemetryFlow = function ({}) {
    const [reload, setReload] = useState(0);
    const [configLoaded, setConfigLoaded] = useState(false);
    const [allowPanning, setAllowPanning] = useState(false)


    const streamRef = useRef();

    // noinspection DuplicatedCode
    setReloadRef({setReload});

    useEffect(() => {
        //catch when user closes tab
        window.addEventListener('beforeunload', saveConfigToStorage);
        return () => {
            saveConfigToStorage();
            window.removeEventListener('beforeunload', saveConfigToStorage);
        }
    }, []);

    useEffect(function () {
        //console.log("loading config");
        loadConfigFromStorage();
        setConfigLoaded(true);
    }, []);

    const isConnectionValid = useCallback((connection) => {
        return connection.source !== connection.target;
    }, []);

    const cancelStream = useCallback(function () {
        streamRef?.current?.cancel()
    }, [streamRef]);

    useEffect(() => () => {
        cancelStream();
    }, []);

    const initTelemetry = useCallback(() => {
        streamRef?.current?.cancel()

        //console.log("starting telemetry stream ...");

        //reset all node values
        getNodes().forEach((node) => {
            setNodeValue({node, value: null});
        });

        streamTelemetry({
            onStreamActive: () => {
                //console.log("telemetry stream is active ...");
            },
            onStreamData: (data) => {
                //console.log(data);
                getNodes().forEach((node) => {
                    setNodeValue({node, value: data});
                });
            },
            onStreamError: (status) => {
                failedInitAttempts++;
                if (failedInitAttempts === 1) {
                    showError(`${i18n("error-msg-telemetry-not-started")}`);
                }
                console.error(`could start telemetry stream. ${status.details}`, status);
                timeoutId = setTimeout(initTelemetry, 5000)
            },
            onStreamEnd: () => {
                //console.log("telemetry stream ended ...");
                streamRef.current = null;
            }
        }).then((stream) => {
            streamRef.current = stream;
        });
    }, []);

    //console.log("rendering flow");

    useEffect(() => {
        failedInitAttempts = 0;
        return () => clearTimeout(timeoutId)
    }, []);

    const initFlow = useCallback(function(flow) {
        setFlowRef(flow);
        initTelemetry();
    },[initTelemetry])

    if (!configLoaded) {
        return <></>
    }

    return (<Box style={{position: "fixed", top: "50px", right: "0px", bottom: "0px", left: "0px"}}>
            <ReactFlow
                key={`version-${reload}`}

                onInit={initFlow}
                defaultNodes={getDefaultNodes()}
                defaultEdges={getDefaultEdges()}

                defaultViewport={getDefaultViewport({x: 0, y: 0, zoom: 2})}

                nodeTypes={nodeTypes()}
                edgeTypes={edgeTypes()}

                isValidConnection={isConnectionValid}

                proOptions={{hideAttribution: true}}

                defaultEdgeOptions={{}}

                onNodeContextMenu={(event, node) => {onNodeSettings({node}); event.preventDefault();}}
                onNodeDoubleClick={(event, node) => onNodeSettings({node})}

                snapToGrid={false}

                zoomOnScroll={false}
                zoomOnPinch={false}

                selectionKeyCode={selectionKeyCodes}
                multiSelectionKeyCode={selectionKeyCodes}
                deleteKeyCode={deleteKeyCodes}
                selectionOnDrag={true}
                panOnDrag={allowPanning}
                selectionMode={SelectionMode.Partial}

            >
                <LinkControls setAllowPanning={setAllowPanning}/>
                {allowPanning && <AppMenu/>}
                {/*<Background color="#aaa" gap={16}/>*/}
            </ReactFlow>

        </Box>

    );
};