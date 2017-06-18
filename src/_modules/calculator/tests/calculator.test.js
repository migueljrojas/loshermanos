'use strict';

var Calculator = require('../calculator');

describe('Calculator View', function() {

  beforeEach(function() {
    this.calculator = new Calculator();
  });

  it('Should run a few assertions', function() {
    expect(this.calculator);
  });

});
