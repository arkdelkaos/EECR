'use strict';

describe('Service: infoclan', function () {

  // load the service's module
  beforeEach(module('eecrApp'));

  // instantiate service
  var infoclan;
  beforeEach(inject(function (_infoclan_) {
    infoclan = _infoclan_;
  }));

  it('should do something', function () {
    expect(!!infoclan).toBe(true);
  });

});
