'use strict';

(function() {

class AdminController {
  constructor(User, $http, $scope, socket, cartas, $log) {
    this.$log = $log;
    this.socket = socket;

    // Use the User $resource to fetch all users
    this.users = User.query();

    // Infoclan
    this.$http = $http;
    this.info = [];
    $http.get('/api/infoclan').then(response => {
      this.info.push(response.data);
      socket.syncUpdates('infoclan', this.info);
      $scope.newHtmlContent = this.info[0].texto;
    });


    // Cards
    this.cartas = cartas.listCartas();
    socket.syncUpdates('carta', this.cartas);

  }

  delete(user) {
    user.$remove();
    this.users.splice(this.users.indexOf(user), 1);
  }

  save() {
      this.$http.post('/api/infoclan/update', this.info[0]);
  }

}

angular.module('eecrApp.admin')
  .controller('AdminController', AdminController);

})();
