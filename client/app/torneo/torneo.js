'use strict';

angular.module('eecrApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/torneos', {
        templateUrl: 'app/torneo/torneo_lista.html',
        controller: 'TorneoCtrl',
        controllerAs: 'torneo'
      })
      .when('/torneos/:id', {
        templateUrl: 'app/torneo/torneo_vista.html',
        controller: 'TorneoCtrl',
        controllerAs: 'torneo'
      });
  })
  .directive('torneo', () => ({
    templateUrl: 'app/torneo/torneo.html',
    controller: 'TorneoCtrl',
    restrict: 'E',
    controllerAs: 'torneo'
  }));
