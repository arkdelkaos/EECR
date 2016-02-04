'use strict';

(function() {

class AdminController {
  constructor(User, $scope, socket, cartas, $log, infoclan, appConfig, $window) {
    this.$log = $log;
    this.socket = socket;
    this.appConfig = appConfig;
    this.$window = $window;

    this.currentPage = 0; //primera página
    this.paginaSize = 5;


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

  setClan(usr,clan) {
    usr.clan = clan;
  }

  setRango(usr,rango) {
    usr.rango = rango;
  }

  setRole(usr,role) {
    usr.role = role;
  }

  setConfirmado(usr) {
    if(!usr.clanConfirmado){
      usr.clanConfirmado = true;
    }else{
      usr.clanConfirmado = false;
    }
  }

  setName(usr,name) {
    usr.name = name;
  }

  setNickJuego(usr,nick) {
    usr.nickJuego = nike;
  }

  saveUser(usr){
    usr.$update();
    this.$window.alert(usr.name+' guardado.');
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
