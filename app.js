const background = document.querySelector('.background');
const colorName = document.getElementById('color');
const btn = document.querySelector(".btn");

let letters = '0123456789ABCDEF';
let splitLetters = letters.split('');


btn.addEventListener('click', () => {
    background.style.backgroundColor = generateHex();
    colorName.innerHTML = generateHex();
})

function generateNumber() {
    return Math.floor(Math.random() * 16);
}

function generateHex() {
    let hash = '#';
    for (let i = 0; i < 6; i++) {
        const randomNum = generateNumber();
        let color = splitLetters[randomNum];
        hash += color;
    }
    return hash;
}