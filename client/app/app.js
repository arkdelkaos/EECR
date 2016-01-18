'use strict';

var underscore = angular.module('underscore', []);
        underscore.factory('_', function() {
            return window._; //Underscore should be loaded on the page
        });

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
  'underscore'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
