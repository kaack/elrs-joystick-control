// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import (
	"encoding/json"
	"errors"
	"github.com/kaack/elrs-joystick-control/pkg/util"
	"reflect"
)

type IOType interface {
	InputId() string
	InputType() string
	InputValue() (out *util.RawValue)

	Children() (out *[]*IOHolder)

	Eval(config *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool)
}

type IOHolder struct {
	IO     IOType
	Ctl    *Controller `json:"-"`
	Config *Config     `json:"-"`
}

func (ih *IOHolder) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	return ih.IO.Eval(c)
}

func (ih *IOHolder) Children() (out *[]*IOHolder) {
	return ih.IO.Children()
}

func (ih *IOHolder) InputId() string {
	return ih.IO.InputId()
}

func (ih *IOHolder) InputValue() *util.RawValue {
	return ih.IO.InputValue()
}

func (ih *IOHolder) MarshalJSON() ([]byte, error) {
	var data []byte
	var err error

	if data, err = json.Marshal(ih.IO); err != nil {
		return nil, errors.New(err.Error())
	}

	return data, err
}

func (ih *IOHolder) UnmarshalJSON(inputsJson []byte) error {
	var err error
	var rawData json.RawMessage
	if err = json.Unmarshal(inputsJson, &rawData); err != nil {
		return errors.New(err.Error())
	}

	var tmp struct {
		Type string `json:"type"`
	}

	if err = json.Unmarshal(rawData, &tmp); err != nil {
		return errors.New(err.Error())
	}

	var typesMap *map[string]reflect.Type
	if typesMap, err = GetTypesMap(); err != nil {
		return err
	}

	if _, ok := (*typesMap)[tmp.Type]; !ok {
		return errors.New("type \"" + tmp.Type + "\" is not known")
	}

	T := (*typesMap)[tmp.Type]
	(*ih).IO = reflect.New(T).Interface().(IOType)
	if err := json.Unmarshal(rawData, ih.IO); err != nil {
		return errors.New(err.Error())
	}

	return nil
}
