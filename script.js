// Assignment Code

var characterLength = 8;
var OptionArr = [];

var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y", "z"];
var  uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericArray = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
var specialCharArray = ["+", "-", "@", "#", "!", "(", ")", "{", "}", "[", "]", "^","~", "*", "?", ":","%","$"]

function Prompts(){
  characterLength = parseInt(prompt("How many characters do you want your password to have?"));
  if(isNaN (characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Must type a number 8-128");
    return false;
  }

  if(confirm("Would you like to use lowercase letters?")) {
    OptionArr = OptionArr.concat (lowercaseArray);
  }

  if(confirm("Would you like to use upper letters?")) {
    OptionArr = OptionArr.concat (uppercaseArray);
  }

  if(confirm("Would you like to use numbers?")) {
    OptionArr = OptionArr.concat (numericArray);
  }

  if(confirm("Would you like to use special characters?")) {
    OptionArr = OptionArr.concat (specialCharArray);
  }return true;
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var setupPrompts = Prompts();

  if(setupPrompts) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  


  passwordText.value = password;
  }else {
    passwordText.value = "";
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword () {
var password = "";
for(var i = 0; i<characterLength; i ++) {
  var randomIndex = Math.floor(Math.random() * characterLength);
  password = password + OptionArr[randomIndex];
  var specialCharArray= Math.floor(Math.random() * specialCharArray);
}
return password;

}
