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
  todoList.innerHTML = '';

  todos.forEach(todo => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${todo.text}</span>
      <button onclick="deleteTodo(${todo.id})">Delete</button>
    `;

    todoList.appendChild(listItem);
  });
}
