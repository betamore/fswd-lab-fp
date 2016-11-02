require('chai').should();

var _ = require('lodash');

function addX(value) {
  return function(number) {
    return value + number;
  };
}

function add(add1, add2) {
  return add1 + add2;
}

function addThree(add1, add2, add3) {
  return add1 + add2 + add3;
}

describe('higher order functions', function() {
  it('should have a fake test', function() {
    true.should.equal(true);
  });

  describe('addX', function() {
    it('should create a function that adds 7', function() {
      var add7 = addX(7);
      add7(3).should.equal(10);
    });
  });

  describe('add partial', function() {
    it('should do partials', function() {
      var add7 = _.partial(add, 7);
      add7(3).should.equal(10);
    });

    it('should do partial partials', function() {
      var add7 = _.partial(addThree, 7, 3);
      add7(3).should.equal(13);
    });
  });

  describe('add curry', function() {
    it('should curry', function() {
      // var add7 = _.curry(addThree)(7);
      var add10 = _.curry(addThree)(7,3);
      add10(5).should.equal(15);
    });
  });
});
