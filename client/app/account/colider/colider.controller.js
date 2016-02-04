'use strict';

(function() {

class ColiderController {
  constructor(User, $scope, appConfig, $window) {
    this.appConfig = appConfig;
    this.$window = $window;

    this.currentPage = 0; //primera página
    this.paginaSize = 5;

    this.confirbool = false;

    this.users = User.query();

    $scope.status = function(){
      var status = [];
      for(var i in users){
          status.push({
            isopen: false,
            isopen2: false,
            isopen3: false
          });
      }
      return status
    };
  }

  setConfirmado(usr) {
    if(!usr.clanConfirmado){
      usr.clanConfirmado = true;
    }else{
      usr.clanConfirmado = false;
    }
    usr.$update();
  }
}

angular.module('eecrApp')
  .controller('ColiderController', ColiderController);

})();
