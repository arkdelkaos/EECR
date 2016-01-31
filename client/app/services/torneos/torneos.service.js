'use strict';

angular.module('eecrApp')
  .factory('torneos', function ($http, $q, $User) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
