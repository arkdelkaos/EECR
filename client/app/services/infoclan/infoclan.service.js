'use strict';

function infoclan($http, socket, $q) {
  var service = {};

  var info = [];

  var get = function() {
    var defered = $q.defer();
    var promise = defered.promise;
    $http.get('/api/infoclan').then(response => {
      info.push(response.data);
      socket.syncUpdates('infoclan', info);
      return defered.resolve(info);
    });
    return promise;
  };

  var save = function() {
    $http.post('/api/infoclan/update', info[0]);
  };

  // Public API here
  service.get = function() {
    return get();
  };
  service.save = function() {
    return save();
  };
  service.info = function() {
    return info[0];
  };

  return service;
}

export default angular.module('eecrApp.infoclan', [])
  .factory('infoclan', infoclan)
  .name;
