import AppVersionComponent from 'ember-cli-app-version/components/app-version';

import config from '../config/environment';

var _config$APP = config.APP;
var name = _config$APP.name;
var version = _config$APP.version;

export default AppVersionComponent.extend({
  version: version,
  name: name
});