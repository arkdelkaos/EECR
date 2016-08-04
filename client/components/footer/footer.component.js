import angular from 'angular';

export class FooterComponent {
  constructor(infoclan) {
    'ngInject';
    this.infoclan = infoclan;
    infoclan.get().then();
  }
}

export default angular.module('directives.footer', [])
  .component('footer', {
    template: require('./footer.jade'),
    controller: FooterComponent
  })
  .name;
