
// Assignment code here

// Variables of elements: Lenght, Uppercase, Lowercase, Numbers, Symbols
var lengthElem = [];
var upperElem = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerElem = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numberElem = ["0","1","2","3","4","5","6","7","8","9"];
var symbolElem = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","}","[","]",":",";","'","<",">","?"];

// // create randomNumber() function for the length of the password
// var randomNumber = function () {
//   var item = lengthElem[Math.floor(Math.random() *  lengthElem.lengthElem)]
//   ;
//   return item;
// };

//Length user input
var choseLength = function() {
  var lengthPrompt = window.prompt('Type the length of your password between 8 and 128 charaters.');
    if(lengthPrompt < 8) {
      window.alert("Password length should have at least 8 characters.");
      choseLength();
    }

    else if(lengthPrompt > 128){
      window.alert("Password length should have a maximum of 128 characters.");
      choseLength();
    }

    else {
      return lengthPrompt;
    }
  };


