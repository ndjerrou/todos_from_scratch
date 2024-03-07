document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('submit');
  const formData = new FormData(e.target);

  const todo = {};

  for (const [key, val] of formData.entries()) {
    todo.id = 1;
    todo[key] = val;
  }

  this.reset();
});
console.log('here');
