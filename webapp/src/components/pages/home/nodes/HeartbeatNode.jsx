// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import React, {Component, useEffect, useRef, useState} from 'react';

import {GenericTelemetryNode} from "./GenericTelemetryNode";
import {Sparklines} from 'react-sparklines';

import {SyncData} from "../../../../pbwrap";
import {SparklinesLine} from "react-sparklines/src/Sparklines";
import Box from "@mui/material/Box";
import HeartbeatIcon from "../../../icons/HeartBeatIcon";
import {TelemetryIcon} from "../misc/TelemetryIcon";
import {randomPlusOrMinus} from "../../../misc/util";

class SparkErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    // noinspection JSUnusedLocalSymbols
    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    componentDidCatch(error, info) {
        console.error(error, info.componentStack);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }

        return this.props.children;
    }
}

const Spark = function ({dataRef, limit, width, height}) {
    const [chart, setChart] = useState(null)

    const internalData = React.useRef([]);
    const internalSize = React.useRef(0)

    useEffect(function () {
        dataRef.current = internalData.current;
    }, []);

    const requestRef = useRef()

    // noinspection JSUnusedLocalSymbols
    const animate = (time) => {
        if (internalSize.current === internalData.current.length) {
            internalData.current.push(0);
        }

        if (internalData.current.length > limit) {
            internalData.current.shift();
        }

        internalSize.current = internalData.current.length;

        try {
            setChart(<Sparklines max={8000} min={-8000} data={internalData.current} width={width} height={height}
                                 svgWidth={width} svgHeight={height} limit={limit}>
                <SparklinesLine color="#6e6e6e" style={{fill: "none"}}/>
            </Sparklines>)

            // noinspection JSValidateTypes
            requestRef.current = requestAnimationFrame(animate);
        } catch (ex) {
            console.error("could not render sparkline. " + ex.message, ex);
            // noinspection JSValidateTypes
            requestRef.current = requestAnimationFrame(animate);
        }
    }

    useEffect(() => {
        // noinspection JSValidateTypes
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, []); // Make sure the effect runs only once

    return <SparkErrorBoundary fallback={"..."}>{chart}</SparkErrorBoundary>
}

let limit = 50;

function HeartbeatNode(node) {

    const dataRef = useRef();
    const onValueChange = function (data) {
        if (data instanceof SyncData) {
            if (dataRef?.current?.length < limit + 1) {
                let value = data.getOffset() * randomPlusOrMinus();
                dataRef?.current?.push(value);
            }

        }
    }

    console.log("rendering heartbeat");
    return (<GenericTelemetryNode
        node={node}
        showValue={false}
        showIcon={false}
        selectedStyle={{borderRadius: "5px", paddingRight: "2px", width: "unset", height: "unset"}}
        unSelectedStyle={{borderRadius: "5px", paddingRight: "2px", width: "unset", height: "unset"}}
        onValueChange={onValueChange}
    >

        <Box style={{
            display: 'flex',
            alignContent: 'center',
            flexDirection: 'row',
            width: '50px',
            overflow: 'hidden',
            alignItems: 'center'
        }}>
            <TelemetryIcon style={{width: 14, height: 14}} node={node}/>
            <Spark dataRef={dataRef} width={50} height={12} limit={limit}/>
        </Box>


    </GenericTelemetryNode>);
}

HeartbeatNode.type = "beats_chart";
HeartbeatNode.menuIcon = <HeartbeatIcon/>


export default HeartbeatNode;
