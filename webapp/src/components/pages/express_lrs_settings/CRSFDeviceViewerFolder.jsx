// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import {styled} from "@mui/system";
import {Accordion, AccordionSummary} from "@mui/material";
import React, {useState} from "react";
import {CRSFDeviceFieldCommand, CRSFDeviceFieldTextSelect} from "../../../pbwrap";
import Box from "@mui/material/Box";
import {CRSFDeviceViewerTextSelect} from "./CRSFDeviceViewerTextSelect";
import {CRSFDeviceViewerCommand} from "./CRSFDeviceViewerCommand";

export const StyledAccordion = styled((props) => (
    <Accordion disableGutters={true} elevation={0} square={true} {...props} children={props.children}/>))({
    margin: 0, marginTop: 0, marginBottom: 0, '&:before': {
        display: 'none',
    },
})
export const StyledAccordionSummary = styled((props) => (<AccordionSummary {...props} />))({
    marginBottom: 0,
    padding: 0,
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(0deg)',
    }, '& .MuiAccordionSummary-expandIconWrapper': {
        transform: 'rotate(-90deg)',
    },
})

export function CRSFDeviceViewerFolder({device, folder, setReload}) {
    // noinspection JSUnusedLocalSymbols
    const [formData, setFormData] = useState({});


    return <>
        {folder.fields.map(function (field) {
            if (field instanceof CRSFDeviceFieldTextSelect) {
                return <CRSFDeviceViewerTextSelect setReload={setReload} device={device} field={field} key={`text-select-${field.getId()}`} />;
            } else if (field instanceof CRSFDeviceFieldCommand) {
                return <CRSFDeviceViewerCommand setReload={setReload} device={device}  field={field} key={`command-${field.getId()}`} />;
            } else {
                return <Box key={`${field.getId()}-box`} style={{display: "none"}}></Box>
            }
        })}
    </>
}