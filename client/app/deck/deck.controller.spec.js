'use strict';

describe('Controller: DeckController', function () {

  // load the controller's module
  beforeEach(module('eecrApp'));

  var DeckController, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeckController = $controller('DeckController', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
