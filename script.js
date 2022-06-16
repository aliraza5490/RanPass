const letters = 'abcdefghijklmnopqrstuvwxyz';
const small = letters.split('');
const cap = letters.toUpperCase().split('');
const symbols = '!@#$%^&*'.split('');
const copy_btn=document.getElementById("length");
const numbers = "123456789".split("");
let passElements = [];

function validate(){
	const configurationElems = document.querySelectorAll("input[type='checkbox']");
	passElements = [];
	configurationElems.forEach(elem=>{
		if(elem.checked){
			switch(elem.id){
				case 'numbers':
					passElements.push(numbers);
					break;
				case 'cap':
					passElements.push(cap);
					break;
				case 'small':
					passElements.push(small);
					break;
				case 'symbols':
					passElements.push(symbols);
					break;
				default:
					break;
			}
		}
	})
}

function randomNumberGenerator(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
}

function generatePassword() {
	validate();
	let password = [];
	const lengthElementValue = Number(document.getElementById("length").value);
	if(!lengthElementValue||lengthElementValue<8||passElements.length==0){
		alert("Length value is required and should be greater than 8 and check atleast one checkbox.");
	}else{
		const lengthOfPassword = lengthElementValue;
		for (let i=1;i<=lengthOfPassword;i++){
			//tempIndex is equal to random index number of passElements
			tempIndex = randomNumberGenerator(0, passElements.length);
			//length of the random passElement
			len = passElements[tempIndex].length;
			password.push(passElements[tempIndex][randomNumberGenerator(0, len)]);
		}
		return password.join("");
	}
	
}

const elem = document.getElementById('string');

document.getElementById("copy-btn").addEventListener( "click", clickToCopy);
document.getElementById("new-btn").addEventListener( "click", reGenerate);

let passString = generatePassword();

elem.innerText = passString;

function reGenerate() {
    passString = generatePassword();
    elem.innerText = passString;
}

function clickToCopy() {
	navigator.clipboard.writeText(passString)
    .catch(err => console.log('Async writeText failed with error: "' + err + '"'));
}

document.addEventListener('keypress', (event) => {
  const keyName = event.code;
  if(keyName == "Space"){
  	reGenerate();
  }else if(keyName == "KeyC"){
    	clickToCopy();
  }else{
	copy_btn.focus();  	
  }
});

copy_btn.focus(); 