const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

let todos = [];

function renderTodo(todo) {
  todoList.innerHTML += `
    <li class="todo-item ${todo.isCompleted ? "completed" : ""}" id="todo-${todo.id}">
      <span class="todo-text" onclick="{
        toggleComplete(${todo.id})
      }">${todo.text}</span>
      <button class="delete-btn" onclick="{
        deleteTodo(${todo.id})
      }">×</button>
    </li>
  `;
}

function toggleComplete(id) {
  const todo = todos.find((todo) => todo.id === id);
  todo.isCompleted = !todo.isCompleted;
  addTodo();
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  addTodo();
}

function addTodo() {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    renderTodo(todo);
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let inputValue = input.value.trim();
  if (inputValue.trim() !== "") {
    todos.push({
      id: todos.length,
      text: inputValue,
      isCompleted: false,
    });
    addTodo(inputValue);
    input.value = "";
  }
});
