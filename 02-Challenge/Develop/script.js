var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()-_+=<>?";

  var passwordLength = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));
  
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Password length must be a number between 8 and 128.");
      return;
  }

  var characterTypes = "";
  
  if (confirm("Include lowercase characters?")) {
      characterTypes += lowercaseChars;
  }

  if (confirm("Include uppercase characters?")) {
      characterTypes += uppercaseChars;
  }

  if (confirm("Include numeric characters?")) {
      characterTypes += numericChars;
  }

  if (confirm("Include special characters?")) {
      characterTypes += specialChars;
  }

  if (characterTypes === "") {
      alert("At least one character type must be selected.");
      return;
  }

  var generatedPassword = "";
  
  for (let i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characterTypes.length);
    generatedPassword += characterTypes.charAt(randomIndex);
  }

  return generatedPassword;
}

function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
