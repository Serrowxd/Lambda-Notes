const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert; // Pulls 'assert' off the 'Chai' Library
// Can also be written as const assert = require('chai').assert;

const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const { name, myObj, arrayOfThings, adderFunction } = require('./index');

describe('index.js', () => {
  // testing suite

  describe('name', () => {
    // breaks down name
    it('should be a string', () => {
      assert.typeOf(name, 'string'); // testing assertion - asserts that name should be a 'string'.
    });
    it('should be equal to Kevin Jolley', () => {
      assert.equal(name, 'Kevin Jolley'); // testing if 'name' is equal to 'Kevin Jolley'.
    });
  });

  describe('myObj', () => {
    // breaks down myObj
  });

  describe('arrayOfThings', () => {
    // breaks down arrayOfThings
    it('should be an array', () => {
      const arr = arrayOfThings;
      expect(arr).to.be.an('array');
      expect(arr).to.have.lengthOf(4);
    });
  });

  describe('adderFunction', () => {
    // breaks down adderFunction
    it('should be return 2 strings concanated together', () => {
      const str1 = 'foo';
      const str2 = 'bar';
      let val;
      const spy = sinon.spy();
      const stringsConcat = adderFunction(str1, str2, spy);
      expect(spy).to.have.been.calledOnce;
    });
    it('should return the sum of 2 numbers', () => {
      const num1 = 10;
      const num2 = 190;
      let val;
      const stringsConcat = adderFunction(num1, num2, value => {
        val = value;
      });
      expect(stringsConcat).to.be.a('number');
      expect(stringsConcat).to.equal(200);
    });
  });
});
