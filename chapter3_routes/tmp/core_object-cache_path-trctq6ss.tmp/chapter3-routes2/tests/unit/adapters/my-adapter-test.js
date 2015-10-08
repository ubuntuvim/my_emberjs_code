define('chapter3-routes2/tests/unit/adapters/my-adapter-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('adapter:my-adapter', 'Unit | Adapter | my adapter', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });

});