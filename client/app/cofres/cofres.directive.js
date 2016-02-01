'use strict';

angular.module('eecrApp')
  .directive('cofres', () => ({
    templateUrl: 'app/cofres/cofres.html',
    controller: 'CofresController',
    restrict: 'E',
    controllerAs: 'cofres'
  }));
