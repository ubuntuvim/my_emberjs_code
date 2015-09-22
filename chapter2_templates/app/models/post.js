import DS from 'ember-data';

export default DS.Model.extend({
	// id: DS.attr('number'),
  title: DS.attr('string'),
  body: DS.attr('string'),
  url: DS.attr('string')
});
