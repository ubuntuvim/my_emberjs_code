define('lodash/math', ['exports', 'lodash/math/add', 'lodash/math/ceil', 'lodash/math/floor', 'lodash/math/max', 'lodash/math/min', 'lodash/math/round', 'lodash/math/sum'], function (exports, add, ceil, floor, max, min, round, sum) {

  'use strict';

  exports['default'] = {
    'add': add['default'],
    'ceil': ceil['default'],
    'floor': floor['default'],
    'max': max['default'],
    'min': min['default'],
    'round': round['default'],
    'sum': sum['default']
  };

});