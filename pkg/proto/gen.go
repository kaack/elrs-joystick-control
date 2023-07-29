// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package proto

//go:generate protoc  -I ../third-party --proto_path=. --go_out=generated/pb --go-grpc_out=generated/pb  --go_opt=paths=source_relative --go-grpc_opt=paths=source_relative server.proto
