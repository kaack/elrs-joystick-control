// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package webapp

import (
	"embed"
	"io/fs"
	"net/http"
)

//go:embed dist/*

var Fs embed.FS

func HTTPFileSystem() (_ http.FileSystem, err error) {
	var distFS fs.FS
	if distFS, err = fs.Sub(Fs, "dist"); err != nil {
		return nil, err
	}

	return http.FS(distFS), nil
}
