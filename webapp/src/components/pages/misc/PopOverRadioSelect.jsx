// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React, {useCallback} from "react";
import {FormControl, FormControlLabel, Link, Popover, Radio, RadioGroup} from "@mui/material";

export function PopOverRadioSelect({onChange, choices, id, defaultValue}) {

    const [anchor, setAnchor] = React.useState(null);
    const [choice, setChoice] = React.useState(defaultValue)

    const handleClick = useCallback((event) => {
        setAnchor(event.currentTarget);

    }, []);

    const handleClose = useCallback(() => {
        setAnchor(null);
    }, [])

    const handleChange = useCallback((event) => {
        let index = event.target.value;
        //console.log("index: " + index)
        setChoice(index)
        onChange && onChange(index)
        setAnchor(null);
    }, [])


    // noinspection JSValidateTypes
    return <>
        <Link onClick={handleClick} underline="hover" href={"#"}>{choices[choice].link} </Link>

        {anchor && <Popover
            id={id || "pop-over-radio-select"}
            open={Boolean(anchor)}
            anchorEl={anchor}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom', horizontal: 'left',
            }}
        >
            <FormControl>
                <RadioGroup style={{margin: 15}}
                            aria-labelledby="demo-radio-buttons-group-label"
                            value={choice}
                            onChange={handleChange}
                            name="radio-buttons-group"
                >
                    {choices.map(function (option, index) {
                        return <FormControlLabel
                            key={option.value}
                            value={index} control={<Radio/>}
                            label={option.label}/>
                    })}
                </RadioGroup>
            </FormControl>
        </Popover>}
    </>

}