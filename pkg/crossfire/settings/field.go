package settings

import (
	"github.com/kaack/elrs-joystick-control/pkg/crossfire/telemetry"
	"github.com/kaack/elrs-joystick-control/pkg/proto/generated/pb"
)

type FieldType interface {
	Name() string
	Type() telemetry.CRSFFieldType
	Id() uint32
	ParentId() uint32

	String() string

	Proto() *pb.CRSFDeviceFieldData
}
