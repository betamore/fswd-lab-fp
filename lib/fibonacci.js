// Write a function that accepts a number (number)
// and returns the value of the Fibonacci number
// in that position in the list
// the Fibonacci numbers follow this pattern:

// fib(0) => 0
// fib(1) => 1
// fib(n) => fib(n-1) + fib(n-2)

var _ = require('lodash');

var fibAnswers = [];

function innerFib(acc) {
    return [acc[1]].concat([acc[0] + acc[1]]);
}

function fib(number) {
    if (number < 2) { return 1; }
    return _.flow(function(x) { return x + 1; }, //_.partial(_.add, 1),
                  function(x) { return _.range(2, x); }, //_.partial(_.range, 2),
                  function(x) { return _.reduce(x, innerFib, [1,1]); }, //_.partial(_.reduce, _, innerFib, [1, 1]),
                  function(x) { return _.nth(x, 1); })(number); //_.partial(_.nth, _, 1))(number);
    // return _.reduce(_.range(2, number + 1), innerFib, [1, 1])[1];
    // f(g(h(i(x))))
}

module.exports = fib;
