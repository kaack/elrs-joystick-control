// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

export class NodeConfigError extends Error {
    nodeId = null;
    constructor(nodeId, message) {
        super(message);
        this.name = "NodeConfigError";
        this.nodeId = nodeId
    }
}

NodeConfigError.prototype.toString = function() {
    return this.message;
}

export class NodeSchemaError extends Error {
    nodeId = null;
    constructor(nodeId, location, message) {
        super(message);
        this.name = "NodeSchemaError";
        this.nodeId = nodeId;
        this.location = location;
    }
}

NodeSchemaError.prototype.toString = function() {
    if (this.location) {
        return `${this.location} - ${this.message}`;
    }

    return `${this.message}`;
}


export class Warning extends Error {
    constructor(message) {
        super(message);
    }
}



