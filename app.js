//SELECTEURS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//ECOUTEURS
todoButton.addEventListener("click", addTodo);

//FONCTIONS

function addTodo (event){
    event.preventDefault();
    //TODO DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //CREER LE LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //BUTTON CHECK
    const completedButton = document.createElement("button");
    completedButton.innerHTML= '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //BUTTON DELETE
    const trashButton = document.createElement("button");
    trashButton.innerHTML= '<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //AJOUTER NOTRE TODO A TODO-LIST
    todoList.appendChild(todoDiv);

    todoInput.value =""
}