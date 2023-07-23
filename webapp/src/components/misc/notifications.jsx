// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React, {useEffect} from 'react';

import {useSnackbar} from "notistack";
import {Warning} from "./errors";

export const notificationsRef = {};
export function NotificationMessages() {
    const {enqueueSnackbar} = useSnackbar();
    useEffect(function() {
        //console.log("initializing notifications");
        notificationsRef.current={enqueueSnackbar};
    }, [])

    return <></>;
}

export function showWarning(message) {
    if (message instanceof Error || message instanceof Warning) {
        message = `${message.message}`
    }

    notificationsRef.current?.enqueueSnackbar?.(message, {
        variant: "warning", style: {textAlign: 'left'}
    });
}

export function showError(message) {
    if (message instanceof Warning) {
        return showWarning(message);
    }

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