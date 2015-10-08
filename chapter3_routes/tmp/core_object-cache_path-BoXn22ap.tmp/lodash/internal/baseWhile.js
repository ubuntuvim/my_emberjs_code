define('lodash/internal/baseWhile', ['exports', 'lodash/internal/baseSlice'], function (exports, baseSlice) {

    'use strict';

    function baseWhile(array, predicate, isDrop, fromRight) {
        var length = array.length,
            index = fromRight ? length : -1;

        while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {}
        return isDrop ? baseSlice['default'](array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice['default'](array, fromRight ? index + 1 : 0, fromRight ? length : index);
    }

    exports['default'] = baseWhile;

});