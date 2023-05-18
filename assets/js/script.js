var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  
  var passLength = prompt("How many characters would you like your password to contain (8-128)?");
    if (passLength < 8 || passLength > 128) {
      alert("Please enter a number between 8 and 128 characters")
      return writePassword();
    };

    var upper = confirm('Would you like uppercase letters in your password?');
    var lower = confirm('Would you like lower case letters in your password?');
    var spChar = confirm('Would you like special characters in your password?');
    var num = confirm('Would you like numbers in your password?');

    var temp = '';

    if(upper) temp += "ABCDEFGHIJKLMNOPQRXTUVWXYZ";
    if(lower) temp += "abcdefghijklmnopqrxtuvwxyz";
    if (spChar) temp += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    if (num) temp += "1234567890";

    var password = "";

    for(var i = 0; i< passLength; i++){
      password += temp[Math.floor(Math.random() * temp.length)];
    
    };

    passwordText.innerHTML = password;
};


































//Add a function for the password length
// function  chLength() {
//   passLength =
// if (chLength < 8) {
//   alert()
// } else {
  
// }
// } 

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
//   console.log('printing password')
//   console.log(passwordText)
// }


// function passwordCriteria() {
//   var length = prompt("How many characters would you like in your password")
//   var hasSpecialChar = confirm("Confirm to use special characters")
//   var hasUppercase = confirm("Confirm to use upper case characters")
//   console.log("values", length, hasSpecialChar, hasUppercase)
//   var passwordOptions = {
//     length: length,
//     specialChar: hasSpecialChar,
//     uppercase: hasUppercase,
//   }
//   return passwordOptions
// }

// function generatePassword() {
//   var options= passwordCriteria()
//   //console.log("options", options)

// if (options.specialChar) {
//   possibleChar.concat(specialCh)
// }

// if (options.upper) {
//   possibleChar.concat(specialCh)
//   // possibleChar.concat(upperCase)
// }

// var result = []
// // what is length?
// // length = possibleChar.length()
// for (var i = 0; i < length; i++) {
//   var possibleCharacter = getRandom(possibleChar);

//   result.push(possibleCharacter);
// }
// return result.join("")
// }

// function getRandom(arr) {
//   var randIndex = Math.floor(Math.random() * arr.length);
//   console.log(randIndex);
//   var randElement = arr[randIndex];

//   return randElement;
// }

// console.log("generated password")
// console.log(generatePassword())

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);



// // var myArray = [1,2,3]
// // console.log(myArray[0])
// // myArray.push(4)
// // console.log("array",myArray)

// // var myObject = {
// //   color: "blue", 
// //   year: 2022
// // }

// // console.log(myObject.color)

// // writePassword()