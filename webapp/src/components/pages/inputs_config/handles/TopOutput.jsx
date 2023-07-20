// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import {Handle, Position} from 'reactflow';
import React, {useState} from 'react';

import {HandleLabel} from "./HandleLabel";
import {getHandleFieldLabel, Out1Handle} from "./util";

export function TopOutput({node, fieldName, props}) {
    const [showLabel, setShowLabel] = useState(false);

    return (<Handle
        {...props}
        type="source"
        id={Out1Handle}
        position={Position.Top}
        isConnectable={node.isConnectable}
        onMouseEnter={() => setShowLabel(true)}
        onMouseLeave={() => setShowLabel(false)}
        style={{
            position: "fixed",
            left: "50%",
            backgroundPosition: "-1.5px -1.5px",
            top: "-8px",
            width: "19px",
            height: "19px",
            borderWidth: "0px",
            margin: "auto",
            borderRadius: "11px",
            backgroundColor: "white",
            backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\'  width=\'22px\'  height=\'22px\' viewBox=\'0 0 24 24\' fill=\'%23656565\' %3E%3Cg%3E%3Cpath transform=\'rotate(180 12 12)\' d=\'M12,4c4.41,0,8,3.59,8,8s-3.59,8-8,8s-8-3.59-8-8S7.59,4,12,4 M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10 c5.52,0,10-4.48,10-10C22,6.48,17.52,2,12,2L12,2z M13,12l0-4h-2l0,4H8l4,4l4-4H13z\'/%3E%3C/g%3E%3C/svg%3E")'
        }}
    >
        <HandleLabel style={{top: -20}} show={showLabel} label={getHandleFieldLabel(node.type, fieldName) || "Output value"}  />
    </Handle>)

}