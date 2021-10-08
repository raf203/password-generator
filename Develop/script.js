// Variables of elements: Lenght, Uppercase, Lowercase, Numbers, Symbols
var allowedCharacters = [];
var upperCaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbersChar = ["0","1","2","3","4","5","6","7","8","9"];
var symbolsChar = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","}","[","]",":",";","'","<",">","?"];



var randomNumber = function () {
  var item = allowedCharacters[Math.floor(Math.random() *  allowedCharacters.length)]
  
  return item;
};

// create passwordLength() function and conditional statements for the password requirements
var passwordLength = function(){
  // prompt input for the length value
  var length = window.prompt("Choose password length between 8 to 128 characters. Enter the number.");

  // if length is less than 8 characters alert the user for the minimum length
 if (length < 8 ){
    window.alert("Password length should have a minimum of 8 characters");
     passwordLength();
  }
  // if password length is more than 128 characters alert the user for the maximum length
  else if(length > 128 ){
    window.alert("Password length should not exceed to 128 characters");
    passwordLength();
  }
  // return the input length
  else  {
    return length;
  }
};
// create upperCase() function
var upperCase = function(){
  // confirm user if they want to add upper case characters in their password
   var upperConfirm = window.confirm("Would you like to include upper case characters?");
   // if confirm, add the upper case to the required length
    if(upperConfirm) {
      allowedCharacters = allowedCharacters.concat(upperCaseChar);
      console.log(allowedCharacters)
    }
  };
// create lowerCase() function
var lowerCase = function() {
  // confirm user if they want to add lower case in their pssword
  var lowerConfirm = window.confirm("Would you like to include lower case characters?");
  // if confirm, add lower case to the required length
  if(lowerConfirm){
     allowedCharacters = allowedCharacters.concat(lowerCaseChar) ;
     console.log(allowedCharacters)
  }
};
// create symbolChar() function
var symbolChar = function() {
  // confirm user if they want to add symbols in their password
  var symbolConfirm = window.confirm("Would you like to include symbol characters?");
  // if confirm, add symbols to the required length
  if (symbolConfirm) {
    allowedCharacters = allowedCharacters.concat(symbolsChar);
    console.log(allowedCharacters)
  }
};
// create numberChar() function
var numberChar = function(){
  // confirm user if they to add numbers in their password
  var numberConfirm = window.confirm("Would you like to include numbers?");
  // if confirm add numbers to the required length
  if (numberConfirm) {
    // add number
    allowedCharacters = allowedCharacters.concat(numbersChar);
    console.log(allowedCharacters)

    // if user didn't confirm a single character criteria alert them to choose by returning the confirm functions
  } else {
    window.alert("You should choose at least one character from the criterias");
    return lowerCase(), upperCase(), symbolChar(), numberChar();
    
  }
};

// create the generatePassword() function
var generatePassword = function(){
  // add all created functions with conditinal statements
  var length = passwordLength();

  upperCase();
  lowerCase();
  symbolChar();
  numberChar();
  // console log the input length 
  console.log(allowedCharacters);
  console.log(length);
  var password = "";
  // create a for loops for the password
  for (let i = 0; i < length; i++) {
    password += randomNumber();
    console.log(password);
  }
  // return the generated password
  return password;
};

// Write password to the #password input
function writePassword() {
  var finalPassword = generatePassword();

  var passwordText = document.getElementById("textareaPassword");
  passwordText.value = finalPassword;
}

  //Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);