'use strict';

angular.module('eecrApp.auth', [
  'eecrApp.constants',
  'eecrApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
