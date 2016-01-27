'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
  //   'title': 'Top',
  //   'link': '/'
  // },
  // {
    'title': 'Clan',
    'link': '/clan'
  // },
  // {
  //   'title': 'Mazos',
  //   'link': '/deck'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor($location, Auth, infoclan) {
    this.$location = $location;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;

    // Infoclan
    this.infoclan = infoclan;
    infoclan.get().then();
  }

  isActive(route) {
    return route === this.$location.path();
  }
}

angular.module('eecrApp')
  .controller('NavbarController', NavbarController);
