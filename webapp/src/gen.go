// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package webapp

//go:generate protoc   --proto_path=../../pkg/third-party/google/rpc status.proto --js_out=import_style=commonjs,binary:generated/google/rpc/ --grpc-web_out=import_style=commonjs,mode=grpcwebtext:generated/google/rpc
//go:generate protoc   --proto_path=../../pkg/proto  server.proto --js_out=import_style=commonjs,binary:generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:generated
