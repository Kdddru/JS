const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function handleLinkClick(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    console.log(username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

console.log(savedUsername);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",handleLinkClick);
}
else{
    paintGreetings(savedUsername);
}
