// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package main

import (
	"archive/zip"
	"errors"
	"flag"
	"fmt"
	"github.com/go-git/go-git/v5"
	"github.com/go-git/go-git/v5/plumbing"
	"github.com/go-git/go-git/v5/plumbing/storer"
	"google.golang.org/grpc/benchmark/flags"
	"io"
	"os"
	"path/filepath"
	"regexp"
	"runtime"
)

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

func getFilesList(globs []string) ([]string, error) {

	var filesList []string

	var files []string
	filesMap := map[string]bool{} // use a map to de-dup globs
	var ok bool
	var err error
	for _, glob := range globs {
		if files, err = filepath.Glob(glob); err != nil {
			return nil, err
		}
		for _, file := range files {
			if _, ok = filesMap[file]; !ok {
				filesMap[file] = true
				filesList = append(filesList, file)
			}
		}
	}

	return filesList, nil
}

func createZip(outputDir string, fileName string, filesList []string) error {
	outputZipFile := filepath.Join(outputDir, fileName)

	var err error
	var archive *os.File

	if archive, err = os.Create(outputZipFile); err != nil {
		return err
	}

	//goland:noinspection ALL
	defer archive.Close()
	zipWriter := zip.NewWriter(archive)

	//keep track of all files to close
	var fileHandles []*os.File
	defer (func(handles []*os.File) {
		for _, handle := range fileHandles {
			_ = handle.Close()
		}
	})(fileHandles)

	var file *os.File
	var fileInfo os.FileInfo
	var writer io.Writer
	for _, filePath := range filesList {

		if fileInfo, err = os.Stat(filePath); err != nil {
			return err
		}

		if fileInfo.IsDir() {
			//skip directories
			continue
		}

		if file, err = os.Open(filePath); err != nil {
			return err
		}

		fileHandles = append(fileHandles, file)
		baseName := filepath.Base(filePath)

		if writer, err = zipWriter.Create(baseName); err != nil {
			return err
		}

		if _, err = io.Copy(writer, file); err != nil {
			return err
		}
	}

	_ = zipWriter.Close()

	return nil
}
func main() {

	var outputZipDir string
	var outputZipPrefix string
	var repoPath string

	flag.StringVar(&repoPath, "repo", ".", "Path containing .git")
	flag.StringVar(&outputZipDir, "location", ".", "Output zip file directory")
	flag.StringVar(&outputZipPrefix, "prefix", "release", "Output zip file name prefix")
	globs := flags.StringSlice("files", []string{}, "Application binary")

	flag.Parse()

	var err error
	var info os.FileInfo

	if info, err = os.Stat(outputZipDir); err != nil || !info.IsDir() {
		panic(errors.New(fmt.Sprintf("output directory %s does not exist\n", outputZipDir)))
	}

	var filesList []string
	if filesList, err = getFilesList(*globs); err != nil {
		panic(err)
	}

	var releaseTag string
	if releaseTag, err = getReleaseTag(repoPath, "devel"); err != nil {
		panic(err)
	}

	zipOutputFile := fmt.Sprintf("%s-%s-%s-%s.zip", outputZipPrefix, releaseTag, runtime.GOOS, runtime.GOARCH)

	fmt.Printf("release tag: %s\n", releaseTag)
	fmt.Printf("release file name: %s\n", zipOutputFile)
	fmt.Printf("release file contents: %v", filesList)

	if err = createZip(outputZipDir, zipOutputFile, filesList); err != nil {
		panic(err)
	}

	return
}
