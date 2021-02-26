const btn = document.querySelector(".btn");
const background = document.querySelector('.background');
const colorName = document.getElementById('color');

let colors = ['red', 'green', 'lightblue', 'yellow', 'purple'];

btn.addEventListener('click', () => {
    let randomNumber = randomColor();
    background.style.backgroundColor = colors[randomNumber];
    colorName.innerHTML = colors[randomNumber];
})

function randomColor() {
    return Math.floor(Math.random() * colors.length);
}