// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import * as React from "react";
import {useCallback, useEffect, useRef, useState} from "react";
import {Autocomplete, Button, Card, Container, SwipeableDrawer, TextField, Typography} from "@mui/material";
import {isMobile} from "react-device-detect";
import Box from "@mui/material/Box";
import {HelpIconWithText} from "../../../misc/HelpIconWithText";
import {
    AutoCompleteFunctions, getAutoCompleteKey, getAutoCompleteValue
} from "../../../misc/autocomplete";
import StartLinkIcon from "../../../icons/StartLinkIcon";
import i18n from "../../../misc/I18n";
import {streamLink} from "../../../misc/streams";
import {showError} from "../../../misc/notifications";
import {PortState, SupervisorState} from "../../../../pbwrap";
import {startLink, stopLink} from "../../../misc/server";


const portStateToString = function (state) {

    if (state === PortState.PORTUNKNOWN) {
        return "Unknown";
    } else if (state === PortState.PORTCONNECTED) {
        return "Connected"
    } else if (state === PortState.PORTDISCONNECTED) {
        return "Disconnected"
    } else {
        return "Undefined";
    }
}

const isStartLinkButtonDisabled = function (supervisorState) {

    if (supervisorState === SupervisorState.SUPERVISORUNKNOWN) {
        return true;
    } else if (supervisorState === SupervisorState.SUPERVISORACTIVE) {
        return true;
    } else if (supervisorState === SupervisorState.SUPERVISORINACTIVE) {
        return false;
    }
    return true;
};

const isStopLinkButtonDisabled = function (supervisorState) {
    if (supervisorState === SupervisorState.SUPERVISORUNKNOWN) {
        return true;
    } else if (supervisorState === SupervisorState.SUPERVISORACTIVE) {
        return false;
    } else if (supervisorState === SupervisorState.SUPERVISORINACTIVE) {
        return true;
    }
    return true;
};

const isLinkFieldReadOnly = function (supervisorState) {
    if (supervisorState === SupervisorState.SUPERVISORUNKNOWN) {
        return false;
    } else if (supervisorState === SupervisorState.SUPERVISORACTIVE) {
        return true;
    } else if (supervisorState === SupervisorState.SUPERVISORINACTIVE) {
        return false;
    }
    return true;
};


const LinkStateViewer = function ({linkStateViewerRef}) {
    const [linkState, setLinkState] = useState({
        portState: PortState.PORTUNKNOWN, sentPacketsCount: 0, receivedPacketsCount: 0, errorPacketsCount: 0
    });

    useEffect(function () {
        linkStateViewerRef.current = {setLinkState};
    }, []);

    //console.log("rendering link viewer state");
    return <>{[
        {
            key: "port-state",
            title: i18n("port-state-title"),
            help: i18n("port-state-help"),
            value: portStateToString(linkState.portState)
        },
        {
            key: "sent-packets-count",
            title: i18n("sent-packets-title"),
            help: i18n("sent-packets-help"),
            value: linkState.sentPacketsCount
        }, {
            key: "received-packets-count",
            title: i18n("received-packets-title"),
            help: i18n("received-packets-help"),
            value: linkState.receivedPacketsCount
        }, {
            key: "error-packets-count",
            title: i18n("error-packets-title"),
            help: i18n("error-packets-help"),
            value: linkState.errorPacketsCount
        }].map((fieldSpec) => <Box
        key={`${fieldSpec.key}-box`}
        style={{
            display: "flex", alignItems: "center", alignContent: "flex-end", justifyContent: "flex-start",

        }}>
        <TextField
            value={fieldSpec.value}
            id={fieldSpec.key}
            key={fieldSpec.key}
            label={fieldSpec.title}
            variant="standard"
            autoComplete='off'
            disabled={true}
            readOnly={true}
            style={{
                marginLeft: 0, marginBottom: 10, width: "100%",
            }}
        />
        <HelpIconWithText style={{top: 3}}>{fieldSpec.help}</HelpIconWithText>
    </Box>)}</>;
}

const TXPortNameField = "tx";
const TXBaudRateField = "baud-rate";
export const RFLinkManager = function ({onClose, dataRef}) {
    const [open, setOpen] = useState(false);
    const formDataRef = useRef(null);
    const [formData, setFormData] = useState({
        ...dataRef.current
    });
    const [loading, setLoading] = useState(true);
    const [fieldOpen, setFieldOpen] = useState({});
    const [fieldMaps, setFieldMaps] = useState({});


    const linkStateViewerRef = useRef({});
    const [supervisorState, setSupervisorSate] = useState(SupervisorState.SUPERVISORUNKNOWN);

    // noinspection JSUnusedLocalSymbols
    const [fields, setFields] = useState([{
        key: TXPortNameField,
        title: i18n("rf-link-tx-title"),
        help: i18n("rf-link-tx-help"),
        fetchOptionsMap: AutoCompleteFunctions["transmitters"]
    }, {
        key: TXBaudRateField,
        title: i18n("rf-link-baud-rate-title"),
        help: i18n("rf-link-baud-rate-help"),
        fetchOptionsMap: AutoCompleteFunctions["baud-rate"]
    }])

    const streamRef = useRef();

    const onStartLink = useCallback(async function () {
        try {
            //console.log(formData);
            await startLink({
                port: formData?.[TXPortNameField],
                baudRate: formData?.[TXBaudRateField]
            });
        } catch(ex) {
            showError(`${i18n("error-msg-link-not-started")} ${ex.message}`);
        }
    },[formData]);

    const onStopLink = useCallback(async function() {
        try {
            await stopLink();
        } catch(ex) {
            showError(`${i18n("error-msg-link-not-stopped")} ${ex.message}`);
        }
    }, []);

    useEffect(function () {
        setTimeout(() => {
            //console.log("opening link manager");
            setOpen(true);

        }, 100);
    }, []);


    useEffect(function () {
        streamLink({
            onStreamActive: () => {
            }, onStreamData: (linkState) => {

                let pState = linkState.getPortState();
                let sState = linkState.getSupervisorState();
                let sPCount = linkState.getSentPacketsCount();
                let rPCount = linkState.getReceivedPacketsCount();
                let ePCount = linkState.getErrorPacketsCount();

                linkStateViewerRef?.current?.setLinkState?.({
                    portState: pState,
                    sentPacketsCount: sPCount,
                    receivedPacketsCount: rPCount,
                    errorPacketsCount: ePCount
                });

                if (sState !== supervisorState) {
                    setSupervisorSate(sState);
                }
            }, onStreamError: (status) => {
                showError(`${i18n("error-msg-link-stream-closed")} ${status.details}`);
                linkStateViewerRef?.current?.setLinkState?.({
                    portState: PortState.PORTUNKNOWN,
                    sentPacketsCount: 0,
                    receivedPacketsCount: 0,
                    errorPacketsCount: 0
                });
                setSupervisorSate(SupervisorState.SUPERVISORUNKNOWN)
            }, onStreamEnd: () => {
                streamRef.current = null;
            }
        }).then((stream) => {
            streamRef.current = stream;
        });

    }, []);

    //stop the stream when closing the dialog
    useEffect(() => () => {
        cancelStream();
    }, [])


    const cancelStream = useCallback(function () {
        streamRef?.current?.cancel();
    }, []);

    // noinspection JSUnusedLocalSymbols
    const handleClose = useCallback(function (event) {
        setOpen(false);
        setTimeout(() => {
            onClose && onClose()
        }, 150);
    }, []);

    const handleKeyDown = useCallback(event => {
        if (event.key === 'Enter' || event.key === "Escape") {
            handleClose(event);
        }
    }, []);


    //update form data whenever there is a state change
    useEffect(() => {
        formDataRef.current = formData;
        dataRef.current = formData;
    }, [formData]);

    //load options for transmitters
    useEffect(() => {
        (async (setFieldMaps) => {
            let maps = {}
            for (let fieldSpec of fields) {
                maps[fieldSpec.key] = await fieldSpec.fetchOptionsMap();
            }

            setFieldMaps(maps);
            setLoading(false);
        })(setFieldMaps);
    }, [setFieldMaps, fields]);


    const onAutoOpen = useCallback(function (fieldName) {
        setFieldOpen({...fieldOpen, [fieldName]: true})
    }, null);

    const onAutoClose = useCallback(function (fieldName) {
        setFieldOpen({...fieldOpen, [fieldName]: false})
    }, null);


    const onAutoChange = useCallback(function (fieldName, newValue) {
        setFormData({...formDataRef.current, [fieldName]: getAutoCompleteKey(newValue, fieldMaps[fieldName])});
    }, null);

    const getFieldOptions = useCallback(function (fieldName) {
        let map = fieldMaps[fieldName];
        if (!map) {
            return [];
        }
        return Array.from(map, ([_, value]) => value);
    }, null);

    if (loading) {
        return <></>
    }


    //console.log("rendering link manager");
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
                <Box key="container" style={{display: "flex", flexDirection: "column"}} sx={{mt: 2, mb: 3}}>
                    <Box key="titlebar" style={{

                        paddingLeft: 20, paddingRight: 10, paddingBottom: 15
                    }}
                    >
                        <Box style={{
                            width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center'
                        }}
                        >
                            <StartLinkIcon style={{width: "26px"}}/>
                            <Typography style={{
                                color: "rgb(101 101 101)", fontSize: "1.2em", margin: "auto", marginLeft: "15px"
                            }}
                                        align={"left"} variant="h6"
                                        gutterBottom>{i18n("rf-link-dialog-title")}</Typography>
                            <HelpIconWithText>{i18n("rf-link-dialog-help")}</HelpIconWithText>
                        </Box>
                    </Box>
                    <Box key="form-fields"
                         style={{paddingLeft: 20, paddingBottom: 0, paddingRight: 10}}>
                        {fields.map((fieldSpec) => <Box
                            key={`${fieldSpec.key}-box`}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                alignContent: "flex-end",
                                justifyContent: "flex-start",
                            }}>
                            <Autocomplete
                                freeSolo
                                style={{marginLeft: 0, marginBottom: 10, width: "100%"}}
                                ListboxProps={{style: {maxHeight: "8rem"}, position: "bottom-start"}}

                                id={`${fieldSpec.key}-text-auto`}
                                key={`${fieldSpec.key}-text-auto`}

                                onOpen={() => {
                                    onAutoOpen(fieldSpec.key);
                                }}
                                onClose={() => {
                                    onAutoClose(fieldSpec.key)
                                }}

                                options={getFieldOptions(fieldSpec.key)}
                                disabled={isLinkFieldReadOnly(supervisorState)}

                                value={getAutoCompleteValue(formData[fieldSpec.key], fieldMaps[fieldSpec.key] || new Map())}
                                inputValue={getAutoCompleteValue(formData[fieldSpec.key], fieldMaps[fieldSpec.key] || new Map())}

                                onChange={(event, newValue) => onAutoChange(fieldSpec.key, newValue)}
                                onInputChange={(event, newValue) => onAutoChange(fieldSpec.key, newValue)}

                                renderInput={(params) => {
                                    return <TextField key={`${fieldSpec.key}-text-field`} {...params}
                                                      label={fieldSpec.title} variant="standard"/>;
                                }}
                            />
                            <HelpIconWithText key={`${fieldSpec.key}-help-text`}
                                              style={{top: 3}}>{fieldSpec.help}</HelpIconWithText>
                        </Box>)}

                        <LinkStateViewer linkStateViewerRef={linkStateViewerRef}/>
                        <Box style={{
                            display: "flex",
                            alignItems: "center",
                            alignContent: "flex-end",
                            justifyContent: "flex-end",
                            paddingRight: 12,
                            columnGap: 12,
                            marginTop: 12
                        }}
                        >
                            <Button onClick={onStartLink} style={{width: "50%", borderRadius: "10px"}} variant="contained"
                                    disabled={isStartLinkButtonDisabled(supervisorState)}
                            >Start Link</Button>
                            <Button onClick={onStopLink} style={{width: "50%", borderRadius: "10px"}} color="error" variant="contained"
                                    disabled={isStopLinkButtonDisabled(supervisorState)}>Stop Link</Button>
                        </Box>
                    </Box>
                </Box>
            </Card>
        </Container>
    </SwipeableDrawer>);
}

