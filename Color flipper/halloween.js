//halloween colors javascript
const halloweenColors = ["#000000", "#ff6600", "#6600cc", "#5cd65c"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = halloweenColors[randomNumber];
    color.textContent = halloweenColors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * halloweenColors.length);
}

