window.Todos = Ember.Application.create();

//
//Todos.ApplicationAdapter = DS.FixtureAdapter.extend();

//  更改适配器，持久化数据
Todos.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'todos-emberjs'
});