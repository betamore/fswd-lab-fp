require('chai').should();

var _ = require('lodash');

function sieveFor(val) {
  return function(v) {
    return v >= (val * val) && v % val === 0;
  }
}

function filterForSieve(val) {
  return function(arr) {
    return _.reject(arr, sieveFor(val));
  }
}

function sieve(val) {
  return _(_.times(val + 1))
    .reject(function(v) { return v === 0; })
    .thru(function(arr) {
      return _.reduce(_.reject(arr, function(v) { return v === 1; }),
        function(memo, val) {
          return _.reject(memo, sieveFor(val));
        }, _.clone(arr));
    })
    .value();
}

console.log(sieve(100));

function isPrime(number) {
  return _.every(_.drop(_.times(number), 2), function(v) { return number % v; });
}

describe('sieve', function() {
  _.forEach(_.range(2, 500), function(range) {
    it('should be correct for ' + range, function() {
      var s = sieve(range);
      _.every(s, isPrime).should.be.true;
    });
  });
  it('should return [1] for 1', function() {
    sieve(1).should.deep.equal([1]);
  });

  it('should return [1, 2, 3, 5] for 5', function() {
    sieve(5).should.deep.equal([1,2,3,5]);
  });

  it('should return [1, 2, 3, 5, 7, 11] for 12', function() {
    sieve(12).should.deep.equal([1,2,3,5,7,11]);
  })
});
