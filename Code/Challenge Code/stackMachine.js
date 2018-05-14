function stackMachine(str) {
  // create a var to flag an error
  let err = false;
  // create a var as an arr that will hold our stack
  const arr = [];
  // create a function that check if there are at least two items in the stack
  function check() {
    if (
      arr[arr.length - 1] === undefined ||
      arr[arr.length - 2] === undefined
    ) {
      err = true;
    }
  }
  // create an obj to hold our + and * functions
  const obj = {
    '+': (x, y) => Number(x) + Number(y),
    '*': (x, y) => Number(x) * Number(y),
  };
  // loop through the str
  for (let i = 0; i < str.length; i++) {
    // if it is not a + or * then push onto our stack
    if (!obj[str[i]]) {
      arr.push(str[i]);
    } else {
      // if not, run our function to check for items
      check();
      // push the result onto our stack
      arr.push(obj[str[i]](arr.pop(), arr.pop()));
    }
  }
  // return -1 if err, if not return the last item in the array
  return err ? -1 : arr[arr.length - 1];
}
