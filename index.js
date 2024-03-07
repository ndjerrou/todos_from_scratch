// import './events/manageEvents';
import { TodoList } from './resources/TodoList';

import 'bulma/css/bulma.min.css';

const todos = new TodoList();

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('submit');
  const formData = new FormData(e.target);

  const todo = {};

  for (const [key, val] of formData.entries()) {
    todo[key] = val;
  }

  todos.addTodo(todo);
  todos.render();

  //   this.reset();
});
