const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

let todos = [];

function renderTodo(todo) {
  todoList.innerHTML += `
    <li class="todo-item" id="todo-${todo.id}">
      <span class="todo-text ${todo.isCompleted ? "completed" : ""}">${todo.text}</span>
      <button class="delete-btn" onclick="{
        deleteTodo(${todo.id})
      }">×</button>
    </li>
  `;
}

function deleteTodo(id) {
  let pressedTodo = document.getElementById(`todo-${id}`);
  pressedTodo.remove();
  todos.splice(id, id);
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
