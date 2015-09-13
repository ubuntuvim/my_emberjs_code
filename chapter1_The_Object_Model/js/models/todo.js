/**
 * 这段代码创建了一个新的 Todo 类，并将它置于你应用的命名空间下。每一个todo有两个属性： title 和 isCompleted。
 */

Todos.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
  {
    id: 1,
    title: 'Learn Ember.js',
    isCompleted: true
  },
  {
    id: 2,
    title: '...',
    isCompleted: false
  },
  {
    id: 3,
    title: 'Profit!',
    isCompleted: false
  }
];