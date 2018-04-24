const name = 'Kevin Jolley';
const myObj = { name, age: 23, location: 'Houston' }; // simply putting 'name' is the same as { name: 'name' }
const arrayOfThings = ['Lemonade', 'Memes', 'Hands Like Houses', 'Cellphone'];

const adderFunction = (param1, param2) => {
  return param1 + param2; // concats strings
};

const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

module.exports = {
  name,
  myObj,
  arrayOfThings,
  adderFunction,
};
