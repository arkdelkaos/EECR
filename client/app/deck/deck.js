'use strict';

angular.module('eecrApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/deck', {
        templateUrl: 'app/deck/deck.html',
        controller: 'DeckController',
        controllerAs: 'deck'
      });
  });
