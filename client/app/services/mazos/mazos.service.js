'use strict';

angular.module('eecrApp')
.factory('mazos', function (Auth, $log, $http, socket, $resource){
      var service = {};
      var me = Auth.getCurrentUser();
      var id = Auth.getCurrentUser()._id;

      var userMazo = [];
      var listaMazos = [];

      $log.info('[New Resource] Lista de cartas');
      var Mazos = $resource('/api/decks', {}, {query: {
          isArray: true,
          cache: true,
          method: 'GET'
      }});

      $log.info('[New Resource] Mazo de ' + me.name + ' id: ' + id);
      var userMazo = $resource('/api/users/'+id+'/deck', {}, {query: {
          isArray: true,
          cache: true,
          method: 'GET'
      }});

      service.addMazo = function(m) {
          $log.info('New mazo: '+ m);
          return new Mazos(mazo).$save();
      };

      service.listMazos = function () {
          $log.info('Fetching mazos.');
          return Mazos.query();
      };

      service.getUserMazo = function () {
          $log.info('Fetching user mazo.');
          return userMazo.query();
      };

      service.putUserMazo = function (m) {
          $log.info('Save user mazo '+ m);
          return new userMazo(m).$save();
      };

      return service;
  });
