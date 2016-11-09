// Code goes here

var todoList = {
  
  // array list of todo items
  todos: [],
  
  
  // function to iterate the todos array and print the todo list
  displayTodos: function() {
    if(this.todos.length === 0) {
      console.log('Todolist is empty');
    } else {
      for (i=0; i<this.todos.length; i++) {
        if(this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('()', this.todos[i].todoText);
        }
      }
    }
  },
  
  
  // function that add todo objects to the array list
  addTodos: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  
  
  // function to insert new item in todo list in a chosen list position
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  
  
  // function to delete an item from an array
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  
  
  // function to convert the oposite of the completed boolean value
  toggleCompleted : function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    // Get the number of completed todos.
    for(i = 0; i < totalTodos; i++) {
      if(this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    
    // Case 1: If everything it's true, make everything false
    if (completedTodos === totalTodos) {
      for(i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
      // Case 2: Otherwise, make everything true
    } else {
      for(i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }
  
};