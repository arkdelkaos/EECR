'use strict';

(function() {

class PokesalchichasController {
  constructor($http, $scope, $log) {
    this.$http = $http;
    this.$log = $log;

    this.user = {
      proveedor: 'pct',
      localization: 'Plaza del Sol 1, Madrid, 28013 Spain'
    };
    this.submitted = false;

    this.error = false;

    this.pokeLista = [];
  }

  getPokemons(form) {
    this.$http.get('/api/pgo/'+this.user.user+'/'+this.user.password+'/'+this.user.proveedor+'/'+this.user.localization)
      .then(response => {
        this.$log.info(response);
        this.pokeLista = response.data;
      })
  }

  picaPokemon(pokemon){
    this.$log.info(pokemon);
    this.$http.delete('/pgo/'+pokemon.id)
      .then(response => {
        this.$log.info(response);
        if(response.status=201){
          this.pokelista = response;
        }
        //this.pokeLista.splice(arr.indexOf(pokemon),1);
      })
  }
}

angular.module('eecrApp')
  .controller('PokesalchichasController', PokesalchichasController);

  })();
