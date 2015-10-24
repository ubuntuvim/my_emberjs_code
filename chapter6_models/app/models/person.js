//  app/models/person.js

import DS from 'ember-data';

export default DS.Model.extend({
	username: DS.attr('string'),
	email: DS.attr('string'),
	verified: DS.attr('boolean', { defaultValue: false }),  //指定默认值是false
	//  使用函数返回值作为默认值
	createAt: DS.attr('string', { defaultValue(){ return new Date(); } })
});