# Testing

### Why Testing?

* It proviedes consistency across programmers and environments.

* It's a good practice for developement, but it's something you will not get away from. Writing tests for your code to hit every mark before deployemnt looks VERY good.

## Vocab Points

`Unit Test`: Writing Code that will test your code within a certain context.

## Websites

`Test-Driven Developement`: https://en.wikipedia.org/wiki/Test-driven_development

`Sinon`: http://sinonjs.org/

`Sinon-Chai`: https://github.com/domenic/sinon-chai

`Mocha`: https://mochajs.org/

`Chai`: http://www.chaijs.com/

**_"Test-driven development (TDD) is a software development process that relies on the repetition of a very short development cycle: requirements are turned into very specific test cases, then the software is improved to pass the new tests, only. This is opposed to software development that allows software to be added that is not proven to meet requirements."_**

`(Agile) Units`: The amount of work a programmer can get done in a week.

## Mocha & Chai

`npm i mocha chai`

**Mocha needs you to write your tests as `test.js`.**

`Mocha` is a test framework that allows us to use assertion libraries to complete tasks - _The Test Runner_

`Chai` is a library we will use to run syntax, it comes with Mocha - _The Assertion Library_

* `should`

```JS
chai.should();

  foo.should.be.a('string');
  foo.should.equal('bar');
  foo.should.have.lengthOf(3);
  tea.should.have.property('flavors')
  .with.lengthOf(3);
```

* `expect`

```JS
var expect = chai.expect;

  expect(foo).to.be.a('string');
  expect(foo).to.equal('bar');
  expect(foo).to.have.lengthOf(3);
  expect(tea).to.have.property('flavors').with.lengthOf(3);
```

* `assert`

```JS
var assert = chai.assert;

  assert.typeOf(foo, 'string');
  assert.equal(foo, 'bar');
  assert.lengthOf(foo, 3)
  assert.property(tea, 'flavors');
  assert.lengthOf(tea.flavors, 3);
```
