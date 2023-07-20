// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import {Handle, Position} from 'reactflow';
import React, {useState} from 'react';
import {HandleLabel} from "./HandleLabel";
import {Cond1Handle, getHandleFieldLabel} from "./util";

export function LeftSideConditionHandle({node, handleId, fieldName, props, style}) {
    const [showLabel, setShowLabel] = useState(false);

    return (<>
        <Handle
            {...props}
            type="target"
            id={handleId || Cond1Handle}
            position={Position.Left}
            isConnectable={node.isConnectable}
            onMouseEnter={() => setShowLabel(true)}
            onMouseLeave={() => setShowLabel(false)}
            style={{
                position: 'fixed',
                left: '-8.5px',
                backgroundPosition: '-1px -1px',
                bottom: '15%',
                width: '19px',
                height: '19px',
                borderWidth: '0px',
                margin: 'auto',
                borderRadius: '11px',
                backgroundColor: '#ffffff00',
                backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3c?xml version='1.0' encoding='utf-8'?%3e%3csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M 7.094 6.947 L 24.731 6.947 L 24.731 24.947 L 7.094 24.947 L 7.094 6.947 Z' style='stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255); paint-order: fill; stroke-width: 0px;' transform='matrix(0.704543, 0.709661, -0.709661, 0.704543, 16.018421, -6.580832)'/%3e%3cpath fill='%23656565' d='m8 16l8-8l8 8l-8 8z'/%3e%3cpath fill='%23656565' d='M29.39 14.527L17.474 2.609a2.085 2.085 0 0 0-2.946 0L2.609 14.527a2.085 2.085 0 0 0 0 2.946l11.918 11.918a2.085 2.085 0 0 0 2.946 0l11.918-11.918a2.085 2.085 0 0 0 0-2.946ZM16 28.036L3.965 16L16 3.964L28.036 16Z'/%3e%3c/svg%3e\")",
                backgroundSize: '21px 21px',
                ...style
            }}
        >
                <HandleLabel style={{top: 20}} show={showLabel} label={getHandleFieldLabel(node.type, fieldName)}/>
        </Handle>
    </>)

}