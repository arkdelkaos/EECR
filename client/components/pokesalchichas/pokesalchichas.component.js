import angular from 'angular';

export class pokesalchichasComponent {

  constructor($http, $scope, $log) {
    'ngInject';

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

  getPokemons() {
    this.$http.get(`/api/pgo/${this.user.user}/${this.user.password}/${this.user.proveedor}/${this.user.localization}`)
      .then(response => {
        this.$log.info(response);
        this.pokeLista = response.data;
      });
  }

  picaPokemon(pokemon) {
    this.$log.info(pokemon);
    this.$http.delete(`/pgo/${pokemon.id}`)
      .then(response => {
        this.$log.info(response);
        if (response.status === 201) {
          this.pokelista = response;
        }
        //this.pokeLista.splice(arr.indexOf(pokemon),1);
      });
  }
}

export default angular.module('directives.pokesalchichas', [])
  .component('pokesalchichas', {
    template: require('./pokesalchichas.jade'),
    controller: pokesalchichasComponent
  })
  .name;
