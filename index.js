document.addEventListener('DOMContentLoaded', function () {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];

  displayTodos(todos);
});

document.querySelector('button').addEventListener('click', addTodo);
function addTodo() {
  const newTodoInput = document.getElementById('newTodo');
  const newTodoValue = newTodoInput.value.trim();

  if (newTodoValue === '') {
    alert('Please enter a valid todo.');
    return;
  }

  const todos = JSON.parse(localStorage.getItem('todos')) || [];

  const newTodo = {
    id: Date.now(),
    text: newTodoValue,
  };

  todos.push(newTodo);

  localStorage.setItem('todos', JSON.stringify(todos));

  newTodoInput.value = '';

  displayTodos(todos);
}

function deleteTodo(id) {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];

  const updatedTodos = todos.filter(todo => todo.id !== id);

  localStorage.setItem('todos', JSON.stringify(updatedTodos));

  displayTodos(updatedTodos);
}

function displayTodos(todos) {
  const todoList = document.getElementById('todoList');
  todoList.innerHTML = ''; // Clear the existing list

  todos.forEach(todo => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${todo.text}</span>
      <button onclick="updateTodoPrompt(${todo.id})">Update</button>
      <button onclick="deleteTodo(${todo.id})">Delete</button>
    `;

    todoList.appendChild(listItem);
  });
}

function updateTodo(id, newText) {
  // Retrieve existing todos from Local Storage
  const todos = JSON.parse(localStorage.getItem('todos')) || [];

  // Find the todo to be updated
  const todoToUpdate = todos.find(todo => todo.id === id);

  if (todoToUpdate) {
    // Update the text property
    todoToUpdate.text = newText;

    // Save updated todos to Local Storage
    localStorage.setItem('todos', JSON.stringify(todos));

    // Update the display
    displayTodos(todos);
  } else {
    console.error('Todo not found for update.');
  }
}
function updateTodoPrompt(id) {
  // Prompt the user for the new todo text
  const newText = prompt('Enter the updated todo text:');

  if (newText !== null) {
    // If the user didn't cancel, update the todo
    updateTodo(id, newText);
  }
}
