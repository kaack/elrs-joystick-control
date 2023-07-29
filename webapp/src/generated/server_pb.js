// source: server.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
goog.exportSymbol('proto.JoystickControl.AttitudeData', null, global);
goog.exportSymbol('proto.JoystickControl.BarometerData', null, global);
goog.exportSymbol('proto.JoystickControl.BarometerVariometerData', null, global);
goog.exportSymbol('proto.JoystickControl.BatteryData', null, global);
goog.exportSymbol('proto.JoystickControl.CRSFDeviceFieldCommand', null, global);
goog.exportSymbol('proto.JoystickControl.CRSFDeviceFieldCommandStep', null, global);
goog.exportSymbol('proto.JoystickControl.CRSFDeviceFieldData', null, global);
goog.exportSymbol('proto.JoystickControl.CRSFDeviceFieldData.DataCase', null, global);
goog.exportSymbol('proto.JoystickControl.CRSFDeviceFieldEntryData', null, global);
goog.exportSymbol('proto.JoystickControl.CRSFDeviceFieldFloat', null, global);
goog.exportSymbol('proto.JoystickControl.CRSFDeviceFieldFolder', null, global);
goog.exportSymbol('proto.JoystickControl.CRSFDeviceFieldInfo', null, global);
goog.exportSymbol('proto.JoystickControl.CRSFDeviceFieldInt16', null, global);
goog.exportSymbol('proto.JoystickControl.CRSFDeviceFieldInt32', null, global);
goog.exportSymbol('proto.JoystickControl.CRSFDeviceFieldInt64', null, global);
goog.exportSymbol('proto.JoystickControl.CRSFDeviceFieldInt8', null, global);
goog.exportSymbol('proto.JoystickControl.CRSFDeviceFieldString', null, global);
goog.exportSymbol('proto.JoystickControl.CRSFDeviceFieldTextSelect', null, global);
goog.exportSymbol('proto.JoystickControl.CRSFDeviceFieldType', null, global);
goog.exportSymbol('proto.JoystickControl.CRSFDeviceFieldUint16', null, global);
goog.exportSymbol('proto.JoystickControl.CRSFDeviceFieldUint32', null, global);
goog.exportSymbol('proto.JoystickControl.CRSFDeviceFieldUint64', null, global);
goog.exportSymbol('proto.JoystickControl.CRSFDeviceFieldUint8', null, global);
goog.exportSymbol('proto.JoystickControl.CRSFDeviceInfoData', null, global);
goog.exportSymbol('proto.JoystickControl.CRSFDeviceLinkStatusData', null, global);
goog.exportSymbol('proto.JoystickControl.Empty', null, global);
goog.exportSymbol('proto.JoystickControl.EvalState', null, global);
goog.exportSymbol('proto.JoystickControl.EvalStates', null, global);
goog.exportSymbol('proto.JoystickControl.FlightModeData', null, global);
goog.exportSymbol('proto.JoystickControl.GPSData', null, global);
goog.exportSymbol('proto.JoystickControl.Gamepad', null, global);
goog.exportSymbol('proto.JoystickControl.GamepadInputState', null, global);
goog.exportSymbol('proto.JoystickControl.GamepadInputType', null, global);
goog.exportSymbol('proto.JoystickControl.GamepadInputsStates', null, global);
goog.exportSymbol('proto.JoystickControl.GetAppInfoRes', null, global);
goog.exportSymbol('proto.JoystickControl.GetCRSFDeviceFieldReq', null, global);
goog.exportSymbol('proto.JoystickControl.GetCRSFDeviceFieldRes', null, global);
goog.exportSymbol('proto.JoystickControl.GetCRSFDeviceFieldsReq', null, global);
goog.exportSymbol('proto.JoystickControl.GetCRSFDeviceFieldsRes', null, global);
goog.exportSymbol('proto.JoystickControl.GetCRSFDeviceLinkStatusRes', null, global);
goog.exportSymbol('proto.JoystickControl.GetCRSFDevicesRes', null, global);
goog.exportSymbol('proto.JoystickControl.GetConfigRes', null, global);
goog.exportSymbol('proto.JoystickControl.GetGamepadStreamReq', null, global);
goog.exportSymbol('proto.JoystickControl.GetGamepadsRes', null, global);
goog.exportSymbol('proto.JoystickControl.GetTransmitterRes', null, global);
goog.exportSymbol('proto.JoystickControl.GetTransmitterStreamReq', null, global);
goog.exportSymbol('proto.JoystickControl.LinkRXData', null, global);
goog.exportSymbol('proto.JoystickControl.LinkState', null, global);
goog.exportSymbol('proto.JoystickControl.LinkStatsData', null, global);
goog.exportSymbol('proto.JoystickControl.LinkStatusFlag', null, global);
goog.exportSymbol('proto.JoystickControl.LinkTXData', null, global);
goog.exportSymbol('proto.JoystickControl.PortState', null, global);
goog.exportSymbol('proto.JoystickControl.SetCRSFDeviceFieldReq', null, global);
goog.exportSymbol('proto.JoystickControl.SetCRSFDeviceFieldRes', null, global);
goog.exportSymbol('proto.JoystickControl.SetConfigReq', null, global);
goog.exportSymbol('proto.JoystickControl.StartLinkReq', null, global);
goog.exportSymbol('proto.JoystickControl.SupervisorState', null, global);
goog.exportSymbol('proto.JoystickControl.SyncData', null, global);
goog.exportSymbol('proto.JoystickControl.Telemetry', null, global);
goog.exportSymbol('proto.JoystickControl.Telemetry.DataCase', null, global);
goog.exportSymbol('proto.JoystickControl.Transmitter', null, global);
goog.exportSymbol('proto.JoystickControl.TransmitterChannel', null, global);
goog.exportSymbol('proto.JoystickControl.TransmitterChannels', null, global);
goog.exportSymbol('proto.JoystickControl.ValidateConfigRes', null, global);
goog.exportSymbol('proto.JoystickControl.ValidationError', null, global);
goog.exportSymbol('proto.JoystickControl.ValidationErrors', null, global);
goog.exportSymbol('proto.JoystickControl.VariometerData', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.Empty.displayName = 'proto.JoystickControl.Empty';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.ValidationError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.JoystickControl.ValidationError.repeatedFields_, null);
};
goog.inherits(proto.JoystickControl.ValidationError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.ValidationError.displayName = 'proto.JoystickControl.ValidationError';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.GetTransmitterRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.JoystickControl.GetTransmitterRes.repeatedFields_, null);
};
goog.inherits(proto.JoystickControl.GetTransmitterRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.GetTransmitterRes.displayName = 'proto.JoystickControl.GetTransmitterRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.Transmitter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.Transmitter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.Transmitter.displayName = 'proto.JoystickControl.Transmitter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.ValidationErrors = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.JoystickControl.ValidationErrors.repeatedFields_, null);
};
goog.inherits(proto.JoystickControl.ValidationErrors, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.ValidationErrors.displayName = 'proto.JoystickControl.ValidationErrors';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.GetGamepadsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.JoystickControl.GetGamepadsRes.repeatedFields_, null);
};
goog.inherits(proto.JoystickControl.GetGamepadsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.GetGamepadsRes.displayName = 'proto.JoystickControl.GetGamepadsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.Gamepad = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.Gamepad, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.Gamepad.displayName = 'proto.JoystickControl.Gamepad';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.GetConfigRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.GetConfigRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.GetConfigRes.displayName = 'proto.JoystickControl.GetConfigRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.SetConfigReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.SetConfigReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.SetConfigReq.displayName = 'proto.JoystickControl.SetConfigReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.ValidateConfigRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.JoystickControl.ValidateConfigRes.repeatedFields_, null);
};
goog.inherits(proto.JoystickControl.ValidateConfigRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.ValidateConfigRes.displayName = 'proto.JoystickControl.ValidateConfigRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.StartLinkReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.StartLinkReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.StartLinkReq.displayName = 'proto.JoystickControl.StartLinkReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.GetGamepadStreamReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.GetGamepadStreamReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.GetGamepadStreamReq.displayName = 'proto.JoystickControl.GetGamepadStreamReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.GamepadInputState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.GamepadInputState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.GamepadInputState.displayName = 'proto.JoystickControl.GamepadInputState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.GamepadInputsStates = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.JoystickControl.GamepadInputsStates.repeatedFields_, null);
};
goog.inherits(proto.JoystickControl.GamepadInputsStates, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.GamepadInputsStates.displayName = 'proto.JoystickControl.GamepadInputsStates';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.GetTransmitterStreamReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.GetTransmitterStreamReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.GetTransmitterStreamReq.displayName = 'proto.JoystickControl.GetTransmitterStreamReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.TransmitterChannels = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.JoystickControl.TransmitterChannels.repeatedFields_, null);
};
goog.inherits(proto.JoystickControl.TransmitterChannels, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.TransmitterChannels.displayName = 'proto.JoystickControl.TransmitterChannels';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.TransmitterChannel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.TransmitterChannel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.TransmitterChannel.displayName = 'proto.JoystickControl.TransmitterChannel';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.EvalState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.EvalState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.EvalState.displayName = 'proto.JoystickControl.EvalState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.EvalStates = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.EvalStates, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.EvalStates.displayName = 'proto.JoystickControl.EvalStates';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.LinkState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.LinkState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.LinkState.displayName = 'proto.JoystickControl.LinkState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.Telemetry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.JoystickControl.Telemetry.oneofGroups_);
};
goog.inherits(proto.JoystickControl.Telemetry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.Telemetry.displayName = 'proto.JoystickControl.Telemetry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.CRSFDeviceLinkStatusData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.JoystickControl.CRSFDeviceLinkStatusData.repeatedFields_, null);
};
goog.inherits(proto.JoystickControl.CRSFDeviceLinkStatusData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.CRSFDeviceLinkStatusData.displayName = 'proto.JoystickControl.CRSFDeviceLinkStatusData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.CRSFDeviceFieldEntryData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.CRSFDeviceFieldEntryData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.CRSFDeviceFieldEntryData.displayName = 'proto.JoystickControl.CRSFDeviceFieldEntryData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.CRSFDeviceInfoData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.CRSFDeviceInfoData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.CRSFDeviceInfoData.displayName = 'proto.JoystickControl.CRSFDeviceInfoData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.BarometerData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.BarometerData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.BarometerData.displayName = 'proto.JoystickControl.BarometerData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.VariometerData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.VariometerData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.VariometerData.displayName = 'proto.JoystickControl.VariometerData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.BarometerVariometerData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.BarometerVariometerData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.BarometerVariometerData.displayName = 'proto.JoystickControl.BarometerVariometerData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.FlightModeData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.FlightModeData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.FlightModeData.displayName = 'proto.JoystickControl.FlightModeData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.LinkTXData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.LinkTXData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.LinkTXData.displayName = 'proto.JoystickControl.LinkTXData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.LinkRXData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.LinkRXData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.LinkRXData.displayName = 'proto.JoystickControl.LinkRXData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.SyncData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.SyncData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.SyncData.displayName = 'proto.JoystickControl.SyncData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.AttitudeData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.AttitudeData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.AttitudeData.displayName = 'proto.JoystickControl.AttitudeData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.LinkStatsData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.LinkStatsData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.LinkStatsData.displayName = 'proto.JoystickControl.LinkStatsData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.GPSData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.GPSData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.GPSData.displayName = 'proto.JoystickControl.GPSData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.BatteryData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.BatteryData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.BatteryData.displayName = 'proto.JoystickControl.BatteryData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.GetAppInfoRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.GetAppInfoRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.GetAppInfoRes.displayName = 'proto.JoystickControl.GetAppInfoRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.GetCRSFDevicesRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.JoystickControl.GetCRSFDevicesRes.repeatedFields_, null);
};
goog.inherits(proto.JoystickControl.GetCRSFDevicesRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.GetCRSFDevicesRes.displayName = 'proto.JoystickControl.GetCRSFDevicesRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.GetCRSFDeviceFieldsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.JoystickControl.GetCRSFDeviceFieldsRes.repeatedFields_, null);
};
goog.inherits(proto.JoystickControl.GetCRSFDeviceFieldsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.GetCRSFDeviceFieldsRes.displayName = 'proto.JoystickControl.GetCRSFDeviceFieldsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.CRSFDeviceFieldData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.JoystickControl.CRSFDeviceFieldData.oneofGroups_);
};
goog.inherits(proto.JoystickControl.CRSFDeviceFieldData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.CRSFDeviceFieldData.displayName = 'proto.JoystickControl.CRSFDeviceFieldData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.CRSFDeviceFieldUint8 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.CRSFDeviceFieldUint8, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.CRSFDeviceFieldUint8.displayName = 'proto.JoystickControl.CRSFDeviceFieldUint8';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.CRSFDeviceFieldInt8 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.CRSFDeviceFieldInt8, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.CRSFDeviceFieldInt8.displayName = 'proto.JoystickControl.CRSFDeviceFieldInt8';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.CRSFDeviceFieldUint16 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.CRSFDeviceFieldUint16, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.CRSFDeviceFieldUint16.displayName = 'proto.JoystickControl.CRSFDeviceFieldUint16';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.CRSFDeviceFieldInt16 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.CRSFDeviceFieldInt16, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.CRSFDeviceFieldInt16.displayName = 'proto.JoystickControl.CRSFDeviceFieldInt16';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.CRSFDeviceFieldUint32 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.CRSFDeviceFieldUint32, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.CRSFDeviceFieldUint32.displayName = 'proto.JoystickControl.CRSFDeviceFieldUint32';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.CRSFDeviceFieldInt32 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.CRSFDeviceFieldInt32, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.CRSFDeviceFieldInt32.displayName = 'proto.JoystickControl.CRSFDeviceFieldInt32';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.CRSFDeviceFieldUint64 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.CRSFDeviceFieldUint64, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.CRSFDeviceFieldUint64.displayName = 'proto.JoystickControl.CRSFDeviceFieldUint64';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.CRSFDeviceFieldInt64 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.CRSFDeviceFieldInt64, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.CRSFDeviceFieldInt64.displayName = 'proto.JoystickControl.CRSFDeviceFieldInt64';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.CRSFDeviceFieldFloat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.CRSFDeviceFieldFloat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.CRSFDeviceFieldFloat.displayName = 'proto.JoystickControl.CRSFDeviceFieldFloat';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.CRSFDeviceFieldInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.CRSFDeviceFieldInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.CRSFDeviceFieldInfo.displayName = 'proto.JoystickControl.CRSFDeviceFieldInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.CRSFDeviceFieldString = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.CRSFDeviceFieldString, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.CRSFDeviceFieldString.displayName = 'proto.JoystickControl.CRSFDeviceFieldString';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.CRSFDeviceFieldFolder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.CRSFDeviceFieldFolder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.CRSFDeviceFieldFolder.displayName = 'proto.JoystickControl.CRSFDeviceFieldFolder';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.CRSFDeviceFieldCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.CRSFDeviceFieldCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.CRSFDeviceFieldCommand.displayName = 'proto.JoystickControl.CRSFDeviceFieldCommand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.CRSFDeviceFieldTextSelect = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.JoystickControl.CRSFDeviceFieldTextSelect.repeatedFields_, null);
};
goog.inherits(proto.JoystickControl.CRSFDeviceFieldTextSelect, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.CRSFDeviceFieldTextSelect.displayName = 'proto.JoystickControl.CRSFDeviceFieldTextSelect';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.GetCRSFDeviceFieldReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.GetCRSFDeviceFieldReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.GetCRSFDeviceFieldReq.displayName = 'proto.JoystickControl.GetCRSFDeviceFieldReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.GetCRSFDeviceFieldsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.GetCRSFDeviceFieldsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.GetCRSFDeviceFieldsReq.displayName = 'proto.JoystickControl.GetCRSFDeviceFieldsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.GetCRSFDeviceFieldRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.GetCRSFDeviceFieldRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.GetCRSFDeviceFieldRes.displayName = 'proto.JoystickControl.GetCRSFDeviceFieldRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.SetCRSFDeviceFieldReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.SetCRSFDeviceFieldReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.SetCRSFDeviceFieldReq.displayName = 'proto.JoystickControl.SetCRSFDeviceFieldReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.SetCRSFDeviceFieldRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.SetCRSFDeviceFieldRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.SetCRSFDeviceFieldRes.displayName = 'proto.JoystickControl.SetCRSFDeviceFieldRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoystickControl.GetCRSFDeviceLinkStatusRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoystickControl.GetCRSFDeviceLinkStatusRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoystickControl.GetCRSFDeviceLinkStatusRes.displayName = 'proto.JoystickControl.GetCRSFDeviceLinkStatusRes';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.Empty.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.Empty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.Empty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.Empty.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.Empty}
 */
proto.JoystickControl.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.Empty;
  return proto.JoystickControl.Empty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.Empty}
 */
proto.JoystickControl.Empty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.Empty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.Empty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.Empty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.JoystickControl.ValidationError.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.ValidationError.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.ValidationError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.ValidationError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.ValidationError.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, ""),
    location: jspb.Message.getFieldWithDefault(msg, 2, ""),
    causesList: jspb.Message.toObjectList(msg.getCausesList(),
    proto.JoystickControl.ValidationError.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.ValidationError}
 */
proto.JoystickControl.ValidationError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.ValidationError;
  return proto.JoystickControl.ValidationError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.ValidationError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.ValidationError}
 */
proto.JoystickControl.ValidationError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    case 3:
      var value = new proto.JoystickControl.ValidationError;
      reader.readMessage(value,proto.JoystickControl.ValidationError.deserializeBinaryFromReader);
      msg.addCauses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.ValidationError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.ValidationError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.ValidationError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.ValidationError.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLocation();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCausesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.JoystickControl.ValidationError.serializeBinaryToWriter
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.JoystickControl.ValidationError.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.ValidationError} returns this
 */
proto.JoystickControl.ValidationError.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string location = 2;
 * @return {string}
 */
proto.JoystickControl.ValidationError.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.ValidationError} returns this
 */
proto.JoystickControl.ValidationError.prototype.setLocation = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated ValidationError causes = 3;
 * @return {!Array<!proto.JoystickControl.ValidationError>}
 */
proto.JoystickControl.ValidationError.prototype.getCausesList = function() {
  return /** @type{!Array<!proto.JoystickControl.ValidationError>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.JoystickControl.ValidationError, 3));
};


/**
 * @param {!Array<!proto.JoystickControl.ValidationError>} value
 * @return {!proto.JoystickControl.ValidationError} returns this
*/
proto.JoystickControl.ValidationError.prototype.setCausesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.JoystickControl.ValidationError=} opt_value
 * @param {number=} opt_index
 * @return {!proto.JoystickControl.ValidationError}
 */
proto.JoystickControl.ValidationError.prototype.addCauses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.JoystickControl.ValidationError, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.JoystickControl.ValidationError} returns this
 */
proto.JoystickControl.ValidationError.prototype.clearCausesList = function() {
  return this.setCausesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.JoystickControl.GetTransmitterRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.GetTransmitterRes.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.GetTransmitterRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.GetTransmitterRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.GetTransmitterRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    transmittersList: jspb.Message.toObjectList(msg.getTransmittersList(),
    proto.JoystickControl.Transmitter.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.GetTransmitterRes}
 */
proto.JoystickControl.GetTransmitterRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.GetTransmitterRes;
  return proto.JoystickControl.GetTransmitterRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.GetTransmitterRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.GetTransmitterRes}
 */
proto.JoystickControl.GetTransmitterRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.JoystickControl.Transmitter;
      reader.readMessage(value,proto.JoystickControl.Transmitter.deserializeBinaryFromReader);
      msg.addTransmitters(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.GetTransmitterRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.GetTransmitterRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.GetTransmitterRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.GetTransmitterRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransmittersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.JoystickControl.Transmitter.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Transmitter transmitters = 1;
 * @return {!Array<!proto.JoystickControl.Transmitter>}
 */
proto.JoystickControl.GetTransmitterRes.prototype.getTransmittersList = function() {
  return /** @type{!Array<!proto.JoystickControl.Transmitter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.JoystickControl.Transmitter, 1));
};


/**
 * @param {!Array<!proto.JoystickControl.Transmitter>} value
 * @return {!proto.JoystickControl.GetTransmitterRes} returns this
*/
proto.JoystickControl.GetTransmitterRes.prototype.setTransmittersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.JoystickControl.Transmitter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.JoystickControl.Transmitter}
 */
proto.JoystickControl.GetTransmitterRes.prototype.addTransmitters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.JoystickControl.Transmitter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.JoystickControl.GetTransmitterRes} returns this
 */
proto.JoystickControl.GetTransmitterRes.prototype.clearTransmittersList = function() {
  return this.setTransmittersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.Transmitter.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.Transmitter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.Transmitter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.Transmitter.toObject = function(includeInstance, msg) {
  var f, obj = {
    port: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.Transmitter}
 */
proto.JoystickControl.Transmitter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.Transmitter;
  return proto.JoystickControl.Transmitter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.Transmitter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.Transmitter}
 */
proto.JoystickControl.Transmitter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPort(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.Transmitter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.Transmitter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.Transmitter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.Transmitter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPort();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string port = 1;
 * @return {string}
 */
proto.JoystickControl.Transmitter.prototype.getPort = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.Transmitter} returns this
 */
proto.JoystickControl.Transmitter.prototype.setPort = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.JoystickControl.Transmitter.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.Transmitter} returns this
 */
proto.JoystickControl.Transmitter.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.JoystickControl.ValidationErrors.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.ValidationErrors.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.ValidationErrors.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.ValidationErrors} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.ValidationErrors.toObject = function(includeInstance, msg) {
  var f, obj = {
    errorsList: jspb.Message.toObjectList(msg.getErrorsList(),
    proto.JoystickControl.ValidationError.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.ValidationErrors}
 */
proto.JoystickControl.ValidationErrors.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.ValidationErrors;
  return proto.JoystickControl.ValidationErrors.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.ValidationErrors} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.ValidationErrors}
 */
proto.JoystickControl.ValidationErrors.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.JoystickControl.ValidationError;
      reader.readMessage(value,proto.JoystickControl.ValidationError.deserializeBinaryFromReader);
      msg.addErrors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.ValidationErrors.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.ValidationErrors.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.ValidationErrors} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.ValidationErrors.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.JoystickControl.ValidationError.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ValidationError errors = 1;
 * @return {!Array<!proto.JoystickControl.ValidationError>}
 */
proto.JoystickControl.ValidationErrors.prototype.getErrorsList = function() {
  return /** @type{!Array<!proto.JoystickControl.ValidationError>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.JoystickControl.ValidationError, 1));
};


/**
 * @param {!Array<!proto.JoystickControl.ValidationError>} value
 * @return {!proto.JoystickControl.ValidationErrors} returns this
*/
proto.JoystickControl.ValidationErrors.prototype.setErrorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.JoystickControl.ValidationError=} opt_value
 * @param {number=} opt_index
 * @return {!proto.JoystickControl.ValidationError}
 */
proto.JoystickControl.ValidationErrors.prototype.addErrors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.JoystickControl.ValidationError, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.JoystickControl.ValidationErrors} returns this
 */
proto.JoystickControl.ValidationErrors.prototype.clearErrorsList = function() {
  return this.setErrorsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.JoystickControl.GetGamepadsRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.GetGamepadsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.GetGamepadsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.GetGamepadsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.GetGamepadsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    gamepadsList: jspb.Message.toObjectList(msg.getGamepadsList(),
    proto.JoystickControl.Gamepad.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.GetGamepadsRes}
 */
proto.JoystickControl.GetGamepadsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.GetGamepadsRes;
  return proto.JoystickControl.GetGamepadsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.GetGamepadsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.GetGamepadsRes}
 */
proto.JoystickControl.GetGamepadsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.JoystickControl.Gamepad;
      reader.readMessage(value,proto.JoystickControl.Gamepad.deserializeBinaryFromReader);
      msg.addGamepads(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.GetGamepadsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.GetGamepadsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.GetGamepadsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.GetGamepadsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGamepadsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.JoystickControl.Gamepad.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Gamepad gamepads = 1;
 * @return {!Array<!proto.JoystickControl.Gamepad>}
 */
proto.JoystickControl.GetGamepadsRes.prototype.getGamepadsList = function() {
  return /** @type{!Array<!proto.JoystickControl.Gamepad>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.JoystickControl.Gamepad, 1));
};


/**
 * @param {!Array<!proto.JoystickControl.Gamepad>} value
 * @return {!proto.JoystickControl.GetGamepadsRes} returns this
*/
proto.JoystickControl.GetGamepadsRes.prototype.setGamepadsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.JoystickControl.Gamepad=} opt_value
 * @param {number=} opt_index
 * @return {!proto.JoystickControl.Gamepad}
 */
proto.JoystickControl.GetGamepadsRes.prototype.addGamepads = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.JoystickControl.Gamepad, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.JoystickControl.GetGamepadsRes} returns this
 */
proto.JoystickControl.GetGamepadsRes.prototype.clearGamepadsList = function() {
  return this.setGamepadsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.Gamepad.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.Gamepad.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.Gamepad} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.Gamepad.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    axes: jspb.Message.getFieldWithDefault(msg, 3, 0),
    buttons: jspb.Message.getFieldWithDefault(msg, 4, 0),
    hats: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.Gamepad}
 */
proto.JoystickControl.Gamepad.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.Gamepad;
  return proto.JoystickControl.Gamepad.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.Gamepad} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.Gamepad}
 */
proto.JoystickControl.Gamepad.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAxes(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setButtons(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHats(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.Gamepad.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.Gamepad.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.Gamepad} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.Gamepad.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAxes();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getButtons();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getHats();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.JoystickControl.Gamepad.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.Gamepad} returns this
 */
proto.JoystickControl.Gamepad.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.JoystickControl.Gamepad.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.Gamepad} returns this
 */
proto.JoystickControl.Gamepad.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 axes = 3;
 * @return {number}
 */
proto.JoystickControl.Gamepad.prototype.getAxes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.Gamepad} returns this
 */
proto.JoystickControl.Gamepad.prototype.setAxes = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 buttons = 4;
 * @return {number}
 */
proto.JoystickControl.Gamepad.prototype.getButtons = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.Gamepad} returns this
 */
proto.JoystickControl.Gamepad.prototype.setButtons = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 hats = 5;
 * @return {number}
 */
proto.JoystickControl.Gamepad.prototype.getHats = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.Gamepad} returns this
 */
proto.JoystickControl.Gamepad.prototype.setHats = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.GetConfigRes.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.GetConfigRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.GetConfigRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.GetConfigRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.GetConfigRes}
 */
proto.JoystickControl.GetConfigRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.GetConfigRes;
  return proto.JoystickControl.GetConfigRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.GetConfigRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.GetConfigRes}
 */
proto.JoystickControl.GetConfigRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.GetConfigRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.GetConfigRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.GetConfigRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.GetConfigRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Struct config = 1;
 * @return {?proto.google.protobuf.Struct}
 */
proto.JoystickControl.GetConfigRes.prototype.getConfig = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 1));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.JoystickControl.GetConfigRes} returns this
*/
proto.JoystickControl.GetConfigRes.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.GetConfigRes} returns this
 */
proto.JoystickControl.GetConfigRes.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.GetConfigRes.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.SetConfigReq.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.SetConfigReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.SetConfigReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.SetConfigReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.SetConfigReq}
 */
proto.JoystickControl.SetConfigReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.SetConfigReq;
  return proto.JoystickControl.SetConfigReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.SetConfigReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.SetConfigReq}
 */
proto.JoystickControl.SetConfigReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.SetConfigReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.SetConfigReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.SetConfigReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.SetConfigReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Struct config = 1;
 * @return {?proto.google.protobuf.Struct}
 */
proto.JoystickControl.SetConfigReq.prototype.getConfig = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 1));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.JoystickControl.SetConfigReq} returns this
*/
proto.JoystickControl.SetConfigReq.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.SetConfigReq} returns this
 */
proto.JoystickControl.SetConfigReq.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.SetConfigReq.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.JoystickControl.ValidateConfigRes.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.ValidateConfigRes.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.ValidateConfigRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.ValidateConfigRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.ValidateConfigRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    errorsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    warningsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.ValidateConfigRes}
 */
proto.JoystickControl.ValidateConfigRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.ValidateConfigRes;
  return proto.JoystickControl.ValidateConfigRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.ValidateConfigRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.ValidateConfigRes}
 */
proto.JoystickControl.ValidateConfigRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addErrors(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addWarnings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.ValidateConfigRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.ValidateConfigRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.ValidateConfigRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.ValidateConfigRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getWarningsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated string errors = 1;
 * @return {!Array<string>}
 */
proto.JoystickControl.ValidateConfigRes.prototype.getErrorsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.JoystickControl.ValidateConfigRes} returns this
 */
proto.JoystickControl.ValidateConfigRes.prototype.setErrorsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.JoystickControl.ValidateConfigRes} returns this
 */
proto.JoystickControl.ValidateConfigRes.prototype.addErrors = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.JoystickControl.ValidateConfigRes} returns this
 */
proto.JoystickControl.ValidateConfigRes.prototype.clearErrorsList = function() {
  return this.setErrorsList([]);
};


/**
 * repeated string warnings = 2;
 * @return {!Array<string>}
 */
proto.JoystickControl.ValidateConfigRes.prototype.getWarningsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.JoystickControl.ValidateConfigRes} returns this
 */
proto.JoystickControl.ValidateConfigRes.prototype.setWarningsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.JoystickControl.ValidateConfigRes} returns this
 */
proto.JoystickControl.ValidateConfigRes.prototype.addWarnings = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.JoystickControl.ValidateConfigRes} returns this
 */
proto.JoystickControl.ValidateConfigRes.prototype.clearWarningsList = function() {
  return this.setWarningsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.StartLinkReq.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.StartLinkReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.StartLinkReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.StartLinkReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    port: jspb.Message.getFieldWithDefault(msg, 1, ""),
    baudRate: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.StartLinkReq}
 */
proto.JoystickControl.StartLinkReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.StartLinkReq;
  return proto.JoystickControl.StartLinkReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.StartLinkReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.StartLinkReq}
 */
proto.JoystickControl.StartLinkReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPort(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBaudRate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.StartLinkReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.StartLinkReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.StartLinkReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.StartLinkReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPort();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBaudRate();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string port = 1;
 * @return {string}
 */
proto.JoystickControl.StartLinkReq.prototype.getPort = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.StartLinkReq} returns this
 */
proto.JoystickControl.StartLinkReq.prototype.setPort = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 baud_rate = 2;
 * @return {number}
 */
proto.JoystickControl.StartLinkReq.prototype.getBaudRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.StartLinkReq} returns this
 */
proto.JoystickControl.StartLinkReq.prototype.setBaudRate = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.GetGamepadStreamReq.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.GetGamepadStreamReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.GetGamepadStreamReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.GetGamepadStreamReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    gamepad: (f = msg.getGamepad()) && proto.JoystickControl.Gamepad.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.GetGamepadStreamReq}
 */
proto.JoystickControl.GetGamepadStreamReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.GetGamepadStreamReq;
  return proto.JoystickControl.GetGamepadStreamReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.GetGamepadStreamReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.GetGamepadStreamReq}
 */
proto.JoystickControl.GetGamepadStreamReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.JoystickControl.Gamepad;
      reader.readMessage(value,proto.JoystickControl.Gamepad.deserializeBinaryFromReader);
      msg.setGamepad(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.GetGamepadStreamReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.GetGamepadStreamReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.GetGamepadStreamReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.GetGamepadStreamReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGamepad();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.JoystickControl.Gamepad.serializeBinaryToWriter
    );
  }
};


/**
 * optional Gamepad gamepad = 1;
 * @return {?proto.JoystickControl.Gamepad}
 */
proto.JoystickControl.GetGamepadStreamReq.prototype.getGamepad = function() {
  return /** @type{?proto.JoystickControl.Gamepad} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.Gamepad, 1));
};


/**
 * @param {?proto.JoystickControl.Gamepad|undefined} value
 * @return {!proto.JoystickControl.GetGamepadStreamReq} returns this
*/
proto.JoystickControl.GetGamepadStreamReq.prototype.setGamepad = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.GetGamepadStreamReq} returns this
 */
proto.JoystickControl.GetGamepadStreamReq.prototype.clearGamepad = function() {
  return this.setGamepad(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.GetGamepadStreamReq.prototype.hasGamepad = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.GamepadInputState.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.GamepadInputState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.GamepadInputState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.GamepadInputState.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    index: jspb.Message.getFieldWithDefault(msg, 2, 0),
    value: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.GamepadInputState}
 */
proto.JoystickControl.GamepadInputState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.GamepadInputState;
  return proto.JoystickControl.GamepadInputState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.GamepadInputState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.GamepadInputState}
 */
proto.JoystickControl.GamepadInputState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.JoystickControl.GamepadInputType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIndex(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.GamepadInputState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.GamepadInputState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.GamepadInputState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.GamepadInputState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getIndex();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional GamepadInputType type = 1;
 * @return {!proto.JoystickControl.GamepadInputType}
 */
proto.JoystickControl.GamepadInputState.prototype.getType = function() {
  return /** @type {!proto.JoystickControl.GamepadInputType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.JoystickControl.GamepadInputType} value
 * @return {!proto.JoystickControl.GamepadInputState} returns this
 */
proto.JoystickControl.GamepadInputState.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 index = 2;
 * @return {number}
 */
proto.JoystickControl.GamepadInputState.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.GamepadInputState} returns this
 */
proto.JoystickControl.GamepadInputState.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 value = 3;
 * @return {number}
 */
proto.JoystickControl.GamepadInputState.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.GamepadInputState} returns this
 */
proto.JoystickControl.GamepadInputState.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.JoystickControl.GamepadInputsStates.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.GamepadInputsStates.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.GamepadInputsStates.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.GamepadInputsStates} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.GamepadInputsStates.toObject = function(includeInstance, msg) {
  var f, obj = {
    inputsStatesList: jspb.Message.toObjectList(msg.getInputsStatesList(),
    proto.JoystickControl.GamepadInputState.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.GamepadInputsStates}
 */
proto.JoystickControl.GamepadInputsStates.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.GamepadInputsStates;
  return proto.JoystickControl.GamepadInputsStates.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.GamepadInputsStates} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.GamepadInputsStates}
 */
proto.JoystickControl.GamepadInputsStates.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.JoystickControl.GamepadInputState;
      reader.readMessage(value,proto.JoystickControl.GamepadInputState.deserializeBinaryFromReader);
      msg.addInputsStates(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.GamepadInputsStates.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.GamepadInputsStates.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.GamepadInputsStates} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.GamepadInputsStates.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInputsStatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.JoystickControl.GamepadInputState.serializeBinaryToWriter
    );
  }
};


/**
 * repeated GamepadInputState inputs_states = 1;
 * @return {!Array<!proto.JoystickControl.GamepadInputState>}
 */
proto.JoystickControl.GamepadInputsStates.prototype.getInputsStatesList = function() {
  return /** @type{!Array<!proto.JoystickControl.GamepadInputState>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.JoystickControl.GamepadInputState, 1));
};


/**
 * @param {!Array<!proto.JoystickControl.GamepadInputState>} value
 * @return {!proto.JoystickControl.GamepadInputsStates} returns this
*/
proto.JoystickControl.GamepadInputsStates.prototype.setInputsStatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.JoystickControl.GamepadInputState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.JoystickControl.GamepadInputState}
 */
proto.JoystickControl.GamepadInputsStates.prototype.addInputsStates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.JoystickControl.GamepadInputState, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.JoystickControl.GamepadInputsStates} returns this
 */
proto.JoystickControl.GamepadInputsStates.prototype.clearInputsStatesList = function() {
  return this.setInputsStatesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.GetTransmitterStreamReq.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.GetTransmitterStreamReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.GetTransmitterStreamReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.GetTransmitterStreamReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    transmitter: (f = msg.getTransmitter()) && proto.JoystickControl.Transmitter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.GetTransmitterStreamReq}
 */
proto.JoystickControl.GetTransmitterStreamReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.GetTransmitterStreamReq;
  return proto.JoystickControl.GetTransmitterStreamReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.GetTransmitterStreamReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.GetTransmitterStreamReq}
 */
proto.JoystickControl.GetTransmitterStreamReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.JoystickControl.Transmitter;
      reader.readMessage(value,proto.JoystickControl.Transmitter.deserializeBinaryFromReader);
      msg.setTransmitter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.GetTransmitterStreamReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.GetTransmitterStreamReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.GetTransmitterStreamReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.GetTransmitterStreamReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransmitter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.JoystickControl.Transmitter.serializeBinaryToWriter
    );
  }
};


/**
 * optional Transmitter transmitter = 1;
 * @return {?proto.JoystickControl.Transmitter}
 */
proto.JoystickControl.GetTransmitterStreamReq.prototype.getTransmitter = function() {
  return /** @type{?proto.JoystickControl.Transmitter} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.Transmitter, 1));
};


/**
 * @param {?proto.JoystickControl.Transmitter|undefined} value
 * @return {!proto.JoystickControl.GetTransmitterStreamReq} returns this
*/
proto.JoystickControl.GetTransmitterStreamReq.prototype.setTransmitter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.GetTransmitterStreamReq} returns this
 */
proto.JoystickControl.GetTransmitterStreamReq.prototype.clearTransmitter = function() {
  return this.setTransmitter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.GetTransmitterStreamReq.prototype.hasTransmitter = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.JoystickControl.TransmitterChannels.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.TransmitterChannels.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.TransmitterChannels.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.TransmitterChannels} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.TransmitterChannels.toObject = function(includeInstance, msg) {
  var f, obj = {
    channelsList: jspb.Message.toObjectList(msg.getChannelsList(),
    proto.JoystickControl.TransmitterChannel.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.TransmitterChannels}
 */
proto.JoystickControl.TransmitterChannels.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.TransmitterChannels;
  return proto.JoystickControl.TransmitterChannels.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.TransmitterChannels} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.TransmitterChannels}
 */
proto.JoystickControl.TransmitterChannels.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.JoystickControl.TransmitterChannel;
      reader.readMessage(value,proto.JoystickControl.TransmitterChannel.deserializeBinaryFromReader);
      msg.addChannels(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.TransmitterChannels.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.TransmitterChannels.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.TransmitterChannels} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.TransmitterChannels.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.JoystickControl.TransmitterChannel.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TransmitterChannel channels = 1;
 * @return {!Array<!proto.JoystickControl.TransmitterChannel>}
 */
proto.JoystickControl.TransmitterChannels.prototype.getChannelsList = function() {
  return /** @type{!Array<!proto.JoystickControl.TransmitterChannel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.JoystickControl.TransmitterChannel, 1));
};


/**
 * @param {!Array<!proto.JoystickControl.TransmitterChannel>} value
 * @return {!proto.JoystickControl.TransmitterChannels} returns this
*/
proto.JoystickControl.TransmitterChannels.prototype.setChannelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.JoystickControl.TransmitterChannel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.JoystickControl.TransmitterChannel}
 */
proto.JoystickControl.TransmitterChannels.prototype.addChannels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.JoystickControl.TransmitterChannel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.JoystickControl.TransmitterChannels} returns this
 */
proto.JoystickControl.TransmitterChannels.prototype.clearChannelsList = function() {
  return this.setChannelsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.TransmitterChannel.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.TransmitterChannel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.TransmitterChannel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.TransmitterChannel.toObject = function(includeInstance, msg) {
  var f, obj = {
    channelNumber: jspb.Message.getFieldWithDefault(msg, 1, 0),
    channelValue: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.TransmitterChannel}
 */
proto.JoystickControl.TransmitterChannel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.TransmitterChannel;
  return proto.JoystickControl.TransmitterChannel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.TransmitterChannel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.TransmitterChannel}
 */
proto.JoystickControl.TransmitterChannel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChannelNumber(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChannelValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.TransmitterChannel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.TransmitterChannel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.TransmitterChannel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.TransmitterChannel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannelNumber();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getChannelValue();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 channel_number = 1;
 * @return {number}
 */
proto.JoystickControl.TransmitterChannel.prototype.getChannelNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.TransmitterChannel} returns this
 */
proto.JoystickControl.TransmitterChannel.prototype.setChannelNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 channel_value = 2;
 * @return {number}
 */
proto.JoystickControl.TransmitterChannel.prototype.getChannelValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.TransmitterChannel} returns this
 */
proto.JoystickControl.TransmitterChannel.prototype.setChannelValue = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.EvalState.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.EvalState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.EvalState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.EvalState.toObject = function(includeInstance, msg) {
  var f, obj = {
    isnan: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    value: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.EvalState}
 */
proto.JoystickControl.EvalState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.EvalState;
  return proto.JoystickControl.EvalState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.EvalState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.EvalState}
 */
proto.JoystickControl.EvalState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsnan(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.EvalState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.EvalState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.EvalState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.EvalState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsnan();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional bool isNaN = 2;
 * @return {boolean}
 */
proto.JoystickControl.EvalState.prototype.getIsnan = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.JoystickControl.EvalState} returns this
 */
proto.JoystickControl.EvalState.prototype.setIsnan = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional int32 value = 3;
 * @return {number}
 */
proto.JoystickControl.EvalState.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.EvalState} returns this
 */
proto.JoystickControl.EvalState.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.EvalStates.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.EvalStates.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.EvalStates} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.EvalStates.toObject = function(includeInstance, msg) {
  var f, obj = {
    statesMap: (f = msg.getStatesMap()) ? f.toObject(includeInstance, proto.JoystickControl.EvalState.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.EvalStates}
 */
proto.JoystickControl.EvalStates.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.EvalStates;
  return proto.JoystickControl.EvalStates.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.EvalStates} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.EvalStates}
 */
proto.JoystickControl.EvalStates.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getStatesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.JoystickControl.EvalState.deserializeBinaryFromReader, "", new proto.JoystickControl.EvalState());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.EvalStates.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.EvalStates.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.EvalStates} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.EvalStates.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.JoystickControl.EvalState.serializeBinaryToWriter);
  }
};


/**
 * map<string, EvalState> states = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.JoystickControl.EvalState>}
 */
proto.JoystickControl.EvalStates.prototype.getStatesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.JoystickControl.EvalState>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.JoystickControl.EvalState));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.JoystickControl.EvalStates} returns this
 */
proto.JoystickControl.EvalStates.prototype.clearStatesMap = function() {
  this.getStatesMap().clear();
  return this;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.LinkState.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.LinkState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.LinkState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.LinkState.toObject = function(includeInstance, msg) {
  var f, obj = {
    supervisorState: jspb.Message.getFieldWithDefault(msg, 1, 0),
    portState: jspb.Message.getFieldWithDefault(msg, 2, 0),
    receivedPacketsCount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    sentPacketsCount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    errorPacketsCount: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.LinkState}
 */
proto.JoystickControl.LinkState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.LinkState;
  return proto.JoystickControl.LinkState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.LinkState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.LinkState}
 */
proto.JoystickControl.LinkState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.JoystickControl.SupervisorState} */ (reader.readEnum());
      msg.setSupervisorState(value);
      break;
    case 2:
      var value = /** @type {!proto.JoystickControl.PortState} */ (reader.readEnum());
      msg.setPortState(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setReceivedPacketsCount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSentPacketsCount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setErrorPacketsCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.LinkState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.LinkState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.LinkState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.LinkState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSupervisorState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPortState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getReceivedPacketsCount();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getSentPacketsCount();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getErrorPacketsCount();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional SupervisorState supervisor_state = 1;
 * @return {!proto.JoystickControl.SupervisorState}
 */
proto.JoystickControl.LinkState.prototype.getSupervisorState = function() {
  return /** @type {!proto.JoystickControl.SupervisorState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.JoystickControl.SupervisorState} value
 * @return {!proto.JoystickControl.LinkState} returns this
 */
proto.JoystickControl.LinkState.prototype.setSupervisorState = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional PortState port_state = 2;
 * @return {!proto.JoystickControl.PortState}
 */
proto.JoystickControl.LinkState.prototype.getPortState = function() {
  return /** @type {!proto.JoystickControl.PortState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.JoystickControl.PortState} value
 * @return {!proto.JoystickControl.LinkState} returns this
 */
proto.JoystickControl.LinkState.prototype.setPortState = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint64 received_packets_count = 3;
 * @return {number}
 */
proto.JoystickControl.LinkState.prototype.getReceivedPacketsCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.LinkState} returns this
 */
proto.JoystickControl.LinkState.prototype.setReceivedPacketsCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 sent_packets_count = 4;
 * @return {number}
 */
proto.JoystickControl.LinkState.prototype.getSentPacketsCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.LinkState} returns this
 */
proto.JoystickControl.LinkState.prototype.setSentPacketsCount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 error_packets_count = 5;
 * @return {number}
 */
proto.JoystickControl.LinkState.prototype.getErrorPacketsCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.LinkState} returns this
 */
proto.JoystickControl.LinkState.prototype.setErrorPacketsCount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.JoystickControl.Telemetry.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]];

/**
 * @enum {number}
 */
proto.JoystickControl.Telemetry.DataCase = {
  DATA_NOT_SET: 0,
  LINK_STATS: 1,
  ATTITUDE: 2,
  BATTERY: 3,
  GPS: 4,
  FLIGHT_MODE: 5,
  SYNC: 6,
  LINK_TX: 7,
  LINK_RX: 8,
  BAROMETER: 9,
  VARIOMETER: 10,
  BAROMETER_VARIOMETER: 11,
  DEVICE_INFO: 12,
  DEVICE_FIELD_ENTRY: 13,
  DEVICE_FIELD: 14,
  DEVICE_LINK_STATUS: 15
};

/**
 * @return {proto.JoystickControl.Telemetry.DataCase}
 */
proto.JoystickControl.Telemetry.prototype.getDataCase = function() {
  return /** @type {proto.JoystickControl.Telemetry.DataCase} */(jspb.Message.computeOneofCase(this, proto.JoystickControl.Telemetry.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.Telemetry.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.Telemetry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.Telemetry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.Telemetry.toObject = function(includeInstance, msg) {
  var f, obj = {
    linkStats: (f = msg.getLinkStats()) && proto.JoystickControl.LinkStatsData.toObject(includeInstance, f),
    attitude: (f = msg.getAttitude()) && proto.JoystickControl.AttitudeData.toObject(includeInstance, f),
    battery: (f = msg.getBattery()) && proto.JoystickControl.BatteryData.toObject(includeInstance, f),
    gps: (f = msg.getGps()) && proto.JoystickControl.GPSData.toObject(includeInstance, f),
    flightMode: (f = msg.getFlightMode()) && proto.JoystickControl.FlightModeData.toObject(includeInstance, f),
    sync: (f = msg.getSync()) && proto.JoystickControl.SyncData.toObject(includeInstance, f),
    linkTx: (f = msg.getLinkTx()) && proto.JoystickControl.LinkTXData.toObject(includeInstance, f),
    linkRx: (f = msg.getLinkRx()) && proto.JoystickControl.LinkRXData.toObject(includeInstance, f),
    barometer: (f = msg.getBarometer()) && proto.JoystickControl.BarometerData.toObject(includeInstance, f),
    variometer: (f = msg.getVariometer()) && proto.JoystickControl.VariometerData.toObject(includeInstance, f),
    barometerVariometer: (f = msg.getBarometerVariometer()) && proto.JoystickControl.BarometerVariometerData.toObject(includeInstance, f),
    deviceInfo: (f = msg.getDeviceInfo()) && proto.JoystickControl.CRSFDeviceInfoData.toObject(includeInstance, f),
    deviceFieldEntry: (f = msg.getDeviceFieldEntry()) && proto.JoystickControl.CRSFDeviceFieldEntryData.toObject(includeInstance, f),
    deviceField: (f = msg.getDeviceField()) && proto.JoystickControl.CRSFDeviceFieldData.toObject(includeInstance, f),
    deviceLinkStatus: (f = msg.getDeviceLinkStatus()) && proto.JoystickControl.CRSFDeviceLinkStatusData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.Telemetry}
 */
proto.JoystickControl.Telemetry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.Telemetry;
  return proto.JoystickControl.Telemetry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.Telemetry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.Telemetry}
 */
proto.JoystickControl.Telemetry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.JoystickControl.LinkStatsData;
      reader.readMessage(value,proto.JoystickControl.LinkStatsData.deserializeBinaryFromReader);
      msg.setLinkStats(value);
      break;
    case 2:
      var value = new proto.JoystickControl.AttitudeData;
      reader.readMessage(value,proto.JoystickControl.AttitudeData.deserializeBinaryFromReader);
      msg.setAttitude(value);
      break;
    case 3:
      var value = new proto.JoystickControl.BatteryData;
      reader.readMessage(value,proto.JoystickControl.BatteryData.deserializeBinaryFromReader);
      msg.setBattery(value);
      break;
    case 4:
      var value = new proto.JoystickControl.GPSData;
      reader.readMessage(value,proto.JoystickControl.GPSData.deserializeBinaryFromReader);
      msg.setGps(value);
      break;
    case 5:
      var value = new proto.JoystickControl.FlightModeData;
      reader.readMessage(value,proto.JoystickControl.FlightModeData.deserializeBinaryFromReader);
      msg.setFlightMode(value);
      break;
    case 6:
      var value = new proto.JoystickControl.SyncData;
      reader.readMessage(value,proto.JoystickControl.SyncData.deserializeBinaryFromReader);
      msg.setSync(value);
      break;
    case 7:
      var value = new proto.JoystickControl.LinkTXData;
      reader.readMessage(value,proto.JoystickControl.LinkTXData.deserializeBinaryFromReader);
      msg.setLinkTx(value);
      break;
    case 8:
      var value = new proto.JoystickControl.LinkRXData;
      reader.readMessage(value,proto.JoystickControl.LinkRXData.deserializeBinaryFromReader);
      msg.setLinkRx(value);
      break;
    case 9:
      var value = new proto.JoystickControl.BarometerData;
      reader.readMessage(value,proto.JoystickControl.BarometerData.deserializeBinaryFromReader);
      msg.setBarometer(value);
      break;
    case 10:
      var value = new proto.JoystickControl.VariometerData;
      reader.readMessage(value,proto.JoystickControl.VariometerData.deserializeBinaryFromReader);
      msg.setVariometer(value);
      break;
    case 11:
      var value = new proto.JoystickControl.BarometerVariometerData;
      reader.readMessage(value,proto.JoystickControl.BarometerVariometerData.deserializeBinaryFromReader);
      msg.setBarometerVariometer(value);
      break;
    case 12:
      var value = new proto.JoystickControl.CRSFDeviceInfoData;
      reader.readMessage(value,proto.JoystickControl.CRSFDeviceInfoData.deserializeBinaryFromReader);
      msg.setDeviceInfo(value);
      break;
    case 13:
      var value = new proto.JoystickControl.CRSFDeviceFieldEntryData;
      reader.readMessage(value,proto.JoystickControl.CRSFDeviceFieldEntryData.deserializeBinaryFromReader);
      msg.setDeviceFieldEntry(value);
      break;
    case 14:
      var value = new proto.JoystickControl.CRSFDeviceFieldData;
      reader.readMessage(value,proto.JoystickControl.CRSFDeviceFieldData.deserializeBinaryFromReader);
      msg.setDeviceField(value);
      break;
    case 15:
      var value = new proto.JoystickControl.CRSFDeviceLinkStatusData;
      reader.readMessage(value,proto.JoystickControl.CRSFDeviceLinkStatusData.deserializeBinaryFromReader);
      msg.setDeviceLinkStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.Telemetry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.Telemetry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.Telemetry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.Telemetry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLinkStats();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.JoystickControl.LinkStatsData.serializeBinaryToWriter
    );
  }
  f = message.getAttitude();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.JoystickControl.AttitudeData.serializeBinaryToWriter
    );
  }
  f = message.getBattery();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.JoystickControl.BatteryData.serializeBinaryToWriter
    );
  }
  f = message.getGps();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.JoystickControl.GPSData.serializeBinaryToWriter
    );
  }
  f = message.getFlightMode();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.JoystickControl.FlightModeData.serializeBinaryToWriter
    );
  }
  f = message.getSync();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.JoystickControl.SyncData.serializeBinaryToWriter
    );
  }
  f = message.getLinkTx();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.JoystickControl.LinkTXData.serializeBinaryToWriter
    );
  }
  f = message.getLinkRx();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.JoystickControl.LinkRXData.serializeBinaryToWriter
    );
  }
  f = message.getBarometer();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.JoystickControl.BarometerData.serializeBinaryToWriter
    );
  }
  f = message.getVariometer();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.JoystickControl.VariometerData.serializeBinaryToWriter
    );
  }
  f = message.getBarometerVariometer();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.JoystickControl.BarometerVariometerData.serializeBinaryToWriter
    );
  }
  f = message.getDeviceInfo();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.JoystickControl.CRSFDeviceInfoData.serializeBinaryToWriter
    );
  }
  f = message.getDeviceFieldEntry();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.JoystickControl.CRSFDeviceFieldEntryData.serializeBinaryToWriter
    );
  }
  f = message.getDeviceField();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.JoystickControl.CRSFDeviceFieldData.serializeBinaryToWriter
    );
  }
  f = message.getDeviceLinkStatus();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.JoystickControl.CRSFDeviceLinkStatusData.serializeBinaryToWriter
    );
  }
};


/**
 * optional LinkStatsData link_stats = 1;
 * @return {?proto.JoystickControl.LinkStatsData}
 */
proto.JoystickControl.Telemetry.prototype.getLinkStats = function() {
  return /** @type{?proto.JoystickControl.LinkStatsData} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.LinkStatsData, 1));
};


/**
 * @param {?proto.JoystickControl.LinkStatsData|undefined} value
 * @return {!proto.JoystickControl.Telemetry} returns this
*/
proto.JoystickControl.Telemetry.prototype.setLinkStats = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.JoystickControl.Telemetry.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.Telemetry} returns this
 */
proto.JoystickControl.Telemetry.prototype.clearLinkStats = function() {
  return this.setLinkStats(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.Telemetry.prototype.hasLinkStats = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AttitudeData attitude = 2;
 * @return {?proto.JoystickControl.AttitudeData}
 */
proto.JoystickControl.Telemetry.prototype.getAttitude = function() {
  return /** @type{?proto.JoystickControl.AttitudeData} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.AttitudeData, 2));
};


/**
 * @param {?proto.JoystickControl.AttitudeData|undefined} value
 * @return {!proto.JoystickControl.Telemetry} returns this
*/
proto.JoystickControl.Telemetry.prototype.setAttitude = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.JoystickControl.Telemetry.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.Telemetry} returns this
 */
proto.JoystickControl.Telemetry.prototype.clearAttitude = function() {
  return this.setAttitude(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.Telemetry.prototype.hasAttitude = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional BatteryData battery = 3;
 * @return {?proto.JoystickControl.BatteryData}
 */
proto.JoystickControl.Telemetry.prototype.getBattery = function() {
  return /** @type{?proto.JoystickControl.BatteryData} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.BatteryData, 3));
};


/**
 * @param {?proto.JoystickControl.BatteryData|undefined} value
 * @return {!proto.JoystickControl.Telemetry} returns this
*/
proto.JoystickControl.Telemetry.prototype.setBattery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.JoystickControl.Telemetry.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.Telemetry} returns this
 */
proto.JoystickControl.Telemetry.prototype.clearBattery = function() {
  return this.setBattery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.Telemetry.prototype.hasBattery = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional GPSData gps = 4;
 * @return {?proto.JoystickControl.GPSData}
 */
proto.JoystickControl.Telemetry.prototype.getGps = function() {
  return /** @type{?proto.JoystickControl.GPSData} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.GPSData, 4));
};


/**
 * @param {?proto.JoystickControl.GPSData|undefined} value
 * @return {!proto.JoystickControl.Telemetry} returns this
*/
proto.JoystickControl.Telemetry.prototype.setGps = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.JoystickControl.Telemetry.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.Telemetry} returns this
 */
proto.JoystickControl.Telemetry.prototype.clearGps = function() {
  return this.setGps(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.Telemetry.prototype.hasGps = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional FlightModeData flight_mode = 5;
 * @return {?proto.JoystickControl.FlightModeData}
 */
proto.JoystickControl.Telemetry.prototype.getFlightMode = function() {
  return /** @type{?proto.JoystickControl.FlightModeData} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.FlightModeData, 5));
};


/**
 * @param {?proto.JoystickControl.FlightModeData|undefined} value
 * @return {!proto.JoystickControl.Telemetry} returns this
*/
proto.JoystickControl.Telemetry.prototype.setFlightMode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.JoystickControl.Telemetry.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.Telemetry} returns this
 */
proto.JoystickControl.Telemetry.prototype.clearFlightMode = function() {
  return this.setFlightMode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.Telemetry.prototype.hasFlightMode = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional SyncData sync = 6;
 * @return {?proto.JoystickControl.SyncData}
 */
proto.JoystickControl.Telemetry.prototype.getSync = function() {
  return /** @type{?proto.JoystickControl.SyncData} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.SyncData, 6));
};


/**
 * @param {?proto.JoystickControl.SyncData|undefined} value
 * @return {!proto.JoystickControl.Telemetry} returns this
*/
proto.JoystickControl.Telemetry.prototype.setSync = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.JoystickControl.Telemetry.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.Telemetry} returns this
 */
proto.JoystickControl.Telemetry.prototype.clearSync = function() {
  return this.setSync(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.Telemetry.prototype.hasSync = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional LinkTXData link_tx = 7;
 * @return {?proto.JoystickControl.LinkTXData}
 */
proto.JoystickControl.Telemetry.prototype.getLinkTx = function() {
  return /** @type{?proto.JoystickControl.LinkTXData} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.LinkTXData, 7));
};


/**
 * @param {?proto.JoystickControl.LinkTXData|undefined} value
 * @return {!proto.JoystickControl.Telemetry} returns this
*/
proto.JoystickControl.Telemetry.prototype.setLinkTx = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.JoystickControl.Telemetry.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.Telemetry} returns this
 */
proto.JoystickControl.Telemetry.prototype.clearLinkTx = function() {
  return this.setLinkTx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.Telemetry.prototype.hasLinkTx = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional LinkRXData link_rx = 8;
 * @return {?proto.JoystickControl.LinkRXData}
 */
proto.JoystickControl.Telemetry.prototype.getLinkRx = function() {
  return /** @type{?proto.JoystickControl.LinkRXData} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.LinkRXData, 8));
};


/**
 * @param {?proto.JoystickControl.LinkRXData|undefined} value
 * @return {!proto.JoystickControl.Telemetry} returns this
*/
proto.JoystickControl.Telemetry.prototype.setLinkRx = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.JoystickControl.Telemetry.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.Telemetry} returns this
 */
proto.JoystickControl.Telemetry.prototype.clearLinkRx = function() {
  return this.setLinkRx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.Telemetry.prototype.hasLinkRx = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional BarometerData barometer = 9;
 * @return {?proto.JoystickControl.BarometerData}
 */
proto.JoystickControl.Telemetry.prototype.getBarometer = function() {
  return /** @type{?proto.JoystickControl.BarometerData} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.BarometerData, 9));
};


/**
 * @param {?proto.JoystickControl.BarometerData|undefined} value
 * @return {!proto.JoystickControl.Telemetry} returns this
*/
proto.JoystickControl.Telemetry.prototype.setBarometer = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.JoystickControl.Telemetry.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.Telemetry} returns this
 */
proto.JoystickControl.Telemetry.prototype.clearBarometer = function() {
  return this.setBarometer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.Telemetry.prototype.hasBarometer = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional VariometerData variometer = 10;
 * @return {?proto.JoystickControl.VariometerData}
 */
proto.JoystickControl.Telemetry.prototype.getVariometer = function() {
  return /** @type{?proto.JoystickControl.VariometerData} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.VariometerData, 10));
};


/**
 * @param {?proto.JoystickControl.VariometerData|undefined} value
 * @return {!proto.JoystickControl.Telemetry} returns this
*/
proto.JoystickControl.Telemetry.prototype.setVariometer = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.JoystickControl.Telemetry.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.Telemetry} returns this
 */
proto.JoystickControl.Telemetry.prototype.clearVariometer = function() {
  return this.setVariometer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.Telemetry.prototype.hasVariometer = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional BarometerVariometerData barometer_variometer = 11;
 * @return {?proto.JoystickControl.BarometerVariometerData}
 */
proto.JoystickControl.Telemetry.prototype.getBarometerVariometer = function() {
  return /** @type{?proto.JoystickControl.BarometerVariometerData} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.BarometerVariometerData, 11));
};


/**
 * @param {?proto.JoystickControl.BarometerVariometerData|undefined} value
 * @return {!proto.JoystickControl.Telemetry} returns this
*/
proto.JoystickControl.Telemetry.prototype.setBarometerVariometer = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.JoystickControl.Telemetry.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.Telemetry} returns this
 */
proto.JoystickControl.Telemetry.prototype.clearBarometerVariometer = function() {
  return this.setBarometerVariometer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.Telemetry.prototype.hasBarometerVariometer = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional CRSFDeviceInfoData device_info = 12;
 * @return {?proto.JoystickControl.CRSFDeviceInfoData}
 */
proto.JoystickControl.Telemetry.prototype.getDeviceInfo = function() {
  return /** @type{?proto.JoystickControl.CRSFDeviceInfoData} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.CRSFDeviceInfoData, 12));
};


/**
 * @param {?proto.JoystickControl.CRSFDeviceInfoData|undefined} value
 * @return {!proto.JoystickControl.Telemetry} returns this
*/
proto.JoystickControl.Telemetry.prototype.setDeviceInfo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.JoystickControl.Telemetry.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.Telemetry} returns this
 */
proto.JoystickControl.Telemetry.prototype.clearDeviceInfo = function() {
  return this.setDeviceInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.Telemetry.prototype.hasDeviceInfo = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional CRSFDeviceFieldEntryData device_field_entry = 13;
 * @return {?proto.JoystickControl.CRSFDeviceFieldEntryData}
 */
proto.JoystickControl.Telemetry.prototype.getDeviceFieldEntry = function() {
  return /** @type{?proto.JoystickControl.CRSFDeviceFieldEntryData} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.CRSFDeviceFieldEntryData, 13));
};


/**
 * @param {?proto.JoystickControl.CRSFDeviceFieldEntryData|undefined} value
 * @return {!proto.JoystickControl.Telemetry} returns this
*/
proto.JoystickControl.Telemetry.prototype.setDeviceFieldEntry = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.JoystickControl.Telemetry.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.Telemetry} returns this
 */
proto.JoystickControl.Telemetry.prototype.clearDeviceFieldEntry = function() {
  return this.setDeviceFieldEntry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.Telemetry.prototype.hasDeviceFieldEntry = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional CRSFDeviceFieldData device_field = 14;
 * @return {?proto.JoystickControl.CRSFDeviceFieldData}
 */
proto.JoystickControl.Telemetry.prototype.getDeviceField = function() {
  return /** @type{?proto.JoystickControl.CRSFDeviceFieldData} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.CRSFDeviceFieldData, 14));
};


/**
 * @param {?proto.JoystickControl.CRSFDeviceFieldData|undefined} value
 * @return {!proto.JoystickControl.Telemetry} returns this
*/
proto.JoystickControl.Telemetry.prototype.setDeviceField = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.JoystickControl.Telemetry.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.Telemetry} returns this
 */
proto.JoystickControl.Telemetry.prototype.clearDeviceField = function() {
  return this.setDeviceField(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.Telemetry.prototype.hasDeviceField = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional CRSFDeviceLinkStatusData device_link_status = 15;
 * @return {?proto.JoystickControl.CRSFDeviceLinkStatusData}
 */
proto.JoystickControl.Telemetry.prototype.getDeviceLinkStatus = function() {
  return /** @type{?proto.JoystickControl.CRSFDeviceLinkStatusData} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.CRSFDeviceLinkStatusData, 15));
};


/**
 * @param {?proto.JoystickControl.CRSFDeviceLinkStatusData|undefined} value
 * @return {!proto.JoystickControl.Telemetry} returns this
*/
proto.JoystickControl.Telemetry.prototype.setDeviceLinkStatus = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.JoystickControl.Telemetry.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.Telemetry} returns this
 */
proto.JoystickControl.Telemetry.prototype.clearDeviceLinkStatus = function() {
  return this.setDeviceLinkStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.Telemetry.prototype.hasDeviceLinkStatus = function() {
  return jspb.Message.getField(this, 15) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.JoystickControl.CRSFDeviceLinkStatusData.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.CRSFDeviceLinkStatusData.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.CRSFDeviceLinkStatusData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.CRSFDeviceLinkStatusData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceLinkStatusData.toObject = function(includeInstance, msg) {
  var f, obj = {
    badPacketsCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    goodPacketsCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    flagsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    warningInfo: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.CRSFDeviceLinkStatusData}
 */
proto.JoystickControl.CRSFDeviceLinkStatusData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.CRSFDeviceLinkStatusData;
  return proto.JoystickControl.CRSFDeviceLinkStatusData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.CRSFDeviceLinkStatusData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.CRSFDeviceLinkStatusData}
 */
proto.JoystickControl.CRSFDeviceLinkStatusData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBadPacketsCount(value);
      break;
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGoodPacketsCount(value);
      break;
    case 3:
      var values = /** @type {!Array<!proto.JoystickControl.LinkStatusFlag>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addFlags(values[i]);
      }
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarningInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.CRSFDeviceLinkStatusData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.CRSFDeviceLinkStatusData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.CRSFDeviceLinkStatusData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceLinkStatusData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBadPacketsCount();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getGoodPacketsCount();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getFlagsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      3,
      f
    );
  }
  f = message.getWarningInfo();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint32 bad_packets_count = 2;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceLinkStatusData.prototype.getBadPacketsCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceLinkStatusData} returns this
 */
proto.JoystickControl.CRSFDeviceLinkStatusData.prototype.setBadPacketsCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 good_packets_count = 1;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceLinkStatusData.prototype.getGoodPacketsCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceLinkStatusData} returns this
 */
proto.JoystickControl.CRSFDeviceLinkStatusData.prototype.setGoodPacketsCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated LinkStatusFlag flags = 3;
 * @return {!Array<!proto.JoystickControl.LinkStatusFlag>}
 */
proto.JoystickControl.CRSFDeviceLinkStatusData.prototype.getFlagsList = function() {
  return /** @type {!Array<!proto.JoystickControl.LinkStatusFlag>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<!proto.JoystickControl.LinkStatusFlag>} value
 * @return {!proto.JoystickControl.CRSFDeviceLinkStatusData} returns this
 */
proto.JoystickControl.CRSFDeviceLinkStatusData.prototype.setFlagsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!proto.JoystickControl.LinkStatusFlag} value
 * @param {number=} opt_index
 * @return {!proto.JoystickControl.CRSFDeviceLinkStatusData} returns this
 */
proto.JoystickControl.CRSFDeviceLinkStatusData.prototype.addFlags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.JoystickControl.CRSFDeviceLinkStatusData} returns this
 */
proto.JoystickControl.CRSFDeviceLinkStatusData.prototype.clearFlagsList = function() {
  return this.setFlagsList([]);
};


/**
 * optional string warning_info = 4;
 * @return {string}
 */
proto.JoystickControl.CRSFDeviceLinkStatusData.prototype.getWarningInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.CRSFDeviceLinkStatusData} returns this
 */
proto.JoystickControl.CRSFDeviceLinkStatusData.prototype.setWarningInfo = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.CRSFDeviceFieldEntryData.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.CRSFDeviceFieldEntryData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.CRSFDeviceFieldEntryData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceFieldEntryData.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    chunksRemaining: jspb.Message.getFieldWithDefault(msg, 2, 0),
    parentId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    dataType: jspb.Message.getFieldWithDefault(msg, 4, 0),
    buffer: msg.getBuffer_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.CRSFDeviceFieldEntryData}
 */
proto.JoystickControl.CRSFDeviceFieldEntryData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.CRSFDeviceFieldEntryData;
  return proto.JoystickControl.CRSFDeviceFieldEntryData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.CRSFDeviceFieldEntryData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.CRSFDeviceFieldEntryData}
 */
proto.JoystickControl.CRSFDeviceFieldEntryData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setChunksRemaining(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setParentId(value);
      break;
    case 4:
      var value = /** @type {!proto.JoystickControl.CRSFDeviceFieldType} */ (reader.readEnum());
      msg.setDataType(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBuffer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.CRSFDeviceFieldEntryData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.CRSFDeviceFieldEntryData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.CRSFDeviceFieldEntryData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceFieldEntryData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getChunksRemaining();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getParentId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getDataType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getBuffer_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldEntryData.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldEntryData} returns this
 */
proto.JoystickControl.CRSFDeviceFieldEntryData.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 chunks_remaining = 2;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldEntryData.prototype.getChunksRemaining = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldEntryData} returns this
 */
proto.JoystickControl.CRSFDeviceFieldEntryData.prototype.setChunksRemaining = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 parent_id = 3;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldEntryData.prototype.getParentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldEntryData} returns this
 */
proto.JoystickControl.CRSFDeviceFieldEntryData.prototype.setParentId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional CRSFDeviceFieldType data_type = 4;
 * @return {!proto.JoystickControl.CRSFDeviceFieldType}
 */
proto.JoystickControl.CRSFDeviceFieldEntryData.prototype.getDataType = function() {
  return /** @type {!proto.JoystickControl.CRSFDeviceFieldType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.JoystickControl.CRSFDeviceFieldType} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldEntryData} returns this
 */
proto.JoystickControl.CRSFDeviceFieldEntryData.prototype.setDataType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional bytes buffer = 5;
 * @return {!(string|Uint8Array)}
 */
proto.JoystickControl.CRSFDeviceFieldEntryData.prototype.getBuffer = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes buffer = 5;
 * This is a type-conversion wrapper around `getBuffer()`
 * @return {string}
 */
proto.JoystickControl.CRSFDeviceFieldEntryData.prototype.getBuffer_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBuffer()));
};


/**
 * optional bytes buffer = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBuffer()`
 * @return {!Uint8Array}
 */
proto.JoystickControl.CRSFDeviceFieldEntryData.prototype.getBuffer_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBuffer()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldEntryData} returns this
 */
proto.JoystickControl.CRSFDeviceFieldEntryData.prototype.setBuffer = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.CRSFDeviceInfoData.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.CRSFDeviceInfoData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.CRSFDeviceInfoData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceInfoData.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    serialNumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    hardwareVersion: jspb.Message.getFieldWithDefault(msg, 4, ""),
    softwareVersion: jspb.Message.getFieldWithDefault(msg, 5, ""),
    fieldCount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    parameterVersion: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.CRSFDeviceInfoData}
 */
proto.JoystickControl.CRSFDeviceInfoData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.CRSFDeviceInfoData;
  return proto.JoystickControl.CRSFDeviceInfoData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.CRSFDeviceInfoData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.CRSFDeviceInfoData}
 */
proto.JoystickControl.CRSFDeviceInfoData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSerialNumber(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setHardwareVersion(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSoftwareVersion(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFieldCount(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setParameterVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.CRSFDeviceInfoData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.CRSFDeviceInfoData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.CRSFDeviceInfoData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceInfoData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSerialNumber();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getHardwareVersion();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSoftwareVersion();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getFieldCount();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getParameterVersion();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceInfoData.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceInfoData} returns this
 */
proto.JoystickControl.CRSFDeviceInfoData.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.JoystickControl.CRSFDeviceInfoData.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.CRSFDeviceInfoData} returns this
 */
proto.JoystickControl.CRSFDeviceInfoData.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 serial_number = 3;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceInfoData.prototype.getSerialNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceInfoData} returns this
 */
proto.JoystickControl.CRSFDeviceInfoData.prototype.setSerialNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string hardware_version = 4;
 * @return {string}
 */
proto.JoystickControl.CRSFDeviceInfoData.prototype.getHardwareVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.CRSFDeviceInfoData} returns this
 */
proto.JoystickControl.CRSFDeviceInfoData.prototype.setHardwareVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string software_version = 5;
 * @return {string}
 */
proto.JoystickControl.CRSFDeviceInfoData.prototype.getSoftwareVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.CRSFDeviceInfoData} returns this
 */
proto.JoystickControl.CRSFDeviceInfoData.prototype.setSoftwareVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint32 field_count = 6;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceInfoData.prototype.getFieldCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceInfoData} returns this
 */
proto.JoystickControl.CRSFDeviceInfoData.prototype.setFieldCount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 parameter_version = 7;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceInfoData.prototype.getParameterVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceInfoData} returns this
 */
proto.JoystickControl.CRSFDeviceInfoData.prototype.setParameterVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.BarometerData.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.BarometerData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.BarometerData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.BarometerData.toObject = function(includeInstance, msg) {
  var f, obj = {
    altitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.BarometerData}
 */
proto.JoystickControl.BarometerData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.BarometerData;
  return proto.JoystickControl.BarometerData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.BarometerData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.BarometerData}
 */
proto.JoystickControl.BarometerData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAltitude(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.BarometerData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.BarometerData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.BarometerData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.BarometerData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAltitude();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
};


/**
 * optional float altitude = 1;
 * @return {number}
 */
proto.JoystickControl.BarometerData.prototype.getAltitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.BarometerData} returns this
 */
proto.JoystickControl.BarometerData.prototype.setAltitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.VariometerData.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.VariometerData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.VariometerData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.VariometerData.toObject = function(includeInstance, msg) {
  var f, obj = {
    verticalSpeed: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.VariometerData}
 */
proto.JoystickControl.VariometerData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.VariometerData;
  return proto.JoystickControl.VariometerData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.VariometerData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.VariometerData}
 */
proto.JoystickControl.VariometerData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setVerticalSpeed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.VariometerData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.VariometerData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.VariometerData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.VariometerData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVerticalSpeed();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
};


/**
 * optional float vertical_speed = 1;
 * @return {number}
 */
proto.JoystickControl.VariometerData.prototype.getVerticalSpeed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.VariometerData} returns this
 */
proto.JoystickControl.VariometerData.prototype.setVerticalSpeed = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.BarometerVariometerData.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.BarometerVariometerData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.BarometerVariometerData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.BarometerVariometerData.toObject = function(includeInstance, msg) {
  var f, obj = {
    altitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    verticalSpeed: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.BarometerVariometerData}
 */
proto.JoystickControl.BarometerVariometerData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.BarometerVariometerData;
  return proto.JoystickControl.BarometerVariometerData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.BarometerVariometerData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.BarometerVariometerData}
 */
proto.JoystickControl.BarometerVariometerData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAltitude(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setVerticalSpeed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.BarometerVariometerData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.BarometerVariometerData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.BarometerVariometerData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.BarometerVariometerData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAltitude();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getVerticalSpeed();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional float altitude = 1;
 * @return {number}
 */
proto.JoystickControl.BarometerVariometerData.prototype.getAltitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.BarometerVariometerData} returns this
 */
proto.JoystickControl.BarometerVariometerData.prototype.setAltitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float vertical_speed = 2;
 * @return {number}
 */
proto.JoystickControl.BarometerVariometerData.prototype.getVerticalSpeed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.BarometerVariometerData} returns this
 */
proto.JoystickControl.BarometerVariometerData.prototype.setVerticalSpeed = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.FlightModeData.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.FlightModeData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.FlightModeData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.FlightModeData.toObject = function(includeInstance, msg) {
  var f, obj = {
    mode: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.FlightModeData}
 */
proto.JoystickControl.FlightModeData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.FlightModeData;
  return proto.JoystickControl.FlightModeData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.FlightModeData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.FlightModeData}
 */
proto.JoystickControl.FlightModeData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.FlightModeData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.FlightModeData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.FlightModeData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.FlightModeData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string mode = 1;
 * @return {string}
 */
proto.JoystickControl.FlightModeData.prototype.getMode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.FlightModeData} returns this
 */
proto.JoystickControl.FlightModeData.prototype.setMode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.LinkTXData.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.LinkTXData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.LinkTXData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.LinkTXData.toObject = function(includeInstance, msg) {
  var f, obj = {
    downlinkRssi: jspb.Message.getFieldWithDefault(msg, 1, 0),
    uplinkPower: jspb.Message.getFieldWithDefault(msg, 2, 0),
    uplinkFps: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.LinkTXData}
 */
proto.JoystickControl.LinkTXData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.LinkTXData;
  return proto.JoystickControl.LinkTXData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.LinkTXData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.LinkTXData}
 */
proto.JoystickControl.LinkTXData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDownlinkRssi(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUplinkPower(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUplinkFps(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.LinkTXData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.LinkTXData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.LinkTXData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.LinkTXData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDownlinkRssi();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getUplinkPower();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getUplinkFps();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 downlink_rssi = 1;
 * @return {number}
 */
proto.JoystickControl.LinkTXData.prototype.getDownlinkRssi = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.LinkTXData} returns this
 */
proto.JoystickControl.LinkTXData.prototype.setDownlinkRssi = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 uplink_power = 2;
 * @return {number}
 */
proto.JoystickControl.LinkTXData.prototype.getUplinkPower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.LinkTXData} returns this
 */
proto.JoystickControl.LinkTXData.prototype.setUplinkPower = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 uplink_fps = 3;
 * @return {number}
 */
proto.JoystickControl.LinkTXData.prototype.getUplinkFps = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.LinkTXData} returns this
 */
proto.JoystickControl.LinkTXData.prototype.setUplinkFps = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.LinkRXData.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.LinkRXData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.LinkRXData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.LinkRXData.toObject = function(includeInstance, msg) {
  var f, obj = {
    uplinkRssi: jspb.Message.getFieldWithDefault(msg, 1, 0),
    downlinkPower: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.LinkRXData}
 */
proto.JoystickControl.LinkRXData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.LinkRXData;
  return proto.JoystickControl.LinkRXData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.LinkRXData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.LinkRXData}
 */
proto.JoystickControl.LinkRXData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUplinkRssi(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDownlinkPower(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.LinkRXData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.LinkRXData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.LinkRXData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.LinkRXData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUplinkRssi();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getDownlinkPower();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 uplink_rssi = 1;
 * @return {number}
 */
proto.JoystickControl.LinkRXData.prototype.getUplinkRssi = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.LinkRXData} returns this
 */
proto.JoystickControl.LinkRXData.prototype.setUplinkRssi = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 downlink_power = 2;
 * @return {number}
 */
proto.JoystickControl.LinkRXData.prototype.getDownlinkPower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.LinkRXData} returns this
 */
proto.JoystickControl.LinkRXData.prototype.setDownlinkPower = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.SyncData.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.SyncData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.SyncData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.SyncData.toObject = function(includeInstance, msg) {
  var f, obj = {
    rate: jspb.Message.getFieldWithDefault(msg, 1, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.SyncData}
 */
proto.JoystickControl.SyncData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.SyncData;
  return proto.JoystickControl.SyncData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.SyncData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.SyncData}
 */
proto.JoystickControl.SyncData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRate(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.SyncData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.SyncData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.SyncData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.SyncData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRate();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 rate = 1;
 * @return {number}
 */
proto.JoystickControl.SyncData.prototype.getRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.SyncData} returns this
 */
proto.JoystickControl.SyncData.prototype.setRate = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 offset = 2;
 * @return {number}
 */
proto.JoystickControl.SyncData.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.SyncData} returns this
 */
proto.JoystickControl.SyncData.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.AttitudeData.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.AttitudeData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.AttitudeData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.AttitudeData.toObject = function(includeInstance, msg) {
  var f, obj = {
    pitch: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    roll: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    yaw: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.AttitudeData}
 */
proto.JoystickControl.AttitudeData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.AttitudeData;
  return proto.JoystickControl.AttitudeData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.AttitudeData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.AttitudeData}
 */
proto.JoystickControl.AttitudeData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPitch(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRoll(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setYaw(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.AttitudeData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.AttitudeData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.AttitudeData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.AttitudeData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPitch();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getRoll();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getYaw();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional float pitch = 1;
 * @return {number}
 */
proto.JoystickControl.AttitudeData.prototype.getPitch = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.AttitudeData} returns this
 */
proto.JoystickControl.AttitudeData.prototype.setPitch = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float roll = 2;
 * @return {number}
 */
proto.JoystickControl.AttitudeData.prototype.getRoll = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.AttitudeData} returns this
 */
proto.JoystickControl.AttitudeData.prototype.setRoll = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float yaw = 3;
 * @return {number}
 */
proto.JoystickControl.AttitudeData.prototype.getYaw = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.AttitudeData} returns this
 */
proto.JoystickControl.AttitudeData.prototype.setYaw = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.LinkStatsData.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.LinkStatsData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.LinkStatsData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.LinkStatsData.toObject = function(includeInstance, msg) {
  var f, obj = {
    uplinkRssi1: jspb.Message.getFieldWithDefault(msg, 1, 0),
    uplinkRssi2: jspb.Message.getFieldWithDefault(msg, 2, 0),
    uplinkLinkQuality: jspb.Message.getFieldWithDefault(msg, 3, 0),
    uplinkSnr: jspb.Message.getFieldWithDefault(msg, 4, 0),
    activeAntenna: jspb.Message.getFieldWithDefault(msg, 5, 0),
    radioFrequencyMode: jspb.Message.getFieldWithDefault(msg, 6, 0),
    uplinkPower: jspb.Message.getFieldWithDefault(msg, 7, 0),
    downlinkRssi: jspb.Message.getFieldWithDefault(msg, 8, 0),
    downlinkLinkQuality: jspb.Message.getFieldWithDefault(msg, 9, 0),
    downlinkSnr: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.LinkStatsData}
 */
proto.JoystickControl.LinkStatsData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.LinkStatsData;
  return proto.JoystickControl.LinkStatsData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.LinkStatsData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.LinkStatsData}
 */
proto.JoystickControl.LinkStatsData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUplinkRssi1(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUplinkRssi2(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUplinkLinkQuality(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUplinkSnr(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setActiveAntenna(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRadioFrequencyMode(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUplinkPower(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDownlinkRssi(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDownlinkLinkQuality(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDownlinkSnr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.LinkStatsData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.LinkStatsData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.LinkStatsData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.LinkStatsData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUplinkRssi1();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUplinkRssi2();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getUplinkLinkQuality();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getUplinkSnr();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getActiveAntenna();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getRadioFrequencyMode();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getUplinkPower();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getDownlinkRssi();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getDownlinkLinkQuality();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getDownlinkSnr();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
};


/**
 * optional int32 uplink_rssi1 = 1;
 * @return {number}
 */
proto.JoystickControl.LinkStatsData.prototype.getUplinkRssi1 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.LinkStatsData} returns this
 */
proto.JoystickControl.LinkStatsData.prototype.setUplinkRssi1 = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 uplink_rssi2 = 2;
 * @return {number}
 */
proto.JoystickControl.LinkStatsData.prototype.getUplinkRssi2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.LinkStatsData} returns this
 */
proto.JoystickControl.LinkStatsData.prototype.setUplinkRssi2 = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 uplink_link_quality = 3;
 * @return {number}
 */
proto.JoystickControl.LinkStatsData.prototype.getUplinkLinkQuality = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.LinkStatsData} returns this
 */
proto.JoystickControl.LinkStatsData.prototype.setUplinkLinkQuality = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 uplink_snr = 4;
 * @return {number}
 */
proto.JoystickControl.LinkStatsData.prototype.getUplinkSnr = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.LinkStatsData} returns this
 */
proto.JoystickControl.LinkStatsData.prototype.setUplinkSnr = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 active_antenna = 5;
 * @return {number}
 */
proto.JoystickControl.LinkStatsData.prototype.getActiveAntenna = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.LinkStatsData} returns this
 */
proto.JoystickControl.LinkStatsData.prototype.setActiveAntenna = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 radio_frequency_mode = 6;
 * @return {number}
 */
proto.JoystickControl.LinkStatsData.prototype.getRadioFrequencyMode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.LinkStatsData} returns this
 */
proto.JoystickControl.LinkStatsData.prototype.setRadioFrequencyMode = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 uplink_power = 7;
 * @return {number}
 */
proto.JoystickControl.LinkStatsData.prototype.getUplinkPower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.LinkStatsData} returns this
 */
proto.JoystickControl.LinkStatsData.prototype.setUplinkPower = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 downlink_rssi = 8;
 * @return {number}
 */
proto.JoystickControl.LinkStatsData.prototype.getDownlinkRssi = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.LinkStatsData} returns this
 */
proto.JoystickControl.LinkStatsData.prototype.setDownlinkRssi = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint32 downlink_link_quality = 9;
 * @return {number}
 */
proto.JoystickControl.LinkStatsData.prototype.getDownlinkLinkQuality = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.LinkStatsData} returns this
 */
proto.JoystickControl.LinkStatsData.prototype.setDownlinkLinkQuality = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int32 downlink_snr = 10;
 * @return {number}
 */
proto.JoystickControl.LinkStatsData.prototype.getDownlinkSnr = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.LinkStatsData} returns this
 */
proto.JoystickControl.LinkStatsData.prototype.setDownlinkSnr = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.GPSData.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.GPSData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.GPSData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.GPSData.toObject = function(includeInstance, msg) {
  var f, obj = {
    latitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    longitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    groundSpeed: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    heading: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    altitude: jspb.Message.getFieldWithDefault(msg, 5, 0),
    satellites: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.GPSData}
 */
proto.JoystickControl.GPSData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.GPSData;
  return proto.JoystickControl.GPSData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.GPSData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.GPSData}
 */
proto.JoystickControl.GPSData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLatitude(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLongitude(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setGroundSpeed(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setHeading(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAltitude(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSatellites(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.GPSData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.GPSData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.GPSData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.GPSData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLatitude();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getLongitude();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getGroundSpeed();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getHeading();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getAltitude();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getSatellites();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional float latitude = 1;
 * @return {number}
 */
proto.JoystickControl.GPSData.prototype.getLatitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.GPSData} returns this
 */
proto.JoystickControl.GPSData.prototype.setLatitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float longitude = 2;
 * @return {number}
 */
proto.JoystickControl.GPSData.prototype.getLongitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.GPSData} returns this
 */
proto.JoystickControl.GPSData.prototype.setLongitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float ground_speed = 3;
 * @return {number}
 */
proto.JoystickControl.GPSData.prototype.getGroundSpeed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.GPSData} returns this
 */
proto.JoystickControl.GPSData.prototype.setGroundSpeed = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float heading = 4;
 * @return {number}
 */
proto.JoystickControl.GPSData.prototype.getHeading = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.GPSData} returns this
 */
proto.JoystickControl.GPSData.prototype.setHeading = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional int32 altitude = 5;
 * @return {number}
 */
proto.JoystickControl.GPSData.prototype.getAltitude = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.GPSData} returns this
 */
proto.JoystickControl.GPSData.prototype.setAltitude = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 satellites = 6;
 * @return {number}
 */
proto.JoystickControl.GPSData.prototype.getSatellites = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.GPSData} returns this
 */
proto.JoystickControl.GPSData.prototype.setSatellites = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.BatteryData.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.BatteryData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.BatteryData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.BatteryData.toObject = function(includeInstance, msg) {
  var f, obj = {
    voltage: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    current: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    fuel: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    remaining: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.BatteryData}
 */
proto.JoystickControl.BatteryData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.BatteryData;
  return proto.JoystickControl.BatteryData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.BatteryData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.BatteryData}
 */
proto.JoystickControl.BatteryData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setVoltage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setCurrent(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFuel(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRemaining(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.BatteryData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.BatteryData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.BatteryData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.BatteryData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVoltage();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getCurrent();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getFuel();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getRemaining();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
};


/**
 * optional float voltage = 1;
 * @return {number}
 */
proto.JoystickControl.BatteryData.prototype.getVoltage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.BatteryData} returns this
 */
proto.JoystickControl.BatteryData.prototype.setVoltage = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float current = 2;
 * @return {number}
 */
proto.JoystickControl.BatteryData.prototype.getCurrent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.BatteryData} returns this
 */
proto.JoystickControl.BatteryData.prototype.setCurrent = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float fuel = 3;
 * @return {number}
 */
proto.JoystickControl.BatteryData.prototype.getFuel = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.BatteryData} returns this
 */
proto.JoystickControl.BatteryData.prototype.setFuel = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float remaining = 4;
 * @return {number}
 */
proto.JoystickControl.BatteryData.prototype.getRemaining = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.BatteryData} returns this
 */
proto.JoystickControl.BatteryData.prototype.setRemaining = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.GetAppInfoRes.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.GetAppInfoRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.GetAppInfoRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.GetAppInfoRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    releaseTag: jspb.Message.getFieldWithDefault(msg, 1, ""),
    commitHash: jspb.Message.getFieldWithDefault(msg, 2, ""),
    branchName: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.GetAppInfoRes}
 */
proto.JoystickControl.GetAppInfoRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.GetAppInfoRes;
  return proto.JoystickControl.GetAppInfoRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.GetAppInfoRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.GetAppInfoRes}
 */
proto.JoystickControl.GetAppInfoRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReleaseTag(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommitHash(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBranchName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.GetAppInfoRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.GetAppInfoRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.GetAppInfoRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.GetAppInfoRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReleaseTag();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCommitHash();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBranchName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string release_tag = 1;
 * @return {string}
 */
proto.JoystickControl.GetAppInfoRes.prototype.getReleaseTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.GetAppInfoRes} returns this
 */
proto.JoystickControl.GetAppInfoRes.prototype.setReleaseTag = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string commit_hash = 2;
 * @return {string}
 */
proto.JoystickControl.GetAppInfoRes.prototype.getCommitHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.GetAppInfoRes} returns this
 */
proto.JoystickControl.GetAppInfoRes.prototype.setCommitHash = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string branch_name = 3;
 * @return {string}
 */
proto.JoystickControl.GetAppInfoRes.prototype.getBranchName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.GetAppInfoRes} returns this
 */
proto.JoystickControl.GetAppInfoRes.prototype.setBranchName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.JoystickControl.GetCRSFDevicesRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.GetCRSFDevicesRes.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.GetCRSFDevicesRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.GetCRSFDevicesRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.GetCRSFDevicesRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    devicesList: jspb.Message.toObjectList(msg.getDevicesList(),
    proto.JoystickControl.CRSFDeviceInfoData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.GetCRSFDevicesRes}
 */
proto.JoystickControl.GetCRSFDevicesRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.GetCRSFDevicesRes;
  return proto.JoystickControl.GetCRSFDevicesRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.GetCRSFDevicesRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.GetCRSFDevicesRes}
 */
proto.JoystickControl.GetCRSFDevicesRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.JoystickControl.CRSFDeviceInfoData;
      reader.readMessage(value,proto.JoystickControl.CRSFDeviceInfoData.deserializeBinaryFromReader);
      msg.addDevices(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.GetCRSFDevicesRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.GetCRSFDevicesRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.GetCRSFDevicesRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.GetCRSFDevicesRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDevicesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.JoystickControl.CRSFDeviceInfoData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CRSFDeviceInfoData devices = 1;
 * @return {!Array<!proto.JoystickControl.CRSFDeviceInfoData>}
 */
proto.JoystickControl.GetCRSFDevicesRes.prototype.getDevicesList = function() {
  return /** @type{!Array<!proto.JoystickControl.CRSFDeviceInfoData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.JoystickControl.CRSFDeviceInfoData, 1));
};


/**
 * @param {!Array<!proto.JoystickControl.CRSFDeviceInfoData>} value
 * @return {!proto.JoystickControl.GetCRSFDevicesRes} returns this
*/
proto.JoystickControl.GetCRSFDevicesRes.prototype.setDevicesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.JoystickControl.CRSFDeviceInfoData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.JoystickControl.CRSFDeviceInfoData}
 */
proto.JoystickControl.GetCRSFDevicesRes.prototype.addDevices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.JoystickControl.CRSFDeviceInfoData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.JoystickControl.GetCRSFDevicesRes} returns this
 */
proto.JoystickControl.GetCRSFDevicesRes.prototype.clearDevicesList = function() {
  return this.setDevicesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.JoystickControl.GetCRSFDeviceFieldsRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.GetCRSFDeviceFieldsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.GetCRSFDeviceFieldsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.GetCRSFDeviceFieldsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.GetCRSFDeviceFieldsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldsList: jspb.Message.toObjectList(msg.getFieldsList(),
    proto.JoystickControl.CRSFDeviceFieldData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.GetCRSFDeviceFieldsRes}
 */
proto.JoystickControl.GetCRSFDeviceFieldsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.GetCRSFDeviceFieldsRes;
  return proto.JoystickControl.GetCRSFDeviceFieldsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.GetCRSFDeviceFieldsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.GetCRSFDeviceFieldsRes}
 */
proto.JoystickControl.GetCRSFDeviceFieldsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.JoystickControl.CRSFDeviceFieldData;
      reader.readMessage(value,proto.JoystickControl.CRSFDeviceFieldData.deserializeBinaryFromReader);
      msg.addFields(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.GetCRSFDeviceFieldsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.GetCRSFDeviceFieldsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.GetCRSFDeviceFieldsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.GetCRSFDeviceFieldsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.JoystickControl.CRSFDeviceFieldData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CRSFDeviceFieldData fields = 1;
 * @return {!Array<!proto.JoystickControl.CRSFDeviceFieldData>}
 */
proto.JoystickControl.GetCRSFDeviceFieldsRes.prototype.getFieldsList = function() {
  return /** @type{!Array<!proto.JoystickControl.CRSFDeviceFieldData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.JoystickControl.CRSFDeviceFieldData, 1));
};


/**
 * @param {!Array<!proto.JoystickControl.CRSFDeviceFieldData>} value
 * @return {!proto.JoystickControl.GetCRSFDeviceFieldsRes} returns this
*/
proto.JoystickControl.GetCRSFDeviceFieldsRes.prototype.setFieldsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.JoystickControl.CRSFDeviceFieldData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.JoystickControl.CRSFDeviceFieldData}
 */
proto.JoystickControl.GetCRSFDeviceFieldsRes.prototype.addFields = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.JoystickControl.CRSFDeviceFieldData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.JoystickControl.GetCRSFDeviceFieldsRes} returns this
 */
proto.JoystickControl.GetCRSFDeviceFieldsRes.prototype.clearFieldsList = function() {
  return this.setFieldsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.JoystickControl.CRSFDeviceFieldData.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14]];

/**
 * @enum {number}
 */
proto.JoystickControl.CRSFDeviceFieldData.DataCase = {
  DATA_NOT_SET: 0,
  UINT8: 1,
  INT8: 2,
  UINT16: 3,
  INT16: 4,
  UINT32: 5,
  INT32: 6,
  UINT64: 7,
  INT64: 8,
  FLOAT: 9,
  TEXT_SELECT: 10,
  STRING: 11,
  FOLDER: 12,
  INFO: 13,
  COMMAND: 14
};

/**
 * @return {proto.JoystickControl.CRSFDeviceFieldData.DataCase}
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.getDataCase = function() {
  return /** @type {proto.JoystickControl.CRSFDeviceFieldData.DataCase} */(jspb.Message.computeOneofCase(this, proto.JoystickControl.CRSFDeviceFieldData.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.CRSFDeviceFieldData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.CRSFDeviceFieldData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceFieldData.toObject = function(includeInstance, msg) {
  var f, obj = {
    uint8: (f = msg.getUint8()) && proto.JoystickControl.CRSFDeviceFieldUint8.toObject(includeInstance, f),
    int8: (f = msg.getInt8()) && proto.JoystickControl.CRSFDeviceFieldInt8.toObject(includeInstance, f),
    uint16: (f = msg.getUint16()) && proto.JoystickControl.CRSFDeviceFieldUint16.toObject(includeInstance, f),
    int16: (f = msg.getInt16()) && proto.JoystickControl.CRSFDeviceFieldInt16.toObject(includeInstance, f),
    uint32: (f = msg.getUint32()) && proto.JoystickControl.CRSFDeviceFieldUint32.toObject(includeInstance, f),
    int32: (f = msg.getInt32()) && proto.JoystickControl.CRSFDeviceFieldInt32.toObject(includeInstance, f),
    uint64: (f = msg.getUint64()) && proto.JoystickControl.CRSFDeviceFieldUint64.toObject(includeInstance, f),
    int64: (f = msg.getInt64()) && proto.JoystickControl.CRSFDeviceFieldInt64.toObject(includeInstance, f),
    pb_float: (f = msg.getFloat()) && proto.JoystickControl.CRSFDeviceFieldFloat.toObject(includeInstance, f),
    textSelect: (f = msg.getTextSelect()) && proto.JoystickControl.CRSFDeviceFieldTextSelect.toObject(includeInstance, f),
    string: (f = msg.getString()) && proto.JoystickControl.CRSFDeviceFieldString.toObject(includeInstance, f),
    folder: (f = msg.getFolder()) && proto.JoystickControl.CRSFDeviceFieldFolder.toObject(includeInstance, f),
    info: (f = msg.getInfo()) && proto.JoystickControl.CRSFDeviceFieldInfo.toObject(includeInstance, f),
    command: (f = msg.getCommand()) && proto.JoystickControl.CRSFDeviceFieldCommand.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.CRSFDeviceFieldData}
 */
proto.JoystickControl.CRSFDeviceFieldData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.CRSFDeviceFieldData;
  return proto.JoystickControl.CRSFDeviceFieldData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.CRSFDeviceFieldData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.CRSFDeviceFieldData}
 */
proto.JoystickControl.CRSFDeviceFieldData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.JoystickControl.CRSFDeviceFieldUint8;
      reader.readMessage(value,proto.JoystickControl.CRSFDeviceFieldUint8.deserializeBinaryFromReader);
      msg.setUint8(value);
      break;
    case 2:
      var value = new proto.JoystickControl.CRSFDeviceFieldInt8;
      reader.readMessage(value,proto.JoystickControl.CRSFDeviceFieldInt8.deserializeBinaryFromReader);
      msg.setInt8(value);
      break;
    case 3:
      var value = new proto.JoystickControl.CRSFDeviceFieldUint16;
      reader.readMessage(value,proto.JoystickControl.CRSFDeviceFieldUint16.deserializeBinaryFromReader);
      msg.setUint16(value);
      break;
    case 4:
      var value = new proto.JoystickControl.CRSFDeviceFieldInt16;
      reader.readMessage(value,proto.JoystickControl.CRSFDeviceFieldInt16.deserializeBinaryFromReader);
      msg.setInt16(value);
      break;
    case 5:
      var value = new proto.JoystickControl.CRSFDeviceFieldUint32;
      reader.readMessage(value,proto.JoystickControl.CRSFDeviceFieldUint32.deserializeBinaryFromReader);
      msg.setUint32(value);
      break;
    case 6:
      var value = new proto.JoystickControl.CRSFDeviceFieldInt32;
      reader.readMessage(value,proto.JoystickControl.CRSFDeviceFieldInt32.deserializeBinaryFromReader);
      msg.setInt32(value);
      break;
    case 7:
      var value = new proto.JoystickControl.CRSFDeviceFieldUint64;
      reader.readMessage(value,proto.JoystickControl.CRSFDeviceFieldUint64.deserializeBinaryFromReader);
      msg.setUint64(value);
      break;
    case 8:
      var value = new proto.JoystickControl.CRSFDeviceFieldInt64;
      reader.readMessage(value,proto.JoystickControl.CRSFDeviceFieldInt64.deserializeBinaryFromReader);
      msg.setInt64(value);
      break;
    case 9:
      var value = new proto.JoystickControl.CRSFDeviceFieldFloat;
      reader.readMessage(value,proto.JoystickControl.CRSFDeviceFieldFloat.deserializeBinaryFromReader);
      msg.setFloat(value);
      break;
    case 10:
      var value = new proto.JoystickControl.CRSFDeviceFieldTextSelect;
      reader.readMessage(value,proto.JoystickControl.CRSFDeviceFieldTextSelect.deserializeBinaryFromReader);
      msg.setTextSelect(value);
      break;
    case 11:
      var value = new proto.JoystickControl.CRSFDeviceFieldString;
      reader.readMessage(value,proto.JoystickControl.CRSFDeviceFieldString.deserializeBinaryFromReader);
      msg.setString(value);
      break;
    case 12:
      var value = new proto.JoystickControl.CRSFDeviceFieldFolder;
      reader.readMessage(value,proto.JoystickControl.CRSFDeviceFieldFolder.deserializeBinaryFromReader);
      msg.setFolder(value);
      break;
    case 13:
      var value = new proto.JoystickControl.CRSFDeviceFieldInfo;
      reader.readMessage(value,proto.JoystickControl.CRSFDeviceFieldInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 14:
      var value = new proto.JoystickControl.CRSFDeviceFieldCommand;
      reader.readMessage(value,proto.JoystickControl.CRSFDeviceFieldCommand.deserializeBinaryFromReader);
      msg.setCommand(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.CRSFDeviceFieldData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.CRSFDeviceFieldData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceFieldData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUint8();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.JoystickControl.CRSFDeviceFieldUint8.serializeBinaryToWriter
    );
  }
  f = message.getInt8();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.JoystickControl.CRSFDeviceFieldInt8.serializeBinaryToWriter
    );
  }
  f = message.getUint16();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.JoystickControl.CRSFDeviceFieldUint16.serializeBinaryToWriter
    );
  }
  f = message.getInt16();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.JoystickControl.CRSFDeviceFieldInt16.serializeBinaryToWriter
    );
  }
  f = message.getUint32();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.JoystickControl.CRSFDeviceFieldUint32.serializeBinaryToWriter
    );
  }
  f = message.getInt32();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.JoystickControl.CRSFDeviceFieldInt32.serializeBinaryToWriter
    );
  }
  f = message.getUint64();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.JoystickControl.CRSFDeviceFieldUint64.serializeBinaryToWriter
    );
  }
  f = message.getInt64();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.JoystickControl.CRSFDeviceFieldInt64.serializeBinaryToWriter
    );
  }
  f = message.getFloat();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.JoystickControl.CRSFDeviceFieldFloat.serializeBinaryToWriter
    );
  }
  f = message.getTextSelect();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.JoystickControl.CRSFDeviceFieldTextSelect.serializeBinaryToWriter
    );
  }
  f = message.getString();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.JoystickControl.CRSFDeviceFieldString.serializeBinaryToWriter
    );
  }
  f = message.getFolder();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.JoystickControl.CRSFDeviceFieldFolder.serializeBinaryToWriter
    );
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.JoystickControl.CRSFDeviceFieldInfo.serializeBinaryToWriter
    );
  }
  f = message.getCommand();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.JoystickControl.CRSFDeviceFieldCommand.serializeBinaryToWriter
    );
  }
};


/**
 * optional CRSFDeviceFieldUint8 uint8 = 1;
 * @return {?proto.JoystickControl.CRSFDeviceFieldUint8}
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.getUint8 = function() {
  return /** @type{?proto.JoystickControl.CRSFDeviceFieldUint8} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.CRSFDeviceFieldUint8, 1));
};


/**
 * @param {?proto.JoystickControl.CRSFDeviceFieldUint8|undefined} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldData} returns this
*/
proto.JoystickControl.CRSFDeviceFieldData.prototype.setUint8 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.JoystickControl.CRSFDeviceFieldData.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.CRSFDeviceFieldData} returns this
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.clearUint8 = function() {
  return this.setUint8(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.hasUint8 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CRSFDeviceFieldInt8 int8 = 2;
 * @return {?proto.JoystickControl.CRSFDeviceFieldInt8}
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.getInt8 = function() {
  return /** @type{?proto.JoystickControl.CRSFDeviceFieldInt8} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.CRSFDeviceFieldInt8, 2));
};


/**
 * @param {?proto.JoystickControl.CRSFDeviceFieldInt8|undefined} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldData} returns this
*/
proto.JoystickControl.CRSFDeviceFieldData.prototype.setInt8 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.JoystickControl.CRSFDeviceFieldData.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.CRSFDeviceFieldData} returns this
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.clearInt8 = function() {
  return this.setInt8(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.hasInt8 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CRSFDeviceFieldUint16 uint16 = 3;
 * @return {?proto.JoystickControl.CRSFDeviceFieldUint16}
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.getUint16 = function() {
  return /** @type{?proto.JoystickControl.CRSFDeviceFieldUint16} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.CRSFDeviceFieldUint16, 3));
};


/**
 * @param {?proto.JoystickControl.CRSFDeviceFieldUint16|undefined} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldData} returns this
*/
proto.JoystickControl.CRSFDeviceFieldData.prototype.setUint16 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.JoystickControl.CRSFDeviceFieldData.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.CRSFDeviceFieldData} returns this
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.clearUint16 = function() {
  return this.setUint16(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.hasUint16 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CRSFDeviceFieldInt16 int16 = 4;
 * @return {?proto.JoystickControl.CRSFDeviceFieldInt16}
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.getInt16 = function() {
  return /** @type{?proto.JoystickControl.CRSFDeviceFieldInt16} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.CRSFDeviceFieldInt16, 4));
};


/**
 * @param {?proto.JoystickControl.CRSFDeviceFieldInt16|undefined} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldData} returns this
*/
proto.JoystickControl.CRSFDeviceFieldData.prototype.setInt16 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.JoystickControl.CRSFDeviceFieldData.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.CRSFDeviceFieldData} returns this
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.clearInt16 = function() {
  return this.setInt16(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.hasInt16 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CRSFDeviceFieldUint32 uint32 = 5;
 * @return {?proto.JoystickControl.CRSFDeviceFieldUint32}
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.getUint32 = function() {
  return /** @type{?proto.JoystickControl.CRSFDeviceFieldUint32} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.CRSFDeviceFieldUint32, 5));
};


/**
 * @param {?proto.JoystickControl.CRSFDeviceFieldUint32|undefined} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldData} returns this
*/
proto.JoystickControl.CRSFDeviceFieldData.prototype.setUint32 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.JoystickControl.CRSFDeviceFieldData.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.CRSFDeviceFieldData} returns this
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.clearUint32 = function() {
  return this.setUint32(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.hasUint32 = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional CRSFDeviceFieldInt32 int32 = 6;
 * @return {?proto.JoystickControl.CRSFDeviceFieldInt32}
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.getInt32 = function() {
  return /** @type{?proto.JoystickControl.CRSFDeviceFieldInt32} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.CRSFDeviceFieldInt32, 6));
};


/**
 * @param {?proto.JoystickControl.CRSFDeviceFieldInt32|undefined} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldData} returns this
*/
proto.JoystickControl.CRSFDeviceFieldData.prototype.setInt32 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.JoystickControl.CRSFDeviceFieldData.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.CRSFDeviceFieldData} returns this
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.clearInt32 = function() {
  return this.setInt32(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.hasInt32 = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional CRSFDeviceFieldUint64 uint64 = 7;
 * @return {?proto.JoystickControl.CRSFDeviceFieldUint64}
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.getUint64 = function() {
  return /** @type{?proto.JoystickControl.CRSFDeviceFieldUint64} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.CRSFDeviceFieldUint64, 7));
};


/**
 * @param {?proto.JoystickControl.CRSFDeviceFieldUint64|undefined} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldData} returns this
*/
proto.JoystickControl.CRSFDeviceFieldData.prototype.setUint64 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.JoystickControl.CRSFDeviceFieldData.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.CRSFDeviceFieldData} returns this
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.clearUint64 = function() {
  return this.setUint64(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.hasUint64 = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional CRSFDeviceFieldInt64 int64 = 8;
 * @return {?proto.JoystickControl.CRSFDeviceFieldInt64}
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.getInt64 = function() {
  return /** @type{?proto.JoystickControl.CRSFDeviceFieldInt64} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.CRSFDeviceFieldInt64, 8));
};


/**
 * @param {?proto.JoystickControl.CRSFDeviceFieldInt64|undefined} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldData} returns this
*/
proto.JoystickControl.CRSFDeviceFieldData.prototype.setInt64 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.JoystickControl.CRSFDeviceFieldData.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.CRSFDeviceFieldData} returns this
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.clearInt64 = function() {
  return this.setInt64(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.hasInt64 = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional CRSFDeviceFieldFloat float = 9;
 * @return {?proto.JoystickControl.CRSFDeviceFieldFloat}
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.getFloat = function() {
  return /** @type{?proto.JoystickControl.CRSFDeviceFieldFloat} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.CRSFDeviceFieldFloat, 9));
};


/**
 * @param {?proto.JoystickControl.CRSFDeviceFieldFloat|undefined} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldData} returns this
*/
proto.JoystickControl.CRSFDeviceFieldData.prototype.setFloat = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.JoystickControl.CRSFDeviceFieldData.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.CRSFDeviceFieldData} returns this
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.clearFloat = function() {
  return this.setFloat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.hasFloat = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional CRSFDeviceFieldTextSelect text_select = 10;
 * @return {?proto.JoystickControl.CRSFDeviceFieldTextSelect}
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.getTextSelect = function() {
  return /** @type{?proto.JoystickControl.CRSFDeviceFieldTextSelect} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.CRSFDeviceFieldTextSelect, 10));
};


/**
 * @param {?proto.JoystickControl.CRSFDeviceFieldTextSelect|undefined} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldData} returns this
*/
proto.JoystickControl.CRSFDeviceFieldData.prototype.setTextSelect = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.JoystickControl.CRSFDeviceFieldData.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.CRSFDeviceFieldData} returns this
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.clearTextSelect = function() {
  return this.setTextSelect(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.hasTextSelect = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional CRSFDeviceFieldString string = 11;
 * @return {?proto.JoystickControl.CRSFDeviceFieldString}
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.getString = function() {
  return /** @type{?proto.JoystickControl.CRSFDeviceFieldString} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.CRSFDeviceFieldString, 11));
};


/**
 * @param {?proto.JoystickControl.CRSFDeviceFieldString|undefined} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldData} returns this
*/
proto.JoystickControl.CRSFDeviceFieldData.prototype.setString = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.JoystickControl.CRSFDeviceFieldData.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.CRSFDeviceFieldData} returns this
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.clearString = function() {
  return this.setString(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.hasString = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional CRSFDeviceFieldFolder folder = 12;
 * @return {?proto.JoystickControl.CRSFDeviceFieldFolder}
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.getFolder = function() {
  return /** @type{?proto.JoystickControl.CRSFDeviceFieldFolder} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.CRSFDeviceFieldFolder, 12));
};


/**
 * @param {?proto.JoystickControl.CRSFDeviceFieldFolder|undefined} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldData} returns this
*/
proto.JoystickControl.CRSFDeviceFieldData.prototype.setFolder = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.JoystickControl.CRSFDeviceFieldData.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.CRSFDeviceFieldData} returns this
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.clearFolder = function() {
  return this.setFolder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.hasFolder = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional CRSFDeviceFieldInfo info = 13;
 * @return {?proto.JoystickControl.CRSFDeviceFieldInfo}
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.getInfo = function() {
  return /** @type{?proto.JoystickControl.CRSFDeviceFieldInfo} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.CRSFDeviceFieldInfo, 13));
};


/**
 * @param {?proto.JoystickControl.CRSFDeviceFieldInfo|undefined} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldData} returns this
*/
proto.JoystickControl.CRSFDeviceFieldData.prototype.setInfo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.JoystickControl.CRSFDeviceFieldData.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.CRSFDeviceFieldData} returns this
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional CRSFDeviceFieldCommand command = 14;
 * @return {?proto.JoystickControl.CRSFDeviceFieldCommand}
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.getCommand = function() {
  return /** @type{?proto.JoystickControl.CRSFDeviceFieldCommand} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.CRSFDeviceFieldCommand, 14));
};


/**
 * @param {?proto.JoystickControl.CRSFDeviceFieldCommand|undefined} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldData} returns this
*/
proto.JoystickControl.CRSFDeviceFieldData.prototype.setCommand = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.JoystickControl.CRSFDeviceFieldData.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.CRSFDeviceFieldData} returns this
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.clearCommand = function() {
  return this.setCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.CRSFDeviceFieldData.prototype.hasCommand = function() {
  return jspb.Message.getField(this, 14) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.CRSFDeviceFieldUint8.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.CRSFDeviceFieldUint8.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.CRSFDeviceFieldUint8} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceFieldUint8.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    parentId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    value: jspb.Message.getFieldWithDefault(msg, 5, 0),
    min: jspb.Message.getFieldWithDefault(msg, 6, 0),
    max: jspb.Message.getFieldWithDefault(msg, 7, 0),
    pb_default: jspb.Message.getFieldWithDefault(msg, 8, 0),
    units: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint8}
 */
proto.JoystickControl.CRSFDeviceFieldUint8.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.CRSFDeviceFieldUint8;
  return proto.JoystickControl.CRSFDeviceFieldUint8.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.CRSFDeviceFieldUint8} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint8}
 */
proto.JoystickControl.CRSFDeviceFieldUint8.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!proto.JoystickControl.CRSFDeviceFieldType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setParentId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setValue(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMin(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMax(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDefault(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.CRSFDeviceFieldUint8.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.CRSFDeviceFieldUint8.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.CRSFDeviceFieldUint8} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceFieldUint8.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getParentId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getMin();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getMax();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getDefault();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getUnits();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.JoystickControl.CRSFDeviceFieldUint8.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint8} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint8.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CRSFDeviceFieldType type = 2;
 * @return {!proto.JoystickControl.CRSFDeviceFieldType}
 */
proto.JoystickControl.CRSFDeviceFieldUint8.prototype.getType = function() {
  return /** @type {!proto.JoystickControl.CRSFDeviceFieldType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.JoystickControl.CRSFDeviceFieldType} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint8} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint8.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint32 id = 3;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldUint8.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint8} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint8.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 parent_id = 4;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldUint8.prototype.getParentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint8} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint8.prototype.setParentId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 value = 5;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldUint8.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint8} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint8.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 min = 6;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldUint8.prototype.getMin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint8} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint8.prototype.setMin = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 max = 7;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldUint8.prototype.getMax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint8} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint8.prototype.setMax = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 default = 8;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldUint8.prototype.getDefault = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint8} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint8.prototype.setDefault = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string units = 9;
 * @return {string}
 */
proto.JoystickControl.CRSFDeviceFieldUint8.prototype.getUnits = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint8} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint8.prototype.setUnits = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.CRSFDeviceFieldInt8.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.CRSFDeviceFieldInt8.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.CRSFDeviceFieldInt8} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceFieldInt8.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    parentId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    value: jspb.Message.getFieldWithDefault(msg, 5, 0),
    min: jspb.Message.getFieldWithDefault(msg, 6, 0),
    max: jspb.Message.getFieldWithDefault(msg, 7, 0),
    pb_default: jspb.Message.getFieldWithDefault(msg, 8, 0),
    units: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt8}
 */
proto.JoystickControl.CRSFDeviceFieldInt8.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.CRSFDeviceFieldInt8;
  return proto.JoystickControl.CRSFDeviceFieldInt8.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.CRSFDeviceFieldInt8} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt8}
 */
proto.JoystickControl.CRSFDeviceFieldInt8.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!proto.JoystickControl.CRSFDeviceFieldType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setParentId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setValue(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMin(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMax(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDefault(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.CRSFDeviceFieldInt8.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.CRSFDeviceFieldInt8.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.CRSFDeviceFieldInt8} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceFieldInt8.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getParentId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getMin();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getMax();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getDefault();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getUnits();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.JoystickControl.CRSFDeviceFieldInt8.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt8} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt8.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CRSFDeviceFieldType type = 2;
 * @return {!proto.JoystickControl.CRSFDeviceFieldType}
 */
proto.JoystickControl.CRSFDeviceFieldInt8.prototype.getType = function() {
  return /** @type {!proto.JoystickControl.CRSFDeviceFieldType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.JoystickControl.CRSFDeviceFieldType} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt8} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt8.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint32 id = 3;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldInt8.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt8} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt8.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 parent_id = 4;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldInt8.prototype.getParentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt8} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt8.prototype.setParentId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 value = 5;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldInt8.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt8} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt8.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 min = 6;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldInt8.prototype.getMin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt8} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt8.prototype.setMin = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 max = 7;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldInt8.prototype.getMax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt8} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt8.prototype.setMax = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 default = 8;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldInt8.prototype.getDefault = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt8} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt8.prototype.setDefault = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string units = 9;
 * @return {string}
 */
proto.JoystickControl.CRSFDeviceFieldInt8.prototype.getUnits = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt8} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt8.prototype.setUnits = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.CRSFDeviceFieldUint16.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.CRSFDeviceFieldUint16.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.CRSFDeviceFieldUint16} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceFieldUint16.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    parentId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    value: jspb.Message.getFieldWithDefault(msg, 5, 0),
    min: jspb.Message.getFieldWithDefault(msg, 6, 0),
    max: jspb.Message.getFieldWithDefault(msg, 7, 0),
    pb_default: jspb.Message.getFieldWithDefault(msg, 8, 0),
    units: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint16}
 */
proto.JoystickControl.CRSFDeviceFieldUint16.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.CRSFDeviceFieldUint16;
  return proto.JoystickControl.CRSFDeviceFieldUint16.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.CRSFDeviceFieldUint16} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint16}
 */
proto.JoystickControl.CRSFDeviceFieldUint16.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!proto.JoystickControl.CRSFDeviceFieldType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setParentId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setValue(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMin(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMax(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDefault(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.CRSFDeviceFieldUint16.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.CRSFDeviceFieldUint16.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.CRSFDeviceFieldUint16} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceFieldUint16.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getParentId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getMin();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getMax();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getDefault();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getUnits();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.JoystickControl.CRSFDeviceFieldUint16.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint16} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint16.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CRSFDeviceFieldType type = 2;
 * @return {!proto.JoystickControl.CRSFDeviceFieldType}
 */
proto.JoystickControl.CRSFDeviceFieldUint16.prototype.getType = function() {
  return /** @type {!proto.JoystickControl.CRSFDeviceFieldType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.JoystickControl.CRSFDeviceFieldType} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint16} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint16.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint32 id = 3;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldUint16.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint16} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint16.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 parent_id = 4;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldUint16.prototype.getParentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint16} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint16.prototype.setParentId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 value = 5;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldUint16.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint16} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint16.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 min = 6;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldUint16.prototype.getMin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint16} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint16.prototype.setMin = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 max = 7;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldUint16.prototype.getMax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint16} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint16.prototype.setMax = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 default = 8;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldUint16.prototype.getDefault = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint16} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint16.prototype.setDefault = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string units = 9;
 * @return {string}
 */
proto.JoystickControl.CRSFDeviceFieldUint16.prototype.getUnits = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint16} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint16.prototype.setUnits = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.CRSFDeviceFieldInt16.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.CRSFDeviceFieldInt16.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.CRSFDeviceFieldInt16} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceFieldInt16.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    parentId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    value: jspb.Message.getFieldWithDefault(msg, 5, 0),
    min: jspb.Message.getFieldWithDefault(msg, 6, 0),
    max: jspb.Message.getFieldWithDefault(msg, 7, 0),
    pb_default: jspb.Message.getFieldWithDefault(msg, 8, 0),
    units: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt16}
 */
proto.JoystickControl.CRSFDeviceFieldInt16.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.CRSFDeviceFieldInt16;
  return proto.JoystickControl.CRSFDeviceFieldInt16.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.CRSFDeviceFieldInt16} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt16}
 */
proto.JoystickControl.CRSFDeviceFieldInt16.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!proto.JoystickControl.CRSFDeviceFieldType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setParentId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setValue(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMin(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMax(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDefault(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.CRSFDeviceFieldInt16.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.CRSFDeviceFieldInt16.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.CRSFDeviceFieldInt16} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceFieldInt16.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getParentId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getMin();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getMax();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getDefault();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getUnits();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.JoystickControl.CRSFDeviceFieldInt16.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt16} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt16.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CRSFDeviceFieldType type = 2;
 * @return {!proto.JoystickControl.CRSFDeviceFieldType}
 */
proto.JoystickControl.CRSFDeviceFieldInt16.prototype.getType = function() {
  return /** @type {!proto.JoystickControl.CRSFDeviceFieldType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.JoystickControl.CRSFDeviceFieldType} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt16} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt16.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint32 id = 3;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldInt16.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt16} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt16.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 parent_id = 4;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldInt16.prototype.getParentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt16} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt16.prototype.setParentId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 value = 5;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldInt16.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt16} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt16.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 min = 6;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldInt16.prototype.getMin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt16} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt16.prototype.setMin = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 max = 7;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldInt16.prototype.getMax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt16} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt16.prototype.setMax = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 default = 8;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldInt16.prototype.getDefault = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt16} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt16.prototype.setDefault = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string units = 9;
 * @return {string}
 */
proto.JoystickControl.CRSFDeviceFieldInt16.prototype.getUnits = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt16} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt16.prototype.setUnits = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.CRSFDeviceFieldUint32.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.CRSFDeviceFieldUint32.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.CRSFDeviceFieldUint32} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceFieldUint32.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    parentId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    value: jspb.Message.getFieldWithDefault(msg, 5, 0),
    min: jspb.Message.getFieldWithDefault(msg, 6, 0),
    max: jspb.Message.getFieldWithDefault(msg, 7, 0),
    pb_default: jspb.Message.getFieldWithDefault(msg, 8, 0),
    units: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint32}
 */
proto.JoystickControl.CRSFDeviceFieldUint32.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.CRSFDeviceFieldUint32;
  return proto.JoystickControl.CRSFDeviceFieldUint32.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.CRSFDeviceFieldUint32} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint32}
 */
proto.JoystickControl.CRSFDeviceFieldUint32.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!proto.JoystickControl.CRSFDeviceFieldType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setParentId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setValue(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMin(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMax(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDefault(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.CRSFDeviceFieldUint32.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.CRSFDeviceFieldUint32.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.CRSFDeviceFieldUint32} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceFieldUint32.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getParentId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getMin();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getMax();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getDefault();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getUnits();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.JoystickControl.CRSFDeviceFieldUint32.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint32} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint32.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CRSFDeviceFieldType type = 2;
 * @return {!proto.JoystickControl.CRSFDeviceFieldType}
 */
proto.JoystickControl.CRSFDeviceFieldUint32.prototype.getType = function() {
  return /** @type {!proto.JoystickControl.CRSFDeviceFieldType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.JoystickControl.CRSFDeviceFieldType} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint32} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint32.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint32 id = 3;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldUint32.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint32} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint32.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 parent_id = 4;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldUint32.prototype.getParentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint32} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint32.prototype.setParentId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 value = 5;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldUint32.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint32} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint32.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 min = 6;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldUint32.prototype.getMin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint32} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint32.prototype.setMin = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 max = 7;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldUint32.prototype.getMax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint32} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint32.prototype.setMax = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 default = 8;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldUint32.prototype.getDefault = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint32} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint32.prototype.setDefault = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string units = 9;
 * @return {string}
 */
proto.JoystickControl.CRSFDeviceFieldUint32.prototype.getUnits = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint32} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint32.prototype.setUnits = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.CRSFDeviceFieldInt32.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.CRSFDeviceFieldInt32.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.CRSFDeviceFieldInt32} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceFieldInt32.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    parentId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    value: jspb.Message.getFieldWithDefault(msg, 5, 0),
    min: jspb.Message.getFieldWithDefault(msg, 6, 0),
    max: jspb.Message.getFieldWithDefault(msg, 7, 0),
    pb_default: jspb.Message.getFieldWithDefault(msg, 8, 0),
    units: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt32}
 */
proto.JoystickControl.CRSFDeviceFieldInt32.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.CRSFDeviceFieldInt32;
  return proto.JoystickControl.CRSFDeviceFieldInt32.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.CRSFDeviceFieldInt32} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt32}
 */
proto.JoystickControl.CRSFDeviceFieldInt32.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!proto.JoystickControl.CRSFDeviceFieldType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setParentId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setValue(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMin(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMax(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDefault(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.CRSFDeviceFieldInt32.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.CRSFDeviceFieldInt32.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.CRSFDeviceFieldInt32} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceFieldInt32.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getParentId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getMin();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getMax();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getDefault();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getUnits();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.JoystickControl.CRSFDeviceFieldInt32.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt32} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt32.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CRSFDeviceFieldType type = 2;
 * @return {!proto.JoystickControl.CRSFDeviceFieldType}
 */
proto.JoystickControl.CRSFDeviceFieldInt32.prototype.getType = function() {
  return /** @type {!proto.JoystickControl.CRSFDeviceFieldType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.JoystickControl.CRSFDeviceFieldType} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt32} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt32.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint32 id = 3;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldInt32.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt32} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt32.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 parent_id = 4;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldInt32.prototype.getParentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt32} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt32.prototype.setParentId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 value = 5;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldInt32.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt32} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt32.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 min = 6;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldInt32.prototype.getMin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt32} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt32.prototype.setMin = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 max = 7;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldInt32.prototype.getMax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt32} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt32.prototype.setMax = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 default = 8;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldInt32.prototype.getDefault = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt32} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt32.prototype.setDefault = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string units = 9;
 * @return {string}
 */
proto.JoystickControl.CRSFDeviceFieldInt32.prototype.getUnits = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt32} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt32.prototype.setUnits = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.CRSFDeviceFieldUint64.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.CRSFDeviceFieldUint64.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.CRSFDeviceFieldUint64} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceFieldUint64.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    parentId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    value: jspb.Message.getFieldWithDefault(msg, 5, 0),
    min: jspb.Message.getFieldWithDefault(msg, 6, 0),
    max: jspb.Message.getFieldWithDefault(msg, 7, 0),
    pb_default: jspb.Message.getFieldWithDefault(msg, 8, 0),
    units: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint64}
 */
proto.JoystickControl.CRSFDeviceFieldUint64.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.CRSFDeviceFieldUint64;
  return proto.JoystickControl.CRSFDeviceFieldUint64.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.CRSFDeviceFieldUint64} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint64}
 */
proto.JoystickControl.CRSFDeviceFieldUint64.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!proto.JoystickControl.CRSFDeviceFieldType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setParentId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setValue(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMin(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMax(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDefault(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.CRSFDeviceFieldUint64.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.CRSFDeviceFieldUint64.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.CRSFDeviceFieldUint64} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceFieldUint64.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getParentId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getMin();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getMax();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getDefault();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getUnits();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.JoystickControl.CRSFDeviceFieldUint64.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint64} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint64.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CRSFDeviceFieldType type = 2;
 * @return {!proto.JoystickControl.CRSFDeviceFieldType}
 */
proto.JoystickControl.CRSFDeviceFieldUint64.prototype.getType = function() {
  return /** @type {!proto.JoystickControl.CRSFDeviceFieldType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.JoystickControl.CRSFDeviceFieldType} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint64} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint64.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint32 id = 3;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldUint64.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint64} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint64.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 parent_id = 4;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldUint64.prototype.getParentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint64} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint64.prototype.setParentId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 value = 5;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldUint64.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint64} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint64.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 min = 6;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldUint64.prototype.getMin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint64} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint64.prototype.setMin = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 max = 7;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldUint64.prototype.getMax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint64} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint64.prototype.setMax = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint64 default = 8;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldUint64.prototype.getDefault = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint64} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint64.prototype.setDefault = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string units = 9;
 * @return {string}
 */
proto.JoystickControl.CRSFDeviceFieldUint64.prototype.getUnits = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldUint64} returns this
 */
proto.JoystickControl.CRSFDeviceFieldUint64.prototype.setUnits = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.CRSFDeviceFieldInt64.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.CRSFDeviceFieldInt64.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.CRSFDeviceFieldInt64} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceFieldInt64.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    parentId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    value: jspb.Message.getFieldWithDefault(msg, 5, 0),
    min: jspb.Message.getFieldWithDefault(msg, 6, 0),
    max: jspb.Message.getFieldWithDefault(msg, 7, 0),
    pb_default: jspb.Message.getFieldWithDefault(msg, 8, 0),
    units: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt64}
 */
proto.JoystickControl.CRSFDeviceFieldInt64.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.CRSFDeviceFieldInt64;
  return proto.JoystickControl.CRSFDeviceFieldInt64.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.CRSFDeviceFieldInt64} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt64}
 */
proto.JoystickControl.CRSFDeviceFieldInt64.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!proto.JoystickControl.CRSFDeviceFieldType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setParentId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setValue(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMin(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMax(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDefault(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.CRSFDeviceFieldInt64.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.CRSFDeviceFieldInt64.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.CRSFDeviceFieldInt64} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceFieldInt64.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getParentId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getMin();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getMax();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getDefault();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getUnits();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.JoystickControl.CRSFDeviceFieldInt64.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt64} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt64.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CRSFDeviceFieldType type = 2;
 * @return {!proto.JoystickControl.CRSFDeviceFieldType}
 */
proto.JoystickControl.CRSFDeviceFieldInt64.prototype.getType = function() {
  return /** @type {!proto.JoystickControl.CRSFDeviceFieldType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.JoystickControl.CRSFDeviceFieldType} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt64} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt64.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint32 id = 3;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldInt64.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt64} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt64.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 parent_id = 4;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldInt64.prototype.getParentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt64} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt64.prototype.setParentId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 value = 5;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldInt64.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt64} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt64.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 min = 6;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldInt64.prototype.getMin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt64} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt64.prototype.setMin = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 max = 7;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldInt64.prototype.getMax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt64} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt64.prototype.setMax = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 default = 8;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldInt64.prototype.getDefault = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt64} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt64.prototype.setDefault = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string units = 9;
 * @return {string}
 */
proto.JoystickControl.CRSFDeviceFieldInt64.prototype.getUnits = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInt64} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInt64.prototype.setUnits = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.CRSFDeviceFieldFloat.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.CRSFDeviceFieldFloat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.CRSFDeviceFieldFloat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceFieldFloat.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    parentId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    min: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    max: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    pb_default: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    units: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.CRSFDeviceFieldFloat}
 */
proto.JoystickControl.CRSFDeviceFieldFloat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.CRSFDeviceFieldFloat;
  return proto.JoystickControl.CRSFDeviceFieldFloat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.CRSFDeviceFieldFloat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.CRSFDeviceFieldFloat}
 */
proto.JoystickControl.CRSFDeviceFieldFloat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!proto.JoystickControl.CRSFDeviceFieldType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setParentId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMin(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMax(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDefault(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.CRSFDeviceFieldFloat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.CRSFDeviceFieldFloat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.CRSFDeviceFieldFloat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceFieldFloat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getParentId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getMin();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getMax();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getDefault();
  if (f !== 0.0) {
    writer.writeFloat(
      8,
      f
    );
  }
  f = message.getUnits();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.JoystickControl.CRSFDeviceFieldFloat.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldFloat} returns this
 */
proto.JoystickControl.CRSFDeviceFieldFloat.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CRSFDeviceFieldType type = 2;
 * @return {!proto.JoystickControl.CRSFDeviceFieldType}
 */
proto.JoystickControl.CRSFDeviceFieldFloat.prototype.getType = function() {
  return /** @type {!proto.JoystickControl.CRSFDeviceFieldType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.JoystickControl.CRSFDeviceFieldType} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldFloat} returns this
 */
proto.JoystickControl.CRSFDeviceFieldFloat.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint32 id = 3;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldFloat.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldFloat} returns this
 */
proto.JoystickControl.CRSFDeviceFieldFloat.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 parent_id = 4;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldFloat.prototype.getParentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldFloat} returns this
 */
proto.JoystickControl.CRSFDeviceFieldFloat.prototype.setParentId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional float value = 5;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldFloat.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldFloat} returns this
 */
proto.JoystickControl.CRSFDeviceFieldFloat.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional float min = 6;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldFloat.prototype.getMin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldFloat} returns this
 */
proto.JoystickControl.CRSFDeviceFieldFloat.prototype.setMin = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional float max = 7;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldFloat.prototype.getMax = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldFloat} returns this
 */
proto.JoystickControl.CRSFDeviceFieldFloat.prototype.setMax = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional float default = 8;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldFloat.prototype.getDefault = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldFloat} returns this
 */
proto.JoystickControl.CRSFDeviceFieldFloat.prototype.setDefault = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional string units = 9;
 * @return {string}
 */
proto.JoystickControl.CRSFDeviceFieldFloat.prototype.getUnits = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldFloat} returns this
 */
proto.JoystickControl.CRSFDeviceFieldFloat.prototype.setUnits = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.CRSFDeviceFieldInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.CRSFDeviceFieldInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.CRSFDeviceFieldInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceFieldInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    parentId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    value: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.CRSFDeviceFieldInfo}
 */
proto.JoystickControl.CRSFDeviceFieldInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.CRSFDeviceFieldInfo;
  return proto.JoystickControl.CRSFDeviceFieldInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.CRSFDeviceFieldInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.CRSFDeviceFieldInfo}
 */
proto.JoystickControl.CRSFDeviceFieldInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!proto.JoystickControl.CRSFDeviceFieldType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setParentId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.CRSFDeviceFieldInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.CRSFDeviceFieldInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.CRSFDeviceFieldInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceFieldInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getParentId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.JoystickControl.CRSFDeviceFieldInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInfo} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CRSFDeviceFieldType type = 2;
 * @return {!proto.JoystickControl.CRSFDeviceFieldType}
 */
proto.JoystickControl.CRSFDeviceFieldInfo.prototype.getType = function() {
  return /** @type {!proto.JoystickControl.CRSFDeviceFieldType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.JoystickControl.CRSFDeviceFieldType} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInfo} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInfo.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint32 id = 3;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldInfo.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInfo} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 parent_id = 4;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldInfo.prototype.getParentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInfo} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInfo.prototype.setParentId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string value = 5;
 * @return {string}
 */
proto.JoystickControl.CRSFDeviceFieldInfo.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldInfo} returns this
 */
proto.JoystickControl.CRSFDeviceFieldInfo.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.CRSFDeviceFieldString.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.CRSFDeviceFieldString.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.CRSFDeviceFieldString} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceFieldString.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    parentId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    value: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.CRSFDeviceFieldString}
 */
proto.JoystickControl.CRSFDeviceFieldString.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.CRSFDeviceFieldString;
  return proto.JoystickControl.CRSFDeviceFieldString.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.CRSFDeviceFieldString} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.CRSFDeviceFieldString}
 */
proto.JoystickControl.CRSFDeviceFieldString.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!proto.JoystickControl.CRSFDeviceFieldType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setParentId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.CRSFDeviceFieldString.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.CRSFDeviceFieldString.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.CRSFDeviceFieldString} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceFieldString.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getParentId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.JoystickControl.CRSFDeviceFieldString.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldString} returns this
 */
proto.JoystickControl.CRSFDeviceFieldString.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CRSFDeviceFieldType type = 2;
 * @return {!proto.JoystickControl.CRSFDeviceFieldType}
 */
proto.JoystickControl.CRSFDeviceFieldString.prototype.getType = function() {
  return /** @type {!proto.JoystickControl.CRSFDeviceFieldType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.JoystickControl.CRSFDeviceFieldType} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldString} returns this
 */
proto.JoystickControl.CRSFDeviceFieldString.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint32 id = 3;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldString.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldString} returns this
 */
proto.JoystickControl.CRSFDeviceFieldString.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 parent_id = 4;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldString.prototype.getParentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldString} returns this
 */
proto.JoystickControl.CRSFDeviceFieldString.prototype.setParentId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string value = 5;
 * @return {string}
 */
proto.JoystickControl.CRSFDeviceFieldString.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldString} returns this
 */
proto.JoystickControl.CRSFDeviceFieldString.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.CRSFDeviceFieldFolder.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.CRSFDeviceFieldFolder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.CRSFDeviceFieldFolder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceFieldFolder.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    parentId: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.CRSFDeviceFieldFolder}
 */
proto.JoystickControl.CRSFDeviceFieldFolder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.CRSFDeviceFieldFolder;
  return proto.JoystickControl.CRSFDeviceFieldFolder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.CRSFDeviceFieldFolder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.CRSFDeviceFieldFolder}
 */
proto.JoystickControl.CRSFDeviceFieldFolder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!proto.JoystickControl.CRSFDeviceFieldType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setParentId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.CRSFDeviceFieldFolder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.CRSFDeviceFieldFolder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.CRSFDeviceFieldFolder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceFieldFolder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getParentId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.JoystickControl.CRSFDeviceFieldFolder.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldFolder} returns this
 */
proto.JoystickControl.CRSFDeviceFieldFolder.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CRSFDeviceFieldType type = 2;
 * @return {!proto.JoystickControl.CRSFDeviceFieldType}
 */
proto.JoystickControl.CRSFDeviceFieldFolder.prototype.getType = function() {
  return /** @type {!proto.JoystickControl.CRSFDeviceFieldType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.JoystickControl.CRSFDeviceFieldType} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldFolder} returns this
 */
proto.JoystickControl.CRSFDeviceFieldFolder.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint32 id = 3;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldFolder.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldFolder} returns this
 */
proto.JoystickControl.CRSFDeviceFieldFolder.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 parent_id = 4;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldFolder.prototype.getParentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldFolder} returns this
 */
proto.JoystickControl.CRSFDeviceFieldFolder.prototype.setParentId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.CRSFDeviceFieldCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.CRSFDeviceFieldCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.CRSFDeviceFieldCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceFieldCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    parentId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    step: jspb.Message.getFieldWithDefault(msg, 5, 0),
    timeout: jspb.Message.getFieldWithDefault(msg, 6, 0),
    message: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.CRSFDeviceFieldCommand}
 */
proto.JoystickControl.CRSFDeviceFieldCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.CRSFDeviceFieldCommand;
  return proto.JoystickControl.CRSFDeviceFieldCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.CRSFDeviceFieldCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.CRSFDeviceFieldCommand}
 */
proto.JoystickControl.CRSFDeviceFieldCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!proto.JoystickControl.CRSFDeviceFieldType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setParentId(value);
      break;
    case 5:
      var value = /** @type {!proto.JoystickControl.CRSFDeviceFieldCommandStep} */ (reader.readEnum());
      msg.setStep(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimeout(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.CRSFDeviceFieldCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.CRSFDeviceFieldCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.CRSFDeviceFieldCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceFieldCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getParentId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getStep();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getTimeout();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.JoystickControl.CRSFDeviceFieldCommand.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldCommand} returns this
 */
proto.JoystickControl.CRSFDeviceFieldCommand.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CRSFDeviceFieldType type = 2;
 * @return {!proto.JoystickControl.CRSFDeviceFieldType}
 */
proto.JoystickControl.CRSFDeviceFieldCommand.prototype.getType = function() {
  return /** @type {!proto.JoystickControl.CRSFDeviceFieldType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.JoystickControl.CRSFDeviceFieldType} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldCommand} returns this
 */
proto.JoystickControl.CRSFDeviceFieldCommand.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint32 id = 3;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldCommand.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldCommand} returns this
 */
proto.JoystickControl.CRSFDeviceFieldCommand.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 parent_id = 4;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldCommand.prototype.getParentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldCommand} returns this
 */
proto.JoystickControl.CRSFDeviceFieldCommand.prototype.setParentId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional CRSFDeviceFieldCommandStep step = 5;
 * @return {!proto.JoystickControl.CRSFDeviceFieldCommandStep}
 */
proto.JoystickControl.CRSFDeviceFieldCommand.prototype.getStep = function() {
  return /** @type {!proto.JoystickControl.CRSFDeviceFieldCommandStep} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.JoystickControl.CRSFDeviceFieldCommandStep} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldCommand} returns this
 */
proto.JoystickControl.CRSFDeviceFieldCommand.prototype.setStep = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional uint32 timeout = 6;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldCommand.prototype.getTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldCommand} returns this
 */
proto.JoystickControl.CRSFDeviceFieldCommand.prototype.setTimeout = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string message = 7;
 * @return {string}
 */
proto.JoystickControl.CRSFDeviceFieldCommand.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldCommand} returns this
 */
proto.JoystickControl.CRSFDeviceFieldCommand.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.JoystickControl.CRSFDeviceFieldTextSelect.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.CRSFDeviceFieldTextSelect.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.CRSFDeviceFieldTextSelect.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.CRSFDeviceFieldTextSelect} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceFieldTextSelect.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    parentId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    optionsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    value: jspb.Message.getFieldWithDefault(msg, 6, 0),
    min: jspb.Message.getFieldWithDefault(msg, 7, 0),
    max: jspb.Message.getFieldWithDefault(msg, 8, 0),
    pb_default: jspb.Message.getFieldWithDefault(msg, 9, 0),
    units: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.CRSFDeviceFieldTextSelect}
 */
proto.JoystickControl.CRSFDeviceFieldTextSelect.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.CRSFDeviceFieldTextSelect;
  return proto.JoystickControl.CRSFDeviceFieldTextSelect.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.CRSFDeviceFieldTextSelect} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.CRSFDeviceFieldTextSelect}
 */
proto.JoystickControl.CRSFDeviceFieldTextSelect.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!proto.JoystickControl.CRSFDeviceFieldType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setParentId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addOptions(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setValue(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMin(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMax(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDefault(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.CRSFDeviceFieldTextSelect.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.CRSFDeviceFieldTextSelect.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.CRSFDeviceFieldTextSelect} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.CRSFDeviceFieldTextSelect.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getParentId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getOptionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getMin();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getMax();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getDefault();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getUnits();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.JoystickControl.CRSFDeviceFieldTextSelect.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldTextSelect} returns this
 */
proto.JoystickControl.CRSFDeviceFieldTextSelect.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CRSFDeviceFieldType type = 2;
 * @return {!proto.JoystickControl.CRSFDeviceFieldType}
 */
proto.JoystickControl.CRSFDeviceFieldTextSelect.prototype.getType = function() {
  return /** @type {!proto.JoystickControl.CRSFDeviceFieldType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.JoystickControl.CRSFDeviceFieldType} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldTextSelect} returns this
 */
proto.JoystickControl.CRSFDeviceFieldTextSelect.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint32 id = 3;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldTextSelect.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldTextSelect} returns this
 */
proto.JoystickControl.CRSFDeviceFieldTextSelect.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 parent_id = 4;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldTextSelect.prototype.getParentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldTextSelect} returns this
 */
proto.JoystickControl.CRSFDeviceFieldTextSelect.prototype.setParentId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated string options = 5;
 * @return {!Array<string>}
 */
proto.JoystickControl.CRSFDeviceFieldTextSelect.prototype.getOptionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldTextSelect} returns this
 */
proto.JoystickControl.CRSFDeviceFieldTextSelect.prototype.setOptionsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.JoystickControl.CRSFDeviceFieldTextSelect} returns this
 */
proto.JoystickControl.CRSFDeviceFieldTextSelect.prototype.addOptions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.JoystickControl.CRSFDeviceFieldTextSelect} returns this
 */
proto.JoystickControl.CRSFDeviceFieldTextSelect.prototype.clearOptionsList = function() {
  return this.setOptionsList([]);
};


/**
 * optional uint32 value = 6;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldTextSelect.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldTextSelect} returns this
 */
proto.JoystickControl.CRSFDeviceFieldTextSelect.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 min = 7;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldTextSelect.prototype.getMin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldTextSelect} returns this
 */
proto.JoystickControl.CRSFDeviceFieldTextSelect.prototype.setMin = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 max = 8;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldTextSelect.prototype.getMax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldTextSelect} returns this
 */
proto.JoystickControl.CRSFDeviceFieldTextSelect.prototype.setMax = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint32 default = 9;
 * @return {number}
 */
proto.JoystickControl.CRSFDeviceFieldTextSelect.prototype.getDefault = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldTextSelect} returns this
 */
proto.JoystickControl.CRSFDeviceFieldTextSelect.prototype.setDefault = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string units = 10;
 * @return {string}
 */
proto.JoystickControl.CRSFDeviceFieldTextSelect.prototype.getUnits = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoystickControl.CRSFDeviceFieldTextSelect} returns this
 */
proto.JoystickControl.CRSFDeviceFieldTextSelect.prototype.setUnits = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.GetCRSFDeviceFieldReq.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.GetCRSFDeviceFieldReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.GetCRSFDeviceFieldReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.GetCRSFDeviceFieldReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    device: (f = msg.getDevice()) && proto.JoystickControl.CRSFDeviceInfoData.toObject(includeInstance, f),
    fieldId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.GetCRSFDeviceFieldReq}
 */
proto.JoystickControl.GetCRSFDeviceFieldReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.GetCRSFDeviceFieldReq;
  return proto.JoystickControl.GetCRSFDeviceFieldReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.GetCRSFDeviceFieldReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.GetCRSFDeviceFieldReq}
 */
proto.JoystickControl.GetCRSFDeviceFieldReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.JoystickControl.CRSFDeviceInfoData;
      reader.readMessage(value,proto.JoystickControl.CRSFDeviceInfoData.deserializeBinaryFromReader);
      msg.setDevice(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFieldId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.GetCRSFDeviceFieldReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.GetCRSFDeviceFieldReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.GetCRSFDeviceFieldReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.GetCRSFDeviceFieldReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDevice();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.JoystickControl.CRSFDeviceInfoData.serializeBinaryToWriter
    );
  }
  f = message.getFieldId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional CRSFDeviceInfoData device = 1;
 * @return {?proto.JoystickControl.CRSFDeviceInfoData}
 */
proto.JoystickControl.GetCRSFDeviceFieldReq.prototype.getDevice = function() {
  return /** @type{?proto.JoystickControl.CRSFDeviceInfoData} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.CRSFDeviceInfoData, 1));
};


/**
 * @param {?proto.JoystickControl.CRSFDeviceInfoData|undefined} value
 * @return {!proto.JoystickControl.GetCRSFDeviceFieldReq} returns this
*/
proto.JoystickControl.GetCRSFDeviceFieldReq.prototype.setDevice = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.GetCRSFDeviceFieldReq} returns this
 */
proto.JoystickControl.GetCRSFDeviceFieldReq.prototype.clearDevice = function() {
  return this.setDevice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.GetCRSFDeviceFieldReq.prototype.hasDevice = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 field_id = 2;
 * @return {number}
 */
proto.JoystickControl.GetCRSFDeviceFieldReq.prototype.getFieldId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.JoystickControl.GetCRSFDeviceFieldReq} returns this
 */
proto.JoystickControl.GetCRSFDeviceFieldReq.prototype.setFieldId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.GetCRSFDeviceFieldsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.GetCRSFDeviceFieldsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.GetCRSFDeviceFieldsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.GetCRSFDeviceFieldsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    device: (f = msg.getDevice()) && proto.JoystickControl.CRSFDeviceInfoData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.GetCRSFDeviceFieldsReq}
 */
proto.JoystickControl.GetCRSFDeviceFieldsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.GetCRSFDeviceFieldsReq;
  return proto.JoystickControl.GetCRSFDeviceFieldsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.GetCRSFDeviceFieldsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.GetCRSFDeviceFieldsReq}
 */
proto.JoystickControl.GetCRSFDeviceFieldsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.JoystickControl.CRSFDeviceInfoData;
      reader.readMessage(value,proto.JoystickControl.CRSFDeviceInfoData.deserializeBinaryFromReader);
      msg.setDevice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.GetCRSFDeviceFieldsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.GetCRSFDeviceFieldsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.GetCRSFDeviceFieldsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.GetCRSFDeviceFieldsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDevice();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.JoystickControl.CRSFDeviceInfoData.serializeBinaryToWriter
    );
  }
};


/**
 * optional CRSFDeviceInfoData device = 1;
 * @return {?proto.JoystickControl.CRSFDeviceInfoData}
 */
proto.JoystickControl.GetCRSFDeviceFieldsReq.prototype.getDevice = function() {
  return /** @type{?proto.JoystickControl.CRSFDeviceInfoData} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.CRSFDeviceInfoData, 1));
};


/**
 * @param {?proto.JoystickControl.CRSFDeviceInfoData|undefined} value
 * @return {!proto.JoystickControl.GetCRSFDeviceFieldsReq} returns this
*/
proto.JoystickControl.GetCRSFDeviceFieldsReq.prototype.setDevice = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.GetCRSFDeviceFieldsReq} returns this
 */
proto.JoystickControl.GetCRSFDeviceFieldsReq.prototype.clearDevice = function() {
  return this.setDevice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.GetCRSFDeviceFieldsReq.prototype.hasDevice = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.GetCRSFDeviceFieldRes.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.GetCRSFDeviceFieldRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.GetCRSFDeviceFieldRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.GetCRSFDeviceFieldRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    field: (f = msg.getField()) && proto.JoystickControl.CRSFDeviceFieldData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.GetCRSFDeviceFieldRes}
 */
proto.JoystickControl.GetCRSFDeviceFieldRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.GetCRSFDeviceFieldRes;
  return proto.JoystickControl.GetCRSFDeviceFieldRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.GetCRSFDeviceFieldRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.GetCRSFDeviceFieldRes}
 */
proto.JoystickControl.GetCRSFDeviceFieldRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.JoystickControl.CRSFDeviceFieldData;
      reader.readMessage(value,proto.JoystickControl.CRSFDeviceFieldData.deserializeBinaryFromReader);
      msg.setField(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.GetCRSFDeviceFieldRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.GetCRSFDeviceFieldRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.GetCRSFDeviceFieldRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.GetCRSFDeviceFieldRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getField();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.JoystickControl.CRSFDeviceFieldData.serializeBinaryToWriter
    );
  }
};


/**
 * optional CRSFDeviceFieldData field = 1;
 * @return {?proto.JoystickControl.CRSFDeviceFieldData}
 */
proto.JoystickControl.GetCRSFDeviceFieldRes.prototype.getField = function() {
  return /** @type{?proto.JoystickControl.CRSFDeviceFieldData} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.CRSFDeviceFieldData, 1));
};


/**
 * @param {?proto.JoystickControl.CRSFDeviceFieldData|undefined} value
 * @return {!proto.JoystickControl.GetCRSFDeviceFieldRes} returns this
*/
proto.JoystickControl.GetCRSFDeviceFieldRes.prototype.setField = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.GetCRSFDeviceFieldRes} returns this
 */
proto.JoystickControl.GetCRSFDeviceFieldRes.prototype.clearField = function() {
  return this.setField(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.GetCRSFDeviceFieldRes.prototype.hasField = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.SetCRSFDeviceFieldReq.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.SetCRSFDeviceFieldReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.SetCRSFDeviceFieldReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.SetCRSFDeviceFieldReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    device: (f = msg.getDevice()) && proto.JoystickControl.CRSFDeviceInfoData.toObject(includeInstance, f),
    field: (f = msg.getField()) && proto.JoystickControl.CRSFDeviceFieldData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.SetCRSFDeviceFieldReq}
 */
proto.JoystickControl.SetCRSFDeviceFieldReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.SetCRSFDeviceFieldReq;
  return proto.JoystickControl.SetCRSFDeviceFieldReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.SetCRSFDeviceFieldReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.SetCRSFDeviceFieldReq}
 */
proto.JoystickControl.SetCRSFDeviceFieldReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.JoystickControl.CRSFDeviceInfoData;
      reader.readMessage(value,proto.JoystickControl.CRSFDeviceInfoData.deserializeBinaryFromReader);
      msg.setDevice(value);
      break;
    case 2:
      var value = new proto.JoystickControl.CRSFDeviceFieldData;
      reader.readMessage(value,proto.JoystickControl.CRSFDeviceFieldData.deserializeBinaryFromReader);
      msg.setField(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.SetCRSFDeviceFieldReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.SetCRSFDeviceFieldReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.SetCRSFDeviceFieldReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.SetCRSFDeviceFieldReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDevice();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.JoystickControl.CRSFDeviceInfoData.serializeBinaryToWriter
    );
  }
  f = message.getField();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.JoystickControl.CRSFDeviceFieldData.serializeBinaryToWriter
    );
  }
};


/**
 * optional CRSFDeviceInfoData device = 1;
 * @return {?proto.JoystickControl.CRSFDeviceInfoData}
 */
proto.JoystickControl.SetCRSFDeviceFieldReq.prototype.getDevice = function() {
  return /** @type{?proto.JoystickControl.CRSFDeviceInfoData} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.CRSFDeviceInfoData, 1));
};


/**
 * @param {?proto.JoystickControl.CRSFDeviceInfoData|undefined} value
 * @return {!proto.JoystickControl.SetCRSFDeviceFieldReq} returns this
*/
proto.JoystickControl.SetCRSFDeviceFieldReq.prototype.setDevice = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.SetCRSFDeviceFieldReq} returns this
 */
proto.JoystickControl.SetCRSFDeviceFieldReq.prototype.clearDevice = function() {
  return this.setDevice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.SetCRSFDeviceFieldReq.prototype.hasDevice = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CRSFDeviceFieldData field = 2;
 * @return {?proto.JoystickControl.CRSFDeviceFieldData}
 */
proto.JoystickControl.SetCRSFDeviceFieldReq.prototype.getField = function() {
  return /** @type{?proto.JoystickControl.CRSFDeviceFieldData} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.CRSFDeviceFieldData, 2));
};


/**
 * @param {?proto.JoystickControl.CRSFDeviceFieldData|undefined} value
 * @return {!proto.JoystickControl.SetCRSFDeviceFieldReq} returns this
*/
proto.JoystickControl.SetCRSFDeviceFieldReq.prototype.setField = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.SetCRSFDeviceFieldReq} returns this
 */
proto.JoystickControl.SetCRSFDeviceFieldReq.prototype.clearField = function() {
  return this.setField(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.SetCRSFDeviceFieldReq.prototype.hasField = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.SetCRSFDeviceFieldRes.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.SetCRSFDeviceFieldRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.SetCRSFDeviceFieldRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.SetCRSFDeviceFieldRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    field: (f = msg.getField()) && proto.JoystickControl.CRSFDeviceFieldData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.SetCRSFDeviceFieldRes}
 */
proto.JoystickControl.SetCRSFDeviceFieldRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.SetCRSFDeviceFieldRes;
  return proto.JoystickControl.SetCRSFDeviceFieldRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.SetCRSFDeviceFieldRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.SetCRSFDeviceFieldRes}
 */
proto.JoystickControl.SetCRSFDeviceFieldRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.JoystickControl.CRSFDeviceFieldData;
      reader.readMessage(value,proto.JoystickControl.CRSFDeviceFieldData.deserializeBinaryFromReader);
      msg.setField(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.SetCRSFDeviceFieldRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.SetCRSFDeviceFieldRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.SetCRSFDeviceFieldRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.SetCRSFDeviceFieldRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getField();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.JoystickControl.CRSFDeviceFieldData.serializeBinaryToWriter
    );
  }
};


/**
 * optional CRSFDeviceFieldData field = 1;
 * @return {?proto.JoystickControl.CRSFDeviceFieldData}
 */
proto.JoystickControl.SetCRSFDeviceFieldRes.prototype.getField = function() {
  return /** @type{?proto.JoystickControl.CRSFDeviceFieldData} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.CRSFDeviceFieldData, 1));
};


/**
 * @param {?proto.JoystickControl.CRSFDeviceFieldData|undefined} value
 * @return {!proto.JoystickControl.SetCRSFDeviceFieldRes} returns this
*/
proto.JoystickControl.SetCRSFDeviceFieldRes.prototype.setField = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.SetCRSFDeviceFieldRes} returns this
 */
proto.JoystickControl.SetCRSFDeviceFieldRes.prototype.clearField = function() {
  return this.setField(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.SetCRSFDeviceFieldRes.prototype.hasField = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoystickControl.GetCRSFDeviceLinkStatusRes.prototype.toObject = function(opt_includeInstance) {
  return proto.JoystickControl.GetCRSFDeviceLinkStatusRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoystickControl.GetCRSFDeviceLinkStatusRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.GetCRSFDeviceLinkStatusRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    linkStatus: (f = msg.getLinkStatus()) && proto.JoystickControl.CRSFDeviceLinkStatusData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoystickControl.GetCRSFDeviceLinkStatusRes}
 */
proto.JoystickControl.GetCRSFDeviceLinkStatusRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoystickControl.GetCRSFDeviceLinkStatusRes;
  return proto.JoystickControl.GetCRSFDeviceLinkStatusRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoystickControl.GetCRSFDeviceLinkStatusRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoystickControl.GetCRSFDeviceLinkStatusRes}
 */
proto.JoystickControl.GetCRSFDeviceLinkStatusRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.JoystickControl.CRSFDeviceLinkStatusData;
      reader.readMessage(value,proto.JoystickControl.CRSFDeviceLinkStatusData.deserializeBinaryFromReader);
      msg.setLinkStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoystickControl.GetCRSFDeviceLinkStatusRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoystickControl.GetCRSFDeviceLinkStatusRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoystickControl.GetCRSFDeviceLinkStatusRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoystickControl.GetCRSFDeviceLinkStatusRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLinkStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.JoystickControl.CRSFDeviceLinkStatusData.serializeBinaryToWriter
    );
  }
};


/**
 * optional CRSFDeviceLinkStatusData link_status = 1;
 * @return {?proto.JoystickControl.CRSFDeviceLinkStatusData}
 */
proto.JoystickControl.GetCRSFDeviceLinkStatusRes.prototype.getLinkStatus = function() {
  return /** @type{?proto.JoystickControl.CRSFDeviceLinkStatusData} */ (
    jspb.Message.getWrapperField(this, proto.JoystickControl.CRSFDeviceLinkStatusData, 1));
};


/**
 * @param {?proto.JoystickControl.CRSFDeviceLinkStatusData|undefined} value
 * @return {!proto.JoystickControl.GetCRSFDeviceLinkStatusRes} returns this
*/
proto.JoystickControl.GetCRSFDeviceLinkStatusRes.prototype.setLinkStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoystickControl.GetCRSFDeviceLinkStatusRes} returns this
 */
proto.JoystickControl.GetCRSFDeviceLinkStatusRes.prototype.clearLinkStatus = function() {
  return this.setLinkStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoystickControl.GetCRSFDeviceLinkStatusRes.prototype.hasLinkStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * @enum {number}
 */
proto.JoystickControl.GamepadInputType = {
  AXIS: 0,
  BUTTON: 1
};

/**
 * @enum {number}
 */
proto.JoystickControl.PortState = {
  PORTUNKNOWN: 0,
  PORTDISCONNECTED: 1,
  PORTCONNECTED: 2
};

/**
 * @enum {number}
 */
proto.JoystickControl.SupervisorState = {
  SUPERVISORUNKNOWN: 0,
  SUPERVISORINACTIVE: 1,
  SUPERVISORACTIVE: 2
};

/**
 * @enum {number}
 */
proto.JoystickControl.CRSFDeviceFieldType = {
  UINT8: 0,
  INT8: 1,
  UINT16: 2,
  INT16: 3,
  UINT32: 4,
  INT32: 5,
  UINT64: 6,
  INT64: 7,
  FLOAT: 8,
  TEXT_SELECT: 9,
  STRING: 10,
  FOLDER: 11,
  INFO: 12,
  COMMAND: 13,
  VTX: 14,
  STATUS: 46,
  OUT_OF_RANGE: 127
};

/**
 * @enum {number}
 */
proto.JoystickControl.CRSFDeviceFieldCommandStep = {
  IDLE: 0,
  CLICK: 1,
  EXECUTING: 2,
  ASK_CONFIRM: 3,
  CONFIRMED: 4,
  CANCEL: 5,
  QUERY: 6
};

/**
 * @enum {number}
 */
proto.JoystickControl.LinkStatusFlag = {
  CONNECTED: 0,
  STATUS1: 1,
  MODEL_MATCH: 2,
  IS_ARMED: 3,
  WARNING1: 4,
  ERROR_CONNECTED: 5,
  ERROR_BAUDRATE: 6,
  CRITICAL_WARNING2: 7
};

goog.object.extend(exports, proto.JoystickControl);
