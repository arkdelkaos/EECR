'use strict';

angular.module('eecrApp', ['eecrApp.auth', 'eecrApp.admin', 'eecrApp.constants', 'ngCookies',
    'ngResource', 'ngSanitize', 'btford.socket-io', 'ui.router', 'ui.bootstrap',
    'validation.match',
    'ngParallax',
    'ngtweet',
    'btford.markdown',
    'duScroll',
    'ui.scrollpoint',
    'eecrFilters',
    'ngLodash'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
