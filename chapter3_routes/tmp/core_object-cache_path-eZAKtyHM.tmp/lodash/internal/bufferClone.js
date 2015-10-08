define('lodash/internal/bufferClone', ['exports', 'lodash/internal/root'], function (exports, root) {

    'use strict';

    var ArrayBuffer = root['default'].ArrayBuffer,
        Uint8Array = root['default'].Uint8Array;

    /**
     * Creates a clone of the given array buffer.
     *
     * @private
     * @param {ArrayBuffer} buffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */
    function bufferClone(buffer) {
        var result = new ArrayBuffer(buffer.byteLength),
            view = new Uint8Array(result);

        view.set(new Uint8Array(buffer));
        return result;
    }

    exports['default'] = bufferClone;

});