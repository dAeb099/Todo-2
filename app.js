const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

let todos = [];

function renderTodo(text) {
  todoList.innerHTML += `
    <li class="todo-item">
      <span class="todo-text">${text}</span>
      <button class="delete-btn">×</button>
    </li>
  `;
}

function addTodo() {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    renderTodo(todo.text);
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let inputValue = input.value.trim();
  todos.push({
    id: todos.length,
    text: inputValue,
    isCompleted: false,
  });
  addTodo(inputValue);
  input.value = "";
});
