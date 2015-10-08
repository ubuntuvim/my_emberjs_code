define('lodash/number', ['exports', 'lodash/number/inRange', 'lodash/number/random'], function (exports, inRange, random) {

  'use strict';

  exports['default'] = {
    'inRange': inRange['default'],
    'random': random['default']
  };

});