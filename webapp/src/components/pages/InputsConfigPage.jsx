// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later
import 'reactflow/dist/style.css';
import React from 'react';


import i18n from "../misc/I18n";
import LogicOperationsIcon from "../icons/LogicOperationsIcon";
import {InputsOutputsFlow} from "./inputs_config/flows/InputsOutputsFlow";


export default function InputsConfigPage() {

    return <InputsOutputsFlow/>
}

InputsConfigPage.id = "config";
InputsConfigPage.title = i18n("main-menu-config")
InputsConfigPage.menuIcon = <LogicOperationsIcon/>


