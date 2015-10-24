//   app/models/article.js

import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	body: DS.attr('string'),
	timestamp: DS.attr('number'),
	category: DS.attr('string'),
	//关联user，获取article的时候自动把关联的user获取出来
	author: DS.belongsTo('user', { async: true })  
});
