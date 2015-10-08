//   app/models/article.js

import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	body: DS.attr('string'),
	category: DS.attr('string')
});