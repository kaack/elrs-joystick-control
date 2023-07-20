// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React, {useEffect} from 'react';

import {useSnackbar} from "notistack";

export const notificationsRef = {};
export function NotificationMessages() {
    const {enqueueSnackbar} = useSnackbar();
    useEffect(function() {
        //console.log("initializing notifications");
        notificationsRef.current={enqueueSnackbar};
    }, [])

    return <></>;
}

export function showError(message) {
    if (message instanceof Error) {
        message = `${message.message}`
    }


    notificationsRef.current?.enqueueSnackbar?.(message, {
        variant: "error", style: {textAlign: 'left'}
    });
}

export function showSuccess(message) {
    notificationsRef.current?.enqueueSnackbar?.(message, {
        variant: "success", style: { textAlign: 'left'}
    });
}