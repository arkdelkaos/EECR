'use strict';

angular.module('eecrApp')
  // .factory('cartas', function ($log, $http, socket, $q) {
  //
  //   var getCartas = function(){
  //     return $http.get('/api/cards', {cache:true}).then(response => response.data)
  //   };
  //
  //   return {
  //     getCartas : getCartas()
  //   };
  // });



.factory('cartas', function ($log, $http, socket, $resource){
      var service = {};

      $log.info('New cards resource.');
      var Cartas = $resource('/api/cards', {}, {query: {
          isArray: true,
          cache: true,
          method: 'GET'
      }});

      service.addCarta = function(carta) {
          $log.info('New card.');
          return new Cartas(carta).$save();
      };

      service.listCartas = function () {
          $log.info('Fetching cartas.');
          return Cartas.query();
      };

      return service;
  });
