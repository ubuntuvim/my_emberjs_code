module.exports = {
  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      { name: 'qunit',                           target: '~1.19.0' },
      { name: 'ember-cli-test-loader',           target: '0.2.1'   },
      { name: 'ember-qunit-notifications',       target: '0.0.7'   },
      { name: 'ember-qunit',                     target: '0.4.10'   }
    ]);
  }
};
