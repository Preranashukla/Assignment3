// Assignment Code
var generateBtn = document.querySelector("#generate");
//Intiatize the variable
var char = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var number = "0123456789";
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//variable to store the choices which is validate by the user
var str;


//generate password function
function generatePassword() {
    //validate user input
    var userInput = parseInt(prompt("How many charater you want to choose for ypu password? please choose between 8 and 128"));
    if (!userInput) {
        alert("Please enter number");
    } else if (userInput < 8 || userInput > 128) {
        //validate the user input 
        userInput = parseInt(prompt("You must choose number between 8 and 128"))
    } else {
        var num = confirm("Will this contain numbers?");
        var specialChar = confirm("Will this contain special characters?");
        var lowerCase = confirm("Will this contain Lowercase letters?");
        var upperCase = confirm("Will this contain Uppercase letters?");
    }
    // Check password length condition

    //if nothing gets selected then confirm user must chose criteris.

    if (num && specialChar && lowerCase && upperCase) { // all 4 selected
        str = char.concat(number, lowerCaseChar, upperCaseChar);
    } else if (num && specialChar && lowerCase) { // code for any three criteria selected
        str = char.concat(number, lowerCaseChar);
    } else if (num && specialChar && upperCase) {
        str = char.concat(number, upperCaseChar);
    } else if (specialChar && lowerCase && upperCase) {
        str = char.concat(lowerCaseChar, upperCaseChar);
    } else if (num && lowerCase && upperCase) {
        str = number.concat(lowerCaseChar, upperCaseChar);
    } // For 2 macting criteria
    else if (num && specialChar) {
        str = number.concat(char);
    } else if (num && lowerCase) {
        str = number.concat(lowerCaseChar);
    } else if (num && upperCase) {
        str = number.concat(upperCaseChar);
    } else if (specialChar && lowerCase) {
        str = char.concat(lowerCaseChar);
    } else if (specialChar && upperCase) {
        str = char.concat(upperCaseChar);
    } else if (lowerCase && upperCase) {
        str = lowerCaseChar.concat(upperCaseChar);
    } //matching 1 criteria
    else if (num) {
        str = number;
    } else if (specialChar) {
        str = char;
    } else if (lowerCase) {
        str = lowerCaseChar
    } else if (upperCase) {
        str = upperCaseChar;
    } else if (!num && !specialChar && !lowerCase && !upperCase) {
        str = alert("you must choose 1 criteria");
    }

    // for storing the value and 
    var passwordResult = "";
    for (var i = 0; i < userInput; i++) {
        passwordResult += str.charAt(Math.floor(Math.random() * str.length));
    }
    return passwordResult;
    //passing the result
    writePassword(passwordResult);

}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);