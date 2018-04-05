const sayBye = () => {
  console.log("Bye!");
};

setTimeout(sayBye, 2000);

// this will run the code after a set time period of milliseconds - or 2000 milliseconds.

for (var i = 1; i <= 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 0);
} // initial function code

for (let i = 1; i <= 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 0);
} // easy fix

for (var i = 1; i <= 10; i++) {
  setTimeout(
    function(arg) {
      console.log(arg);
    },
    1000,
    i
  );
} // another solution

// Let has a block scope, while var can be hoisted.

{
  var x = "I need coffee"; // not block scoped
  let y = "I need a nap"; // let is block scoped
}

console.log(x);
console.log(y);
