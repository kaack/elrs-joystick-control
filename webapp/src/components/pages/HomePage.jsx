// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from 'react';

import i18n from "../misc/I18n";
import HomeIcon from "@mui/icons-material/Home";
import {TelemetryFlow} from "./home/flows/TelemetryFlow";

export default function HomePage({}) {
    return (
        <TelemetryFlow></TelemetryFlow>
    );
};

HomePage.id="home"
HomePage.title=i18n("main-menu-home");
HomePage.menuIcon = <HomeIcon />;






