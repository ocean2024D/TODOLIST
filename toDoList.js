let storedTodos = localStorage.getItem("todos");
let ToDoList;

if (storedTodos) {
  ToDoList = JSON.parse(storedTodos);
} else {
  ToDoList = [];
}

const ul = document.getElementsByClassName("list")[0];

function loadTodos() {
  ul.innerHTML = "";
  createElements();
}

function addTodo() {
  const AddInput = document.querySelector("#input").value;
  if (AddInput.trim() !== "") {
    ToDoList.push(AddInput);
    localStorage.setItem("todos", JSON.stringify(ToDoList));
    createElements();
    document.querySelector("#input").value = "";
  }
}

function createElements() {
  ul.innerHTML = "";
  for (let i = 0; i < ToDoList.length; i++) {
    let li = document.createElement("li");
    li.innerText = ToDoList[i];
    ul.appendChild(li);

    let button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", function () {
      deleteTodo(i);
    });
    li.appendChild(button);
  }
}
function deleteTodo(index) {
  if (index >= 0 && index < ToDoList.length) {
    ToDoList.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(ToDoList));

    createElements();
  }
}

loadTodos();
