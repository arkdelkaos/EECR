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
      this.texto = response.data.texto;
      socket.syncUpdates('nombre', this.nombre);
      socket.syncUpdates('twitter', this.nombre);
      socket.syncUpdates('texto', this.texto);
    });

    $scope.newHtmlContent = this.texto;
  }

  delete(user) {
    user.$remove();
    this.users.splice(this.users.indexOf(user), 1);
  }

  save() {
      this.$http.put('/api/infoclan/', {
        nombre: this.nombre,
        twitter: this.twitter,
        texto: this.texto});
    }
  }



angular.module('eecrApp.admin')
  .controller('AdminController', AdminController);

})();
