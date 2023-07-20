// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React from "react";
import {createRoot} from 'react-dom/client';
import "./index.css";
import App from "./App";
import 'reactflow/dist/style.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import i18n from "./components/misc/I18n";

document.title = i18n("app-title");
const container = document.getElementById('root');
// noinspection JSCheckFunctionSignatures
const root = createRoot(container);
root.render(<App tab="home"/>);

