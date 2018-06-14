function reverseString(str) {
  // create a string to return
  let strReversed = "";
  // change the string to an array
  let arrayFromString = str.split("");
  // loop backwards through the array
  for (let i = arrayFromString.length - 1; i >= 0; i--) {
    //concat each element to the string to return
    strReversed += arrayFromString[i];
  }
  // return the string to return
  return strReversed;
}
reverseString("hello world");
