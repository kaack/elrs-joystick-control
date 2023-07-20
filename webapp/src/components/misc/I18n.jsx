// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import en from "../../i18n/en.yaml"

export default function i18n(id) {
    //FIXME: detect language, and use correct strings file
    return en.strings[id] || "";
}