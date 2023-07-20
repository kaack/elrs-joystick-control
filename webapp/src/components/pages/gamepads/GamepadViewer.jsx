// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React, {useCallback, useEffect, useRef, useState} from "react";
import {GamepadInputType} from "../../../pbwrap";
import PopupDialog from "../misc/PopupDialog";
import {Typography} from "@mui/material";
import {GamepadAxis, GamepadAxisSkeleton} from "./GamepadAxis";
import {GamepadButton, GamepadButtonSkeleton} from "./GamepadButton";
import {PopOverRadioSelect} from "../misc/PopOverRadioSelect";
import {HelpIconWithText} from "../../misc/HelpIconWithText";

import i18n from "../../misc/I18n";
import {streamGamepadState} from "../../misc/streams";
import {AxisDisplayFormats, AxisFormatChoices} from "./util";
import {showError} from "../../misc/notifications";

const formatChoices = AxisFormatChoices(AxisDisplayFormats)

export function RawAxisHelp() {
    return <HelpIconWithText style={{left: -5}} >{i18n("axes-viewer-help")}</HelpIconWithText>;
}

export function RawButtonHelp() {
    return <HelpIconWithText style={{left: -5}} >{i18n("buttons-viewer-help")}</HelpIconWithText>;
}


export function ButtonsHeader({gamepad}) {

    return <>
        {(_ => {
            if (gamepad.getButtons()) {
                return <Typography
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignContent: 'center',
                        flexWrap: 'nowrap',
                        alignItems: 'center',
                        marginTop: 25
                    }}
                    gutterBottom>{i18n("gamepad-viewer-buttons")} <RawButtonHelp/></Typography>
            }
        })()}
    </>
}

export function ButtonsViewer({gamepad, buttonFormat, loading, onStreamDataRef}) {
    const [inputStateList, setInputStateList] = useState(null);

    useEffect(function () {
        onStreamDataRef.current = setInputStateList
    }, []);

    return <>
        {(_ => {
            let buttons = [];
            if (loading || !inputStateList) {
                for (let i = 0; i < gamepad.getButtons(); i++) {
                    buttons.push(<GamepadButtonSkeleton key={`${gamepad.getId()}-button-${i}-skeleton`}/>)
                }
                return buttons;
            } else {
                for (let i = 0; i < inputStateList.length; i++) {
                    let input = inputStateList[i]
                    if (input.getType() !== GamepadInputType.BUTTON) continue;
                    buttons.push(<GamepadButton
                        key={`${gamepad.getId()}-button-${input.getIndex()}`}
                        index={input.getIndex()}
                        rawValue={input.getValue()}
                        displayValue={AxisDisplayFormats[buttonFormat].value(input.getValue())}
                    />)
                }
                return buttons
            }
        })()}
    </>;
}

export function AxesHeader({gamepad, format, onChangeFormat}) {

    return <>
        {(_ => {
            if (gamepad.getAxes()) {
                return <Typography
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignContent: 'center',
                        flexWrap: 'nowrap',
                        alignItems: 'center'
                    }}
                    gutterBottom>{i18n("gamepad-viewer-axes")} ( <PopOverRadioSelect
                    defaultValue={format}
                    onChange={onChangeFormat}
                    choices={formatChoices}
                /> ) <RawAxisHelp/></Typography>
            }
        })()}
    </>
}

const AxesViewer = function ({loading, gamepad, axisFormat, onStreamDataRef}) {
    const [inputStateList, setInputStateList] = useState(null);

    useEffect(function () {
        onStreamDataRef.current = setInputStateList
    }, []);

    return <>
        {(_ => {
            let axes = [];
            if (loading || !inputStateList) {
                for (let i = 0; i < gamepad.getAxes(); i++) {
                    axes.push(<GamepadAxisSkeleton key={`${gamepad.getId()}-axis-${i}-skeleton`}/>)
                }
                return axes;
            } else {

                for (let i = 0; i < inputStateList.length; i++) {
                    let input = inputStateList[i]
                    if (input.getType() !== GamepadInputType.AXIS) continue;
                    axes.push(<GamepadAxis
                        key={`${gamepad.getId()}-axis-${input.getIndex()}`}
                        index={input.getIndex()}
                        value={AxisDisplayFormats[axisFormat].value(input.getValue())}
                        scale={AxisDisplayFormats[axisFormat].scale}
                    />)
                }
                return axes
            }

        })()}
    </>
};

export function GamepadViewer({gamepad, open, onClose}) {

    const [loading, setLoading] = useState(true);
    const [axisFormat, setAxisFormat] = useState(0)
    const [buttonFormat, setButtonFormat] = useState(0)

    const streamRef = useRef();
    const axisViewerRef = useRef();
    const buttonsViewerRef = useRef();


    const cancelStream = useCallback(function () {
        streamRef?.current?.cancel();
    }, []);

    useEffect(function () {
        setLoading(true);

        streamGamepadState(gamepad, {
            onStreamActive: () => {
                setTimeout(() => setLoading(false), 1000);
            },
            onStreamData: (data) => {
                buttonsViewerRef?.current?.(data);
                axisViewerRef?.current?.(data)
            },
            onStreamError: (status) => {
                showError(`${i18n("error-msg-gamepad-stream-closed")} ${status.details}`);
            },
            onStreamEnd: () => {
                streamRef.current = null;
            }
        }).then((stream) => {
            streamRef.current = stream;
        });

    }, []);

    useEffect(() => () => {
        cancelStream();
    }, [])


    const handleClose = useCallback(function () {
        cancelStream();
        onClose && onClose()
    }, [])

    //console.log("rendering gamepad viewer!");
    return (<PopupDialog title={gamepad.getName()} open={open} onClose={() => handleClose()}>
        <AxesHeader gamepad={gamepad} format={axisFormat}  onChangeFormat={setAxisFormat} key={"axis-header"}/>
        <AxesViewer gamepad={gamepad} axisFormat={axisFormat} loading={loading} key={"axis-viewer"} onStreamDataRef={axisViewerRef}/>
        <ButtonsHeader gamepad={gamepad} format={buttonFormat}  onChangeFormat={setButtonFormat} key={"buttons-header"}/>
        <ButtonsViewer gamepad={gamepad} loading={loading} buttonFormat={buttonFormat} key={"buttons-viewer"} onStreamDataRef={buttonsViewerRef} />

    </PopupDialog>);
}