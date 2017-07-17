require('chai/register-should');
var _ = require('lodash');

var fib = require('../lib/fibonacci');
// function fib(v) {
//     if (v < 2) {
//         return 1;
//     }
//     // v = 0 => [1]
//     // v = 1 => [1, 1]
//     // v = 2 => [1, 1, 2]
//
//     var range = _.range(2, v + 1); // 0 => [0] => [1]
//     var fibArray = _.reduce(range, function(acc) {
//         var fibEnd = _.takeRight(acc, 2);
//         return acc.concat([ fibEnd[0] + fibEnd[1] ]);
//     }, [1, 1]);
//
//     return _.last(fibArray);
// }

describe('fibonacci', function() {
    it('should be 1 for 0', function() {
        fib(0).should.equal(1);
    });

    it('should be 1 for 1', function() {
        fib(1).should.equal(1);
    });

    it('should be 2 for 2', function() {
        fib(2).should.equal(2);
    });

    it('should be 3 for 3', function() {
        fib(3).should.equal(3);
    });

    it('should be 5 for 4', function() {
        fib(4).should.equal(5);
    });

    it('should be 8 for 5', function() {
        fib(5).should.equal(8);
    });

    it('should be 13 for 6', function() {
        fib(6).should.equal(13);
    });

    describe('examples from the function description', function() {
        [
            [0, 1],
            [2, 2],
            [7, 21],
             [16, 1597],
             [25, 121393],
             [40, 165580141],
             [50, 20365011074]
         ].forEach(function(testValues) {
              it('fib(' + testValues[0] + ')', function() {
                  fib(testValues[0]).should.equal(testValues[1]);
              });
          });
    });
});
