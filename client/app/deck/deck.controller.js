'use strict';

(function() {

  class DeckController {
    constructor($scope, $http, socket, $log, $filter, cartas, mazos, User) {
      this.mazos = mazos;
      this.$filter = $filter;
      this.$http = $http;
      this.$log = $log;
      this.$scope = $scope;
      $scope.actionFull = false;
      $scope.allFiltro = {
        calidad: '',
        coste: '',
        tipo: '',
        arena: ''
      };
      $scope.calidadFiltroTexto = 'Calidad: Todos';
      this.calidades = ['Common', 'Rare', 'Epic'];
      $scope.costeFiltroTexto = 'Coste: Todos';
      this.costes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
      $scope.tipoFiltroTexto = 'Tipo: Todos';
      this.tipos = ['Troop', 'Spell', 'Building'];
      $scope.arenaFiltroTexto = 'Arena: Todos';
      this.arenas = ['Training Camp', 'Goblin Stadium', 'Bone Pit', 'Barbarian Bowl', "P.E.K.K.A's Playhouse", 'Spell Valley', 'Royal Arena'];

      // Mazo Actual
      this.deck = [];

      this.cartas = cartas.listCartas();
      $log.info(this.cartas);
      // $http.get('/api/users/'+id+'/deck').then(response => {
      //   var deckX = response.data;
      // $scope.userMazo = mazos.getUserMazo();
      // $scope.userMazo.$promise.then(m => {
      //     var m2 = JSON.parse(angular.toJson(m));
      //     for(var i in m2){
      //       var carta = $filter('filter')(this.cartas, {'_id': m2[i]});
      //       this.deck.push(carta[0]);
      //     };
      // });

      // Mazos
      this.mazos = mazos;
      $scope.userMazo = [];
      User.get().$promise.then(res => {
          // $log.info(res);
          // var resJSON = JSON.parse(angular.toJson(res));
          $log.info(res);
          socket.syncUpdates('user', res);
          for(var i in res.mazo){
            var carta = $filter('filter')(this.cartas, {'_id': res.mazo[i]});
            this.deck.push(carta[0]);
          };
      });


      $scope.me = this.me;
      this.newDeck = [];
      $scope.total = 8;

      $scope.hideVaciar = true;
      $scope.hideGuardar = true;

      $scope.status = {
        isopen: false,
        isopen2: false,
        isopen3: false
      };
    }

    addCarta(carta){
      var id = carta._id;
      if(!this.newDeck.id && this.newDeck.length!=8){
        this.newDeck.push(carta);
        this.cartas.splice(this.cartas.indexOf(carta),1);
        this.$scope.total--;
        this.$scope.hideVaciar = false;
        if(this.newDeck.length==8){
          this.$scope.actionFull = true;
          this.$scope.hideGuardar = false;
        }
      }
    }

    delCarta(carta){
      var id = carta._id;
      if(!this.cartas.id){
        this.cartas.push(carta);
        this.newDeck.splice(this.newDeck.indexOf(carta),1);
        this.$scope.total++;
        if(this.$scope.total==8){
          this.$scope.hideVaciar = true;
        }
        if(this.$scope.total>0){
          this.$scope.actionFull = false;
          this.$scope.hideGuardar = true;
        }
      }
    }

    vaciarNewDeck(){
      for(var i in this.newDeck){
        this.cartas.push(this.newDeck[i]);
      }
      this.newDeck = [];
      this.$scope.actionFull = false;
      this.$scope.hideVaciar = true;
      this.$scope.hideGuardar = true;
      this.$scope.total=8;
    }

    clonar(a,b){
      for(var i in a){
        b.push(a[i]);
      }
    }

    clonarDeck(){
      this.clonar(this.deck,this.newDeck);
      this.$scope.total = 0;
      for(var i in this.newDeck){
        this.cartas.splice(this.cartas.indexOf(this.newDeck[i]),1);
      }
      this.$scope.hideVaciar = false;
    }

    guardarNewDeck(o,n){
      //Nueva Baraja
      this.mazos.saveUserMazo(o,n);
      this.me.mazo = n;
      this.me.$save;
      // this.deck = [];
      // this.clonar(this.newDeck,this.deck);
      // this.$http.post('/api/users/'+this.me._id+'/deck', this.deck)
      // .then(response => {
      //   this.$log.info(response.data);
      // });
      // this.$log.info(this.deck);

      this.vaciarNewDeck();
    }

    setCalidad(calidad){
      if(calidad!='all'){
        this.$scope.allFiltro.calidad = calidad;
        this.$scope.calidadFiltroTexto = 'Calidad: '+calidad;
      }else{
        this.$scope.allFiltro.calidad = '';
        this.$scope.calidadFiltroTexto = 'Calidad: Todos';
      }
    }

    setCoste(coste){
      if(coste!='all'){
        this.$scope.allFiltro.coste = coste;
        this.$scope.costeFiltroTexto = 'Coste: '+coste;
      }else{
        this.$scope.allFiltro.coste = '';
        this.$scope.costeFiltroTexto = 'Coste: Todos';
      }
    }

    setTipo(tipo){
      if(tipo!='all'){
        this.$scope.allFiltro.tipo = tipo;
        this.$scope.tipoFiltroTexto = 'Tipo: '+tipo;
      }else{
        this.$scope.allFiltro.tipo = '';
        this.$scope.tipoFiltroTexto = 'Tipo: Todos';
      }
    }

    setArena(arena){
      if(arena!='all'){
        this.$scope.allFiltro.arena = arena;
        this.$scope.arenaFiltroTexto = 'Arena: '+arena;
      }else{
        this.$scope.allFiltro.arena = '';
        this.$scope.arenaFiltroTexto = 'Arena: Todos';
      }
    }

    setClearAll(){
      this.$scope.allFiltro.calidad = '';
      this.$scope.calidadFiltroTexto = 'Calidad: Todos';
      this.$scope.allFiltro.coste = '';
      this.$scope.costeFiltroTexto = 'Coste: Todos';
      this.$scope.allFiltro.tipo = '';
      this.$scope.tipoFiltroTexto = 'Tipo: Todos';
      this.$scope.allFiltro.arena = '';
      this.$scope.arenaFiltroTexto = 'Arena: Todos';
    }
  }

  angular.module('eecrApp')
    .controller('DeckController', DeckController);
})();
