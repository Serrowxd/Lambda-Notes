function longestString(arr) {
  return arr.reduce((memo, nextString) => {
    if (memo.length > nextString.length) return memo;
    return nextString;
  });
}

longestString(['hello', 'goodbye', 'abc']);
