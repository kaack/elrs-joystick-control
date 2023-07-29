// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React, {useCallback, useState} from "react";
import {CRSFDeviceFieldData, CRSFDeviceFieldTextSelect} from "../../../pbwrap";
import Box from "@mui/material/Box";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {setCRSFDeviceField} from "../../misc/server";
import {showError} from "../../misc/notifications";

export function CRSFDeviceViewerTextSelect({device, field, setReload}) {
    const [fieldValue, setFieldValue] = useState(field.getValue());

    const handleFieldChange = useCallback(async function (field, value) {
        try {
            //make a copy of the field, to avoid reloading the whole menu
            let wrapper = new CRSFDeviceFieldData();
            let textSelect = new CRSFDeviceFieldTextSelect();
            textSelect.setId(field.getId());
            textSelect.setValue(value);
            textSelect.setMin(field.getMin());
            textSelect.setMax(field.getMax());
            wrapper.setTextSelect(textSelect);
            await setCRSFDeviceField(device, wrapper);

            setReload(r => ++r); // reload entire menu
        } catch (ex) {
            showError(ex.message);
        }
    }, []);

    const onTextSelectChange = useCallback(function (field, value) {
        setFieldValue(value);
        setTimeout(() => handleFieldChange(field, value), 0);
    }, [fieldValue])


    return <Box
        key={`${field.getId()}-box`}
        style={{
            display: "flex", alignItems: "center", alignContent: "flex-end", justifyContent: "flex-start",
            paddingTop: 5,
        }}>
        <FormControl style={{width: "100%"}}>
            <Box style={{
                width: '100%',
                marginBottom: '20px',
                marginTop: '-10px'
            }}>
                <InputLabel style={{left: -15}}
                            id={`field-${field.getId()}-label`}>{field.getName()}</InputLabel>
                <Select
                    variant="standard"
                    style={{width: "100%"}}
                    labelId={`field-${field.getId()}-label`}
                    value={fieldValue}
                    onChange={(event) => onTextSelectChange(field, event.target.value)}
                    id={`field-${field.getId()}`}
                >
                    {
                        field.getOptionsList().map(function (value, key) {
                            return <MenuItem key={key} value={key}>{value}</MenuItem>;
                        })
                    }
                </Select>
            </Box>
        </FormControl>
    </Box>;


}