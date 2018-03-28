#JavaScript

JavaScript can be used full-stack, or front-end and back-end on any web server or application.

Jsbin.com

The new variable declarations are: let / const

You cannot override a variable by using let twice with the same identifier.

If you don’t want the data to ever change, you use const.

You cannot set a constant of the same variable later on down the line. When you “let” a variable become one thing, you cannot use it again. This also goes for Const and other such things.

Var is function scoped, const and let are block scoped. Var is still relevant in CS6.

Always use Const, until you can’t. Use it so long as you want something that you do not want to mutate, something that will forever be solidified and will never change.

Window in the console is the global object that allows you to run JavaScript in the browser.

`Array.prototype` gives us methods

`Object.prototype` gives us more objects

---
```JS
Const myPersonObject = {
 FirstName: ‘Fred’,
 LastName: ‘Flintstone’,
};
```

`Console.log(myPersonObject.firstName);`

This builds and object and adds to properties to it, then adds values to those properties. We then call which property we want.

You can also add to the object with dot notation.

`MyPersonObject.age = 26;`

This adds the age property.

---
```JS
const meObject = {
  firstName: 'Kevin',
  lastName: 'Jolley',
};


meObject.age = 23;
meObject["favorite food"] = 'Pizza';

console.log(meObject);
```

You can also set functions as properties within the object.

You can also add objects to your object.

`Pet: {name: ‘Boobs’, type: ‘Cat’}`, can go within an object and you can add a “key value pair” to it as well.

---
```JS
Const myKeys = object.keys(meObject);
Console.log(myKeys);
```

This gives you back an array of your object keys, aka firstName, lastName, things like that.

This works for:

`Keys()`, `values()`, `entries();`
```JS
Const myValues = object.values(myObject);
Console.log(myValues);
```

This gives back the values of the object. So things like Kevin, Jolley, Pizza.

---
```JS
const meObject = {
  firstName: "Kevin",
  lastName: "Jolley",
};

meObject.age = 23;
meObject["favorite food"] = "Pizza";
meObject["homeTown"] = "Houston";
console.log(meObject);

const myKeys = Object.keys(meObject);
console.log(myKeys);

const myValues = Object.values(meObject);
console.log(myValues);

const myEntries = Object.entries(meObject);
console.log(myEntries);
```

---

`Console.log(typeof myArray);`

Typeof evaluates the thing and then returns a string based on what it is.

An array is basically an object that is treated differently.

Arrays automatically get a key/value pair mapping based on a 0 based index.

So [1, 2, 3, 4] would be 0, 1, 2, 3 for the values within the array and the keys respectively.

`Console.log(Array.isArray(myArray));`

This should return true if the (object) is an array.

---
```JS
Const hogwarts = [’Harry’, ‘Hermoine’, ‘Ron’];

Console.log(hogwarts[hogwarts.length - 1]);
```

This returns the last item on an array every time.

//

Push, Pop, Shift, Unshift, Slice, Splice

`.push` adds to the end of the array

`.pop` takes an item off the end of the array

`.unshift` would add an item to the front of the array

If you wanted to capture the value that comes off the end of the array, you would use
```JS
Const = myValue(hogwarts.pop);
Return myValue();
```

This would take the last item off the array and then log it.

---

`.forEach`, `.map`, `.reduce`, `.filter`

Callbacks are functions that are passed around to other functions so they can be used multiple times over.

The first argument these function receive is a callback function, and it’s usually an item in the array.
```JS
const map = (elements, cb) => {
  const newArray = [];
  for(let i=0 ; i < elements.length; i++) {
    return newArray.push(cb(elements[i], i));
  }
  return newArray;
};
```

You will be returning a new array, then pushing `(cb(item[index]), index]`

If you start a .reduce function, you must always define a final variable. It will take a function as it’s first argument. If it does not have a defined number it will take the first item of an array.

---

Quokka — Worthwhile to install.

##Closure:
```JS
Const myAmazingVar = ‘KITTY’;
 Function exposeKitty() {
  Console.log(myAmazingVar);
}

ExposeKitty();

{ // Global
 MyAmazingVar String: ‘KITTY’,
 ExposeKitty Function: {
  Console.log()
 }
Console.log()
}

```

Scope will always go up the chain in a reverse cascade. It will check the highest item in the nest based on scope.

You can always access a global function or variable from another function or scope, as they are always on the global scope.

Pythontutor.com

---

##Template Strings
```JS
Console.log(’Hello ‘ + name);
```

Is the same as
```JS
Console.log(`Hello ${name}`);
```

Backticks make things much easier as things become more complex.

This is a new way to represent strings.

---

##Fat Arrow Function
```JS
Const function = parameter => return;

Const sayHi = greeting => greeting;

[1, 2, 3].forEach(item => console.log(item));

```

This loops over the array and returns each item in the array.

```JS
[1, 2, 3].forEach(function(item) {
 Console.log(item);
});
```

Same thing as the fatarrow function above.


##Recursion

Another way to represent a loop.

Using a function to achieve a looping program, similar to a for loop or a while loop, it will go until you tell it to stop.

Recursion is a function that calls itself until it doesn’t.


Flatten condenses a nested array


---


The `this` keyword.

`this` points to an object, it can be used to reference an object without having to use the objects name.

```JS
// when in the global scope, this will default to the window.
function sayName(name) {
    console.log(this);
    return name;
}


sayName("D'Artagan");
```

---

##New Binding

Code in a capital case is a constructor function.
```JS
Function CordialPerson() {

}
```

---

Any time you extend a parent, you must invoke `super`.