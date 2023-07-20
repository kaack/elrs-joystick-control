// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

export const getEdgeId = (edge) => {
    return `${edge.source}_${edge.sourceHandleId}-${edge.target}_${edge.targetHandleId}`
}