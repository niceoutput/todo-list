// Code goes here

var todoList = {

  // array list of todo items
  todos: [],

  // function that add todo objects to the array list
  addTodos: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },

  // function to insert new item in todo list in a chosen list position
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },


  // function to delete an item from an array
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },

  // function to convert the oposite of the completed boolean value
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },

  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    // Get the number of completed todos.
    for (i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }

    // Case 1: If everything it's true, make everything false
    if (completedTodos === totalTodos) {
      for (i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
      // Case 2: Otherwise, make everything true
    } else {
      for (i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
  }

};

// Object for handlers
var handlers = {
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodos(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function(position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};

var view = {
  displayTodos: function() {
    var todosUL = document.querySelector('ul');
    todosUL.innerHTML = '';
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';

      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }

      todoLi.id = i;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUL.appendChild(todoLi);
    }
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
  setUpEventListeners: function() {
    var todosUl = document.querySelector('ul');

    todosUl.addEventListener('click', function(event) {
      // get the element that was clicked on
      var elementClicked = event.target;

      // Check of elementClicked is a delete button
      if (elementClicked.className === 'deleteButton') {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setUpEventListeners();
