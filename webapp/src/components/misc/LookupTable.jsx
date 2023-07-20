// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React, {useCallback, useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import {List, ListItem, TextField, Typography} from "@mui/material";
import {AddCircle, ArrowRight, RemoveCircle} from "@mui/icons-material";

const AddRowIcon = (props) => {
    const [hover, setHover] = useState(false);
    return <AddCircle
        {...props}
        style={{
            color: hover ? "#1976d2" : "#656565",
            cursor: "pointer",
            width: 30,
            height: 30,
            marginLeft: 0,
            marginRight: 2,
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
    />;
}
const RemoveRowIcon = (props) => {
    const [hover, setHover] = useState(false);
    return <RemoveCircle
        {...props}
        style={{
            cursor: "pointer",
            color: hover ? "#1976d2" : "#656565",
            width: 30,
            height: 30,
            marginLeft: 2,
            marginRight: 10
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
    />;
}

const LookupTableRow = ({rowData, rowId, onChange, onAdd, onRemove}) => {
    const [inputValue, setInputValue] = useState(rowData.input || '');
    const [outputValue, setOutputValue] = useState(rowData.output || '');

    const onDataChange = useCallback(function (rowId, input, output) {
        setInputValue(input);
        setOutputValue(output);
        onChange && onChange({rowId, rowData: {input, output}});
    }, null);

    return <ListItem key={`${rowId}-li`} style={{padding: 0, marginBottom: 10}}>
        <AddRowIcon key={`${rowId}-add-icon`} onClick={() => onAdd({rowId})}/>
        <RemoveRowIcon key={`${rowId}-remove-icon`} onClick={() => onRemove({rowId})}/>
        <TextField
            value={inputValue}
            InputLabelProps={{
                shrink: true
            }}
            id={`field-${rowId}-in`}
            key={`field-${rowId}-in`}
            label={"Input value"}
            size={"small"}
            onChange={(event) => onDataChange(rowId, event.target.value, outputValue)}


            style={{width: "40%"}}/>
        <ArrowRight key={`${rowId}-arrow`} />
        <TextField
            value={outputValue}
            InputLabelProps={{
                shrink: true
            }}
            id={`field-${rowId}-out`}
            key={`field-${rowId}-out`}
            label={"Output value"}
            size={"small"}
            onChange={(event) => onDataChange(rowId, inputValue, event.target.value)}


            style={{width: "40%", paddingRight: 15}}/>
    </ListItem>;

}

let rowSeqNumber = 0;
const nextRowId = () => rowSeqNumber++;

function LookupTable(props) {

    const [rows, setRows] = useState(props.initialRows || []);

    const onRowChange = useCallback(function ({rowId, rowData}) {

        let updatedRows = rows.map((row) => {
            if (row.rowId === rowId) {
                row.rowData = rowData;
            }
            return row
        })

        setRows(updatedRows);
        props.onChange && props.onChange(updatedRows);
    }, [rows]);

    const onRowAdd = useCallback(function ({rowId}) {
        let insertNewRowAfterId = rowId;
        let updatedRows = [];

        for (let row of rows) {
            updatedRows.push(row)
            if (row.rowId === insertNewRowAfterId) {
                let rowId = `row-${nextRowId()}`
                let rowData = {input: "", output: ""};
                updatedRows.push({rowId, rowData})
            }
        }
        setRows(updatedRows);
        props.onChange && props.onChange(updatedRows);
    }, [rows])

    const onRowRemove = useCallback(function ({rowId}) {
        let deleteRowAtId = rowId;
        let updatedRows = rows.filter((row) => row.rowId !== deleteRowAtId);
        setRows(updatedRows);
        props.onChange && props.onChange(updatedRows);
    }, [rows])

    useEffect(() => {
        if (rows.length === 0) {
            let rowId = `${props.id}-row-${nextRowId()}`
            let rowData = {input: "", output: ""};
            setRows([{rowId, rowData}])
        }
    }, [rows]);


    return (<Box style={{width: "95%", margin: 0}} >
        <Box style={{width: "100%", margin: 0, marginTop: 20}}>
            <Typography style={{color: "rgb(101 101 101)"}} align={"left"}
                        variant={"caption"}>{props.label}</Typography>
        </Box>

        <Box style={{width: "100%", height: 150, overflow: "auto", margin: 0, marginTop: 5, ...(props.style || {})}}>

            <List key={props.label} style={{padding: 0, marginTop: 5}}>
                {rows.map((row) => <LookupTableRow
                    key={`${row.rowId}-tr`}
                    rowId={row.rowId}
                    rowData={row.rowData}
                    onAdd={onRowAdd}
                    onRemove={onRowRemove}
                    onChange={onRowChange}
                />)}
            </List>

        </Box>
    </Box>);
}

export default LookupTable;
