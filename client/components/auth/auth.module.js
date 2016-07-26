'use strict';

angular.module('eecrApp.auth', ['eecrApp.constants', 'eecrApp.util', 'ngCookies', 'ui.router'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
