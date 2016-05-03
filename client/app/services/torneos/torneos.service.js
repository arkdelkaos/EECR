  'use strict';

  (function() {

  function TorneosResource($resource) {
    return $resource('/api/torneos/:id/:subdoc', {
      id: '@_id'
    },{
      update: {
        method: 'PUT'
      },
      addChatMsg: {
        method: 'POST',
        params: {
          subdoc: 'chat',
        }
      }
    });
  }

  angular.module('eecrApp')
    .factory('Torneos', TorneosResource);

  })();
