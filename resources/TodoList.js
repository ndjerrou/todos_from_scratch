export class TodoList {
  todos = JSON.parse(localStorage.getItem('todos')) ?? [];
  rowsTodos = document.querySelectorAll('div.columns div');

  addTodo(todo) {
    this.todos.push({
      ...todo,
      id: this.todos.length + 1,
    });

    this.save();
  }

  save() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  render() {
    this.todos.forEach(todo =>
      Array.from(this.rowsTodos).forEach(colTodo => {
        const [, refCol] = colTodo.id.split('__');

        let elementToAdd = null;

        if (refCol !== 'edit') {
          elementToAdd = document.createElement('p');
          elementToAdd.textContent = todo[refCol];
        } else {
          elementToAdd = document.createElement('button');
          elementToAdd.textContent = 'Edit';
        }

        colTodo.appendChild(elementToAdd);
      })
    );
  }
}
