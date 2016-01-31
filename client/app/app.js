'use strict';

angular.module('eecrApp', [
  'eecrApp.auth',
  'eecrApp.admin',
  'eecrApp.deck',
  'eecrApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'btford.socket-io',
  'ui.bootstrap',
  'validation.match',
  'btford.markdown',
  'duScroll',
  'ui.scrollpoint',
  'ngParallax'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
