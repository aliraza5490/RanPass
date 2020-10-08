let elem = document.getElementsByTagName("h2");
function randomNumberGenerator(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
}
let letters = 'abcdefghijklmnopqrstuvwxyz';
let small = letters.split('');
let cap = letters.toUpperCase().split('');
let symbols = '!@#$%^&*'.split('');
let randomNumber = randomNumberGenerator(10,100);
let password;
let object1 = {
    
}
console.log(randomNumber,small, cap, symbols)