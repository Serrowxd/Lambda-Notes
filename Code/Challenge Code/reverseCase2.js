function reverseCase() {
  // create a string to return
  let stringToReturn = '';
  // create an array from the string
  let arrayFromString = str.split('');
  // loop through the array
  for (let i = 0; i < arrayFromString.length; i++) {
    // check to see if the letter is lowercase
    if (arrayFromString[i] === arrayFromString[i].toLowerCase()) {
      // if it is, then we will change it to uppercase and concat it onto the string to return
      stringToReturn += arrayFromString[i].toUpperCase();
    }
    else {
      // if it is not, then we will change it to lowercase and concat that onto the string to return
      stringToReturn += arrayFromString[i].toLowerCase();
  }
  // return string to return
  return stringToReturn;
}

reverseCase('HelloWorld');
