'use strict';

export default class ClanController {
  $http;
  clanInfo = {};

  /*@ngInject*/
  constructor($http, $stateParams) {
    'ngInject';
    this.$http = $http;
    var clanCargado = $stateParams.clanNick;

    if (clanCargado === 'EE1' || clanCargado === 'ee1') {
      this.clanInfo = {
        info: {
          nombre: 'Elite España',
          nick: 'EE1',
          nivel: 'Principal'
        },
        media: {
          color1: '#ff0048',
          color2: '#ff0000',
          logo: 'logo_1_claro_250.png',
          fondo: 'fondo_1.jpg'
        }
      };
    } else if (clanCargado === 'EEEVO' || clanCargado === 'EEEVO') {
      this.clanInfo = {
        info: {
          nombre: 'EliteEspaña EVO',
          nick: 'EEEVO',
          nivel: 'VS'
        },
        media: {
          color1: '#c620f6',
          color2: '#982395',
          logo: 'logo_evo_claro_250.png',
          fondo: 'fondo_evo.jpg'
        }
      };
    } else {

    }
  }
}
