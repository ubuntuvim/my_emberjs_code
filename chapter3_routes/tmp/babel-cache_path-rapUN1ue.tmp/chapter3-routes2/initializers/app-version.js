import initializerFactory from 'ember-cli-app-version/initializer-factory';

import config from '../config/environment';

var _config$APP = config.APP;
var name = _config$APP.name;
var version = _config$APP.version;

export default {
  name: 'App Version',
  initialize: initializerFactory(name, version)
};