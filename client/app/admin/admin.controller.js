'use strict';

(function() {

class AdminController {
  constructor(User, $http, $scope, socket) {
    // Use the User $resource to fetch all users
    this.users = User.query();

    // Infoclan
    this.$http = $http;
    this.nombre = "";
    this.twitter = "";
    this.texto = "";

    $http.get('/api/infoclan').then(response => {
      this.nombre = response.data.nombre;
      this.twitter = response.data.twitter;
      socket.syncUpdates('nombre', this.nombre);
      socket.syncUpdates('twitter', this.nombre);
    });

    $http.get('/api/infoclan/texto').then(response => {
      this.texto = response.data.texto;
      socket.syncUpdates('texto', this.texto);
    });

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('nombre');
      socket.unsyncUpdates('twitter');
      socket.unsyncUpdates('texto');
    });
  }

  delete(user) {
    user.$remove();
    this.users.splice(this.users.indexOf(user), 1);
  }
}



angular.module('eecrApp.admin')
  .controller('AdminController', AdminController);

})();
