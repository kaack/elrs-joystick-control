// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import * as React from "react";

function fuelPercent(input) {

    if (isNaN(input) || typeof input !== "number") {
        return 0
    }
    return Math.min(Math.max(input, 0),100) * 2.0;
}

function batteryVoltage(input) {
    if (isNaN(input) || typeof input !== "number") {
        return 0
    }

    let value = Math.min(Math.max(input, 0),99);
    return `${value.toFixed(2).padStart(5, "0")}\u2009V`
}

// font used for text is Alte DIN
export default function FuelIndicatorInstrument(props){
    return <svg
        viewBox="9 9 235 235"
        xmlns="http://www.w3.org/2000/svg"
        style={{
            height: "100px",
            borderRadius: "50%",
            ...props.style
        }}

    >
        <defs>
            {/*<bx:guide x={126.438} y={126.636} angle={90} />*/}
            {/*<bx:guide x={126.438} y={126.636} angle={0} />*/}
            {/*<bx:guide x={35.858} y={48.09} angle={90} />*/}
            {/*<bx:guide x={126.374} y={50.141} angle={90} />*/}
            {/*<bx:guide x={-47.224} y={145.229} angle={90} />*/}
            {/*<bx:guide x={-33.397} y={89.897} angle={90} />*/}
            <filter
                id="inner-shadow-filter-0"
                colorInterpolationFilters="sRGB"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
            >
                <feOffset dx={0} dy={0}/>
                <feGaussianBlur stdDeviation={0}/>
                <feComposite operator="out" in="SourceGraphic"/>
                <feComponentTransfer result="choke">
                    <feFuncA type="linear" slope={0.44}/>
                </feComponentTransfer>
                <feFlood floodColor="rgba(0,0,0,0.7)" result="color"/>
                <feComposite operator="in" in="color" in2="choke" result="shadow"/>
                <feComposite operator="over" in="shadow" in2="SourceGraphic"/>
            </filter>
        </defs>
        <g
            transform="matrix(2.49995, 0, 0, 2.518968, 76.475182, 76.554203)"
            style={{
                transformOrigin: "50.0248px 49.9458px",
            }}
        >
            <title>{"fuel-gauge"}</title>
            <g
                transform="matrix(0.999732971191, 0, 0, 0.99198693037, 0.014624562114, -0.031918466091)"
                style={{
                    transformOrigin: "50px 50px",
                }}
            >
                <title>{"background"}</title>
                <ellipse
                    cx={50}
                    cy={50}
                    rx={46}
                    ry={46}
                    style={{
                        stroke: "rgb(110, 110, 110)",
                        strokeWidth: 2,
                        pointerEvents: "none",
                        fill: "rgb(58, 58, 58)",
                    }}
                >
                    <title>{"outer-ring"}</title>
                </ellipse>
                <g>
                    <title>{"fuel-gauge"}</title>
                    <ellipse
                        cx={50}
                        cy={50}
                        rx={40.797}
                        ry={40.797}
                        style={{
                            strokeWidth: 2,
                            pointerEvents: "none",
                            stroke: "rgba(110, 110, 110, 0)",
                            fill: "rgb(44, 44, 44)",
                        }}
                    >
                        <title>{"background"}</title>
                    </ellipse>
                    <g
                        transform="matrix(0, -1.0002, 0.9998, 0, -0.000002, -0.000004)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"270"}</title>
                        <polyline
                            points="49.985 16.556 49.985 13.764 49.985 9.204"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"tick"}</title>
                        </polyline>
                    </g>
                    <g
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"0"}</title>
                        <polyline
                            points="49.985 16.556 49.985 13.764 49.985 9.204"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"tick"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0, 1.0002, -0.9998, 0, 0, -0.000003)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"90"}</title>
                        <polyline
                            points="49.985 16.556 49.985 13.764 49.985 9.204"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"tick"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0.5, 0.866198, -0.865853, 0.5, -0.000003, -0.000003)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"6"}</title>
                        <polyline
                            points="49.985 16.556 49.985 13.764 49.985 9.204"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"tick"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0.866025, 0.5001, -0.4999, 0.866025, -0.000002, -0.000001)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"3"}</title>
                        <polyline
                            points="49.985 16.556 49.985 13.764 49.985 9.204"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"tick"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0.5, -0.866198, 0.865853, 0.5, 0.000002, 0.000001)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"30"}</title>
                        <polyline
                            points="49.985 16.556 49.985 13.764 49.985 9.204"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"tick"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0.866025, -0.5001, 0.4999, 0.866025, 0.000001, 0.000001)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"33"}</title>
                        <polyline
                            points="49.985 16.556 49.985 13.764 49.985 9.204"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"tick"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0.984808, 0.173683, -0.173614, 0.984808, 0, 0)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"10"}</title>
                        <polyline
                            points="49.985 16.556 49.985 13.764 49.985 9.204"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"10"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0.939693, 0.342088, -0.341952, 0.939693, -0.000002, 0)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"20"}</title>
                        <polyline
                            points="49.985 16.556 49.985 13.764 49.985 9.204"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"20"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0.766044, 0.642916, -0.642659, 0.766044, -0.000003, -0.000001)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"40"}</title>
                        <polyline
                            points="49.985 16.556 49.985 13.764 49.985 9.204"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"40"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0.642788, 0.766197, -0.765891, 0.642788, -0.000003, -0.000002)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"50"}</title>
                        <polyline
                            points="49.985 16.556 49.985 13.764 49.985 9.204"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"50"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0.34202, 0.93988, -0.939506, 0.34202, -0.000004, -0.000002)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"70"}</title>
                        <polyline
                            points="49.985 16.556 49.985 13.764 49.985 9.204"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"70"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0.173648, 0.985004, -0.984611, 0.173648, -0.000004, -0.000004)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"80"}</title>
                        <polyline
                            points="49.985 16.556 49.985 13.764 49.985 9.204"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"80"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(-0.173648, 0.985005, -0.984611, -0.173648, -0.000005, -0.000004)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"100"}</title>
                        <polyline
                            points="49.985 16.556 49.985 13.764 49.985 9.204"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"100"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(-0.173648, -0.985004, 0.984611, -0.173648, 0.000002, -0.000005)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"260"}</title>
                        <polyline
                            points="49.985 16.556 49.985 13.764 49.985 9.204"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"260"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0.173648, -0.985004, 0.984611, 0.173648, 0.000003, -0.000004)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"280"}</title>
                        <polyline
                            points="49.985 16.556 49.985 13.764 49.985 9.204"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"280"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0.34202, -0.93988, 0.939505, 0.34202, 0.000003, -0.000003)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"290"}</title>
                        <polyline
                            points="49.985 16.556 49.985 13.764 49.985 9.204"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"290"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0.642788, -0.766197, 0.765891, 0.642788, 0.000002, -0.000002)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"310"}</title>
                        <polyline
                            points="49.985 16.556 49.985 13.764 49.985 9.204"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"310"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0.766044, -0.642916, 0.642659, 0.766044, 0.000002, -0.000001)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"320"}</title>
                        <polyline
                            points="49.985 16.556 49.985 13.764 49.985 9.204"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"320"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0.939693, -0.342088, 0.341952, 0.939693, 0.000003, 0.000002)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"340"}</title>
                        <polyline
                            points="49.985 16.556 49.985 13.764 49.985 9.204"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"340"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0.984808, -0.173683, 0.173614, 0.984808, 0.000001, 0.000001)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"350"}</title>
                        <polyline
                            points="49.985 16.556 49.985 13.764 49.985 9.204"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"350"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0.996195, 0.087173, -0.087138, 0.996195, 0, 0)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"5"}</title>
                        <polyline
                            points="49.98500061035156 13.763999938964844 49.98500061035156 9.204000473022461"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"tick"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0.965926, 0.258871, -0.258768, 0.965926, 0, -0.000001)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"15"}</title>
                        <polyline
                            points="49.98500061035156 13.763999938964844 49.98500061035156 9.204000473022461"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"tick"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0.906308, 0.422703, -0.422534, 0.906308, 0, -0.000002)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"25"}</title>
                        <polyline
                            points="49.98500061035156 13.763999938964844 49.98500061035156 9.204000473022461"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"tick"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0.819152, 0.573691, -0.573462, 0.819152, -0.000004, 0.00001)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"35"}</title>
                        <polyline
                            points="49.98500061035156 13.763999938964844 49.98500061035156 9.204000473022461"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"tick"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0.707107, 0.707248, -0.706966, 0.707107, -0.000006, 0.000013)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"45"}</title>
                        <polyline
                            points="49.98500061035156 13.763999938964844 49.98500061035156 9.204000473022461"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"tick"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0.573577, 0.819316, -0.818988, 0.573577, -0.000008, 0.000014)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"55"}</title>
                        <polyline
                            points="49.98500061035156 13.763999938964844 49.98500061035156 9.204000473022461"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"tick"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0.422618, 0.906489, -0.906127, 0.422618, -0.000011, 0.000016)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"65"}</title>
                        <polyline
                            points="49.98500061035156 13.763999938964844 49.98500061035156 9.204000473022461"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"tick"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0.258819, 0.966119, -0.965733, 0.258819, -0.000014, 0.000017)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"75"}</title>
                        <polyline
                            points="49.98500061035156 13.763999938964844 49.98500061035156 9.204000473022461"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"tick"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0.087156, 0.996394, -0.995996, 0.087156, -0.000017, 0.000017)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"85"}</title>
                        <polyline
                            points="49.98500061035156 13.763999938964844 49.98500061035156 9.204000473022461"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"tick"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(-0.087156, 0.996394, -0.995996, -0.087156, -0.00002, 0.000017)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"95"}</title>
                        <polyline
                            points="49.98500061035156 13.763999938964844 49.98500061035156 9.204000473022461"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"tick"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(-0.087156, -0.996394, 0.995996, -0.087156, -0.000019, -0.000019)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"265"}</title>
                        <polyline
                            points="49.98500061035156 13.763999938964844 49.98500061035156 9.204000473022461"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"tick"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0.087156, -0.996394, 0.995996, 0.087156, -0.000016, -0.000019)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"275"}</title>
                        <polyline
                            points="49.98500061035156 13.763999938964844 49.98500061035156 9.204000473022461"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"tick"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0.258819, -0.966119, 0.965733, 0.258819, -0.000013, -0.000018)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"285"}</title>
                        <polyline
                            points="49.98500061035156 13.763999938964844 49.98500061035156 9.204000473022461"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"tick"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0.422618, -0.906489, 0.906127, 0.422618, -0.00001, -0.000017)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"295"}</title>
                        <polyline
                            points="49.98500061035156 13.763999938964844 49.98500061035156 9.204000473022461"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"tick"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0.573577, -0.819316, 0.818988, 0.573577, -0.000007, -0.000015)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"305"}</title>
                        <polyline
                            points="49.98500061035156 13.763999938964844 49.98500061035156 9.204000473022461"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"tick"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0.707107, -0.707248, 0.706966, 0.707107, -0.000005, -0.000013)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"315"}</title>
                        <polyline
                            points="49.98500061035156 13.763999938964844 49.98500061035156 9.204000473022461"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"tick"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0.819152, -0.573691, 0.573462, 0.819152, -0.000003, -0.00001)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"325"}</title>
                        <polyline
                            points="49.98500061035156 13.763999938964844 49.98500061035156 9.204000473022461"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"tick"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0.906308, -0.422703, 0.422534, 0.906308, -0.000001, -0.000008)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"335"}</title>
                        <polyline
                            points="49.98500061035156 13.763999938964844 49.98500061035156 9.204000473022461"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"tick"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0.965926, -0.258871, 0.258768, 0.965927, -0.000004, -0.000005)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"345"}</title>
                        <polyline
                            points="49.98500061035156 13.763999938964844 49.98500061035156 9.204000473022461"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"tick"}</title>
                        </polyline>
                    </g>
                    <g
                        transform="matrix(0.996195, -0.087173, 0.087138, 0.996195, 0, -0.000002)"
                        style={{
                            transformOrigin: "49.985px 50.032px",
                        }}
                    >
                        <title>{"355"}</title>
                        <polyline
                            points="49.98500061035156 13.763999938964844 49.98500061035156 9.204000473022461"
                            style={{
                                fill: "rgb(216, 216, 216)",
                                stroke: "rgb(255, 255, 255)",
                                transformOrigin: "50.016px 50.032px",
                                strokeWidth: "1.20046px",
                            }}
                        >
                            <title>{"tick"}</title>
                        </polyline>
                    </g>
                    <g>
                        <title>{"label 100"}</title>
                        <path
                            d="M 70.806 51.712 L 70.806 57.394 L 70.009 57.394 L 70.009 52.579 L 69.2 53.076 L 69.2 52.251 L 70.009 51.712 L 70.806 51.712 Z"
                            style={{
                                fill: "rgb(255, 245, 245)",
                                whiteSpace: "pre",
                                transformBox: "fill-box",
                                transformOrigin: "50% 50%",
                            }}
                        />
                        <path
                            d="M 73.936 57.453 C 73.394 57.453 72.988 57.308 72.718 57.017 C 72.449 56.727 72.314 56.334 72.314 55.839 L 72.314 53.256 C 72.314 52.753 72.451 52.358 72.724 52.071 C 72.998 51.785 73.402 51.642 73.936 51.642 C 74.472 51.642 74.877 51.784 75.149 52.069 C 75.421 52.355 75.557 52.75 75.557 53.256 L 75.557 55.839 C 75.557 56.342 75.421 56.736 75.149 57.023 C 74.877 57.31 74.472 57.453 73.936 57.453 Z M 73.936 56.695 C 74.227 56.695 74.438 56.619 74.567 56.466 C 74.696 56.314 74.76 56.105 74.76 55.839 L 74.76 53.256 C 74.76 52.987 74.696 52.777 74.567 52.626 C 74.438 52.475 74.227 52.4 73.936 52.4 C 73.644 52.4 73.433 52.475 73.304 52.626 C 73.176 52.777 73.111 52.987 73.111 53.256 L 73.111 55.839 C 73.111 56.105 73.176 56.314 73.304 56.466 C 73.433 56.619 73.644 56.695 73.936 56.695 Z"
                            style={{
                                fill: "rgb(255, 245, 245)",
                                whiteSpace: "pre",
                                transformBox: "fill-box",
                                transformOrigin: "50% 50%",
                            }}
                        />
                        <path
                            d="M 78.417 57.453 C 77.875 57.453 77.47 57.308 77.2 57.017 C 76.93 56.727 76.796 56.334 76.796 55.839 L 76.796 53.256 C 76.796 52.753 76.932 52.358 77.206 52.071 C 77.479 51.785 77.883 51.642 78.417 51.642 C 78.954 51.642 79.358 51.784 79.63 52.069 C 79.903 52.355 80.039 52.75 80.039 53.256 L 80.039 55.839 C 80.039 56.342 79.903 56.736 79.63 57.023 C 79.358 57.31 78.954 57.453 78.417 57.453 Z M 78.417 56.695 C 78.709 56.695 78.919 56.619 79.048 56.466 C 79.177 56.314 79.242 56.105 79.242 55.839 L 79.242 53.256 C 79.242 52.987 79.177 52.777 79.048 52.626 C 78.919 52.475 78.709 52.4 78.417 52.4 C 78.125 52.4 77.915 52.475 77.786 52.626 C 77.657 52.777 77.593 52.987 77.593 53.256 L 77.593 55.839 C 77.593 56.105 77.657 56.314 77.786 56.466 C 77.915 56.619 78.125 56.695 78.417 56.695 Z"
                            style={{
                                fill: "rgb(255, 245, 245)",
                                whiteSpace: "pre",
                                transformBox: "fill-box",
                                transformOrigin: "50% 50%",
                            }}
                        />
                    </g>
                    <g>
                        <title>{"label 0"}</title>
                        <path
                            d="M 21.791 57.449 C 21.249 57.449 20.844 57.304 20.574 57.014 C 20.305 56.723 20.17 56.33 20.17 55.835 L 20.17 53.252 C 20.17 52.749 20.306 52.354 20.58 52.068 C 20.853 51.781 21.257 51.638 21.791 51.638 C 22.328 51.638 22.732 51.78 23.004 52.066 C 23.277 52.351 23.413 52.746 23.413 53.252 L 23.413 55.835 C 23.413 56.338 23.277 56.733 23.004 57.019 C 22.732 57.306 22.328 57.449 21.791 57.449 Z M 21.791 56.691 C 22.083 56.691 22.293 56.615 22.422 56.462 C 22.551 56.31 22.616 56.101 22.616 55.835 L 22.616 53.252 C 22.616 52.984 22.551 52.774 22.422 52.623 C 22.293 52.472 22.083 52.396 21.791 52.396 C 21.499 52.396 21.289 52.472 21.16 52.623 C 21.031 52.774 20.967 52.984 20.967 53.252 L 20.967 55.835 C 20.967 56.101 21.031 56.31 21.16 56.462 C 21.289 56.615 21.499 56.691 21.791 56.691 Z"
                            style={{
                                fill: "rgb(255, 245, 245)",
                                whiteSpace: "pre",
                                transformBox: "fill-box",
                                transformOrigin: "50% 50%",
                            }}
                        />
                    </g>
                    <g>
                        <title>{"label 50"}</title>
                        <path
                            d="M 47.716 24.392 C 47.284 24.392 46.929 24.267 46.651 24.019 C 46.374 23.77 46.2 23.419 46.13 22.965 L 46.13 22.961 L 46.927 22.961 L 46.927 22.965 C 46.956 23.174 47.039 23.336 47.177 23.452 C 47.315 23.568 47.495 23.626 47.716 23.626 C 47.971 23.626 48.169 23.541 48.308 23.37 C 48.447 23.199 48.517 22.959 48.517 22.649 L 48.517 22.172 C 48.517 21.862 48.447 21.622 48.308 21.453 C 48.169 21.284 47.971 21.199 47.716 21.199 C 47.578 21.199 47.445 21.238 47.318 21.316 C 47.19 21.394 47.078 21.504 46.982 21.644 L 46.255 21.644 L 46.255 18.651 L 49.15 18.651 L 49.15 19.409 L 47.052 19.409 L 47.052 20.687 C 47.151 20.606 47.262 20.544 47.384 20.499 C 47.506 20.455 47.632 20.433 47.759 20.433 C 48.254 20.433 48.637 20.585 48.908 20.888 C 49.179 21.192 49.314 21.62 49.314 22.172 L 49.314 22.649 C 49.314 23.204 49.175 23.633 48.896 23.937 C 48.618 24.24 48.224 24.392 47.716 24.392 Z"
                            style={{
                                fill: "rgb(255, 245, 245)",
                                whiteSpace: "pre",
                                transformBox: "fill-box",
                                transformOrigin: "50% 50%",
                            }}
                        />
                        <path
                            d="M 52.327 24.392 C 51.785 24.392 51.379 24.247 51.11 23.956 C 50.84 23.666 50.705 23.273 50.705 22.778 L 50.705 20.195 C 50.705 19.692 50.842 19.297 51.116 19.01 C 51.389 18.724 51.793 18.58 52.327 18.58 C 52.864 18.58 53.268 18.723 53.54 19.008 C 53.812 19.294 53.948 19.689 53.948 20.195 L 53.948 22.778 C 53.948 23.281 53.812 23.675 53.54 23.962 C 53.268 24.249 52.864 24.392 52.327 24.392 Z M 52.327 23.634 C 52.619 23.634 52.829 23.558 52.958 23.405 C 53.087 23.253 53.151 23.044 53.151 22.778 L 53.151 20.195 C 53.151 19.926 53.087 19.716 52.958 19.565 C 52.829 19.414 52.619 19.339 52.327 19.339 C 52.035 19.339 51.825 19.414 51.696 19.565 C 51.567 19.716 51.502 19.926 51.502 20.195 L 51.502 22.778 C 51.502 23.044 51.567 23.253 51.696 23.405 C 51.825 23.558 52.035 23.634 52.327 23.634 Z"
                            style={{
                                fill: "rgb(255, 245, 245)",
                                whiteSpace: "pre",
                                transformBox: "fill-box",
                                transformOrigin: "50% 50%",
                            }}
                        />
                    </g>
                    <g>
                        <title>{"label 75"}</title>
                        <path
                            d="M 69.776 29.122 L 69.776 29.833 L 68.307 34.804 L 67.459 34.804 L 68.928 29.88 L 67.483 29.88 L 67.483 30.696 L 66.685 30.696 L 66.685 29.122 L 69.776 29.122 Z"
                            style={{
                                fill: "rgb(255, 245, 245)",
                                whiteSpace: "pre",
                                transformBox: "fill-box",
                                transformOrigin: "50% 50%",
                            }}
                        />
                        <path
                            d="M 72.675 34.863 C 72.243 34.863 71.888 34.738 71.61 34.489 C 71.333 34.241 71.159 33.889 71.089 33.436 L 71.089 33.432 L 71.886 33.432 L 71.886 33.436 C 71.914 33.645 71.998 33.807 72.136 33.923 C 72.274 34.039 72.454 34.097 72.675 34.097 C 72.93 34.097 73.128 34.011 73.267 33.841 C 73.406 33.67 73.476 33.43 73.476 33.12 L 73.476 32.643 C 73.476 32.333 73.406 32.093 73.267 31.924 C 73.128 31.754 72.93 31.67 72.675 31.67 C 72.537 31.67 72.404 31.709 72.276 31.787 C 72.149 31.865 72.037 31.975 71.94 32.115 L 71.214 32.115 L 71.214 29.122 L 74.109 29.122 L 74.109 29.88 L 72.011 29.88 L 72.011 31.158 C 72.11 31.077 72.22 31.014 72.343 30.97 C 72.465 30.926 72.59 30.904 72.718 30.904 C 73.213 30.904 73.596 31.055 73.867 31.359 C 74.138 31.663 74.273 32.09 74.273 32.643 L 74.273 33.12 C 74.273 33.675 74.134 34.104 73.855 34.407 C 73.576 34.711 73.183 34.863 72.675 34.863 Z"
                            style={{
                                fill: "rgb(255, 245, 245)",
                                whiteSpace: "pre",
                                transformBox: "fill-box",
                                transformOrigin: "50% 50%",
                            }}
                        />
                    </g>
                    <g>
                        <title>{"label 25"}</title>
                        <path
                            d="M 25.364 35.04 L 25.364 34.349 L 27.345 31.707 C 27.46 31.556 27.549 31.399 27.613 31.238 C 27.677 31.076 27.709 30.924 27.709 30.781 L 27.709 30.773 C 27.709 30.546 27.642 30.37 27.51 30.245 C 27.377 30.12 27.188 30.058 26.943 30.058 C 26.714 30.058 26.527 30.126 26.382 30.263 C 26.238 30.4 26.15 30.593 26.119 30.843 L 26.119 30.847 L 25.294 30.847 L 25.294 30.843 C 25.364 30.353 25.543 29.974 25.829 29.704 C 26.116 29.434 26.485 29.299 26.935 29.299 C 27.446 29.299 27.84 29.428 28.119 29.686 C 28.398 29.944 28.537 30.309 28.537 30.781 L 28.537 30.784 C 28.537 30.985 28.496 31.196 28.412 31.416 C 28.329 31.636 28.213 31.846 28.064 32.047 L 26.419 34.282 L 28.568 34.282 L 28.568 35.04 L 25.364 35.04 Z"
                            style={{
                                fill: "rgb(255, 245, 245)",
                                whiteSpace: "pre",
                                transformBox: "fill-box",
                                transformOrigin: "50% 50%",
                            }}
                        />
                        <path
                            d="M 31.389 35.099 C 30.957 35.099 30.602 34.975 30.324 34.726 C 30.047 34.477 29.873 34.126 29.803 33.673 L 29.803 33.669 L 30.6 33.669 L 30.6 33.673 C 30.629 33.881 30.712 34.043 30.85 34.159 C 30.988 34.275 31.168 34.333 31.389 34.333 C 31.644 34.333 31.842 34.248 31.981 34.077 C 32.121 33.906 32.19 33.666 32.19 33.356 L 32.19 32.879 C 32.19 32.569 32.121 32.33 31.981 32.16 C 31.842 31.991 31.644 31.906 31.389 31.906 C 31.251 31.906 31.118 31.945 30.991 32.023 C 30.863 32.102 30.751 32.211 30.655 32.352 L 29.928 32.352 L 29.928 29.358 L 32.823 29.358 L 32.823 30.116 L 30.725 30.116 L 30.725 31.394 C 30.824 31.313 30.935 31.251 31.057 31.207 C 31.18 31.162 31.305 31.14 31.432 31.14 C 31.927 31.14 32.31 31.292 32.581 31.595 C 32.852 31.899 32.987 32.327 32.987 32.879 L 32.987 33.356 C 32.987 33.911 32.848 34.34 32.569 34.644 C 32.291 34.947 31.897 35.099 31.389 35.099 Z"
                            style={{
                                fill: "rgb(255, 245, 245)",
                                whiteSpace: "pre",
                                transformBox: "fill-box",
                                transformOrigin: "50% 50%",
                            }}
                        />
                    </g>
                    <g>
                        <title>{"label FUEL"}</title>
                        <path
                            d="M 43.23 39.146 L 43.23 34.6 L 43.867 34.6 L 43.867 39.146 L 43.23 39.146 Z M 43.542 37.232 L 43.542 36.625 L 45.746 36.625 L 45.746 37.232 L 43.542 37.232 Z M 43.542 35.206 L 43.542 34.6 L 46.09 34.6 L 46.09 35.206 L 43.542 35.206 Z"
                            style={{
                                fill: "rgb(255, 245, 245)",
                                whiteSpace: "pre",
                                transformBox: "fill-box",
                                transformOrigin: "50% 50%",
                            }}
                        />
                        <path
                            d="M 48.559 39.192 C 48.053 39.192 47.66 39.045 47.382 38.75 C 47.104 38.455 46.965 38.039 46.965 37.501 L 46.965 34.6 L 47.603 34.6 L 47.603 37.523 C 47.603 37.854 47.686 38.111 47.853 38.292 C 48.019 38.473 48.255 38.564 48.559 38.564 C 48.865 38.564 49.102 38.473 49.27 38.292 C 49.438 38.111 49.522 37.854 49.522 37.523 L 49.522 34.6 L 50.159 34.6 L 50.159 37.501 C 50.159 38.039 50.02 38.455 49.741 38.75 C 49.461 39.045 49.067 39.192 48.559 39.192 Z"
                            style={{
                                fill: "rgb(255, 245, 245)",
                                whiteSpace: "pre",
                                transformBox: "fill-box",
                                transformOrigin: "50% 50%",
                            }}
                        />
                        <path
                            d="M 51.383 39.146 L 51.383 34.6 L 52.02 34.6 L 52.02 39.146 L 51.383 39.146 Z M 51.692 39.146 L 51.692 38.539 L 54.302 38.539 L 54.302 39.146 L 51.692 39.146 Z M 51.692 37.191 L 51.692 36.585 L 53.959 36.585 L 53.959 37.191 L 51.692 37.191 Z M 51.692 35.206 L 51.692 34.6 L 54.302 34.6 L 54.302 35.206 L 51.692 35.206 Z"
                            style={{
                                fill: "rgb(255, 245, 245)",
                                whiteSpace: "pre",
                                transformBox: "fill-box",
                                transformOrigin: "50% 50%",
                            }}
                        />
                        <path
                            d="M 55.43 39.146 L 55.43 34.6 L 56.068 34.6 L 56.068 39.146 L 55.43 39.146 Z M 55.749 39.146 L 55.749 38.539 L 58.35 38.539 L 58.35 39.146 L 55.749 39.146 Z"
                            style={{
                                fill: "rgb(255, 245, 245)",
                                whiteSpace: "pre",
                                transformBox: "fill-box",
                                transformOrigin: "50% 50%",
                            }}
                        />
                    </g>
                </g>
            </g>
            <g
                style={{
                    transformOrigin: "50px 50px",
                }}
                transform={`matrix(-0.173648, -0.977372, 0.992299, -0.173648, -0.000012, -0.000009)  rotate(${fuelPercent(props.percent)})`}
            >
                <title>{"needle"}</title>
                <path
                    d="M 47.301 50 L 50 23.26 L 52.699 50"
                    style={{
                        strokeLinejoin: "round",
                        transformBox: "fill-box",
                        transformOrigin: "50% 50%",
                        fill: "rgb(253, 146, 96)",
                        stroke: "rgb(253, 146, 96)",
                        filter: "none",
                    }}
                />
                <ellipse
                    cx={50}
                    cy={50}
                    rx={3.2}
                    ry={3.176}
                    style={{
                        fill: "rgb(218, 218, 218)",
                        stroke: "rgb(210, 210, 210)",
                    }}
                />
            </g>
            <g transform="matrix(1, 0, 0, 1, 0, 3.115976)">
                <title>{"VOLTAGE"}</title>
                <rect
                    x={29.274}
                    y={62.999}
                    width={41.444}
                    height={11.592}
                    style={{
                        fill: "rgb(58, 58, 58)",
                        stroke: "rgb(46, 46, 46)",
                        filter: "url(#inner-shadow-filter-0)",
                    }}
                />
                <text
                    transform="matrix(0.147423, 0, 0, 0.14631, 52.816467, 72.261276)"
                    style={{
                        fill: "rgb(255, 245, 245)",
                        fontFamily: "Bahnschrift",
                        fontSize: "67.8334px",
                        letterSpacing: "1.5px",
                        textAnchor: "middle",
                        whiteSpace: "pre",
                    }}
                >
                    <title>{"VOLTAGE"}</title>
                    <tspan>{batteryVoltage(props.voltage)}</tspan>
                    <tspan x={0} dy="1em">
                        {"\u200B"}
                    </tspan>
                </text>
            </g>
        </g>
    </svg>
};
