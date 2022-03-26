var minPwLength = 8;
var choiceArr = [];
var specialCharArr = [
  '"',
  "!",
  ",",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "(",
  "*",
  ")",
  "{",
  "}",
  "[",
  "]",
  "=",
  "<",
  ">",
  "/",
  ".",
  "]",
];
var upperCaseArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numberArr = ["0", "1", "2", "3", "4", "5", "6,", "7", "8", "9"];
var lowerCaseArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// ==================================
function writePassword() {
  var correctPrompts = getPrompts();

  if (correctPrompts) {
    var newPassword = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  } else {
    passwordText.vaue = "";
  }
}
// =================================

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// ==================================

function generatePassword() {
  password = "";

  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

// ===================================

function getPrompts() {
  choiceArr = [];
  characterLength = parseInt(
    window.prompt(
      "How long would you like your password to be? Enter a valid number between 8 and 128!"
    )
  );

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert(
      "Sorry! Password length must be a number between 8 and 128 characters! Please try again!"
    );
    return false;
  }

  if (
    confirm("Would you like to include lowercase letters in your password?")
  ) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }

  if (
    confirm("Would you like to include uppercase letters in your password?")
  ) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }

  if (confirm("Would you like to include numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
  }

  if (
    confirm("Would you like to include special chracters in your password?")
  ) {
    choiceArr = choiceArr.concat(specialCharArr);
  }
  return true;
}
