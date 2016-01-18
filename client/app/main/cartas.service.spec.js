'use strict';

describe('Service: cartas', function () {

  // load the service's module
  beforeEach(module('eecrApp'));

  // instantiate service
  var cartas;
  beforeEach(inject(function (_cartas_) {
    cartas = _cartas_;
  }));

  it('should do something', function () {
    expect(!!cartas).toBe(true);
  });

});
