// GENERATE RANDOM COLORS
let colors = generateRandomColors(6);

// GET ELEMENTS FROM DOM
let colorDisplay = document.getElementById("colorDisplay");
let h1 = document.querySelector("h1");
let resetButton = document.getElementById("resetButton");
let message = document.getElementById("message");
let squares = document.querySelectorAll(".square");


// 
let pickedColor = pickColor();


colorDisplay.textContent = pickedColor;
for (let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    
    squares[i].addEventListener("click", function(){
        if(pickedColor === colors[i]){
            message.textContent = "Correct!";
            h1.style.backgroundColor = pickedColor;
            changeColors(pickedColor);
            resetButton.textContent = "Play again?";
        } 
        else if(message.textContent === "Correct!"){
            
        }
        
        else{
            
            this.style.backgroundColor = "transparent";
            message.textContent = "Try again?";
            
        }
    });
}


function changeColors(color){
    for (let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    let numBetween1_255 = Math.trunc(Math.random() * colors.length);
    return colors[numBetween1_255];
}

function generateRandomColors(num){
    let arr = [];
    for (let i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    let r = Math.trunc(Math.random()*256);
    let g = Math.trunc(Math.random()*256);
    let b = Math.trunc(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}


resetButton.addEventListener("click", function(){
    h1.style.backgroundColor = "transparent";
    resetButton.textContent = "New Colors";
    message.textContent = "";
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
});
