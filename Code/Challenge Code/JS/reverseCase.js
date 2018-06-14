function reverseCase(str) {
  //create a new string
  let newStr = "";
  let i = 0;
  //loop over the old string
  while (i < str.length) {
    let n = str.charAt(i);
    if (n == n.toUpperCase()) {
      //set lowercase
      n = n.toLowerCase();
    } else {
      //set uppercase
      n = n.toUpperCase();
    }
    i += 1;
    newStr += n;
  }
  //return new string
  return newStr;
}

reverseCase("HelloWorld");
