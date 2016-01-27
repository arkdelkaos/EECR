'use strict';

(function() {

class ClanController {
  constructor(Auth, $scope, socket, infoclan) {
    this.isAdmin = Auth.isAdmin;
    // Infoclan
    // Infoclan
    this.infoclan = infoclan;
    infoclan.get().then();
  }

  save() {
    this.infoclan.save();
  }
}

angular.module('eecrApp')
  .controller('ClanController', ClanController);

  })();
