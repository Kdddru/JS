const toDoForm =document.getElementById ("todo-form");
const toDoInput = toDoForm.querySelector( "#todo-form input");
const toDoList = document.getElementById("todo-list");


function handleleToDSubmit(event){
    event.preventDefault();
    console.log(toDoInput.value);
}

toDoForm,addEventListener("submit",handleleToDSubmit);