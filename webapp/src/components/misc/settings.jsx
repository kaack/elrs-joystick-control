// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import {storageGet} from "./storage";

const sanitizeUrl = function(url) {
    try {
        let parsedUrl = new URL(url);
        return parsedUrl.origin
    } catch (ex) {
        console.error(`could not parse URL "${url}". ${ex.message}`, ex);
        return url;
    }
}

export const getServerUrl = () => {
    const queryParams = new URLSearchParams(window.location.search);
    let savedServerUrl = storageGet("serverUrl");
    let queryServerUrl = queryParams.get("serverUrl");

    if (queryServerUrl && queryServerUrl !== "") {
        return sanitizeUrl(queryServerUrl);
    }

    if (savedServerUrl && savedServerUrl !== "") {
        return sanitizeUrl(savedServerUrl);
    }

    return sanitizeUrl(window.location.href);
}

