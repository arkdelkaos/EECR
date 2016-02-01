'use strict';

describe('Controller: CofresCtrl', function () {

  // load the controller's module
  beforeEach(module('eecrApp'));

  var CofresCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CofresCtrl = $controller('CofresCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
