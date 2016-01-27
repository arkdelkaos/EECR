'use strict';

(function() {

class AdminController {
  constructor(User, $scope, socket, cartas, $log, infoclan) {
    this.$log = $log;
    this.socket = socket;

    // Use the User $resource to fetch all users
    this.users = User.query();

    // Infoclan
    this.infoclan = infoclan;
    infoclan.get().then(res => {
      $scope.newHtmlContent = infoclan.info().homeTexto;
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
    this.infoclan.save();
  }

}

angular.module('eecrApp.admin')
  .controller('AdminController', AdminController);

})();
