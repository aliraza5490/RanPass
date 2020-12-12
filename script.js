function randomNumberGenerator(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
}

const letters = 'abcdefghijklmnopqrstuvwxyz';
const small = letters.split('');
const cap = letters.toUpperCase().split('');
const symbols = '!@#$%^&*'.split('');
const randomNumber = randomNumberGenerator(10,100);
const passElements = [ letters, small, cap, symbols, randomNumber];

function generatePassword() {
	let password = [];
	const lengthElementValue = Number(document.getElementById("length").value);
	if(!lengthElementValue&&lengthElementValue<8){
		alert("Length value is required and should be greater than 8.");
	}else{
		const lengthOfPassword = lengthElementValue;
		for (let i=1;i<=lengthOfPassword;i++){
			//tempIndex is equal to random index number of passElements
			tempIndex = randomNumberGenerator(0, passElements.length-1);
			//length of the random passElement
			len = passElements[tempIndex].length;
			password.push(passElements[tempIndex][randomNumberGenerator(0, len)]);
		}
		return password.join("");
	}
	
}

const elem = document.getElementById('string');
document.getElementById("copy-btn").addEventListener( "click", clickToCopy)
document.getElementById("new-btn").addEventListener( "click", reGenerate)
let passString = generatePassword();
elem.innerText = passString;
function reGenerate() {
    passString = generatePassword();
    elem.innerText = passString;
}

function clickToCopy() {
	navigator.clipboard.writeText(passString)
    .catch(err => console.log('Async writeText failed with error: "' + err + '"'));;
}
      