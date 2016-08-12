'use strict';

export default function routes($stateProvider) {
  'ngInject';

  // $stateProvider.state('clan', {
  //   url: '/clan',
  //   template: require('./clan.jade'),
  //   controller: 'ClanController',
  //   controllerAs: 'vm'
  // });

  $stateProvider.state('clanVista', {
    url: '/clan/:clanNick',
    template: require('./clanVista.jade'),
    controller: 'ClanController',
    controllerAs: 'vm'
  });
}
