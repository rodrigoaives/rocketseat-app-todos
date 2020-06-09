var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");
var listElement = document.querySelector("#app ul");

var todos = JSON.parse(localStorage.getItem("list_todos")) || []; // JSON.parse converte de Json para Array

renderTodos();

function renderTodos() {
  listElement.innerHTML = ""; // Limpa tudo que está no UL
  for (todo of todos) {
    var todoElement = document.createElement("li");
    var todoText = document.createTextNode(todo);
    var linkElement = document.createElement("a");
    var pos = todos.indexOf(todo);
    linkElement.setAttribute("href", "#");
    linkElement.setAttribute("onclick", "deleteTodo(" + pos + ")");
    var linkText = document.createTextNode("Excluir");
    todoElement.appendChild(todoText);
    linkElement.appendChild(linkText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
}

function addTodo() {
  var todoText = inputElement.value;
  todos.push(todoText);
  inputElement.value = "";
  renderTodos();
  saveToStorage();
}

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("list_todos", JSON.stringify(todos)); // Stringify - Converte array para Json
}

buttonElement.onclick = addTodo;
