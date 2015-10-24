//  app/transforms/coordinate-point.js

import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize: function(v) {
    return [v.get('x'), v.get('y')];
  },

  serialize: function(v) {
    return Ember.create({ x: v[0], y: v[1]});
  }
});
