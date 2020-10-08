function randomNumberGenerator(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
}
let letters = 'abcdefghijklmnopqrstuvwxyz';
let small = letters.split('');
let cap = letters.toUpperCase().split('');
let symbols = '!@#$%^&*'.split('');
let randomNumber = randomNumberGenerator(10,100);
function generateString() {
    return (randomNumberGenerator(10, 100) + small[randomNumberGenerator(0, 26)] + cap[randomNumberGenerator(0, 26)] + symbols[randomNumberGenerator(0, 7)] + randomNumberGenerator(100, 1000) + cap[randomNumberGenerator(0, 26)] + cap[randomNumberGenerator(0, 26)] + symbols[randomNumberGenerator(0, 7)]);
}

let elem = document.getElementById('string');

let passString = generateString();
elem.innerText = passString;

function reGenerate() {
    passString = generateString();
    elem.innerText = passString;
}

function clickToCopy() {
    var inp = document.createElement('input');
    document.body.appendChild(inp);
    inp.value = passString;
    inp.select();
    document.execCommand('copy');
    inp.remove();
}
