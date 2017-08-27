const should = require('chai').should();

const adder = require('../fizzBuzzer');


// unit tests for our `adder` function
describe('fizz buzzer', function() {

  // test the normal case
  it('returns a string or numeric value dependent upon input', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {a: 2, expected: 2},
      {a: 3, expected: 'fizz'},
      {a: 10, expected: 'buzz'},
      {a: 30, expected: 'fizz-buzz'}
    ];
    // for each set of inputs (a, b), `adder` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = adder(input.a);
      answer.should.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      ['a'],
      [false]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          adder(input[0], input[1])
      }).should.throw(Error);
    });
  });
});