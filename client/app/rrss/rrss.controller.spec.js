'use strict';

describe('Controller: rrssCtrl', function () {

  // load the controller's module
  beforeEach(module('eecrApp'));

  var rrssCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    rrssCtrl = $controller('rrssCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
