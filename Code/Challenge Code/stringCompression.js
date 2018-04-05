function stringCompression(str) {
  let currentChar = null;
  let compressedStr = "";
  let charCount = 1;
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === currentChar) charCount++;
    if (currentChar === null) currentChar = str[i];
    if (str[i] !== currentChar || str[i] === undefined) {
      compressedStr += currentChar;
      compressedStr += charCount;
      charCount = 1;
      currentChar = str[i];
    }
  }
  return compressedStr.length < str.length ? compressedStr : str;
}
