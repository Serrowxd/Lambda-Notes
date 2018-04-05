/*

person.prototype.speak = function () {
    return 'Hello, my name is ${this.name}';
};

// This attaches a prototype to the person constructor without attaching .speak to everything you use that constructor for.

function Child(childAttrs) {
    Person.call(this, childAttrs);
    this.isChild = childAttrs.isChild;
}

const pebbles = new Child ({
    gender: 'Female',
    age: 3,
    name: 'Pebbles',
    homeTown: 'Bedrock',
    isChild: true,
});

// This is adding the "isChild" attributes while still retaining the attributes of the person constructor.

child.prototype = object.create(Person.prototype);
// this creates a speak function for the child prototype.

child.prototype.checkIfChild = function() {
    return '${this.name} is child? ${this.isChild}';
};

*/

// ############################# FRUIT #############################

function Fruit(attrs) {
  this.type = attrs.type;
  this.name = attrs.name;
  this.isRipe = attrs.isRipe;
  this.calories = attrs.calories;
}

Fruit.prototype.shipped = function(destination) {
  console.log(`Shipping ${this.name} to ${destination}`);
};

Fruit.prototype.calculateCals = function() {
  console.log(`Calories in ${this.name} are ${this.calories * 0.45}`);
};

// ############################# BANANA #############################

function Banana(bananaAttrs) {
  Fruit.call(this, bananaAttrs);
  this.doMonkeysLikeIt = bananaAttrs.doMonkeysLikeIt;
}

Banana.prototype = Object.create(Fruit.prototype);

Banana.prototype.checkIfMonkeysLikeIt = function() {
  if (this.doMonkeysLikeIt) {
    return "Yes! Monkeys love Bananas";
  } else {
    return "Nope! Monkeys are no longer into bananas.";
  }
};

// ############################# KIWI #############################

function Kiwi(kiwiAttrs) {
  Fruit.call(this, kiwiAttrs);
  this.isFuzzy = kiwiAttrs.isFuzzy;
}
// always capitalize constructor functions!

Kiwi.prototype = Object.create(Fruit.prototype);

// Capital O in Object is actually a global function prototype, so you will want to capitalize it.

Kiwi.prototype.checkIfFuzzy = function() {
  if (this.isFuzzy) {
    return true;
  } else {
    return false;
  }
};

const newBanana = new Banana({
  doMonkeysLikeIt: true,
  type: "Tree",
  name: "Banana",
  isRipe: false,
  calories: 0.1
});

const newKiwi = new Kiwi({
  isFuzzy: true,
  type: "Tree",
  name: "Kiwi",
  isRipe: false,
  calories: 0.7
});

console.log(newBanana);
console.log(newBanana.checkIfMonkeysLikeIt());
//   console.log(newBanana.calculateCals());
//   console.log(newBanana.shipped('Alaska'));

newKiwi.calculateCals();
newKiwi.shipped("Dominican Republic");
console.log(newKiwi.checkIfFuzzy());
