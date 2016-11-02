require('chai').should();
var _ = require('lodash');

function isFizzOrBuzz(value) {
  if (value % 15 === 0) {
    return 'FizzBuzz';
  } else if (value % 5 === 0) {
    return 'Buzz';
  } else if (value % 3 === 0) {
    return 'Fizz';
  } else {
    return value;
  }
}

var rangeForVal = _.flow(_.partial(_.add, 1), _.times);

function fizzBuzz(val) {
  return _.map(rangeForVal(val), isFizzOrBuzz);
}

describe('FizzBuzz', function() {
  it('should be ["FizzBuzz"] for 0', function() {
    fizzBuzz(0).should.deep.equal(['FizzBuzz']);
  });

  it('should be ["FizzBuzz", 1, 2, "Fizz"] for 3', function() {
    fizzBuzz(3).should.deep.equal(['FizzBuzz', 1, 2, 'Fizz']);
  });

  it('should be ["FizzBuzz", 1, 2, "Fizz", 4, "Buzz"] for 5', function() {
    fizzBuzz(5).should.deep.equal(['FizzBuzz', 1, 2, 'Fizz', 4, 'Buzz']);
  });
});
