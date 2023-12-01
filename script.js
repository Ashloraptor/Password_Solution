// Assignment code here
var lowerCase= ["abcdefghijklmnopqrstuvwxyz"];
var upperCase= ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var specialCharacter = [" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]
//var length= (user input?)
// .split("");

var writePassword= function() {
  //prompt user if they want lowerCase, 
  var lowerSelection = window.prompt("Include lower case characters?");
  //upperCase, 
  var upperSelection = window.prompt("Include upper case characters?");
  //specialCharacter, 
  var specialSelection = window.prompt("Include special characters?");
  //and to type in length
  //if less than 8 characters or greater than 128 characters
  //then return prompt "Invalid value. Please enter a numeric value between 8 and 128."
}
  

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