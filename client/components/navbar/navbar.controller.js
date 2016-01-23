'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Top',
    'link': '/'
  },
  {
    'title': 'Clan',
    'link': '/clan'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor($location, Auth, $http, socket) {
    this.$location = $location;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;

    this.$http = $http;
    this.info = [];
    $http.get('/api/infoclan').then(response => {
      this.info.push(response.data);
      socket.syncUpdates('infoclan', this.info);
      $scope.newHtmlContent = this.info[0].texto;
    });
  }

  isActive(route) {
    return route === this.$location.path();
  }
}

angular.module('eecrApp')
  .controller('NavbarController', NavbarController);
