function collatzSequence(n) {
  // set n to be an array
  // while n is not 1
  // check if n is even
  // if so, we will divide by two
  // if not, we will mult by 3 and add 1
  // push n to the array
  // return our array

  let arr = [n];
  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : n * 3 + 1;
    // checking to see if n & 2 === 0
    // `?` means - is the previous statement true? If so, continue.
    // n / 2 : n * 3 + 1 means if the previous statement is false
    arr.push(n);
  }
  return arr;
}

collatzSequence(23);
