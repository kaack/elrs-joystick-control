// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import (
	_ "embed"
	"errors"
	"fmt"
	"github.com/kaack/elrs-joystick-control/pkg/server/pb"
	js "github.com/santhosh-tekuri/jsonschema/v5"

	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"log"
	"reflect"
	"strings"
	"sync"
)

var (
	//go:embed schema.json
	Schema    string
	_lock     = &sync.Mutex{}
	_typesMap *map[string]reflect.Type
	_schema   *js.Schema
)

func _NewSchema() *js.Schema {
	c := js.NewCompiler()
	c.Draft = js.Draft2020

	if err := c.AddResource("main.json", strings.NewReader(Schema)); err != nil {
		log.Fatal(err)
	}
	res, err := c.Compile("main.json")
	if err != nil {
		log.Fatalf("%#v", err)
	}

	return res
}

func _NewTypesMap() (*map[string]reflect.Type, error) {
	inputTypes := []reflect.Type{
		reflect.TypeOf(InputLinear{}),
		reflect.TypeOf(InputRead{}),
		reflect.TypeOf(InputAnd{}),
		reflect.TypeOf(InputOr{}),
		reflect.TypeOf(InputGt{}),
		reflect.TypeOf(InputGte{}),
		reflect.TypeOf(InputLt{}),
		reflect.TypeOf(InputLte{}),
		reflect.TypeOf(InputEq{}),
		reflect.TypeOf(InputMap{}),
		reflect.TypeOf(InputValue{}),
		reflect.TypeOf(InputCase{}),
		reflect.TypeOf(InputRaw{}),
		reflect.TypeOf(InputSwitch{}),
	}

	var inputTypesMap = make(map[string]reflect.Type)
	for _, t := range inputTypes {
		for i := 0; i < t.NumField(); i++ {
			field := t.Field(i)
			if inputTag := field.Tag.Get("input"); inputTag != "true" {
				continue
			}
			jsonTag := field.Tag.Get("json")
			if jsonTag == "" {
				return nil, errors.New("struct " + t.Name() + " tagged as input is missing the \"json\" tag")
			}
			inputTypesMap[jsonTag] = t
		}
	}

	return &inputTypesMap, nil
}

func getCauses(ve *js.ValidationError) []*pb.ValidationError {
	var vErrors []*pb.ValidationError

	for _, cause := range ve.Causes {
		vErrors = append(vErrors, &pb.ValidationError{
			Message:  cause.Message,
			Location: cause.InstanceLocation,
			Causes:   getCauses(cause),
		})
	}

	return vErrors
}

func SchemaErrorToDetailsProto(err error) *pb.ValidationErrors {
	fmt.Printf("%#v\n", err)

	vErrors := pb.ValidationErrors{}

	switch ve := err.(type) {
	case *js.ValidationError:
		for _, cause := range ve.Causes {
			leafVe := cause
			//for len(leafVe.Causes) > 0 {
			//	leafVe = leafVe.Causes[0]
			//}
			vErrors.Errors = append(vErrors.Errors, &pb.ValidationError{
				Message:  leafVe.Message,
				Location: leafVe.InstanceLocation,
				Causes:   getCauses(cause),
			})
		}
	default:
		vErrors.Errors = append(vErrors.Errors, &pb.ValidationError{
			Message:  err.Error(),
			Location: "",
		})
	}

	return &vErrors
}

func ValidationError(code codes.Code, message string, err error) error {
	st := status.New(code, message)
	details := SchemaErrorToDetailsProto(err)

	vErr, err := st.WithDetails(details)
	if err != nil {
		return err
	}

	return vErr.Err()
}

func GetSchema() *js.Schema {
	if _schema == nil {
		_lock.Lock()
		defer _lock.Unlock()
		if _schema == nil {
			_schema = _NewSchema()
		}
	}

	return _schema
}

func GetTypesMap() (*map[string]reflect.Type, error) {
	if _typesMap == nil {
		_lock.Lock()
		defer _lock.Unlock()
		if _typesMap == nil {
			var err error
			if _typesMap, err = _NewTypesMap(); err != nil {
				return nil, err
			}

		}
	}
	return _typesMap, nil
}
