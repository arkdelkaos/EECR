'use strict';

class NavbarController {
  //end-non-standard

  //start-non-standard
  constructor($scope, $location, Auth, infoclan) {
    this.$location = $location;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.user = Auth.getCurrentUser();

    // Infoclan
    this.infoclan = infoclan;
    infoclan.get().then();

    $scope.status = {
      isopen: false
    };

  }

  isColider(){
    if(this.user.rango=='colider' || this.user.rango=='lider'){
      return true;
    }else{
      return false;
    }
  }

  isActive(route) {
    return route === this.$location.path();
  }
}

angular.module('eecrApp')
  .controller('NavbarController', NavbarController);
