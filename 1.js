const inputval = document.getElementById("inputValue");
const inputval2 = document.getElementById("inputValue2");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const submit = document.getElementById("submit");

function printValue(event){
    event.preventDefault();
    const max = inputval.value;
    const selectnum = inputval2.value;
    const random = Math.ceil(Math.random()*max);
    if(0<selectnum && 0<random){
        if(selectnum == random){
            p1.innerText = "You chose: " + selectnum + "," + "the machine chose: " + random;
            p2.innerText = "You won!";
        }
        else{
            p1.innerText = "You chose: " + selectnum + "," + "the machine chose: " + random;
            p2.innerText = "You lost!";
        }
    }
    else{
        p1.innerText = "you can't play this game!"
    }
        
    
}

submit.addEventListener("click",printValue);