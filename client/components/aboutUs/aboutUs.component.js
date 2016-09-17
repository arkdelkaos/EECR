import angular from 'angular';

export class aboutUsComponent {

  isAdmin: Function;

  constructor(Auth, infoclan, $http, $log) {
    'ngInject';
    this.isAdmin = Auth.isAdminSync;
    this.infoclan = infoclan;
    infoclan.get().then();

    this.log = $log;
    this.discord = {};
    $http.get('https://discordapp.com/api/servers/142056318889361408/widget.json').then(response => {
      this.discord = response.data;
      this.log.info(this.discord);
    });
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
