  'use strict';

  (function() {

  function TorneosResource($resource) {
    return $resource('/api/torneos/:id', {
      id: '@_id'
    });
  }

  angular.module('eecrApp')
    .factory('Torneos', TorneosResource);

  })();
