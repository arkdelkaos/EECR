'use strict';
import angular from 'angular';


export class NavbarComponent {
  menu = [{
    title: 'Home',
    state: 'main'
  }];
  isLoggedIn: Function;
  isAdmin: Function;
  getCurrentUser: Function;
  isCollapsed = true;

  constructor($scope, Auth, infoclan, $location) {
    'ngInject';

    this.$location = $location;
    this.isLoggedIn = Auth.isLoggedInSync;
    this.isAdmin = Auth.isAdminSync;
    this.getCurrentUser = Auth.getCurrentUserSync;
    this.user = Auth.getCurrentUser();

    this.infoclan = infoclan;
    infoclan.get().then();

    $scope.status = {
      isopen: false
    };
  }

  isColider() {
    if (this.user.rango === 'colider' || this.user.rango === 'lider') {
      return true;
    } else {
      return false;
    }
  }

  isActive(route) {
    return route === this.$location.path();
  }

}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.jade'),
    controller: NavbarComponent
  })
  .name;
