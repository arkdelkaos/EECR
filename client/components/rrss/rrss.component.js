'use strict';

export class rrssComponent {}

export default angular.module('directives.rrss', [])
  .component('rrss', {
    template: require('./rrss.jade'),
    controller: rrssComponent
  })
  .name;
