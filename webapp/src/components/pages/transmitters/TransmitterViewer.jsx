// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React, {useCallback, useEffect, useRef, useState} from "react";
import PopupDialog from "../misc/PopupDialog";
import {Typography} from "@mui/material";

import {TransmitterChannel, TransmitterChannelSkeleton} from "./TransmitterChannel";
import {PopOverRadioSelect} from "../misc/PopOverRadioSelect";
import {HelpIconWithText} from "../../misc/HelpIconWithText";
import i18n from "../../misc/I18n";
import {streamChannels} from "../../misc/streams";
import {ChannelDisplayFormats, ChannelFormatChoices} from "./util";
import {showError} from "../../misc/notifications";

const formatChoices = ChannelFormatChoices(ChannelDisplayFormats);

function ChannelsHelp() {
    return <HelpIconWithText style={{left: -6}}>{i18n("channels-viewer-help")}</HelpIconWithText>
}

function ChannelsViewer({transmitter, onStreamDataRef, channelFormat, loading}) {
    const [channelsList, setChannelsList] = useState(null);

    useEffect(function () {
        onStreamDataRef.current = setChannelsList
    }, []);

    return <>
        {(_ => {
            let channels = [];
            if (loading || !channelsList) {
                for (let i = 0; i < 16; i++) {
                    channels.push(<TransmitterChannelSkeleton
                        key={`${transmitter.getPort()}-channel-${i}-skeleton`}/>)
                }
                return channels;
            } else {

                for (let i = 0; i < channelsList.length; i++) {
                    let channel = channelsList[i]
                    channels.push(<TransmitterChannel
                        key={`${transmitter.getPort()}-channel-${channel.getChannelNumber()}`}
                        index={channel.getChannelNumber()}
                        value={ChannelDisplayFormats[channelFormat].value(channel.getChannelValue())}
                        scale={ChannelDisplayFormats[channelFormat].scale}/>)
                }
                return channels
            }
        })()}
    </>;
}

export function ChannelsHeader({setChannelFormat, formatChoices, channelFormat}) {
    return <>
        <Typography
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignContent: 'center',
                flexWrap: 'nowrap',
                alignItems: 'center'
            }}>Channels ( <PopOverRadioSelect
            defaultValue={channelFormat}
            onChange={setChannelFormat}
            choices={formatChoices}
        /> ) <ChannelsHelp/> </Typography>
    </>;

}

export function TransmitterViewer({transmitter, open, onClose}) {
    const [loading, setLoading] = useState(true);
    const [channelFormat, setChannelFormat] = useState(0)

    const streamRef = useRef();
    const channelsViewerRef = useRef();


    const cancelStream = useCallback(function () {
        streamRef?.current?.cancel();
    }, [streamRef]);

    useEffect(function () {
        setLoading(true);
        streamChannels(transmitter, {
            onStreamActive: () => {
                setTimeout(() => setLoading(false), 1000);
            },
            onStreamData: (data) => {
                channelsViewerRef?.current?.(data);
            },
            onStreamError: (status) => {
                showError(`${i18n("error-msg-channels-stream-closed")} ${status.details}`);
            },
            onStreamEnd: () => {
                streamRef.current = null;
            }
        }).then((stream) => {
            //stream started
            streamRef.current = stream;
        });
    }, []);


    useEffect(() => () => {
        cancelStream();
    }, []);


    const dialogTitle = useCallback(() => {
        let title = transmitter.getPort();
        let name = transmitter?.getName();
        if (name) {
            title += " - " + name;
        }
        return title
    }, [transmitter]);

    const handleClose = useCallback(function () {
        cancelStream();
        onClose && onClose()
    }, [])

    return (<PopupDialog title={dialogTitle()} open={open} onClose={() => handleClose()}>
        <ChannelsHeader channelFormat={channelFormat} formatChoices={formatChoices}
                        setChannelFormat={setChannelFormat}/>
        <ChannelsViewer transmitter={transmitter} loading={loading} channelFormat={channelFormat}
                        onStreamDataRef={channelsViewerRef}/>

    </PopupDialog>);
}