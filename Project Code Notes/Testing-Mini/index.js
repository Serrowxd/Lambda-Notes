const name = 'Kevin Jolley';
const myObj = { name, age: 23, location: 'Houston' }; // simply putting 'name' is the same as { name: 'name' }
const arrayOfThings = ['Lemonade', 'Memes', 'Hands Like Houses', 'Cellphone'];

const adderFunction = (param1, param2) => {
  return param1 + param2; // concats strings
};

module.exports = {
  name,
  myObj,
  arrayOfThings,
  adderFunction,
};
