// images flipper javascript
const images = ["url(hawa-mahal.jpg)", "url(greece.webp)", "url(aurora.jpg)", "url(paris.jpg)", "url(quebec.jpg)"];
const btn = document.getElementById("btn");
const pic = document.querySelector(".color");

btn.addEventListener("click", function() {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    body.style.backgroundImage = images[randomNumber];
    pic.textContent = images[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * images.length);
}

var body = document.getElementsByTagName('body')[0];
