function reverseString(str) {
  let oops = "";
  for (let i = str.length - 1; i >= 0; i--) {
    oops += str[i];
  }
  return oops;
}

reverseString("hello world");
