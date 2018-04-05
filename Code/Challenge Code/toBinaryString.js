function toBinaryString(number) {
  let n = 0;
  const toStringArr = [];

  let difference = Math.pow(2, n);

  while (difference <= number) {
    n++;
    difference = Math.pow(2, n);
    toStringArr.push(0);
  }

  n--;

  while (number > 0) {
    if (Math.pow(2, n) <= number) {
      toStringArr[n] = 1;
      number -= Math.power(2, n);
    }
    n--;
  }
  return toStringArr.reverse().join("");
}

toBinaryString(6);

// Way 1 - math.pow

function toBinaryString(number) {
  let binary = "";
  while (number > 0) {
    binary = number % 2 + binary;
    number >>= 1;
  }
  return binary;
}

toBinaryString(6);

// Way 2 - bitwise operators

function toBinaryString(number) {
  // start an array to store our digits
  let binaryArr = [];
  // set our index and our power at that index
  let n = 0;
  let difference = Math.pow(2, n);
  // while the power at the index is less than
  // or equal to the number
  while (difference <= number) {
    // increment index and get the power at the index
    n++;
    difference = Math.pow(2, n);
    // put a zero in the array in it's place
    binaryArr.push(0);
  }
  // decrement our index
  n--;
  // while the number is greater than zero
  while (number > 0) {
    // if the number is less than the power at the index
    if (Math.pow(2, n) <= number) {
      // we know that index has a 1
      binaryArr[n] = 1;
      // subtract that value from the index
      number -= Math.pow(2, n);
    }
    // decrement our index
    n--;
  }
  // return the array, but reverse and join it
  return binaryArr.reverse().join("");
}

toBinaryString(6);

// Chris's solution
