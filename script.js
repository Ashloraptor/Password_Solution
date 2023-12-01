// Assignment code here
var lowerCase= ["abcdefghijklmnopqrstuvwxyz"];
var upperCase= ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var specialCharacter = [" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];

// .split("");
//var input = array[Math.floor(Math.random() * characterLength);

var writePassword= function() {
  //prompt user if they want lowerCase, 
  var lowerSelection = window.confirm("Include lower case characters?");
  //upperCase, 
  var upperSelection = window.confirm("Include upper case characters?");
  //specialCharacter, 
  var specialSelection = window.confirm("Include special characters?");
  //and to type in length

  if (lowerSelection === false && upperSelection === false && specialSelection === false) {
    window.alert("No one can help you."); return "Invalid entry."
    //make it stop.
    }

  

  var lengthSelection = window.prompt("Enter requested character length by numerical value between 8 and 128.");
    //if less than 8 characters or greater than 128 characters

  if (lengthSelection<8 || lengthSelection>128) {
  //then return prompt "Invalid value. Please enter a numeric value between 8 and 128."
  window.alert("Invalid value.");

  
  var lengthSelection = window.prompt("Enter requested character length by numerical value between 8 and 128.");
  //But what if user inputs an alphabetical value and not numeric?
  }
}

//if (lowerSelection && upperSelection && specialSelection) {
//then var input = lowerCase or upperCase or specialCharacter .split
//}



//else if (lowerSelection && upperSelection) {
//then var input = random [lowerCase or upperCase] .split
//}

//else if (lowerSelection && specialSelection) {
//then var input = random [lowerCase or  specialCharacter] .split
//}

//else if (upperSelection && specialSelection) {
//then var input = random [upperCase or specialCharacter] .split
//}


//else if (lowerSelection) {
//then var input = random [lowerCase] .split
//}

//else if (upperSelection) {
//then var input = random [upperCase] .split
//}

//else (specialSelection) {
//then var input = [Math.floor(Math.random() * specialCharacter.length); but incorporate .split somehow
//}

  

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


writePassword();