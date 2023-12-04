// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var specialCharacter = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");

function getPasswordOptions() {
  //prompt user if they want lowerCase, 
  var lowerSelection = window.confirm("Include lower case characters?");
  //upperCase, 
  var upperSelection = window.confirm("Include upper case characters?");
  //specialCharacter, 
  var specialSelection = window.confirm("Include special characters?");
  //and to type in length

  if (lowerSelection === false && upperSelection === false && specialSelection === false) {
    window.alert("No one can help you."); return null;
    //make it stop.
  }

  var lengthSelection = window.prompt("Enter requested character length by numerical value between 8 and 128.");
  //if less than 8 characters or greater than 128 characters

  if (lengthSelection < 8 || lengthSelection > 128) {
    //then return prompt "Invalid value. Please enter a numeric value between 8 and 128."
    window.alert("Invalid value."); return null;
  }

  //If user inputs an alphabetical value and not numeric:
  if (Number.isNaN(lengthSelection)) {
    window.alert("Invalid value."); return null;
  }

  //Store user input
  var passwordInput = {
    lowerSelection: lowerSelection,
    upperSelection: upperSelection,
    specialSelection: specialSelection,
    lengthSelection: lengthSelection,
  };
  return passwordInput;
}

//Randomizing characters from arrays
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randCharacter = arr[randIndex];
  return randCharacter;
}

//Generating password with user input
function generatePassword() {
  var options = getPasswordOptions();

  var result = [];

  var possibleCharacters = [];

  if (options.lowerSelection) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
  }

  if (options.upperSelection) {
    possibleCharacters = possibleCharacters.concat(upperCase);
  }

  if (options.specialSelection) {
    possibleCharacters = possibleCharacters.concat(specialCharacter);
  }

  //Generate character selection for password length
  for (var i = 0; i < options.lengthSelection; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
    result.push(possibleCharacter);
  }

  //Enter randomized characters into a string within writePassword
  result = result.join("")
  return result;

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