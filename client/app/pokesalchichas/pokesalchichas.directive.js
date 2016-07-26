'use strict';

angular.module('eecrApp')
  .directive('pokesalchichas', () => ({
    templateUrl: 'app/pokesalchichas/pokesalchichas.html',
    controller: 'PokesalchichasController',
    restrict: 'E',
    controllerAs: 'pokesalchichas'
  }));
