'use strict';

angular.module('eecrApp')
  .directive('rrss', () => ({
    templateUrl: 'app/rrss/rrss.html',
    controller: 'rrssController',
    restrict: 'E',
    controllerAs: 'rrss'
  }));
