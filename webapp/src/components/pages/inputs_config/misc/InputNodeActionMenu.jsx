// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React, {useCallback} from 'react';
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsIcon from "@mui/icons-material/Settings";
import DuplicateIcon from "../../../icons/DuplicateIcon";
import Box from "@mui/material/Box";
import InspectRawData from "../../../icons/InspectRawData";

import {getNodes} from "./config-common";
import {createNewNode, deleteNode, deselectAllNodes, onNodeSettings} from "./node-access";

const nodeActionStyle = {
    cursor: "pointer", color: "#656565", '&:hover': {
        color: "#1976d2",
        cursor: "pointer"
    }
}

function InputNodeActionMenu({node, onInspectOpen}) {
    const onCopy = useCallback(function () {
        let selectedNode = getNodes().find(elem => elem.id === node.id);
        if (!selectedNode) {
            return;
        }

        deselectAllNodes();
        createNewNode({
            ...selectedNode, selected: true
        });
    }, [node])

    return (<>
        <Box sx={{position: "absolute", right: -18, top: 0, width: 16}}>
            <DeleteIcon onClick={() => deleteNode(node)}
                        style={{display: (node.selected ? "" : "none")}}
                        sx={{width: 16, height: 16, marginTop: -1, ...nodeActionStyle}}
                        fontSize={"small"}/>
            <DuplicateIcon onClick={onCopy}
                           style={{display: (node.selected ? "" : "none")}}
                           sx={{width: 16, height: 16, marginTop: -1, ...nodeActionStyle}}
                           fontSize={"small"}/>
            {onInspectOpen && <InspectRawData onClick={onInspectOpen}
                                              style={{
                                                  display: (node.selected ? "" : "none"),
                                                  width: 18,
                                                  height: 18,
                                                  marginBottom: -2,
                                                  marginTop: -2,
                                                  position: "relative",
                                                  left: 0
                                              }}
                                              sx={nodeActionStyle}
                                              fontSize={"small"}/>}
            <SettingsIcon onClick={() => onNodeSettings({node})}
                          style={{display: (node.selected ? "" : "none")}}
                          sx={{width: 16, height: 16, marginTop: -1, ...nodeActionStyle}}
                          fontSize={"small"}/>
        </Box>
    </>);
}

export default InputNodeActionMenu;
