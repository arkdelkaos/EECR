import angular from 'angular';

export class clanComponent {

  isAdmin: Function;

  constructor(Auth, infoclan) {
    'ngInject';
    this.isAdmin = Auth.isAdminSync;
    this.infoclan = infoclan;
    infoclan.get().then();
  }

  save() {
    this.infoclan.save();
  }
}

export default angular.module('directives.clan', [])
  .component('clan', {
    template: require('./clan.jade'),
    controller: clanComponent
  })
  .name;
