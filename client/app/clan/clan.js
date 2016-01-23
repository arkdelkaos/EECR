'use strict';

angular.module('eecrApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/clan', {
        templateUrl: 'app/clan/clan.html',
        controller: 'ClanController',
        controllerAs: 'clan'
      });
  });
