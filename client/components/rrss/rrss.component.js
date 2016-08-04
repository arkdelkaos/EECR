'use strict';
import angular from 'angular';


export class rrssComponent {}

export default angular.module('directives.rrss', [])
  .component('rrss', {
    template: require('./rrss.jade'),
    controller: rrssComponent
  })
  .name;
