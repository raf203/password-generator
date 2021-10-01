// Assignment code here

// Variables of elements: Lenght, Uppercase, Lowercase, Numbers, Symbols
var lengthEl = [];
var upperEl = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerEl = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numberEl = ["0","1","2","3","4","5","6","7","8","9"];
var symbolEl = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","}","[","]",":",";","'","<",">","?"];

window.prompt('What is the length of your password?');






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
