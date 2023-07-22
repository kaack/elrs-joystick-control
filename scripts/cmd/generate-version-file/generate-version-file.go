// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package main

import (
	"bufio"
	"encoding/json"
	"errors"
	"flag"
	"fmt"
	"github.com/go-git/go-git/v5"
	"github.com/go-git/go-git/v5/plumbing"
	"github.com/go-git/go-git/v5/plumbing/storer"
	"io"
	"os"
	"path/filepath"
	"regexp"
)

type VersionInfo struct {
	ReleaseTag string `json:"release_tag"`
	CommitHash string `json:"commit_hash"`
	BranchName string `json:"branch_name"`
}

func getCommitTags(r *git.Repository, hash plumbing.Hash) ([]string, error) {
	var iter storer.ReferenceIter
	var err error

	if iter, err = r.Tags(); err != nil {
		return nil, err
	}

	var ref *plumbing.Reference
	var tags []string
	for {
		if ref, err = iter.Next(); errors.Is(err, io.EOF) {
			break
		} else if err != nil {
			return nil, err
		}

		if ref.Hash() != hash {
			continue
		}

		tags = append(tags, ref.Name().Short())

	}
	return tags, nil
}

func getHeadTags(repoPath string) ([]string, error) {
	var repo *git.Repository
	var err error
	if repo, err = git.PlainOpen(repoPath); err != nil {
		return nil, err
	}

	var hashCommit *plumbing.Reference
	if hashCommit, err = repo.Head(); err != nil {
		return nil, err
	}

	return getCommitTags(repo, hashCommit.Hash())
}

func getReleaseTag(repoPath string, defaultTag string) (string, error) {
	var tags []string
	var err error

	if tags, err = getHeadTags(repoPath); err != nil {
		return "", err
	}

	var ok bool
	for _, tag := range tags {
		if ok, err = regexp.MatchString(`^v\d+\.\d+\.\d+`, tag); err != nil {
			return "", err
		} else if ok {
			return tag, nil
		}
	}

	return defaultTag, nil
}

func getCommitHash(repoPath string) (string, error) {
	var repo *git.Repository
	var err error
	if repo, err = git.PlainOpen(repoPath); err != nil {
		return "", err
	}

	var hashCommit *plumbing.Reference
	if hashCommit, err = repo.Head(); err != nil {
		return "", err
	}

	return hashCommit.Hash().String(), nil
}

func getBranchName(repoPath string) (string, error) {
	var repo *git.Repository
	var err error
	if repo, err = git.PlainOpen(repoPath); err != nil {
		return "", err
	}

	var head *plumbing.Reference
	if head, err = repo.Head(); err != nil {
		return "", err
	}

	return head.Name().Short(), nil

}

//goland:noinspection GoUnhandledErrorResult
func createVersionFile(location string, versionInfo VersionInfo) error {
	var err error
	var file *os.File

	if file, err = os.Create(filepath.Join(location, "version.json")); err != nil {
		return err
	}
	defer file.Close()

	writer := bufio.NewWriter(file)

	var jsonData []byte
	if jsonData, err = json.MarshalIndent(versionInfo, "", "  "); err != nil {
		panic(err)
	}

	writer.Write(jsonData)
	writer.Flush()

	return nil
}

func main() {
	var outputDir string
	var repoPath string

	flag.StringVar(&repoPath, "repo", ".", "Path containing .git")
	flag.StringVar(&outputDir, "location", ".", "Output file directory")

	flag.Parse()

	var err error
	var info os.FileInfo

	if info, err = os.Stat(outputDir); err != nil || !info.IsDir() {
		panic(errors.New(fmt.Sprintf("output directory %s does not exist\n", outputDir)))
	}

	var releaseTag string
	var commitHash string
	var branchName string

	if releaseTag, err = getReleaseTag(repoPath, "(devel)"); err != nil {
		panic(err)
	}
	if commitHash, err = getCommitHash(repoPath); err != nil {
		panic(err)
	}
	if branchName, err = getBranchName(repoPath); err != nil {
		panic(err)
	}

	version := VersionInfo{
		ReleaseTag: releaseTag,
		CommitHash: commitHash,
		BranchName: branchName,
	}

	if err = createVersionFile(outputDir, version); err != nil {
		panic(err)
	}

	return
}
