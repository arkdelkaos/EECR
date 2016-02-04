'use strict';

angular.module('eecrApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/colider', {
        templateUrl: 'app/account/colider/colider.html',
        controller: 'ColiderController',
        controllerAs: 'colider'
      });
  });
