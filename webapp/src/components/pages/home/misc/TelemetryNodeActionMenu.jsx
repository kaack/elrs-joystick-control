// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsIcon from "@mui/icons-material/Settings";
import Box from "@mui/material/Box";
import {deleteNode, onNodeSettings} from "./node-access";

const nodeActionStyle = {
    cursor: "pointer", color: "#656565", '&:hover': {
        color: "#1976d2",
        cursor: "pointer"
    }
}

function NodeActionMenu({node}) {
    return (<>
        <Box sx={{
            position: 'absolute',
            right: '-18px',
            top: '4px',
            width: '16px',
            display: 'flex',
            WebkitFlexDirection: 'column',
            MsFlexDirection: 'column',
            flexDirection: 'column',
            rowGap: '10px'

        }}>
            <DeleteIcon onClick={() => deleteNode(node)}
                        style={{display: (node.selected ? "" : "none")}}
                        sx={{width: "14px", height: "14px", marginTop: -1, ...nodeActionStyle}}/>
            <SettingsIcon onClick={() => onNodeSettings({node})}
                          style={{display: (node.selected ? "" : "none")}}
                          sx={{width: "14px", height: "14px", marginTop: -1, ...nodeActionStyle}}/>


        </Box>
    </>);
}

export default NodeActionMenu;
