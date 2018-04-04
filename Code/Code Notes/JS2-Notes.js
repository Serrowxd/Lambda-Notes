// when in the global scope, this will default to the window.
function sayName(name) {
    console.log(this);
    return name;
}

sayName("D'Artagan");


// Implicit Binding
const myObj = {
    greeting: 'Hello',
    sayHello: function() {
        console.log (`${this.greeting} my name is ${name}`);
        console.log(this);
    }
};

myObj.sayHello('Newman');


const sayNameFunc = obj => {
    obj.sayName = function() {
        console.log('Hello my name is ${this.name}');
        console.log(this);
    }
};

const me = { name: 'Kevin' };
const you = { name: 'Ryan' };
const her = { name: 'Kaitlyn' };

sayNameFunc(me);
sayNameFunc(you);
me.sayName();
you.sayName();
her.sayName();

// When you call the object left of the dot, the object gets the "this" keyword.

// New Binding

// This is a constructor.
function CordialPerson(greeter) {
    this.greeting = 'Hello';
    this.greeter = greeter.name;
    this.speak = function() {
        console.log(`Hello, ${this.greeter}`);
        console.log(this);
    };
}

const jerry = new CordialPerson({ name: 'Newman'});
const newman = new CordialPerson({ name: 'Jerry'});

console.log(jerry.speak);
console.log(newman.speak);

// Jerry is an object.

// Explicit Binding

jerry.speak.call(newman);
newman.speak.apply(jerry);

// Difference between .call and .apply, apply can take in an array of arguments.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply


function Animal(object) {
    this.type = object.type;
    this.name = object.name;
    this.sound = object.sound;
    speak: function() {
        return this.sound;
    };
}

const doggo = new Animal({ type: 'Dog', name:'Murphy', sound:'Woof' });
doggo.speak();

// doggo was created from the constructor function 'Animal'.

const liger = new Animal({ type: 'LionTiger', name: 'Leery', sound: 'Roar/Meow'});
liger.speak();

// liger was created the same way as doggo. .speak uses the object.sound from 'Animal'.

class Animal {
    constructor(object) {
        this.type = object.type;
        this.name = object.name;
        this.sound = object.sound;
    }

    speak() {
        return this.sound;
    }
}

const doggo = new Animal({ type: 'Dog', name:'Murphy', sound:'Woof' });
doggo.speak();

// Animal is a class where we use a constructor function that calls the object. It's the same thing as using the function Animal(object), just a different way of writing it.

//https://gist.github.com/ryanhca/cbd2cb33eaacbf73b255224ce301c4b3