function reverseString(str) {
  let strReversed = '';
  let arrayFromString = str.split('');

  while (arrayFromString.length) {
  strReversed += arrayFromString.pop();
  }
return strReversed;
}

// while loop will only run while the internal value is true.
// strReversed += arrayFromString.pop(); will take the end of the array off and put it onto the string.
// this causes the array to get smaller while the string gets bigger, helping with memory issues.
