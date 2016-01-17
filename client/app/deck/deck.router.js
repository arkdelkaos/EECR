'use strict';

angular.module('eecrApp.deck')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/deck', {
        templateUrl: 'app/deck/deck.html',
        controller: 'DeckController',
        controllerAs: 'deck'
      });
  });
