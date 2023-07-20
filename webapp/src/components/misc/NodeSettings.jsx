// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import GenericForm from "./GenericForm";
import React, {useCallback, useEffect, useState} from "react";
import {Card, Container, SwipeableDrawer} from "@mui/material";
import {isMobile} from "react-device-detect";


function generateFormFields(nodeSchema, generators, node) {
    let formFields = [];
    for (let fieldName in nodeSchema.properties) {
        let fieldDef = nodeSchema.properties[fieldName];

        let defaultValue = fieldDef.default;

        if (fieldDef?.["$meta"]?.["editable"] === false) {
            continue;
        }

        for (let [typeCheckFunction, generatorFunction] of generators) {
            if (typeCheckFunction(fieldDef)) {
                let formField = generatorFunction({
                    node, fieldDef, fieldName, defaultValue
                });

                formField.ref = React.createRef();
                formFields.push(formField);
            }
        }
    }
    return formFields;
}

export function NodeSettings({node, data, onDismount, generators, nodeSchema, nodeClass}) {
    const [open, setOpen] = useState(false);
    const [dismount, setDismount] = useState(false);

    const handleDismount = function (newData) {
        onDismount && onDismount(newData);
    }

    // noinspection JSUnusedLocalSymbols
    const handleClose = useCallback(function (event) {
        setOpen(false);
        setTimeout(() => setDismount(true), 250);
    }, [dismount]);

    const handleKeyDown = useCallback(event => {
        if (event.key === 'Enter' || event.key === "Escape") {
            handleClose(event);
        }
    }, []);

    useEffect(function () {
        setTimeout(() => setOpen(true), 100);
    }, []);


    if (!nodeSchema) {
        console.error(`could not find schema for ${node.type} node while trying to render settings form`)
        return <></>
    }

    if (dismount) {
        return <></>
    }

    return (<SwipeableDrawer
        onKeyDown={handleKeyDown}
        PaperProps={{
            style: {
                backgroundColor: "rgb(0 0 0 / 0%)", boxShadow: "none"
            }, onClick: (event) => handleClose(event)
        }}
        onOpen={() => {
        }}
        onClose={(event) => handleClose(event)}
        open={open}
        ModalProps={{
            style: {
                backgroundColor: "rgb(0 0 0 / 0%)", boxShadow: "none"
            }, onBackdropClick: (event) => handleClose(event)
        }}
        anchor={isMobile ? "top" : "bottom"}>

        <Container sx={{mt: 2, mb: 2}}>
            <Card style={{maxWidth: 600, margin: "auto", borderRadius: "10px"}}
                  onClick={(evt) => evt.stopPropagation()}>

                <GenericForm
                    data={data}
                    onDismount={handleDismount}
                    formHelp={nodeSchema?.description}
                    formIcon={nodeClass?.menuIcon}
                    formTitle={nodeSchema?.title}
                    formFields={generateFormFields(nodeSchema, generators, node)}/>
            </Card>
        </Container>
    </SwipeableDrawer>);
}