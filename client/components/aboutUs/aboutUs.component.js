import angular from 'angular';

export class aboutUsComponent {

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

export default angular.module('directives.aboutUs', [])
  .component('aboutus', {
    template: require('./aboutUs.jade'),
    controller: aboutUsComponent
  })
  .name;
