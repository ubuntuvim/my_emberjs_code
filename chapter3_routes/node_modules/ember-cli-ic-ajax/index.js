'use strict';

module.exports = {
  name: 'Ember CLI ic-ajax',

  init: function(name) {
    var assets_path = require('path').join('ic-ajax','dist','cjs','main.js');
    this.treePaths['vendor'] = require.resolve('ic-ajax').replace(assets_path, '');
  },

  included: function(app) {
    var options = this.app.options.icAjaxOptions || {enabled: true};

    if (options.enabled) {
      this.app.import('vendor/ic-ajax/dist/named-amd/main.js', {
        exports: {
          'ic-ajax': [
            'default',
            'defineFixture',
            'lookupFixture',
            'raw',
            'request',
          ]
        }
      });
    }
  }
};
