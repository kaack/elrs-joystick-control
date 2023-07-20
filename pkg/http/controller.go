// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package http

import (
	"errors"
	"fmt"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"github.com/kaack/elrs-joystick-control/webapp"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/ttys3/echo-pprof/v4"

	"google.golang.org/grpc"
	"gopkg.in/tomb.v2"

	"net/http"
)

type Controller struct {
	webAppPort int
	httpTomb   *tomb.Tomb
	echo       *echo.Echo
	gRPCServer *grpc.Server
}

func NewCtl(webAppPort int, gRPCServer *grpc.Server) *Controller {
	httpCtl := &Controller{
		webAppPort: webAppPort,
		gRPCServer: gRPCServer,
	}

	if err := httpCtl.Init(); err != nil {
		panic(err)
	}

	return httpCtl
}

func (c *Controller) Init() (err error) {

	if err = c.Start(); err != nil {
		return errors.Join(errors.New("could not start http server"), err)
	}

	return nil
}

func (c *Controller) NewEcho(err error) (*echo.Echo, error) {
	var httpFS http.FileSystem
	if httpFS, err = webapp.HTTPFileSystem(); err != nil {
		return nil, err
	}

	echoServer := echo.New()

	echoHandler := echoServer
	wrappedGrpc := grpcweb.WrapServer(c.gRPCServer)
	echopprof.Wrap(echoHandler)

	//override server handler to intercept grpc-web requests (content-type: application/grpc-web)
	echoServer.Server = &http.Server{
		Addr: fmt.Sprintf(":%d", c.webAppPort),
		Handler: http.HandlerFunc(func(resp http.ResponseWriter, req *http.Request) {
			resp.Header().Set("Access-Control-Allow-Headers", "*")
			resp.Header().Set("Access-Control-Allow-Origin", "*")

			if wrappedGrpc.IsGrpcWebRequest(req) {
				wrappedGrpc.ServeHTTP(resp, req)
				return
			}

			echoHandler.ServeHTTP(resp, req)
		}),
	}

	echoServer.Use(middleware.StaticWithConfig(middleware.StaticConfig{
		Filesystem: httpFS,
		HTML5:      true,
	}))

	echoServer.HideBanner = true
	return echoServer, nil
}

func (c *Controller) Start() (err error) {
	if c.httpTomb != nil && c.httpTomb.Alive() {
		return errors.New("http already started")
	}

	c.echo, err = c.NewEcho(err)
	if err != nil {
		return err
	}

	c.httpTomb = &tomb.Tomb{}
	c.httpTomb.Go(func() error {

		fmt.Printf("⇨ http server started on [::]%s\n", c.echo.Server.Addr)
		if err := c.echo.Server.ListenAndServe(); err != http.ErrServerClosed {
			fmt.Println("(http): server halted forcefully")
			return err
		}

		fmt.Println("(http): server halted gracefully")
		return nil
	})

	c.httpTomb.Go(func() error {
		<-c.httpTomb.Dying()
		if err := c.echo.Shutdown(nil); err != nil {
			return err
		}
		return nil
	})

	return nil
}

func (c *Controller) Stop() (err error) {
	if c.httpTomb == nil || !c.httpTomb.Alive() {
		return errors.New("http is not started")
	}

	c.httpTomb.Kill(nil)
	if err := c.httpTomb.Wait(); err != nil {
		return err
	}
	return nil
}

func (c *Controller) Quit() {
	if err := c.Stop(); err != nil {
		fmt.Printf("error while exiting http controller. %s\n", err.Error())
	}
}
