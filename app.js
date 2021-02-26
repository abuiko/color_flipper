const background = document.querySelector('.background');
const colorName = document.getElementById('color');
const btn = document.querySelector(".btn");

let letters = '0123456789ABCDEF';
let hash = '#';
let splitLetters = letters.split('');

for (let i = 0; i < 6; i++) {
    const random = randomNumber();
    let color = splitLetters[random];
    hash += color;
}

function randomNumber() {
    return Math.floor(Math.random() * 16);
}