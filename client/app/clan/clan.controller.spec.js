'use strict';

describe('Controller: ClanCtrl', function () {

  // load the controller's module
  beforeEach(module('eecrApp'));

  var ClanCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClanCtrl = $controller('ClanCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
