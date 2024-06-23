// let randomNumber = Math.random();
// randomNumber = Math.random().toString(16);
// randomNumber = Math.random().toString(16).substring(2, 8);
// console.log(randomNumber);

const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");
const copy = document.querySelector(".copy");

const generateColor = function() {
    randomNumber = Math.random().toString(16).substring(2, 8);
    
    hex.value = "#" + randomNumber;
}

btn.addEventListener("click", generateColor)
// console.log (typeof randomNumber);