import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),  //  属性默认为string类型，可以不指定
  intro: DS.attr('string'),
  body: DS.attr('string'),
  author: DS.attr('string')
});
