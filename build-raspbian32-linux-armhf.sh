#!/usr/bin/env bash

set -e

echo " *** Install git ***"
sudo apt install -y git

echo " *** Install SDL2 dev library *** "
sudo apt install -y libsdl2-dev


echo " *** Download, compile, and install iconv library ***"
curl -sfL -o libiconv.tar.gz https://ftp.gnu.org/pub/gnu/libiconv/libiconv-1.17.tar.gz
mkdir iconv
tar -xzvf libiconv.tar.gz -C iconv --strip-components=1
pushd iconv
./configure --enable-static --disable-shared --prefix=/usr
sudo make install
popd


echo " *** Download and install Go ***"
curl -sfL -o go.tar.gz https://dl.google.com/go/go1.20.7.linux-armv6l.tar.gz
tar -xzvf go.tar.gz
mv go go-sdk
mkdir go


export CC=gcc
export CGO_ENABLED=1
export GOPATH="${PWD}/go"
export GOROOT="${PWD}/go-sdk"
export GOARCH arm
export OOS=linux
export PATH="${PATH}:${PWD}/go-sdk/bin:${PWD}/go/bin"


echo "*** Grab latest webapp from github-page branch ***"
git checkout -b github-page origin/github-page
tar -czvf dist.tar.gz --transform 's/^docs/dist/' docs

echo "*** Switch back to main branch ***"
git checkout main

echo "*** Extract the webapp dist ***"
tar -xzvf dist.tar.gz -C webapp

echo "*** Generate version file ***"
go generate pkg/server/version.go

echo "*** Compile binary ***"
go build -tags static -trimpath --ldflags '-s -w' -o elrs-joystick-control ./cmd/elrs-joystick-control/.

echo "*** Create distribution zip file ***"
go run scripts/cmd/build-release-zip/build-release-zip.go --location . --prefix elrs-joystick-control --files *-control,LICENSE*
