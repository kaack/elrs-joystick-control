// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import (
	"encoding/json"
	"errors"
	"reflect"
)

type InputT interface {
	InputType() string
	Eval(*Controller) (int32, bool)
}

type InputHolder struct {
	I InputT
}

func (ih *InputHolder) MarshalJSON() ([]byte, error) {
	var data []byte
	var err error

	if data, err = json.Marshal(ih.I); err != nil {
		return nil, errors.New(err.Error())
	}

	return data, err
}

func (ih *InputHolder) UnmarshalJSON(inputsJson []byte) error {
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
	(*ih).I = reflect.New(T).Interface().(InputT)
	if err := json.Unmarshal(rawData, ih.I); err != nil {
		return errors.New(err.Error())
	}

	return nil
}
