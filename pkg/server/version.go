// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package server

import (
	_ "embed"
	"encoding/json"
	"sync"
)

//go:generate  go run ../../scripts/cmd/generate-version-file/generate-version-file.go --repo ../.. --location  ./generated
//go:embed generated/version.json
var versionJson []byte

type VersionInfo struct {
	ReleaseTag string `json:"release_tag"`
	CommitHash string `json:"commit_hash"`
	BranchName string `json:"branch_name"`
}

var _version *VersionInfo
var _lock = &sync.Mutex{}

func GetVersionInfo() (*VersionInfo, error) {
	if _version == nil {
		_lock.Lock()
		defer _lock.Unlock()
		if _version == nil {
			_version = &VersionInfo{}
			if err := json.Unmarshal(versionJson, _version); err != nil {
				return nil, err
			}
		}
	}
	return _version, nil
}
