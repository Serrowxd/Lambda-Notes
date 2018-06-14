function balancedBrackets(str) {
  // split the str into an arr
  let line = str.split('');
  // set a stack to keep track of the open bracket
  const stack = [];
  // set a flag to check if it is balanced
  let ans = true;
  // define the matching brackets
  const open = { '(': ')', '{': '}', '[': ']' };
  // define the closing brackets
  const close = { ')': true, '}': true, ']': true };
  // loop through the arr
  line.forEach(item => {
    // check if the item is an open bracket
    if (open[item]) {
      // if so, push to stack
      stack.push(item);
    } else if (close[item]) {
      // if not, check the stack for the matching open bracket
      // if the last item in the stack is not the matching brack, the str is not balanced
      if (open[stack.pop()] !== item) ans = false;
    }
  });
  // return our flag and and an empty stack
  return ans && stack.length === 0;
}
