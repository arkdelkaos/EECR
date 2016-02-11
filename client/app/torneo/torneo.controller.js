'use strict';

(function() {
class TorneoCtrl {
  constructor(Auth, $scope, socket, Torneos, $log, appConfig, $filter, uibDateParser) {
    this.$log = $log;
    this.$filter = $filter;
    this.torneos = Torneos.query();
    socket.syncUpdates('torneo', this.torneos);
    $log.info(this.torneos);
    this.appConfig = appConfig;
    this.user = Auth.getCurrentUser();

    //nuevo torneo
    this.mostrarNuevo = false;
    this.mostrarNuevoTexto = 'Crear un Torneo';
    this.okNuevo = false;
    this.okNuevoName = false;
    this.nuevo = new Torneos();
    this.nuevo.name = "";
    this.nuevo.info = "###**[Normas por defecto]**  \nLos jugadores que quiera **participar en este torneo** deben estar registrados y **validados**; para pasar el proceso de validación, deben acceder a las opciones de su usuario *(barra de menú)*, y seguir las instrucciones que allí encontrará.  \nLa duración del torneo depende de la duración de sus fases. Cada fase puede durar un **máximo de 24h**; pero acabará en el momento en el que los contrincantes introduzcan el marcador final. En caso de errores o problemas con dicho marcador, **el creador del torneo hará de árbitro**.";
    this.nuevo.active = true;
    this.nuevo.open = true;
    this.nuevo.official = true;
    this.nuevo.clan = "";
    this.nuevo.owner = "";
    this.nuevo.users = [];
    this.nuevo.rounds = [];

    this.round = {
        active: true,
        user1: "",
        user2: "",
        score1: {
          user1: "",
          user2: ""
        },
        score2: {
          user1: "",
          user2: ""
        },
        scoreFinal: {
          user1: "",
          user2: ""
        }
    };
  }

  switchMostrarNuevo(){
    this.mostrarNuevo = !this.mostrarNuevo;
    if(this.mostrarNuevo){
      this.mostrarNuevoTexto = 'Ocultar el editor de Nuevo Torneo';
    }else{
      this.mostrarNuevoTexto = 'Crear un Torneo';
    }
  }

  nuevoValidarName(){
    this.okNuevoName = false;
    this.okNuevo = false;
    if(this.nuevo.name.length>0){
      if(this.$filter('filter')(this.torneos, {'name': this.nuevo.name}, true)!=[]){
        this.okNuevoName = true;
        this.nuevoValidar(this.nuevo.clan);
      }
    }
  }

  nuevoValidar(clan){
    this.nuevo.clan = clan;
    if(this.appConfig.clanes.indexOf(this.nuevo.clan,0) >= 0){
      if(this.okNuevoName){
        this.okNuevo = true;
      }else{
        this.okNuevo = false;
      }
    }else{
      this.okNuevo = false;
    }
  };

  nuevoSave() {
    this.nuevo.owner = this.user._id;
    this.nuevo.users.push(this.user._id);
    this.$log.info(this.nuevo);
    this.nuevo.$save();
    this.okNuevo = false;
    this.okNuevoName = false;
    this.nuevo.clan = "";
    this.nuevo.name = "";
  }

  inscribirse(torneo){

  }
}

angular.module('eecrApp')
  .controller('TorneoCtrl', TorneoCtrl);
})();
