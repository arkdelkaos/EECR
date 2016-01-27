'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket, $log, $filter, Auth, infoclan) {
    this.$log = $log;
    this.$filter = $filter;
    this.$http = $http;
    this.awesomeThings = [];
    this.me = Auth.getCurrentUser().name;
    this.isAdmin = Auth.isAdmin;

    $http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
      socket.syncUpdates('thing', this.awesomeThings);
      this.$log.info(this.awesomeThings);
    });

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });

    // Infoclan
    this.infoclan = infoclan;
    infoclan.get().then(res => {
      $log.info(res);
    });

    // // Mazos
    // mazos.listMazos().then(res => {
    //   this.mazos = res;
    // });
    // this.cartas = cartas.listCartas();
  }

  // getCarta(id){
  //   var carta = this.$filter('filter')(this.cartas, {'_id': id});
  //   return carta[0];
  // }

  perUsers(length){

  }

  addThing() {
    if (this.newThing) {
      if(angular.isString(this.me)){
        this.msg = this.me+': '+this.newThing;
      }else{
        this.msg = 'Anónimo: '+this.newThing;
      };
      this.$http.post('/api/things', { name: this.msg });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('eecrApp')
  .controller('MainController', MainController);

})();
