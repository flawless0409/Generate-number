// let randomNumber = Math.random();
// randomNumber = Math.random().toString(16);
// randomNumber = Math.random().toString(16).substring(2, 8);
// console.log(randomNumber);
// It suppose to generate random colors,. but it's just the content that is changing when click...
// So work on the script......................
const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");
const copy = document.querySelector(".copy");

const generateColor = function() {
    randomNumber = Math.random().toString(16).substring(2, 8);
    
    hex.value = "#" + randomNumber;
    document.body.style.background = hex.value;
}

const copyColor = function(){
    hex.select();
    hex.setSelectionRange(0, 1000);
    document.execCommand("click");
    alert("Color has been copy to the clipboard")
}

btn.addEventListener("click", generateColor);
copy.addEventListener("click", copyColor)
// console.log (typeof randomNumber);