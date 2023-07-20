// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

let knownIds = new Set();
let nextNodeId = 0;

//find the node with the highest id, and use that
export function initIdSystem(nds) {
    if (!nds || nds.length === 0) {
        return
    }

    for (let node of nds) {
        knownIds.add(node.id)
    }

    return nds
}

export function getNextNodeId() {
    nextNodeId += 1;
    while(knownIds.has(`${nextNodeId}`)) {
        nextNodeId += 1;
    }
    return `${nextNodeId}`;
}