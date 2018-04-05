function longestString(arr) {
  let long = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > long.length) {
      long = arr[i];
    }
  }
  return long;
}

longestString(["hello", "goodbye", "abc"]);
