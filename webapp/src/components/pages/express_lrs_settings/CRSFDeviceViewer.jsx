// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React, {useCallback, useEffect, useState} from "react";
import PopupDialog from "../misc/PopupDialog";
import {AccordionDetails, Typography} from "@mui/material";

import Box from "@mui/material/Box";
import {getCRSFDeviceFields} from "../../misc/server";
import {CRSFDeviceFieldData, CRSFDeviceFieldFolder, CRSFDeviceFieldType} from "../../../pbwrap";

import {ExpandMore} from "@mui/icons-material";
import {CRSFDeviceViewerFolder, StyledAccordion, StyledAccordionSummary} from "./CRSFDeviceViewerFolder";


export function CRSFDeviceViewerAccordion({device, folder, expanded, onSelected, setReload}) {

    return <StyledAccordion expanded={expanded} onChange={onSelected}>
        <StyledAccordionSummary
            expandIcon={<ExpandMore/>}
        >
            <Typography style={{fontWeight: 500, color: "#656565"}}>{`${folder.info.getName()}`}</Typography>
        </StyledAccordionSummary>
        <AccordionDetails style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            paddingTop: '0px',
            paddingBottom: '0px'
        }}>
            <CRSFDeviceViewerFolder key={"accordion-content"} device={device} folder={folder} setReload={setReload} />
        </AccordionDetails>
    </StyledAccordion>
}

export function CRSFDeviceViewerAccordions({device, folders, loading ,setReload}) {

    const [selectedFolder, setSelectedFolder] = useState(-1);

    const handleSelected = useCallback(function (selected) {
        setSelectedFolder(selected === selectedFolder ? -1 : selected);
    }, [selectedFolder]);


    if (loading) {
        return <CRSFDeviceViewerAccordionsSkeleton/>
    }

    return <>{[...folders.values()].map(function (folder) {
        let expanded = selectedFolder === folder.info.getId();
        return <CRSFDeviceViewerAccordion
            setReload={setReload}
            key={`${folder.info.getName()}-accordion`}
            id={`${folder.info.getName()}-accordion`}
            device={device}
            folder={folder} expanded={expanded}
            onSelected={() => handleSelected(folder.info.getId())}/>
    })}</>
}


export function CRSFDeviceViewerAccordionSkeleton(props) {
    return <Box style={{
        width: '100%',
        height: '40px',
        backgroundColor: 'rgba(101,101,101,0.2)',
        marginTop: '5px',
        marginBottom: '5x',
        borderRadius: '10px',
        animation: '1.5s ease-in-out 0.5s infinite normal none running fadeInOut',
        ...props.style
    }}></Box>
}

export function CRSFDeviceViewerAccordionsSkeleton() {
    return <Box style={{marginBottom: 10}}>
        <CRSFDeviceViewerAccordionSkeleton key={"skeleton-1"}/>
        <CRSFDeviceViewerAccordionSkeleton key={"skeleton-2"}/>
        <CRSFDeviceViewerAccordionSkeleton key={"skeleton-3"}/>
        <CRSFDeviceViewerAccordionSkeleton key={"skeleton-4"}/>
    </Box>
}

export function CRSFDeviceViewer({device, open, onClose}) {
    const [loading, setLoading] = useState(true);
    const [folders, setFolders] = useState(new Map());
    const [reload, setReload] = useState(0);

    useEffect(function () {
        setTimeout(async function () {
            let deviceFields = await getCRSFDeviceFields(device);
            console.log("device fields");

            let rootFolder = new CRSFDeviceFieldFolder();
            rootFolder.setName("Main Settings");
            rootFolder.setType(CRSFDeviceFieldType.FOLDER);
            rootFolder.setId(0);
            rootFolder.setParentId(0);

            //organize device fields by folder
            let folders = new Map();
            folders.set(rootFolder.getId(), {info: rootFolder, fields: []});

            // process folders
            for (let fieldData of deviceFields) {
                let type = fieldData.getDataCase();
                switch (type) {
                    case CRSFDeviceFieldData.DataCase.FOLDER:
                        let folder = fieldData.getFolder();
                        console.log(`FOLDER: ${folder.getName()}`);

                        if (!folders.has(folder.getId())) {
                            folders.set(folder.getId(), {info: folder, fields: []});
                        }
                }
            }

            // process fields
            for (let fieldData of deviceFields) {
                let type = fieldData.getDataCase();
                switch (type) {
                    case CRSFDeviceFieldData.DataCase.TEXT_SELECT:
                        let textSelect = fieldData.getTextSelect();
                        console.log(`TEXT: ${textSelect.getName()}: ${textSelect.getValue()} (${textSelect.getOptionsList()[textSelect.getValue()]})`);
                        if (!folders.has(textSelect.getParentId())) {
                            console.error(`could not find folder(id: ${textSelect.getParentId()}) for text-select field ${textSelect.getName()}`)
                            continue;
                        }
                        folders.get(textSelect.getParentId()).fields.push(textSelect);
                        break;
                    case CRSFDeviceFieldData.DataCase.COMMAND:
                        let command = fieldData.getCommand();
                        console.log(`CMD: ${command.getName()}: ${command.getStep()}`);

                        if (!folders.has(command.getParentId())) {
                            console.error(`could not find folder(id: ${command.getParentId()}) for command field ${command.getName()}`)
                            continue;
                        }
                        folders.get(command.getParentId()).fields.push(command);
                        break;
                }
            }
            setFolders(folders);
            setLoading(false);
        }, 150)

    }, [reload])

    const handleClose = useCallback(function () {
        onClose && onClose()
    }, []);

    console.log("reloading " + new Date().getTime());
    return (<PopupDialog title={device.getName()} open={open} onClose={() => handleClose()}>
        <Box style={{
            display: 'flex', flexDirection: 'column', minHeight: 200
        }}>
            <CRSFDeviceViewerAccordions loading={loading} device={device} folders={folders} setReload={setReload}/>
        </Box>
    </PopupDialog>);
}