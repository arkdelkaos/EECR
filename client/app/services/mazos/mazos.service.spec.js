'use strict';

describe('Service: mazos', function () {

  // load the service's module
  beforeEach(module('eecrApp'));

  // instantiate service
  var mazos;
  beforeEach(inject(function (_mazos_) {
    mazos = _mazos_;
  }));

  it('should do something', function () {
    expect(!!mazos).toBe(true);
  });

});
