// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@mui/material/IconButton";
import HomeIcon from '@mui/icons-material/Home';
import InputsConfigPage from "./components/pages/InputsConfigPage";
import {useCallback} from "react";
import GenericPage from "./components/pages/misc/GenericPage";
import SettingsPage from "./components/pages/SettingsPage";
import HomePage from "./components/pages/HomePage";
import GamepadsPage from "./components/pages/GamepadsPage";
import TransmittersPage from "./components/pages/TransmittersPage";
import ExpressLRSSettingsPage from "./components/pages/ExpressLRSSettingsPage";
import {SnackbarProvider} from "notistack";
import {NotificationMessages} from "./components/misc/notifications";
import AboutPage from "./components/pages/AboutPage";
import "@fontsource/roboto";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";


//disable control A/F
window.onkeydown = function (key) {
    if (key.ctrlKey === true && (key.code === "KeyF" || key.code === "KeyA")) {
        key.preventDefault()
    }
};
export default function App() {
    const [open, setOpen] = React.useState(false);
    const [activePanel, setActivePanel] = React.useState("home");


    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(open)
    };

    const MenuItem = useCallback(({id, label, icon}) => {
        return <ListItem style={{padding: 0, margin: 0}} key={id} disablePadding>
            <ListItemButton selected={activePanel === id} onClick={() => setActivePanel(id)}>
                <ListItemIcon style={{minWidth: 40}}>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={label}/>
            </ListItemButton>
        </ListItem>
    }, [])

    return (<SnackbarProvider anchorOrigin={{vertical: "top", horizontal: "center"}} style={{fontFamily: "roboto"}}
                              preventDuplicate={true}>
        <div style={{position: "fixed", top: 0, right: 0, bottom: 0, left: 0, minWidth: 300}}>
            <React.Fragment key={"left-menu"}>
                <IconButton onClick={toggleDrawer(true)} style={{position: "absolute", left: 3, top: 3, zIndex: 1}}>
                    <MenuIcon style={{width: 28, height: 28}}/>
                </IconButton>
                <Drawer
                    open={open}
                    onClose={toggleDrawer(false)}
                >
                    <Box
                        sx={{width: 250}}
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                    >
                        <List style={{padding: 0, margin: 0}}>
                            <MenuItem key={HomePage.id} id={HomePage.id} label={HomePage.title} icon={<HomeIcon/>}/>
                            <Divider/>
                            <MenuItem key={ExpressLRSSettingsPage.id} id={ExpressLRSSettingsPage.id} label={ExpressLRSSettingsPage.title}
                                      icon={ExpressLRSSettingsPage.menuIcon}/>
                            <MenuItem key={TransmittersPage.id} id={TransmittersPage.id} label={TransmittersPage.title}
                                      icon={TransmittersPage.menuIcon}/>
                            <MenuItem key={GamepadsPage.id} id={GamepadsPage.id} label={GamepadsPage.title}
                                      icon={GamepadsPage.menuIcon}/>
                            <MenuItem key={InputsConfigPage.id} id={InputsConfigPage.id} label={InputsConfigPage.title}
                                      icon={InputsConfigPage.menuIcon}/>
                            <Divider/>
                            <MenuItem key={SettingsPage.id} id={SettingsPage.id} label={SettingsPage.title}
                                      icon={SettingsPage.menuIcon}/>
                            <MenuItem key={AboutPage.id} id={AboutPage.id} label={AboutPage.title}
                                      icon={AboutPage.menuIcon}/>
                        </List>
                    </Box>
                </Drawer>
                <NotificationMessages key={"notifications"}/>
            </React.Fragment>
            {(() => {
                switch (activePanel) {
                    case HomePage.id:
                        return <GenericPage title={HomePage.title} containerStyle={{overflowY: "hidden"}}>
                            <HomePage/>
                        </GenericPage>;
                    case InputsConfigPage.id:
                        return <InputsConfigPage/>;
                    case SettingsPage.id:
                        return <GenericPage title={SettingsPage.title}>
                            <SettingsPage/>
                        </GenericPage>;
                    case GamepadsPage.id:
                        return <GenericPage title={GamepadsPage.title}>
                            <GamepadsPage/>
                        </GenericPage>
                    case TransmittersPage.id:
                        return <GenericPage title={TransmittersPage.title}>
                            <TransmittersPage/>
                        </GenericPage>;
                    case ExpressLRSSettingsPage.id:
                        return <GenericPage title={ExpressLRSSettingsPage.title}>
                            <ExpressLRSSettingsPage/>
                        </GenericPage>;
                    case AboutPage.id:
                        return <GenericPage title={AboutPage.title}>
                            <AboutPage/>
                        </GenericPage>;
                }
            })()}
        </div>
    </SnackbarProvider>);
}