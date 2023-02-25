const toDoForm =document.getElementById ("todo-form");
const toDoInput = toDoForm.querySelector( "#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
const toDos = [];


function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}


function deleteTodo(){
    const li = event.target.parentElement;
    li.remove();
}


function paintToDo(newTodo){
    const li = document.createElement("li")
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "x";
    button.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerHTML = newTodo;
    toDoList.appendChild(li);
}


function handleleToDSubmit(event){
    event.preventDefault();
    const newTodo =toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm,addEventListener("submit",handleleToDSubmit);



const savedToDos=localStorage.getItem(TODOS_KEY);


if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach((item) => console.log("this is of",item))
}