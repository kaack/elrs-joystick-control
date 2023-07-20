// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React, {useCallback, useState, useRef, useEffect} from 'react';
import Box from '@mui/material/Box';
import {Autocomplete, TextField, Typography} from "@mui/material";
import LookupTable from "./LookupTable";
import {HelpIconWithText} from "./HelpIconWithText";

import {getAutoCompleteKey, getAutoCompleteValue} from "./autocomplete";


let timerId = 0;
function GenericForm({formFields, formTitle, formIcon, formHelp, data, onDismount}) {

    const [loading, setLoading] = useState(true);
    const [fieldOpen, setFieldOpen] = useState({});
    const [fieldMaps, setFieldMaps] = useState({});
    // noinspection JSUnusedLocalSymbols
    const [formData, setFormData] = useState(data);

    const dataRef = useRef(formData);


    useEffect(() => {
        return () => {
            //console.log("dismount node settings");
            //console.log(dataRef);
            onDismount && onDismount(dataRef.current);
        }
    },[])

    //load options for auto-complete fields,
    useEffect(() => {
        //set default values
        (async (setFieldMaps) => {
            let maps = {}
            for (let formField of formFields) {
                if (formField.type !== "auto-complete") continue;
                let options = await formField.fetchOptionsMap();
                if (Array.isArray(options)) {
                    let map = {};
                    options.forEach((option) => map[option[0]] = option[1]);
                    maps[formField.key] = map;
                } else {
                    maps[formField.key] = options;
                }
            }
            setFieldMaps(maps);
            setLoading(false);
        })(setFieldMaps);

    }, [setFieldMaps, formFields])


    const onAutoOpen = useCallback(function (formField) {
        setFieldOpen({...fieldOpen, [formField.key]: true})
    }, [fieldOpen]);

    const onAutoClose = useCallback(function (formField) {
        setFieldOpen({...fieldOpen, [formField.key]: false})
    }, [fieldOpen]);

    const getFieldOptions = useCallback(function (formField) {
        let map = fieldMaps[formField.key];
        if (!map) {
            return [];
        }
        let options = [];
        for (let option of map.entries()) {
            options.push({
                id: `${option[0]}`,
                label: `${option[1]}`
            });
        }
        return options;
    }, [fieldMaps]);


    const onAutoChange = function (formField, newValue) {
        if (timerId > 0 ) {
            clearTimeout(timerId);
        }

        timerId = setTimeout(function() {
            let autoValue = getAutoCompleteKey(newValue, fieldMaps[formField.key]);
            dataRef.current =  {...dataRef.current, [formField.key]: autoValue}
        }, 250);
    }

    const onTableChange = useCallback(function (formField, newValue) {
        dataRef.current = {...dataRef.current, [formField.key]: newValue};
    }, null);


    if (loading) {
        return <></>
    }

    return (<Box key="container" style={{display: "flex", flexDirection: "column"}} sx={{mt: 2, mb: 2}}>
        <Box key="titlebar" style={{

            paddingLeft: 20, paddingRight: 10, paddingBottom: 15
        }}
        >
            <Box style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
            }}
            >
                {React.cloneElement(formIcon, {fontSize: "large", sx: {mr: 1}})}
                <Typography style={{color: "rgb(101 101 101)", fontSize: "1.2em", margin: "auto", marginLeft: 0}}
                            align={"left"} variant="h6" gutterBottom>{formTitle}</Typography>
                <HelpIconWithText>{formHelp}</HelpIconWithText>
            </Box>
        </Box>

        <Box key="form-fields" style={{minHeight: "300px", paddingLeft: 20, paddingBottom: 35, paddingRight: 10}}>
            {formFields?.map((formField) => {
                switch (formField.type) {
                    case "text":
                    case "auto-complete":
                        return <Box
                            key={`${formField.key}-box`}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                alignContent: "flex-end",
                                justifyContent: "flex-start",
                            }}>
                            <Autocomplete
                                freeSolo
                                style={{marginLeft: 0, marginBottom: 10, width: "100%"}}
                                ListboxProps={{style: {maxHeight: "8rem"}, position: "bottom-start"}}

                                id={formField.key}
                                key={formField.key}
                                ref={formField.ref}

                                onOpen={() => {
                                    onAutoOpen(formField);
                                }}

                                onClose={() => {
                                    onAutoClose(formField)
                                }}

                                options={getFieldOptions(formField)}

                                value={`${getAutoCompleteValue(dataRef.current[formField.key], fieldMaps[formField.key] || new Map())}`}

                                onInputChange={(event, newValue) => onAutoChange(formField, newValue)}

                                renderInput={(params) => {
                                    return <TextField {...params} label={formField.label} variant="standard"/>;
                                }}
                            />
                            <HelpIconWithText style={{top: 3}}>{formField.help}</HelpIconWithText>
                        </Box>;
                    case "lookup-table":
                        return <Box
                            key={`${formField.key}-container`}
                            style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                placeContent: 'flex-end flex-start',
                                alignContent: 'flex-start'
                            }}>
                            <LookupTable
                                key={formField.key}
                                id={formField.key}
                                label={formField.label}
                                style={formField.style}
                                initialRows={dataRef.current[formField.key]}
                                onChange={(data) => onTableChange(formField, data)}/>
                            <HelpIconWithText style={{top: 12}}>{formField.help}</HelpIconWithText>
                        </Box>;
                }
            })}

        </Box>
    </Box>);
}

export default GenericForm;
