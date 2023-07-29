// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import Box from "@mui/material/Box";
import {Button, Typography} from "@mui/material";
import React, {useCallback, useEffect, useState} from "react";
import PopupDialog from "../misc/PopupDialog";
import {
    CRSFDeviceFieldCommand,
    CRSFDeviceFieldCommandStep,
    CRSFDeviceFieldData,
} from "../../../pbwrap";
import {setCRSFDeviceField} from "../../misc/server";
import {showError} from "../../misc/notifications";
import LinearProgress, {linearProgressClasses} from "@mui/material/LinearProgress";


function CRSFDeviceViewerExecutingCommandPopup({field, message, onClose}) {



    return (<PopupDialog title={field.getName()} open={true} onClose={onClose} style={{maxWidth: 300}} contentStyle={{
        paddingLeft: '25px',
        paddingRight: '25px',
        paddingBottom: '15px'
    }}>
        <Box style={{
            display: 'flex', flexDirection: 'column'
        }}>
            <Typography style={{
                marginBottom: '10px',
                marginTop: '0px',
                color: 'rgb(101, 101, 101)'
            }}>{message}</Typography>
            <LinearProgress color="primary"  sx={{
                marginBottom: "20px", marginTop: "15px",
                [`&.${linearProgressClasses.colorPrimary}`]: {
                    borderRadius: 0, backgroundColor: "#ececec", transition: 'none'
                }, [`& .${linearProgressClasses.bar}`]: {
                    borderRadius: 0, backgroundColor: "#9d9d9d", transition: 'none'
                }
            }}
            />
            <Box style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end'
            }}>
                <Button style={{color: '#656565'}} onClick={() => onClose(false)}>Cancel</Button>
            </Box>
        </Box>
    </PopupDialog>);
}

function CRSFDeviceViewerConfirmCommandPopup({field, message, onClose}) {

    return (<PopupDialog
        title={field.getName()}
        open={true} onClose={() => onClose(false)}
        style={{maxWidth: 300}}
        contentStyle={{
            paddingLeft: '25px',
            paddingRight: '25px',
            paddingBottom: '15px'
        }}>
        <Box style={{
            display: 'flex', flexDirection: 'column'
        }}>
            <Typography style={{
                marginBottom: '10px',
                marginTop: '5px',
                color: 'rgb(101, 101, 101)'
            }}>{message}</Typography>
            <Box style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',

            }}>
                <Button style={{color: '#656565'}} onClick={() => onClose(true)}>Ok</Button>
                <Button style={{color: '#656565'}} onClick={() => onClose(false)}>Cancel</Button>
            </Box>
        </Box>
    </PopupDialog>);
}


async function setCommandStep(device, field, step) {
    //make a copy of the field, to avoid reloading the whole menu
    let wrapper = new CRSFDeviceFieldData();
    let command = new CRSFDeviceFieldCommand();
    command.setId(field.getId());
    command.setStep(step);
    wrapper.setCommand(command);
    let res = await setCRSFDeviceField(device, wrapper);
    // noinspection JSUnresolvedReference
    return res.getField().getCommand();
}

async function clickCommand(device, field) {
    try {
        console.log("click command");
        let res = await setCommandStep(device, field, CRSFDeviceFieldCommandStep.CLICK);
        return {step: res.getStep(), message: res.getMessage()}
    } catch (ex) {
        showError(ex.message);
    }

    return {step: CRSFDeviceFieldCommandStep.IDLE, message: ""};
}

async function cancelCommand(device, field) {
    try {
        console.log("cancel command");
        let res = await setCommandStep(device, field, CRSFDeviceFieldCommandStep.CANCEL);
        return {step: res.getStep(), message: res.getMessage()}
    } catch (ex) {
        showError(ex.message);
    }

    return {step: CRSFDeviceFieldCommandStep.IDLE, message: ""};
}

async function confirmCommand(device, field) {
    try {
        console.log("confirm command");
        let res = await setCommandStep(device, field, CRSFDeviceFieldCommandStep.CONFIRMED);
        return {step: res.getStep(), message: res.getMessage()}
    } catch (ex) {
        showError(ex.message);
    }

    return {step: CRSFDeviceFieldCommandStep.IDLE, message: ""};
}

async function queryCommand(device, field) {
    try {
        console.log("query command");
        let res = await setCommandStep(device, field, CRSFDeviceFieldCommandStep.QUERY);
        return {step: res.getStep(), message: res.getMessage()}
    } catch (ex) {
        showError(ex.message);
    }

    return {step: CRSFDeviceFieldCommandStep.IDLE, message: ""};
}

let timeoutId = null;
export function CRSFDeviceViewerCommand({device, field}) {
    const [executingPopupOpen, setExecutingPopupOpen] = useState(false);
    const [confirmPopupOpen, setConfirmPopupOpen] = useState(false);
    const [step, setStep] = useState(CRSFDeviceFieldCommandStep.IDLE);
    const [message, setMessage] = useState("");



    useEffect(function () {
        ((async function () {
            if (step === CRSFDeviceFieldCommandStep.QUERY) {
                timeoutId = setTimeout(async function() {
                    let {step, message} = await queryCommand(device, field);
                    setStep(step);
                    setMessage(message);
                }, 200);
            } else if (step === CRSFDeviceFieldCommandStep.IDLE) {
                setExecutingPopupOpen(false);
                setConfirmPopupOpen(false);
            } else if (step === CRSFDeviceFieldCommandStep.CLICK) {
                let {step, message} = await clickCommand(device, field);
                setStep(step);
                setMessage(message);
            } else if (step === CRSFDeviceFieldCommandStep.EXECUTING) {
                setExecutingPopupOpen(true);
                setConfirmPopupOpen(false);
                setStep(CRSFDeviceFieldCommandStep.QUERY);
            } else if (step === CRSFDeviceFieldCommandStep.ASK_CONFIRM) {
                setExecutingPopupOpen(false);
                setConfirmPopupOpen(true);
            } else if (step === CRSFDeviceFieldCommandStep.CONFIRMED) {
                setExecutingPopupOpen(false);
                setConfirmPopupOpen(false);
                let {step, message} = await confirmCommand(device, field);
                setStep(step);
                setMessage(message);
            } else if (step === CRSFDeviceFieldCommandStep.CANCEL) {
                clearTimeout(timeoutId);
                let {step, message} = await cancelCommand(device, field);
                setStep(step);
                setMessage(message);
            }
        })()).then(function () {
            //console.log("command step done");
        }).catch(function (ex) {
            console.error(ex);
        });

    }, [step]);

    useEffect(function() {
        return function () {
            setTimeout(async function() {
                if (step === CRSFDeviceFieldCommandStep.EXECUTING) {
                    await cancelCommand(device, field);
                }
            },0)
        }
    },[]);

    const handleCloseExecuting = useCallback(function () {
        setStep(CRSFDeviceFieldCommandStep.CANCEL);
    }, [step]);

    const handleCloseConfirm = useCallback(function (confirmed) {
        if (confirmed) {
            setStep(CRSFDeviceFieldCommandStep.CONFIRMED);
        } else {
            setStep(CRSFDeviceFieldCommandStep.CANCEL);
        }
    }, [step]);


    const handleClick = useCallback(function () {
        setStep(CRSFDeviceFieldCommandStep.CLICK);
    }, [step])

    return <Box key={`${field.getId()}-box`}>
        {confirmPopupOpen && <CRSFDeviceViewerConfirmCommandPopup device={device} field={field} message={message}
                                                                  onClose={handleCloseConfirm}/>}
        {executingPopupOpen &&
            <CRSFDeviceViewerExecutingCommandPopup device={device} field={field} message={message}
                                                   onClose={handleCloseExecuting}/>}
        <Button
            style={{
                color: '#656565',
                borderColor: '#656565',
                borderRadius: '10px',
                marginBottom: '10px',
                backgroundColor: '#66666645',
                width: '100%',

            }}
            onClick={handleClick}
            variant="contained">
            {field.getName()}
        </Button>
    </Box>;
}