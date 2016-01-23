'use strict';

(function() {

class ClanController {
  constructor(Auth, $scope, $http, socket) {
    this.isAdmin = Auth.isAdmin;
    // Infoclan
    this.$http = $http;
    this.info = [];
    $http.get('/api/infoclan').then(response => {
      this.info.push(response.data);
      socket.syncUpdates('infoclan', this.info);
      $scope.newHtmlContent = this.info[0].texto;
    });
  }

  save() {
    this.$http.post('/api/infoclan/update', this.info[0]);
  }
}

angular.module('eecrApp')
  .controller('ClanController', ClanController);

  })();
