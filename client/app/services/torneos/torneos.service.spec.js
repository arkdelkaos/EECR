'use strict';

describe('Service: torneos', function () {

  // load the service's module
  beforeEach(module('eecrApp'));

  // instantiate service
  var torneos;
  beforeEach(inject(function (_torneos_) {
    torneos = _torneos_;
  }));

  it('should do something', function () {
    expect(!!torneos).toBe(true);
  });

});
