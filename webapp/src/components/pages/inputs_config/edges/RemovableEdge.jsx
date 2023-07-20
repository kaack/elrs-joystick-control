// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';
import {BaseEdge, EdgeLabelRenderer, getBezierPath} from 'reactflow';
import DeleteXIcon from "../../../icons/DeleteXIcon";
import {deleteEdge} from "../misc/config-common";
import {getEdgeId} from "./util";
import Box from "@mui/material/Box";

export default function RemovableEdge(edge) {
    // noinspection JSUnusedLocalSymbols
    let {
        id,
        source,
        target,
        sourceHandleId,
        targetHandleId,
        sourceX,
        sourceY,
        targetX,
        targetY,
        sourcePosition,
        targetPosition,
        style = {},
        markerEnd,
        selected
    } = edge;
    const [edgePath, labelX, labelY] = getBezierPath({
        sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition,
    });


    return (<>
        <BaseEdge key={getEdgeId(edge)} path={edgePath} markerEnd={markerEnd} style={style}/>
        <EdgeLabelRenderer key={getEdgeId(edge) + "-render"}>
            {selected && <Box key={getEdgeId(edge) + "-box"}
                              sx={{
                                  fontSize: '1px',
                                  background: '#ffffff',
                                  border: '0 solid rgba(255, 255, 255, 0)',
                                  cursor: 'pointer',
                                  borderRadius: '50%',
                                  color: '#656565',
                                  '&:hover': {
                                      boxShadow: "0 0 6px 2px rgba(0, 0, 0, 0.08)",
                                      border: "0 solid rgba(255, 255, 255, 0)",
                                  },
                                  '& svg:hover': {
                                      color: "#1976d2"
                                  }
                              }}
                              style={{
                                  position: 'absolute',
                                  transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`, // everything inside EdgeLabelRenderer has no pointer events by default
                                  // if you have an interactive element, set pointer-events: all
                                  pointerEvents: 'all',

                              }}


                              className={"nodrag nopan"}
            >
                <DeleteXIcon key={getEdgeId(edge) + "-icon"} style={{width: 16, height: 16}} onClick={(event) => {
                    event.stopPropagation();
                    deleteEdge(edge);
                }} fontSize={"small"}/>
            </Box>}
        </EdgeLabelRenderer>
    </>);
}

RemovableEdge.type ="rm";
