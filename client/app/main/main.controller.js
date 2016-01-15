'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket) {
    this.$http = $http;
    this.awesomeThings = [];

    $http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
      socket.syncUpdates('thing', this.awesomeThings);
    });

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });

    // Infoclan
    this.$http = $http;
    this.nombre = '';
    this.twitter = '';
    this.texto = '';

    $http.get('/api/infoclan').then(response => {
      this.nombre = response.data.nombre;
      this.twitter = response.data.twitter;
      this.texto = response.data.texto;
      socket.syncUpdates('nombre', this.nombre);
      socket.syncUpdates('twitter', this.nombre);
      socket.syncUpdates('texto', this.texto);
    });
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('eecrApp')
  .controller('MainController', MainController);

})();
