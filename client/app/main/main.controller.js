'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket, $log, $filter, Auth, infoclan) {
      this.socket = socket;
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
    }

    $onInit() {
      this.$http.get('/api/things')
        .then(response => {
          this.awesomeThings = response.data;
          this.socket.syncUpdates('thing', this.awesomeThings);
        });
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
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
