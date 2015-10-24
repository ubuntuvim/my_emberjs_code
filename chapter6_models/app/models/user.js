//  app/models/user.js

import DS from 'ember-data';

export default DS.Model.extend({
  	username: DS.attr('string'),
  	timestamp: DS.attr('number'),
  	articles: DS.hasMany('article')  //关联article
});
