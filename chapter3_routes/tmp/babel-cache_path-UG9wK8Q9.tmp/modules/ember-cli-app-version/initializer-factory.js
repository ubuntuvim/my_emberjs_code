

export default initializerFactory;
import Ember from 'ember';

var classify = Ember.String.classify;

function initializerFactory(name, version) {
  var registered = false;

  return function () {
    if (!registered && name && version) {
      var appName = classify(name);
      Ember.libraries.register(appName, version);
      registered = true;
    }
  };
}