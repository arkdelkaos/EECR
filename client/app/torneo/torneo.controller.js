'use strict';

(function() {
class TorneoCtrl {
  constructor(Auth, $scope, socket, Torneos, $log, appConfig, $filter, uibDateParser, $routeParams, lodash, User) {
    this.$log = $log;
    this.$filter = $filter;
    this.torneos = Torneos.query();
    this.socket = socket;
    socket.syncUpdates('torneo', this.torneos);
    this.appConfig = appConfig;
    this.user = Auth.getCurrentUser();
    this.isAdmin = Auth.isAdmin;
    this._ = lodash;

    // this.users = User.query();

    this.currentId = $routeParams.id;
    this.validCurretId = false;
    this.currentTorneo = '';
    // this.currentTorneoOwner = '';
    // this.currentTorneoUsers = [];

    //nuevo torneo
    this.mostrarNuevo = false;
    this.mostrarNuevoTexto = 'Crear un Torneo';
    this.okNuevo = false;
    this.okNuevoName = false;
    this.nuevo = new Torneos();
    this.nuevo.name = "";
    this.nuevo.info = "###**[Normas por defecto]**  \nLos jugadores que quiera **participar en este torneo** deben estar registrados y **validados**; para pasar el proceso de validación, deben acceder a las opciones de su usuario *(barra de menú)*, y seguir las instrucciones que allí encontrará.  \nLa duración del torneo depende de la duración de sus fases. Cada fase puede durar un **máximo de 24h**; pero acabará en el momento en el que los contrincantes introduzcan el marcador final. En caso de errores o problemas con dicho marcador, **el creador del torneo hará de árbitro**.";
    this.nuevo.active = true;
    this.nuevo.size = "";
    this.nuevo.open = true;
    this.nuevo.official = true;
    this.nuevo.clan = "";
    this.nuevo.owner = "";
    this.nuevo.users = [];
    this.nuevo.rounds = [];

    this.matchJQuery = {
        teams : [
          ["Team 1", "Team 2"],
          ["Team 3", "Team 4"],
          ["Team 5", "Team 6"],
          ["Team 7", "Team 8"],
          ["Toten der Kino", "Kino der Toten"],
          ["Team 11", "Team 12"],
          ["Team 13", "Team 14"],
          ["Team 15", "TEAM 16"],
          ["Team 1", "Team 2"],
          ["Team 3", "Team 4"],
          ["Team 5", "Team 6"],
          ["Team 7", "Team 8"],
          ["Team 9", "Team 10"],
          ["Team 11", "Team 12"],
          ["Team 13", "Team 14"],
          ["Team 15", "TEAM 32"]
        ],
        results : [
          [
            [[1,2], [2,0], [2,1], [1,2]],
            [[2,0], [2,1]]
          ],[
            [[1,2], [2,0]],
            []
          ]
        ]
      }

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

    //MyTorneos
    this.myTorneos = [];
    this.actualizarMyTorneo();

    //Nuevo Mesaje Chat
    this.nuevoMensaje = {
      userID: "",
      nick: "",
      msg: "",
    }

  }

  isOwner(){
    if(this.user._id == this.currentTorneo.owner.userId){
      return true;
    }else{
      return false;
    }
  }

  chatOwner(nick){
    if(nick == this.currentTorneo.owner.name){
      return true;
    }else{
      return false;
    }
  }

  //Actualiza myTorneos
  actualizarMyTorneo(){
    this.torneos.$promise.then(torneo => {
      var found = false;
      for(var i in this.torneos){
        for(var j in this.torneos[i].users){
          if(this.torneos[i].users[j]==this.user._id ||
              this.torneos[i].owner==this.user._id){
            this.myTorneos.push(this.torneos[i]);
            break;
          }
        }
      }
    });
  }

  //muestra/oculta el editor
  switchMostrarNuevo(){
    this.mostrarNuevo = !this.mostrarNuevo;
    if(this.mostrarNuevo){
      this.mostrarNuevoTexto = 'Ocultar el editor de Nuevo Torneo';
    }else{
      this.mostrarNuevoTexto = 'Crear un Torneo';
    }
  }

  //VALIDADORES
  //Validar Nombre
  nuevoValidarName(){
    this.okNuevoName = false;
    this.okNuevo = false;
    if(this.nuevo.name.length>0){
      if(this.$filter('filter')(this.torneos, {'name': this.nuevo.name}, true)!=[]){
        this.okNuevoName = true;
        this.validarFinal();
      }
    }
  }
  //Validar Clan
  nuevoValidarClan(clan){
    this.nuevo.clan = clan;
    if(this.appConfig.clanes.indexOf(this.nuevo.clan,0) >= 0){
      this.validarFinal();
    }else{
      this.okNuevo = false;
    }
  };
  //Validar Tamaño
  nuevoValidarSize(size){
    this.nuevo.size = size;
    this.validarFinal();
  };
  //Validar Todo y mostar botón de guardado
  validarFinal(){
    if(this.okNuevoName &&
      this.appConfig.clanes.indexOf(this.nuevo.clan,0) >= 0 &&
      this.nuevo.size.length>0){
        this.okNuevo = true;
    }else{
      this.okNuevo = false;
    }
  };

  //no es su clan, o está inscrito ya?
  mostrarInscrito(torneo){
    var found = this.$filter('filter')(torneo.users,this.user._id);

    if(torneo.clan == this.user.clan && found.length<1){
      return true;
    }else{
      return false;
    }
  }

  nuevoSave() {
    this.nuevo.owner = this.user._id;
    this.nuevo.users.push(this.user._id);
    this.$log.info(this.nuevo);
    this.nuevo.$save().then(res => {
      this.okNuevo = false;
      this.okNuevoName = false;
      this.nuevo.clan = "";
      this.nuevo.name = "";
      this.nuevo.size = "";
      this.switchMostrarNuevo();
      this.actualizarMyTorneo();
    });

  }

  inscribirse(torneo){

  }

  initJQueryBrackets(){
    var minimalData = this.matchJQuery;

    $(function() {
        $('#minimal .demo').bracket({
          init: minimalData /* data to initialize the bracket with */ })
      })
  }

  //Prepara la vista indiviual de torneo
  getTorneo(){
    this.validCurretId = false;
    this.torneos.$promise.then(torneo => {
         this.currentTorneo = this.$filter('filter')(torneo,{_id: this.currentId})[0];
         if(this.currentTorneo!={}){
           this.validCurretId = true;
          //  this.users.$promise.then(users => {
          //    var owner = this.$filter('filter')(users,{_id: this.currentTorneo.owner})[0];
          //    this.currentTorneoOwner = owner.name + ' (' + owner.nickJuego +')';
          //
          //    for(var i in this.currentTorneo.users){
          //      this.currentTorneoUsers.push(this.$filter('filter')(users,{_id: this.currentTorneo.users[i]})[0]);
          //    }
          //   //  this.currentTorneoUsers = _.shuffle(this.currentTorneoUsers);
          //
          //  });
           if(!this.currentTorneo.open){
             this.initJQueryBrackets();
           }
         }
    });
  }
  addChatMensaje() {
    if (this.nuevoMensaje.msg.length>0) {
      this.nuevoMensaje.userID = this.user._id;
      this.nuevoMensaje.nick = this.user.name;
      // this.currentTorneo.chat.push(this.nuevoMensaje);
      this.currentTorneo.$addChatMsg(this.nuevoMensaje);
    }
  }

  deleteChatMensaje(mensaje) {
    this.$log.info(mensaje);
    // this.currentTorneo.chat.push(mensaje);
    // this.currentTorneo.$save;
  }

}

angular.module('eecrApp')
  .controller('TorneoCtrl', TorneoCtrl);
})();
