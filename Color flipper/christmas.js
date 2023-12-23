// christmas colors javascript also the main html file is christmas.html
const christmasColors = ["#B22222", "#228B22", "#FFFAFA", "#FFD700"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = christmasColors[randomNumber];
    color.textContent = christmasColors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * christmasColors.length);
}


