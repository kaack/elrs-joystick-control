// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

package config

import (
	"encoding/json"
	"errors"
	"fmt"
	"github.com/kaack/elrs-joystick-control/pkg/util"
	"sync"
	"time"
)

type SeqT struct {
	Conditions            *[]*IOHolder     `json:"conditions"`
	OutputValues          *[]util.RawValue `json:"output_values"`
	TraversalMethod       *TraversalT      `json:"traversal_method"`
	ActivationDurationMin util.RawValue    `json:"activation_duration_min"`
	ActivationDurationMax util.RawValue    `json:"activation_duration_max"`

	currentOutputIndex int
	currentDirection   TraversalDirection
	highEdgeTime       *time.Time
}

// InputSeq *** Sequence ***
type InputSeq struct {
	Id    string        `json:"id"`
	Value util.RawValue `json:"value"`
	IsNaN bool          `json:"-"`

	Type string `json:"type"`
	Seq  SeqT   `json:"seq" input:"true"`

	Mutex sync.Mutex `json:"-"`
}

type TraversalT int32

const (
	UnsetTraversal     TraversalT = iota
	ClockwiseTraversal TraversalT = iota
	PingPongTraversal  TraversalT = iota
)

const PingPongStr string = `"ping-pong"`
const ClockwiseStr string = `"clockwise"`
const UnsetTraversalStr string = "null"

func (t *TraversalT) IsValid() bool {
	if t == nil {
		return false
	}
	return *t == ClockwiseTraversal || *t == PingPongTraversal
}

func (t *TraversalT) String() string {
	if t == nil {
		return ""
	}

	switch *t {
	case PingPongTraversal:
		return PingPongStr
	case ClockwiseTraversal:
		return ClockwiseStr
	default:
		return ""
	}
}

func (t *TraversalT) UnmarshalJSON(bytes []byte) error {
	if t == nil {
		return errors.New("cannot unmarshal traversal method onto nil pointer")
	}

	dir := string(bytes)
	switch dir {
	case UnsetTraversalStr:
		*t = UnsetTraversal
		break
	case PingPongStr:
		*t = PingPongTraversal
	case ClockwiseStr:
		*t = ClockwiseTraversal
	default:
		return errors.New(fmt.Sprintf("%s is not a valid traversal method", dir))
	}

	return nil
}

func (t *TraversalT) MarshalJSON() ([]byte, error) {
	if t == nil {
		return []byte(UnsetTraversalStr), nil
	}

	switch *t {
	case UnsetTraversal:
		return []byte(UnsetTraversalStr), nil
	case ClockwiseTraversal:
		return []byte(ClockwiseStr), nil
	case PingPongTraversal:
		return []byte(PingPongStr), nil
	}

	return nil, errors.New(fmt.Sprintf("traversal method %v is not valid", *t))
}

type TraversalDirection int

const (
	ForwardDirection TraversalDirection = 1
	ReverseDirection TraversalDirection = -1
)

type FakeSeqT SeqT

func (s *SeqT) UnmarshalJSON(data []byte) error {

	var seq = FakeSeqT{}
	if err := json.Unmarshal(data, &seq); err != nil {
		return err
	}

	*s = SeqT(seq)
	(*s).currentDirection = ForwardDirection
	return nil
}

func (i *InputSeq) NextValue() *util.RawValue {
	values := i.Seq.OutputValues

	if values == nil || len(*values) == 0 {
		return nil
	}

	length := len(*values)
	if length == 1 { //special case, nothing to traverse
		return &((*values)[0])
	}

	method := i.Seq.TraversalMethod
	if method == nil { //special case, no traversal set, return first element
		return &((*values)[0])
	}

	if length == 2 { //special case, all traversal methods behave the same
		i.Mutex.Lock()
		defer i.Mutex.Unlock()
		i.Seq.currentOutputIndex = (i.Seq.currentOutputIndex + 1) % length
		return &((*values)[i.Seq.currentOutputIndex])
	}

	switch *method {
	case ClockwiseTraversal:
		i.Mutex.Lock()
		defer i.Mutex.Unlock()
		i.Seq.currentOutputIndex = (i.Seq.currentOutputIndex + 1) % length
		return &((*values)[i.Seq.currentOutputIndex])
	case PingPongTraversal:
		i.Mutex.Lock()
		defer i.Mutex.Unlock()
		i.Seq.currentOutputIndex = i.Seq.currentOutputIndex + int(i.Seq.currentDirection)

		if i.Seq.currentOutputIndex > length-1 {
			i.Seq.currentDirection = ReverseDirection
			i.Seq.currentOutputIndex = length - 2
			return &((*values)[i.Seq.currentOutputIndex])
		} else if i.Seq.currentOutputIndex < 0 {
			i.Seq.currentDirection = ForwardDirection
			i.Seq.currentOutputIndex = 1
			return &((*values)[i.Seq.currentOutputIndex])
		} else {
			return &((*values)[i.Seq.currentOutputIndex])
		}
	default:
		//traversal method not know, return first element
		return &((*values)[0])
	}

}

func (i *InputSeq) Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {
	src, out, ch, nan = i._Eval(c)
	i.Value = out
	i.IsNaN = nan

	return src, out, ch, nan
}

func (i *InputSeq) _Eval(c *Config) (src IOType, out util.RawValue, ch util.ChannelNumber, nan bool) {

	values := i.Seq.OutputValues
	conditions := i.Seq.Conditions

	//if there are no output values, result is not a number
	if values == nil || len(*values) == 0 {
		return nil, 0, -1, true
	}

	//exit early if there is only one value
	if len(*values) == 1 {
		return nil, (*values)[0], -1, false
	}

	//no condition, result is the first output value
	if conditions == nil || len(*conditions) == 0 {
		return nil, (*values)[0], -1, false
	}

	//check to see if at least one condition is falsy
	allNan := true
	allTrue := true
	for _, param := range *conditions {
		if param == nil {
			continue
		}
		_, out, ch, nan = param.Eval(c)

		//ignore nan values
		if nan {
			continue
		}

		allNan = false

		//at least one element is falsy (0), no need to check other conditions
		if out == 0 {
			allTrue = false
			break
		}
	}

	//if all conditions are not numbers, result is the current output value
	if allNan {
		return nil, (*values)[i.Seq.currentOutputIndex], -1, false
	}

	currentTime := time.Now()

	if allTrue {
		//mark the first time the edge goes high
		if i.Seq.highEdgeTime == nil {
			i.Seq.highEdgeTime = &currentTime
		}

		return nil, (*values)[i.Seq.currentOutputIndex], -1, false
	}

	//copy the pointer so that's safe to use after nil check
	highEdgeTime := i.Seq.highEdgeTime

	if highEdgeTime == nil {
		//nothing to do, we have not marked the high edge yet
		return nil, (*values)[i.Seq.currentOutputIndex], -1, false
	}
	i.Seq.highEdgeTime = nil //reset the high edge marker

	highEdgeDuration := currentTime.Sub(*highEdgeTime)
	if highEdgeDuration >= time.Duration(i.Seq.ActivationDurationMin)*time.Millisecond &&
		highEdgeDuration <= time.Duration(i.Seq.ActivationDurationMax)*time.Millisecond {
		//successful activation
		return OutputOrNil(nil, i.NextValue(), -1, false)
	}

	return nil, (*values)[i.Seq.currentOutputIndex], -1, false
}

func (i *InputSeq) InputType() string {
	return i.Type
}

func (i *InputSeq) InputValue() *util.RawValue {
	if i.IsNaN {
		return nil
	}
	return &i.Value
}

func (i *InputSeq) InputId() string {
	return i.Id
}

func (i *InputSeq) Children() (out *[]*IOHolder) {
	return i.Seq.Conditions
}
