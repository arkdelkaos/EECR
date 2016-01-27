'use strict';

angular.module('eecrApp')
.factory('mazos', function ($log, $http, socket, $q, User){
//       var service = {};
//
//       var me = {};
//
//       var listaMazos = [];
//       var userMazo = [];
//
//       var defered = $q.defer();
//       var promise = defered.promise;
//
//       var getListaMazos = function(){
//         var defered = $q.defer();
//         var promise = defered.promise;
//
//         $http.get('/api/decks').then(response => {
//           listaMazos = response.data;
//           socket.syncUpdates('deck', listaMazos);
//           return defered.resolve(listaMazos);
//           $log.info(listaMazos);
//         });
//         return promise;
//       };
//
//       var saveMazo = function(o,n) {
//         var paquete = {
//           old: [],
//           new: [],
//           _id: me._id
//         };
//         //Transformamos los mazos en un array de ids
//         for (var i in o) {
//           paquete.old.push(o[i]._id);
//           paquete.new.push(n[i]._id);
//         };
//         $http.post('/api/decks', paquete);
//         // $http.delete('/api/decks', paquete).then(res => {
//         //   $log.info(res);
//         // });
//         $log.info(paquete);
//       };
//
//       var saveUserMazo = function(m) {
//           $http.post('/api/users/'+me._id+'/deck', m);
//       };
//
//       service.listMazos = function () {
//           return getListaMazos();
//       };
//
//       service.getUserMazo = function () {
//           User.get().$promise.then(response => {
//             me = response;
//             userMazo = me.mazo;
//             socket.syncUpdates('user', me);
//             return userMazo;
//             $log.info(userMazo);
//           });
//       };
//
//       service.saveUserMazo = function (o,n) {
// /          saveMazo(o,n);
//       };
//
//       service.mazos = function () {
//           return listMazos;
//       };
//
//       service.userMazo = function () {
//           return userMazo;
//       };
//
//       return service;
  });
