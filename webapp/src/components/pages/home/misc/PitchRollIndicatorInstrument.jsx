// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import * as React from "react";
const PitchRollIndicatorInstrument = (props) => (
    <svg
        viewBox="9 9 235 235"
        xmlns="http://www.w3.org/2000/svg"
        style={{
            height: "100px",
            borderRadius: "50%",
            ...props.style
        }}

    >
        <defs>
            <linearGradient
                gradientUnits="userSpaceOnUse"
                x1={45.767}
                y1={0.472}
                x2={45.767}
                y2={51.668}
                id="gradient-1"
                spreadMethod="pad"
                gradientTransform="matrix(-0.999951, 0.028041, -0.00888, -2.515573, 92.89959, 47.106943)"
            >
                <stop
                    offset={0}
                    style={{
                        stopColor: "rgb(60, 129, 198)",
                    }}
                />
                <stop
                    offset={1}
                    style={{
                        stopColor: "rgb(35, 78, 121)",
                    }}
                />
            </linearGradient>
            <linearGradient
                gradientUnits="userSpaceOnUse"
                x1={-45.809}
                y1={-101.278}
                x2={-45.809}
                y2={-51.554}
                id="gradient-0"
                gradientTransform="matrix(-0.99994, -0.030311, 0.008223, -2.067299, -91.838425, -298.41202)"
            >
                <stop
                    offset={0}
                    style={{
                        stopColor: "rgb(206, 206, 206)",
                    }}
                />
                <stop
                    offset={1}
                    style={{
                        stopColor: "rgb(155, 155, 155)",
                    }}
                />
            </linearGradient>
            <filter
                id="drop-shadow-filter-0"
                colorInterpolationFilters="sRGB"
                x="-500%"
                y="-500%"
                width="1000%"
                height="1000%"
            >
                <feGaussianBlur in="SourceAlpha" stdDeviation={4} />
                <feOffset dx={0} dy={0} />
                <feComponentTransfer result="offsetblur">
                    <feFuncA id="spread-ctrl" type="linear" slope={2} />
                </feComponentTransfer>
                <feFlood floodColor="rgba(0,0,0,0.3)" />
                <feComposite in2="offsetblur" operator="in" />
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
            {/*<bx:guide x={126.438} y={126.636} angle={90} />*/}
            {/*<bx:guide x={126.438} y={126.636} angle={0} />*/}
            {/*<bx:guide x={-42.904} y={66.994} angle={90} />*/}
            {/*<bx:guide x={137.78} y={49.359} angle={0} />*/}
        </defs>
        <g
            transform={`matrix(2.49995, 0, 0, 2.518968, 76.475182, 76.554203) rotate(${props.roll || 0})`}
            style={{
                transformOrigin: "50.0248px 49.9458px",
            }}
        >
            <title>{"pitch-roll"}</title>
            <g
                transform={`matrix(1, 0, 0, 1, 3.41385, -1.028793) translate(0 ${props.pitch * 0.6 || 0})`}
                style={{}}
            >
                <title>{"pitch"}</title>
                <g>
                    <title>{"strip"}</title>
                    <g
                        transform={`matrix(0.690287, 0, 0, 0.904181, 14.6665, 4.538143)`}
                        style={{
                            pointerEvents: "none",
                        }}
                    >
                        <rect
                            y={-93.737}
                            width={100.135}
                            height={145.405}
                            x={-4.301}
                            style={{
                                stroke: "rgb(0, 0, 0)",
                                strokeWidth: 0,
                                fill: "url(#gradient-1)",
                                pointerEvents: "none",
                            }}
                        />
                        <rect
                            y={-189.867}
                            width={100.405}
                            height={138.313}
                            x={-96.011}
                            transform="matrix(-1, 0, 0, -1, 0, 0)"
                            style={{
                                stroke: "rgb(0, 0, 0)",
                                strokeWidth: 0,
                                fill: "url(#gradient-0)",
                                pointerEvents: "none",
                            }}
                        />
                    </g>
                    <g
                        transform="matrix(1, 0, 0, 1, -1.373666, -0.56804)"
                        style={{
                            pointerEvents: "none",
                        }}
                    >
                        <g
                            transform="matrix(0.999927, -0.011955, 0.012137, 0.999927, 0.857179, -0.026148)"
                            style={{
                                transformOrigin: "47.1695px 41.553px",
                            }}
                        >
                            <line
                                x1={36.561}
                                y1={33.828}
                                x2={57.778}
                                y2={34.12}
                                style={{
                                    fill: "rgb(216, 216, 216)",
                                    stroke: "rgb(255, 255, 255)",
                                    strokeWidth: "1.49585px",
                                }}
                            />
                            <line
                                x1={41.614}
                                y1={46.018}
                                x2={52.519}
                                y2={46.168}
                                style={{
                                    fill: "rgb(216, 216, 216)",
                                    stroke: "rgb(255, 255, 255)",
                                    strokeWidth: "1.49585px",
                                }}
                            />
                            <line
                                x1={39.049}
                                y1={39.904}
                                x2={55.084}
                                y2={40.126}
                                style={{
                                    fill: "rgb(216, 216, 216)",
                                    stroke: "rgb(255, 255, 255)",
                                    strokeWidth: "1.49585px",
                                }}
                            />
                            <line
                                x1={45.306}
                                y1={43.08}
                                x2={48.827}
                                y2={43.128}
                                style={{
                                    fill: "rgb(216, 216, 216)",
                                    stroke: "rgb(255, 255, 255)",
                                    strokeWidth: "1.49585px",
                                }}
                            />
                            <line
                                x1={45.306}
                                y1={49.23}
                                x2={48.827}
                                y2={49.278}
                                style={{
                                    fill: "rgb(216, 216, 216)",
                                    stroke: "rgb(255, 255, 255)",
                                    strokeWidth: "1.49585px",
                                }}
                            />
                            <line
                                x1={45.306}
                                y1={36.97}
                                x2={48.827}
                                y2={37.018}
                                style={{
                                    fill: "rgb(216, 216, 216)",
                                    stroke: "rgb(255, 255, 255)",
                                    strokeWidth: "1.49585px",
                                }}
                            />
                            <line
                                x1={36.561}
                                y1={33.828}
                                x2={57.778}
                                y2={34.12}
                                style={{
                                    fill: "rgb(216, 216, 216)",
                                    stroke: "rgb(255, 255, 255)",
                                    strokeWidth: "1.49585px",
                                }}
                            />
                        </g>
                        <path
                            d="M 12.695 0 L 8.114 0 L 8.114 -17.655 L 2.647 -15.959 L 2.647 -19.684 L 12.203 -23.107 L 12.695 -23.107 Z M 35.673 -9.541 Q 35.673 -4.755 33.692 -2.219 Q 31.71 0.317 27.891 0.317 Q 24.119 0.317 22.122 -2.171 Q 20.125 -4.659 20.078 -9.303 L 20.078 -13.55 Q 20.078 -18.384 22.083 -20.888 Q 24.087 -23.392 27.859 -23.392 Q 31.631 -23.392 33.628 -20.912 Q 35.625 -18.432 35.673 -13.788 Z M 31.092 -14.2 Q 31.092 -17.069 30.308 -18.376 Q 29.523 -19.684 27.859 -19.684 Q 26.243 -19.684 25.474 -18.44 Q 24.706 -17.196 24.658 -14.549 L 24.658 -8.938 Q 24.658 -6.117 25.427 -4.747 Q 26.195 -3.376 27.891 -3.376 Q 29.571 -3.376 30.316 -4.691 Q 31.061 -6.007 31.092 -8.717 Z"
                            transform="matrix(0.147586, 0, 0, 0.146772, 53.825882, 47.794666)"
                            style={{
                                fill: "rgb(255, 255, 255)",
                                whiteSpace: "pre",
                            }}
                        />
                        <path
                            d="M 17.386 0 L 1.569 0 L 1.569 -3.138 L 9.034 -11.094 Q 10.571 -12.774 11.308 -14.026 Q 12.045 -15.278 12.045 -16.403 Q 12.045 -17.94 11.268 -18.82 Q 10.492 -19.7 9.049 -19.7 Q 7.496 -19.7 6.601 -18.63 Q 5.705 -17.56 5.705 -15.817 L 1.109 -15.817 Q 1.109 -17.925 2.116 -19.668 Q 3.122 -21.411 4.961 -22.402 Q 6.799 -23.392 9.129 -23.392 Q 12.695 -23.392 14.668 -21.681 Q 16.641 -19.969 16.641 -16.847 Q 16.641 -15.135 15.753 -13.36 Q 14.866 -11.585 12.71 -9.224 L 7.465 -3.693 L 17.386 -3.693 Z M 35.673 -9.541 Q 35.673 -4.755 33.692 -2.219 Q 31.71 0.317 27.891 0.317 Q 24.119 0.317 22.122 -2.171 Q 20.125 -4.659 20.078 -9.303 L 20.078 -13.55 Q 20.078 -18.384 22.083 -20.888 Q 24.087 -23.392 27.859 -23.392 Q 31.631 -23.392 33.628 -20.912 Q 35.625 -18.432 35.673 -13.788 Z M 31.092 -14.2 Q 31.092 -17.069 30.308 -18.376 Q 29.523 -19.684 27.859 -19.684 Q 26.243 -19.684 25.474 -18.44 Q 24.706 -17.196 24.658 -14.549 L 24.658 -8.938 Q 24.658 -6.117 25.427 -4.747 Q 26.195 -3.376 27.891 -3.376 Q 29.571 -3.376 30.316 -4.691 Q 31.061 -6.007 31.092 -8.717 Z"
                            transform="matrix(0.147586, 0, 0, 0.146772, 56.430511, 41.544983)"
                            style={{
                                fill: "rgb(255, 255, 255)",
                                whiteSpace: "pre",
                            }}
                        />
                        <path
                            d="M 6.228 -13.566 L 8.669 -13.566 Q 10.412 -13.566 11.252 -14.438 Q 12.092 -15.31 12.092 -16.752 Q 12.092 -18.146 11.26 -18.923 Q 10.428 -19.7 8.97 -19.7 Q 7.655 -19.7 6.767 -18.978 Q 5.88 -18.257 5.88 -17.1 L 1.3 -17.1 Q 1.3 -18.907 2.274 -20.341 Q 3.249 -21.776 5 -22.584 Q 6.751 -23.392 8.859 -23.392 Q 12.52 -23.392 14.596 -21.641 Q 16.673 -19.89 16.673 -16.815 Q 16.673 -15.23 15.706 -13.899 Q 14.739 -12.568 13.17 -11.855 Q 15.119 -11.157 16.078 -9.763 Q 17.037 -8.368 17.037 -6.466 Q 17.037 -3.392 14.794 -1.537 Q 12.552 0.317 8.859 0.317 Q 5.404 0.317 3.209 -1.506 Q 1.014 -3.328 1.014 -6.324 L 5.594 -6.324 Q 5.594 -5.024 6.569 -4.2 Q 7.544 -3.376 8.97 -3.376 Q 10.603 -3.376 11.53 -4.239 Q 12.457 -5.103 12.457 -6.53 Q 12.457 -9.984 8.653 -9.984 L 6.228 -9.984 Z M 35.673 -9.541 Q 35.673 -4.755 33.692 -2.219 Q 31.71 0.317 27.891 0.317 Q 24.119 0.317 22.122 -2.171 Q 20.125 -4.659 20.078 -9.303 L 20.078 -13.55 Q 20.078 -18.384 22.083 -20.888 Q 24.087 -23.392 27.859 -23.392 Q 31.631 -23.392 33.628 -20.912 Q 35.625 -18.432 35.673 -13.788 Z M 31.092 -14.2 Q 31.092 -17.069 30.308 -18.376 Q 29.523 -19.684 27.859 -19.684 Q 26.243 -19.684 25.474 -18.44 Q 24.706 -17.196 24.658 -14.549 L 24.658 -8.938 Q 24.658 -6.117 25.427 -4.747 Q 26.195 -3.376 27.891 -3.376 Q 29.571 -3.376 30.316 -4.691 Q 31.061 -6.007 31.092 -8.717 Z"
                            transform="matrix(0.147586, 0, 0, 0.146772, 59.511814, 35.990814)"
                            style={{
                                fill: "rgb(255, 255, 255)",
                                whiteSpace: "pre",
                            }}
                        />
                        <g
                            transform="matrix(0.999914, 0.013005, 0.013202, -0.999914, 0.696557, 20.389517)"
                            style={{
                                transformOrigin: "47.1695px 41.553px",
                            }}
                        >
                            <line
                                x1={36.561}
                                y1={33.828}
                                x2={57.778}
                                y2={34.12}
                                style={{
                                    fill: "rgb(216, 216, 216)",
                                    strokeWidth: "1.49585px",
                                    stroke: "rgb(110, 110, 110)",
                                }}
                            />
                            <line
                                x1={41.614}
                                y1={46.018}
                                x2={52.519}
                                y2={46.168}
                                style={{
                                    fill: "rgb(216, 216, 216)",
                                    strokeWidth: "1.49585px",
                                    stroke: "rgb(110, 110, 110)",
                                }}
                            />
                            <line
                                x1={39.049}
                                y1={39.904}
                                x2={55.084}
                                y2={40.126}
                                style={{
                                    fill: "rgb(216, 216, 216)",
                                    strokeWidth: "1.49585px",
                                    stroke: "rgb(110, 110, 110)",
                                }}
                            />
                            <line
                                x1={45.306}
                                y1={43.08}
                                x2={48.827}
                                y2={43.128}
                                style={{
                                    fill: "rgb(216, 216, 216)",
                                    strokeWidth: "1.49585px",
                                    stroke: "rgb(110, 110, 110)",
                                }}
                            />
                            <line
                                x1={45.306}
                                y1={49.23}
                                x2={48.827}
                                y2={49.278}
                                style={{
                                    fill: "rgb(216, 216, 216)",
                                    strokeWidth: "1.49585px",
                                    stroke: "rgb(110, 110, 110)",
                                }}
                            />
                            <line
                                x1={45.306}
                                y1={36.97}
                                x2={48.827}
                                y2={37.018}
                                style={{
                                    fill: "rgb(216, 216, 216)",
                                    strokeWidth: "1.49585px",
                                    stroke: "rgb(110, 110, 110)",
                                }}
                            />
                        </g>
                        <path
                            d="M 12.695 0 L 8.114 0 L 8.114 -17.655 L 2.647 -15.959 L 2.647 -19.684 L 12.203 -23.107 L 12.695 -23.107 Z M 35.673 -9.541 Q 35.673 -4.755 33.692 -2.219 Q 31.71 0.317 27.891 0.317 Q 24.119 0.317 22.122 -2.171 Q 20.125 -4.659 20.078 -9.303 L 20.078 -13.55 Q 20.078 -18.384 22.083 -20.888 Q 24.087 -23.392 27.859 -23.392 Q 31.631 -23.392 33.628 -20.912 Q 35.625 -18.432 35.673 -13.788 Z M 31.092 -14.2 Q 31.092 -17.069 30.308 -18.376 Q 29.523 -19.684 27.859 -19.684 Q 26.243 -19.684 25.474 -18.44 Q 24.706 -17.196 24.658 -14.549 L 24.658 -8.938 Q 24.658 -6.117 25.427 -4.747 Q 26.195 -3.376 27.891 -3.376 Q 29.571 -3.376 30.316 -4.691 Q 31.061 -6.007 31.092 -8.717 Z"
                            transform="matrix(0.147586, 0, 0, 0.146772, 53.227348, 59.058018)"
                            style={{
                                fill: "rgb(110, 110, 110)",
                                whiteSpace: "pre",
                            }}
                        />
                        <path
                            d="M 17.386 0 L 1.569 0 L 1.569 -3.138 L 9.034 -11.094 Q 10.571 -12.774 11.308 -14.026 Q 12.045 -15.278 12.045 -16.403 Q 12.045 -17.94 11.268 -18.82 Q 10.492 -19.7 9.049 -19.7 Q 7.496 -19.7 6.601 -18.63 Q 5.705 -17.56 5.705 -15.817 L 1.109 -15.817 Q 1.109 -17.925 2.116 -19.668 Q 3.122 -21.411 4.961 -22.402 Q 6.799 -23.392 9.129 -23.392 Q 12.695 -23.392 14.668 -21.681 Q 16.641 -19.969 16.641 -16.847 Q 16.641 -15.135 15.753 -13.36 Q 14.866 -11.585 12.71 -9.224 L 7.465 -3.693 L 17.386 -3.693 Z M 35.673 -9.541 Q 35.673 -4.755 33.692 -2.219 Q 31.71 0.317 27.891 0.317 Q 24.119 0.317 22.122 -2.171 Q 20.125 -4.659 20.078 -9.303 L 20.078 -13.55 Q 20.078 -18.384 22.083 -20.888 Q 24.087 -23.392 27.859 -23.392 Q 31.631 -23.392 33.628 -20.912 Q 35.625 -18.432 35.673 -13.788 Z M 31.092 -14.2 Q 31.092 -17.069 30.308 -18.376 Q 29.523 -19.684 27.859 -19.684 Q 26.243 -19.684 25.474 -18.44 Q 24.706 -17.196 24.658 -14.549 L 24.658 -8.938 Q 24.658 -6.117 25.427 -4.747 Q 26.195 -3.376 27.891 -3.376 Q 29.571 -3.376 30.316 -4.691 Q 31.061 -6.007 31.092 -8.717 Z"
                            transform="matrix(0.147586, 0, 0, 0.146772, 56.422474, 65.069595)"
                            style={{
                                fill: "rgb(110, 110, 110)",
                                whiteSpace: "pre",
                            }}
                        />
                        <path
                            d="M 6.228 -13.566 L 8.669 -13.566 Q 10.412 -13.566 11.252 -14.438 Q 12.092 -15.31 12.092 -16.752 Q 12.092 -18.146 11.26 -18.923 Q 10.428 -19.7 8.97 -19.7 Q 7.655 -19.7 6.767 -18.978 Q 5.88 -18.257 5.88 -17.1 L 1.3 -17.1 Q 1.3 -18.907 2.274 -20.341 Q 3.249 -21.776 5 -22.584 Q 6.751 -23.392 8.859 -23.392 Q 12.52 -23.392 14.596 -21.641 Q 16.673 -19.89 16.673 -16.815 Q 16.673 -15.23 15.706 -13.899 Q 14.739 -12.568 13.17 -11.855 Q 15.119 -11.157 16.078 -9.763 Q 17.037 -8.368 17.037 -6.466 Q 17.037 -3.392 14.794 -1.537 Q 12.552 0.317 8.859 0.317 Q 5.404 0.317 3.209 -1.506 Q 1.014 -3.328 1.014 -6.324 L 5.594 -6.324 Q 5.594 -5.024 6.569 -4.2 Q 7.544 -3.376 8.97 -3.376 Q 10.603 -3.376 11.53 -4.239 Q 12.457 -5.103 12.457 -6.53 Q 12.457 -9.984 8.653 -9.984 L 6.228 -9.984 Z M 35.673 -9.541 Q 35.673 -4.755 33.692 -2.219 Q 31.71 0.317 27.891 0.317 Q 24.119 0.317 22.122 -2.171 Q 20.125 -4.659 20.078 -9.303 L 20.078 -13.55 Q 20.078 -18.384 22.083 -20.888 Q 24.087 -23.392 27.859 -23.392 Q 31.631 -23.392 33.628 -20.912 Q 35.625 -18.432 35.673 -13.788 Z M 31.092 -14.2 Q 31.092 -17.069 30.308 -18.376 Q 29.523 -19.684 27.859 -19.684 Q 26.243 -19.684 25.474 -18.44 Q 24.706 -17.196 24.658 -14.549 L 24.658 -8.938 Q 24.658 -6.117 25.427 -4.747 Q 26.195 -3.376 27.891 -3.376 Q 29.571 -3.376 30.316 -4.691 Q 31.061 -6.007 31.092 -8.717 Z"
                            transform="matrix(0.147586, 0, 0, 0.146772, 59.221119, 70.942886)"
                            style={{
                                fill: "rgb(110, 110, 110)",
                                whiteSpace: "pre",
                            }}
                        />
                    </g>
                </g>
            </g>
            <g
                style={{
                    transformOrigin: "50.0102px 49.9775px",
                }}
                transform="matrix(0.999733, 0, 0, 0.991987, 0.014622, -0.031738)"
            >
                <title>{"roll"}</title>
                <g
                    transform="matrix(0.400008, 0, 0, 0.396988, -0.576265, -0.273121)"
                    style={{}}
                >
                    <title>{"mini-plane"}</title>
                    <path
                        style={{
                            fill: "rgba(216,216,216,0)",
                            stroke: "rgb(253, 146, 96)",
                            strokeWidth: 4,
                        }}
                        d="M 115.091 131.428 L 115.1 126.636 L 71.488 126.638"
                    >
                        <title>{"wing-left"}</title>
                    </path>
                    <path
                        style={{
                            fill: "rgba(216,216,216,0)",
                            stroke: "rgb(253, 146, 96)",
                            strokeWidth: 4,
                        }}
                        d="M 137.775 131.428 L 137.78 126.636 L 181.235 126.636"
                    >
                        <title>{"wing-right"}</title>
                    </path>
                </g>
                <g style={{}}>
                    <title>{"dial"}</title>
                    <ellipse
                        cx={-50}
                        cy={-50}
                        rx={38}
                        ry={38}
                        transform="matrix(-1, 0, 0, -1, 0, 0)"
                        style={{
                            strokeWidth: 16,
                            fill: "rgba(255, 255, 255, 0)",
                            strokeDasharray: 120,
                            stroke: "rgb(60, 130, 198)",
                            pointerEvents: "none",
                        }}
                    >
                        <title>{"sky"}</title>
                    </ellipse>
                    <ellipse
                        cx={50}
                        cy={50}
                        rx={38}
                        ry={38}
                        style={{
                            strokeWidth: 16,
                            fill: "rgba(255, 255, 255, 0)",
                            strokeDasharray: 120,
                            stroke: "rgb(206, 206, 206)",
                            pointerEvents: "none",
                        }}
                    >
                        <title>{"ground"}</title>
                    </ellipse>
                    <line
                        x1={50.121}
                        y1={4.025}
                        x2={50.121}
                        y2={4.025}
                        style={{
                            fill: "rgb(216, 216, 216)",
                            stroke: "rgb(110, 110, 110)",
                            pointerEvents: "none",
                        }}
                    />
                    <path
                        d="M 54.637 4.594 C 54.637 4.594 53.185 4.276 49.421 4.234 C 45.56 4.192 45.373 4.657 45.373 4.657 L 49.978 19.259 L 54.637 4.594 Z"
                        style={{
                            strokeLinejoin: "bevel",
                            strokeWidth: 2,
                            fill: "rgb(255, 255, 255)",
                            stroke: "rgb(255, 255, 255)",
                            transformBox: "fill-box",
                            transformOrigin: "50% 50%",
                        }}
                    >
                        <title>{"chevron-0"}</title>
                    </path>
                    <polyline
                        style={{
                            fill: "rgb(216, 216, 216)",
                            stroke: "rgb(255, 255, 255)",
                            strokeWidth: "1.79322px",
                            transformOrigin: "49.992px 50.003px",
                        }}
                        points="39.707000732421875 21.952999114990234 37.7239990234375 16.54400062561035"
                    >
                        <title>{"tick-m20"}</title>
                    </polyline>
                    <polyline
                        style={{
                            fill: "rgb(216, 216, 216)",
                            stroke: "rgb(255, 255, 255)",
                            strokeWidth: "2.19171px",
                            transformOrigin: "49.992px 50.003px",
                        }}
                        points="34.95600128173828 24.150999069213867 29.42099952697754 14.633999824523926"
                    >
                        <title>{"tick-m30"}</title>
                    </polyline>
                    <polyline
                        points="79.774 50 96.481 50"
                        style={{
                            fill: "rgb(216, 216, 216)",
                            stroke: "rgb(255, 255, 255)",
                            strokeWidth: 4,
                            pointerEvents: "none",
                            transformBox: "fill-box",
                            transformOrigin: "50% 50%",
                        }}
                    >
                        <title>{"tick90"}</title>
                    </polyline>
                    <polyline
                        points="50 96.605 50 79.868"
                        style={{
                            fill: "rgb(216, 216, 216)",
                            stroke: "rgb(110, 110, 110)",
                            strokeWidth: 3,
                        }}
                    >
                        <title>{"tick180"}</title>
                    </polyline>
                    <polyline
                        points="4.007 50 20.074 50"
                        style={{
                            fill: "rgb(216, 216, 216)",
                            stroke: "rgb(255, 255, 255)",
                            strokeWidth: 4,
                            pointerEvents: "auto",
                        }}
                    >
                        <title>{"tick270"}</title>
                    </polyline>
                    <ellipse
                        cx={50}
                        cy={50}
                        rx={35.674}
                        ry={35.674}
                        style={{
                            fill: "rgba(255, 255, 255, 0)",
                            stroke: "rgb(110, 110, 110)",
                            strokeWidth: 2,
                            filter: "url(#drop-shadow-filter-0)",
                            pointerEvents: "none",
                            visibility: "hidden",
                        }}
                    >
                        <title>{"helper-ring"}</title>
                    </ellipse>
                    <ellipse
                        cx={50}
                        cy={50}
                        rx={40.969}
                        ry={40.969}
                        style={{
                            fill: "rgba(255, 255, 255, 0)",
                            stroke: "rgb(110, 110, 110)",
                            strokeWidth: 2,
                            filter: "url(#drop-shadow-filter-0)",
                            pointerEvents: "none",
                            visibility: "hidden",
                        }}
                    >
                        <title>{"helper-ring"}</title>
                    </ellipse>
                    <polyline
                        style={{
                            fill: "rgb(216, 216, 216)",
                            stroke: "rgb(255, 255, 255)",
                            strokeWidth: "1.79322px",
                            transformOrigin: "49.992px 50.003px",
                        }}
                        points="44.77199935913086 20.60700035095215 43.76499938964844 14.937999725341797"
                    >
                        <title>{"tick-m10"}</title>
                    </polyline>
                    <polyline
                        style={{
                            fill: "rgb(216, 216, 216)",
                            stroke: "rgb(0, 0, 0)",
                            visibility: "hidden",
                            transformOrigin: "49.992px 50.003px",
                        }}
                        points="28.726999282836914 28.895000457763672 24.625999450683594 24.823999404907227"
                    >
                        <title>{"tick-m45"}</title>
                    </polyline>
                    <polyline
                        style={{
                            fill: "rgb(216, 216, 216)",
                            stroke: "rgb(255, 255, 255)",
                            strokeWidth: "2.19171px",
                            transformOrigin: "49.992px 50.003px",
                        }}
                        points="23.945999145507812 35.07600021362305 14.357999801635742 29.58099937438965"
                    >
                        <title>{"tick-m60"}</title>
                    </polyline>
                    <polyline
                        style={{
                            fill: "rgb(216, 216, 216)",
                            stroke: "rgb(255, 255, 255)",
                            strokeWidth: "2.19171px",
                            transformOrigin: "49.992px 50.003px",
                        }}
                        points="85.63099670410156 29.586999893188477 76.04100036621094 35.08000183105469"
                    >
                        <title>{"tick-p60"}</title>
                    </polyline>
                    <polyline
                        style={{
                            fill: "rgb(216, 216, 216)",
                            stroke: "rgb(0, 0, 0)",
                            visibility: "hidden",
                            transformOrigin: "49.992px 50.003px",
                        }}
                        points="75.412 24.779 71.29 28.869"
                    >
                        <title>{"tick-p45"}</title>
                    </polyline>
                    <polyline
                        style={{
                            fill: "rgb(216, 216, 216)",
                            stroke: "rgb(255, 255, 255)",
                            strokeWidth: "1.79322px",
                            transformOrigin: "49.992px 50.003px",
                        }}
                        points="56.22600173950195 14.937999725341797 55.21799850463867 20.606000900268555"
                    >
                        <title>{"tick-p10"}</title>
                    </polyline>
                    <polyline
                        style={{
                            fill: "rgb(216, 216, 216)",
                            stroke: "rgb(255, 255, 255)",
                            strokeWidth: "1.79322px",
                            transformOrigin: "49.992px 50.003px",
                        }}
                        points="62.290000915527344 16.481000900268555 60.29600143432617 21.91699981689453"
                    >
                        <title>{"tick-p20"}</title>
                    </polyline>
                    <polyline
                        style={{
                            fill: "rgb(216, 216, 216)",
                            stroke: "rgb(255, 255, 255)",
                            strokeWidth: "2.19171px",
                            transformOrigin: "49.992px 50.003px",
                        }}
                        points="70.56999969482422 14.63700008392334 65.03299713134766 24.152999877929688"
                    >
                        <title>{"tick-p30"}</title>
                    </polyline>
                    <polygon
                        style={{
                            fill: "rgb(255, 255, 255)",
                            stroke: "rgba(255, 253, 253, 0)",
                            transformOrigin: "25.513px 25.677px",
                        }}
                        points="22.878 28.309 25.537 23.045 28.147 25.659"
                        transform="matrix(0, -0.99245, 1.007607, 0, 0.000003, 0.000001)"
                    >
                        <title>{"chevron-m45"}</title>
                    </polygon>
                    <polygon
                        style={{
                            fill: "rgb(255, 255, 255)",
                            stroke: "rgba(255, 253, 253, 0)",
                            transformOrigin: "74.372px 25.801px",
                        }}
                        points="71.737 28.433 74.396 23.169 77.006 25.783"
                    >
                        <title>{"chevron-p45"}</title>
                    </polygon>
                    <ellipse
                        cx={50}
                        cy={50}
                        rx={46}
                        ry={46}
                        style={{
                            fill: "rgba(255, 255, 255, 0)",
                            stroke: "rgb(110, 110, 110)",
                            strokeWidth: 2,
                            pointerEvents: "none",
                        }}
                    >
                        <title>{"outer-ring"}</title>
                    </ellipse>
                    <ellipse
                        cx={50}
                        cy={50}
                        rx={30}
                        ry={30}
                        style={{
                            fill: "rgba(255, 255, 255, 0)",
                            stroke: "rgb(110, 110, 110)",
                            strokeWidth: 2,
                            filter: "url(#drop-shadow-filter-0)",
                            pointerEvents: "none",
                        }}
                    >
                        <title>{"inner-ring"}</title>
                    </ellipse>
                    <ellipse
                        cx={50}
                        cy={50}
                        rx={30}
                        ry={30}
                        style={{
                            fill: "rgba(255, 255, 255, 0)",
                            stroke: "rgb(110, 110, 110)",
                            strokeWidth: 2,
                            filter: "url(#drop-shadow-filter-0)",
                            pointerEvents: "none",
                        }}
                    >
                        <title>{"inner-ring"}</title>
                    </ellipse>
                </g>
            </g>
        </g>
        <polygon
            style={{
                stroke: "rgb(253, 146, 96)",
                strokeLinecap: "round",
                strokeLinejoin: "miter",
                strokeWidth: 4,
                fill: "rgb(253, 146, 96)",
            }}
            points="120.071 66.994 126.438 53.582 133.378 66.994"
        >
            <title>{"roll-chevron"}</title>
        </polygon>
        <polyline
            style={{
                fill: "rgb(216, 216, 216)",
                stroke: "rgb(253, 146, 96)",
                strokeWidth: 4,
            }}
            points="123.60399627685547 126.63600158691406 126.43800354003906 126.63600158691406 128.56500244140625 126.63600158691406"
        >
            <title>{"pitch-dot"}</title>
        </polyline>
    </svg>
);
export default PitchRollIndicatorInstrument;
