'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

exports.AudioManagement = /** @class */ (function (_super) {
    tslib.__extends(AudioManagement, _super);
    function AudioManagement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AudioManagement.prototype.setAudioMode = function (mode) { return core.cordova(this, "setAudioMode", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    AudioManagement.prototype.getAudioMode = function () { return core.cordova(this, "getAudioMode", {}, arguments); };
    AudioManagement.prototype.setVolume = function (type, volume) { return core.cordova(this, "setVolume", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    AudioManagement.prototype.getVolume = function (type) { return core.cordova(this, "getVolume", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    AudioManagement.prototype.getMaxVolume = function (type) { return core.cordova(this, "getMaxVolume", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    AudioManagement.pluginName = "AudioManagement";
    AudioManagement.plugin = "clovelced-plugin-audiomanagement";
    AudioManagement.pluginRef = "AudioManagement";
    AudioManagement.repo = "https://github.com/clovelCed/cordova-plugin-audiomanagement";
    AudioManagement.platforms = ["Android"];
    AudioManagement.decorators = [
        { type: core$1.Injectable }
    ];
    return AudioManagement;
}(core.IonicNativePlugin));
(function (AudioManagement) {
    (function (AudioMode) {
        AudioMode[AudioMode["SILENT"] = 0] = "SILENT";
        AudioMode[AudioMode["VIBRATE"] = 1] = "VIBRATE";
        AudioMode[AudioMode["NORMAL"] = 2] = "NORMAL";
    })(AudioManagement.AudioMode || (AudioManagement.AudioMode = {}));
    (function (VolumeType) {
        VolumeType[VolumeType["RING"] = 0] = "RING";
        VolumeType[VolumeType["MUSIC"] = 1] = "MUSIC";
        VolumeType[VolumeType["NOTIFICATION"] = 2] = "NOTIFICATION";
        VolumeType[VolumeType["SYSTEM"] = 3] = "SYSTEM";
    })(AudioManagement.VolumeType || (AudioManagement.VolumeType = {}));
})(exports.AudioManagement || (exports.AudioManagement = {}));
