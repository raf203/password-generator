// Assignment code here

// Variables of elements: Lenght, Uppercase, Lowercase, Numbers, Symbols
var allowedCharacters = [];
var upperCaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbersChar = ["0","1","2","3","4","5","6","7","8","9"];
var symbolsChar = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","}","[","]",":",";","'","<",">","?"];



// create the generatePassword function
var generatePassword = function(){
  // add all created functions with conditinal statements
  var length = passwordLength();
  upperFunction();
  lowerFunction();
  symbolFunction();
  numberFunction();
  
  console.log(allowedCharacters);
  console.log(length);
  var password = "";

  // for to make the password with the requested lenght
  for (let i = 0; i < length; i++) {
    password += randomNumber();
    console.log(password);
  }

  return password;
};

  //Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var finalPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);