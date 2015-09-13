Todos.TodosController = Ember.ArrayController.extend({
    actions: {
        createTodo: function() {  //  新增 todo
          // Get the todo title set by the "New Todo" text field
          var title = this.get('newTitle');
          if (!title.trim()) { return; }

          // Create the new Todo model
          var todo = this.store.createRecord('todo', {
            title: title,
            isCompleted: false
          });

          // Clear the "New Todo" text field
          this.set('newTitle', '');

          // Save the new model
          todo.save();
        },
//        移除所有完成的 todo
        clearCompleted: function() {
            var completed = this.filterProperty('isCompleted', true);  //查找所有已经完成的 todo
            completed.invoke('deleteRecord');
            completed.invoke('save');
        },
        
    },  // end actions
    remaining: function() {
        return this.filterProperty('isCompleted', false).get('length');
    }.property('@each.isCompleted'),

    inflectoin: function() {
        var remaining = this.get('remaining');
        return remaining === 1 ? 'item' : 'items';
    }.property('remaining'),
    
    hasCompleted: function() {
        return this.get('completed') > 0;
    }.property('completed'),
    
    completed: function() {
        return this.filterProperty('isCompleted', true).get('length');
    }.property("@each.isCompleted"),
    //  移除所有完成 todo
    allAreDone: function (key, value) {
        if (value === undefined) {
            return !!this.get('length') && this.everyProperty('isCompleted', true);    
        } else {
            this.setEach('isCompleted', value);
            this.invoke('save');
            return value;
        }
    }.property('@each.isCompleted')
    
    
});