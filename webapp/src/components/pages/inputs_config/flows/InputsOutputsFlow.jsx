// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React, {useCallback, useEffect, useState} from "react";
import {getDefaultEdges, getDefaultNodes, setFlowRef, setReloadRef} from "../misc/config-common";
import {loadConfigFromStorage, saveConfigToStorage} from "../misc/config-access";
import Box from "@mui/material/Box";
import ReactFlow, {Background, SelectionMode} from "reactflow";
import {edgeTypes, nodeTypes} from "../nodes/constants";
import RemovableEdge from "../edges/RemovableEdge";
import {onNodeSettings} from "../misc/node-access";
import {InputControls} from "../misc/InputControls";
import AppMenu from "../misc/ConfigNodeMenu";


const selectionKeyCodes = ['Shift', 'Alt', 'Control'];
const deleteKeyCodes = ["Backspace", "Delete"];
export const InputsOutputsFlow = function ({}) {
    const [reload, setReload] = useState(0);
    const [configLoaded, setConfigLoaded] = useState(false);

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


    //console.log("rendering flow");

    if (!configLoaded) {
        return <></>
    }

    return (<Box style={{position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px"}}>
            <ReactFlow
                key={`version-${reload}`}

                onInit={setFlowRef}
                defaultNodes={getDefaultNodes()}
                defaultEdges={getDefaultEdges()}

                nodeTypes={nodeTypes()}
                edgeTypes={edgeTypes()}

                isValidConnection={isConnectionValid}

                proOptions={{hideAttribution: true}}
                fitView

                defaultEdgeOptions={{type: RemovableEdge.name}}

                onNodeContextMenu={(event, node) => {onNodeSettings({node}); event.preventDefault();}}
                onNodeDoubleClick={(event, node) => onNodeSettings({node})}

                selectionKeyCode={selectionKeyCodes}
                multiSelectionKeyCode={selectionKeyCodes}
                deleteKeyCode={deleteKeyCodes}

                selectionOnDrag={true}
                panOnDrag={true}
                selectionMode={SelectionMode.Partial}
            >
                <InputControls/>
                <AppMenu/>
                <Background color="#aaa" gap={16}/>
            </ReactFlow>

        </Box>

    );
};