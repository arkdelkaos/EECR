'use strict';

describe('Controller: TorneoCtrl', function () {

  // load the controller's module
  beforeEach(module('eecrApp'));

  var TorneoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TorneoCtrl = $controller('TorneoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
