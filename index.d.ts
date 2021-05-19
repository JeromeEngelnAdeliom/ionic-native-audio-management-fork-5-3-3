import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Audio Management
 * @description
 * A Cordova plugin to manage volume of audio streams for: ring, music, notification and system. Possible
 * ringer values for those streams are: silent, vibrate and normal.
 *
 * @usage
 * ```typescript
 * import { AudioManagement } from '@ionic-native/audio-management/ngx';
 *
 *
 * constructor(public audioman: AudioManagement) { }
 *
 * ...
 *
 * setAudioMode() {
 *  this.audioman.setAudioMode(AudioManagement.AudioMode.NORMAL)
 *    .then(() => {
 *     console.log('Device audio mode is now NORMAL');
 *    })
 *    .catch((reason) => {
 *      console.log(reason);
 *    });
 * }
 *
 * getAudioMode() {
 *  this.audioman.getAudioMode()
 *    .then((value: AudioManagement.AudioModeReturn) => {
 *     console.log('Device audio mode is ' + value.label + ' (' + value.audioMode + ')');
 *    })
 *    .catch((reason) => {
 *      console.log(reason);
 *    });
 * }
 *
 * ```
 * @interfaces
 * AudioModeReturn
 */
export declare class AudioManagementOriginal extends IonicNativePlugin {
    /**
     * Sets the `AudioManagement.AudioMode` for the device.
     *
     * @param {AudioManagement.AudioMode} mode the device can be set to: Silent, Normal, Vibrate
     * @returns {Promise<void>}
     */
    setAudioMode(mode: AudioManagementNamespace.AudioMode): Promise<void>;
    /**
     * Gets the current `AudioManagement.AudioMode` of the device. Thenable returns an object with
     * `label` and `audioMode` values.
     *
     * @returns {Promise<AudioManagement.AudioModeReturn>}
     */
    getAudioMode(): Promise<AudioManagementNamespace.AudioModeReturn>;
    /**
     * Sets the specified `AudioManagement.VolumeType` for the device with the value from `volume`.
     *
     * @param {AudioManagement.VolumeType} type the `AudioManagement.VolumeType` to set
     * @param {number} volume the volume value
     * @returns {Promise<void>}
     */
    setVolume(type: AudioManagementNamespace.VolumeType, volume: number): Promise<void>;
    /**
     * Gets the specified `AudioManagement.VolumeType`'s `volume`. Thenable returns an object with
     * a numeric property for volume, `volume`.
     *
     * @param {AudioManagement.VolumeType} type the `AudioManagement.VolumeType` to get
     * @returns {Promise<{volume: number}>}
     */
    getVolume(type: AudioManagementNamespace.VolumeType): Promise<{
        volume: number;
    }>;
    /**
     * Gets the specified `AudioManagement.VolumeType`'s maximum `volume`. Thenable returns an
     * object with a numeric property, `maxVolume`.
     *
     * @param {AudioManagement.VolumeType} type the `AudioManagement.VolumeType` to get
     * @returns {Promise<{maxVolume: number}>}
     */
    getMaxVolume(type: AudioManagementNamespace.VolumeType): Promise<{
        maxVolume: number;
    }>;
}
export declare namespace AudioManagementNamespace {
    enum AudioMode {
        SILENT = 0,
        VIBRATE = 1,
        NORMAL = 2
    }
    enum VolumeType {
        RING = 0,
        MUSIC = 1,
        NOTIFICATION = 2,
        SYSTEM = 3
    }
    interface AudioModeReturn {
        audioMode: AudioManagementNamespace.AudioMode;
        label: string;
    }
}

export declare const AudioManagement: AudioManagementOriginal;
