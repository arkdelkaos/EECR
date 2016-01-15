'use strict';

(function() {

  class DeckController {
    constructor(Auth, $scope, $http, socket) {
      this.me = Auth.getCurrentUser();
      this.deck = this.me.deck;
      this.newDeck = [];

      // Cards
      this.cartas = []
      $http.get('/api/cards').then(response => {
        this.cartas = response.data;
        socket.syncUpdates('cartas', this.cartas);
      });
    }

    addCarta(carta, i){
      if(this.newDeck.indexOf(carta)==-1){
        this.newDeck.push(carta);
      }
    }

    delCarta(carta, i){
      this.newDeck.splice(i,1);
    }
  }

  angular.module('eecrApp')
    .controller('DeckController', DeckController);
})();
