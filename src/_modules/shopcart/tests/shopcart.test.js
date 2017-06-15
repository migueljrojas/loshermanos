'use strict';

var Shopcart = require('../shopcart');

describe('Shopcart View', function() {

  beforeEach(function() {
    this.shopcart = new Shopcart();
  });

  it('Should run a few assertions', function() {
    expect(this.shopcart);
  });

});
