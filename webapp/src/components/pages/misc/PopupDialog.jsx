// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {styled} from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const StyledDialog = styled(Dialog)(({theme}) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    }, '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function StyledDialogTitle(props) {
    const {children, onClose, ...other} = props;

    return (<DialogTitle sx={{m: 0, p: "14px"}} {...other}>
        {children}
        {onClose && (<IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
                position: 'absolute', right: 12, top: "10px", color: (theme) => theme.palette.grey[500],
            }}
        >
            <CloseIcon/>
        </IconButton>)}
    </DialogTitle>);
}

StyledDialogTitle.propTypes = {
    children: PropTypes.node, onClose: PropTypes.func.isRequired,
};

export default function PopupDialog({title, open, onClose, children, style, contentStyle}) {

    const handleClose = useCallback(function () {
        onClose && onClose()
    }, [])

    return (<StyledDialog
        PaperProps={{
            style: {
                borderRadius: 10,
                ...style
            }
        }}
        fullWidth={true}
        maxWidth={"sm"}
        onClose={() => handleClose()}
        aria-labelledby={`${title}-dialog-title`}
        open={open}
    >
        <StyledDialogTitle style={{
            paddingLeft: 25,
            paddingRight: 45,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            color: "#656565"

        }} id={`${title}-dialog-title`} onClose={() => handleClose()}>
            {title}
        </StyledDialogTitle>
        <DialogContent style={{paddingLeft: 25, paddingRight: 25, paddingBottom: 25, ...contentStyle}}>
            {children}
        </DialogContent>
    </StyledDialog>);
}

