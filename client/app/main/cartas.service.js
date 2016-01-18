'use strict';

angular.module('eecrApp')
  .factory('cartas', function ($log, $http, socket, $q) {

    // $http.get('/api/cards').then(response => {
    //     this.cartas = response.data;
    //     socket.syncUpdates('cartas', this.cartas);
    // });
    var getCartas = function(){
      return $http.get('/api/cards', {cache:true}).then(response => response.data)
    };

    // Public API here
    return {
      // getCartasPromise (){
      //   var promise = $http.get('/api/cards'),
      //       deferObject = deferObject || $q.defer();
      //
      //   promise.then(response => deferObject.resolve(response));
      //   return deferObject.promise
      // },
      getCartas : getCartas()
    };
  });
