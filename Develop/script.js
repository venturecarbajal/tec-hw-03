// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
// function generatePassword() {
//   console.log('test');
//   logic
// }

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

function generatePassword() {
  //#variable ["aadwega"] loop .push variable && 8 -156 .join returnvariable .switchCases
  // var mainArray = [lowerCaseChars, upperCaseChars, numbers, specialCharacters];
  return randomLower();
}

// Prompt asking user for desired char length
var charLength = prompt(
  'How many characters would you like your password to contain? Select a number between 8 and 128.'
);

// Confirms password criteria
var lowerCase = confirm('Click OK to confirm including lowercase characters.');
var upperCase = confirm('Click OK to confirm including uppercase characters.');
var numerChar = confirm('Click OK to confirm including numeric characters.');
var specialChar = confirm('Click OK to confirm including special characters.');

// lowercase alphabet chars
var lowerCaseChars = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
// uppercase alphabet chars
var upperCaseChars = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
// numeric chars
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// special chars
var specialCharacters = [
  '!',
  '#',
  '$',
  '%',
  '&',
  "'",
  '(',
  ')',
  '*',
  '+',
  ',',
  '-',
  '.',
  '/',
  ':',
  ';',
  '<',
  '=',
  '>',
  '?',
  '@',
  '[',
  '\\',
  ']',
  '^',
  '_',
  '`',
  '{',
  '|',
  '}',
  '~',
];

// if statements

// if (isNaN(charLength) === true) {
//   alert("Please select a number between...");
// }

var possChars = [];
// google how to add array in to another array
// concat

if (lowerCase === true) {
  console.log('lowercase');
  possChars.concat(lowerCaseChars);
}
if (upperCase === true) {
  console.log('uppercase');
  possChars.concat(upperCaseChars);
}
if (numerChar === true) {
  console.log('num');
  possChars.concat(numbers);
}
if (specialChar === true) {
  console.log('special');
  possChars.concat(specialCharacters);
}

function randomLower() {
  let lowerCasev2 = lowerCaseChars[Math.floor(Math.random() * 26)];
  return lowerCasev2;
}
function randomUpper() {
  let uppercasev2 = upperCaseChars[Math.floor(Math.random() * 26)];
  return uppercasev2;
}
function randomNumber() {
  let numberV2 = numbers[Math.floor(Math.random() * 10)];
  return numberV2;
}
function randomSpecial() {
  let specialV2 = specialCharacters[Math.floor(Math.random() * 32)];
  return specialV2;
}

// switch(thing){
//   case randomLow: randowmLower()
// }

// var choice = [lowercase, uppercase, symbol, special]

// choice[mathrtando] if(false continue)
