// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import (
	"bytes"
	_ "embed"
	"encoding/json"
	"errors"
	"fmt"
	"github.com/kaack/elrs-joystick-control/pkg/proto/generated/pb"
	"github.com/kaack/elrs-joystick-control/pkg/util"
	js "github.com/santhosh-tekuri/jsonschema/v5"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"gopkg.in/yaml.v3"
	"io"
	"reflect"
	"strings"
	"sync"
)

var (
	//go:embed schema.yaml
	Schema    string
	_lock     = &sync.Mutex{}
	_typesMap *map[string]reflect.Type
	_schema   *js.Schema
)

func YAMLtoJSON(r io.Reader) ([]byte, error) {
	var v interface{}
	var err error
	var res []byte

	dec := yaml.NewDecoder(r)
	if err = dec.Decode(&v); err != nil {
		return nil, fmt.Errorf("schema file is not valid yaml. %s", err)
	}

	if res, err = json.Marshal(v); err != nil {
		return nil, fmt.Errorf("schema file could not be converted to JSON. %s", err)
	}

	return res, nil
}

func _NewSchema() *js.Schema {
	c := js.NewCompiler()
	c.Draft = js.Draft2020

	var err error
	var jsonData []byte

	if jsonData, err = YAMLtoJSON(strings.NewReader(Schema)); err != nil {
		panic(err)
	}

	if err := c.AddResource("schema.yaml", bytes.NewReader(jsonData)); err != nil {
		panic(err)
	}

	res, err := c.Compile("schema.yaml")
	if err != nil {
		panic(err)
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
		reflect.TypeOf(InputNeq{}),
		reflect.TypeOf(InputMap{}),
		reflect.TypeOf(InputNumber{}),
		reflect.TypeOf(InputCase{}),
		reflect.TypeOf(InputAxis{}),
		reflect.TypeOf(InputButton{}),
		reflect.TypeOf(InputHat{}),
		reflect.TypeOf(InputSwitch{}),
		reflect.TypeOf(OutputTransmitter{}),
		reflect.TypeOf(InputGamepad{}),
		reflect.TypeOf(InputChannel{}),
		reflect.TypeOf(InputAdd{}),
		reflect.TypeOf(InputSubtract{}),
		reflect.TypeOf(InputMin{}),
		reflect.TypeOf(InputMax{}),
		reflect.TypeOf(InputInvert{}),
		reflect.TypeOf(InputIf{}),
		reflect.TypeOf(InputSeq{}),
		reflect.TypeOf(InputTrim{}),
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

func OutputOrNil(src IOType, out *util.RawValue, ch util.ChannelNumber, nan bool) (IOType, util.RawValue, util.ChannelNumber, bool) {
	if out == nil {
		return nil, 0, -1, true
	} else {
		return src, *out, ch, nan
	}
}

func EvalRelational(c *Config, left *IOHolder, right *[]*IOHolder, rightDefault *util.RawValue, trueOut *util.RawValue, falseOut *util.RawValue, compare RelationalCompareFunc) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	//if there is no left argument, result is not a number
	if left == nil {
		return nil, 0, -1, true
	}

	//get left value
	_, out, ch, nan = (*left).Eval(c)
	//if left value is not a number, result is not a number
	if nan {
		return nil, 0, -1, true
	}

	if right == nil || len(*right) == 0 {
		//if there are no right values, and there is no default right value
		//result is truthy because we don't have anything to compare to
		if rightDefault == nil {
			return OutputOrNil(nil, trueOut, ch, false)
		}

		if !(compare(out, *rightDefault)) {
			//check fails
			return OutputOrNil(nil, falseOut, ch, false)
		} else {
			//check passes
			return OutputOrNil(nil, trueOut, ch, false)
		}
	}

	//otherwise comparison must succeed against all values on the right side
	var curr util.RawValue
	for _, param := range *right {
		if param == nil {
			continue
		}
		_, curr, _, nan = param.Eval(c)

		//ignore nan values
		if nan {
			continue
		}

		//found one param where the check fails
		if !(compare(out, curr)) {
			return OutputOrNil(nil, falseOut, ch, false)
		}
	}

	//first param is less than all params
	return OutputOrNil(nil, trueOut, ch, false)
}

type RelationalCompareFunc func(util.RawValue, util.RawValue) bool

func EvalOperation(c *Config, left *IOHolder, right *[]*IOHolder, rightDefault *util.RawValue, applyOperation OperationFunc) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	//if there is no left value, result is not a number
	if left == nil {
		return nil, 0, -1, true
	}

	//get the left value
	src, out, ch, nan = (*left).Eval(c)

	//if the left value is not a number, result is not a number
	if nan {
		return nil, 0, ch, true
	}

	if right == nil || len(*right) == 0 {
		//if there are no right values, or right default, then result is the left number itself
		if rightDefault == nil {
			return src, out, ch, nan
		}

		return nil, applyOperation(out, *rightDefault), ch, false
	}

	//otherwise subtract the right values
	res := out
	for _, param := range *right {
		if param == nil {
			continue
		}
		_, out, ch, nan = param.Eval(c)

		//ignore nan values
		if nan {
			continue
		}

		res = applyOperation(res, out)
	}
	return nil, res, ch, false
}

type OperationFunc func(left util.RawValue, right util.RawValue) util.RawValue

func GetChildren(left *IOHolder, right *[]*IOHolder) (out *[]*IOHolder) {
	if left == nil && right == nil {
		return nil
	} else if left == nil && right != nil {
		return right
	} else if left != nil && right == nil {
		return &[]*IOHolder{left}
	} else {
		children := append([]*IOHolder{left}, *right...)
		return &children
	}
}

func isTruthy(val util.RawValue) bool {
	return val != 0
}

func isFalsy(val util.RawValue) bool {
	return val == 0
}
