// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from "react";
import {Progress, ProgressSkeleton} from "../misc/Progress";

export const TransmitterChannel = function ({index, value, sx, loading, scale, unit}) {
    return <Progress index={index} value={value} sx={sx} loading={loading} scale={scale} unit={unit} />
}
export const TransmitterChannelSkeleton = function () {
    return <ProgressSkeleton loading={true}/>
}
