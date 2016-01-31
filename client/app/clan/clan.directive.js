'use strict';

angular.module('eecrApp')
  .directive('clan', () => ({
    templateUrl: 'app/clan/clan.html',
    controller: 'ClanController',
    restrict: 'E',
    controllerAs: 'clan'
  }));
