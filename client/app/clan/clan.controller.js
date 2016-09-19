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
      this.clan = {
        banner: 'clanEE1banner',
        logo: 'clanEE1logo'
      };
    } else if (clanCargado === 'EVO' || clanCargado === 'evo') {
      this.clanInfo = {
        info: {
          nombre: 'EliteEspaña EVO',
          nick: 'EVO',
          nivel: 'VS'
        },
        media: {
          color1: '#c620f6',
          color2: '#982395',
          logo: 'logo_evo_claro_250.png',
          fondo: 'fondo_evo.jpg'
        }
      };
      this.clan = {
        banner: 'clanEVObanner',
        logo: 'clanEVOlogo'
      };
    } else if (clanCargado === 'GEN' || clanCargado === 'gen') {
      this.clanInfo = {
        info: {
          nombre: 'EliteEspaña GEN',
          nick: 'GEN',
          nivel: 'VS'
        },
        media: {
          color1: '#20b2f6',
          color2: '#0087cb',
          logo: 'logo_gen_claro_250.png',
          fondo: 'fondo_gen.jpg'
        }
      };
      this.clan = {
        banner: 'clanGENbanner',
        logo: 'clanGENlogo'
      };
    } else if (clanCargado === 'ZEN' || clanCargado === 'zen') {
      this.clanInfo = {
        info: {
          nombre: 'EliteEspaña ZEN',
          nick: 'ZEN',
          nivel: 'VS'
        },
        media: {
          color1: '#00c775',
          color2: '#00a03e',
          logo: 'logo_zen_claro_250.png',
          fondo: 'fondo_zen.jpg'
        }
      };
      this.clan = {
        banner: 'clanZENbanner',
        logo: 'clanZENlogo'
      };
    } else if (clanCargado === 'R2T' || clanCargado === 'r2t') {
      this.clanInfo = {
        info: {
          nombre: 'EliteEspaña R2T',
          nick: 'R2T',
          nivel: 'VS'
        },
        media: {
          color1: '#09d3d9',
          color2: '#24a8ac',
          logo: 'logo_r2t_claro_250.png',
          fondo: 'fondo_r2t.jpg'
        }
      };
      this.clan = {
        banner: 'clanR2Tbanner',
        logo: 'clanR2Tlogo'
      };
    } else if (clanCargado === 'VIP' || clanCargado === 'vip') {
      this.clanInfo = {
        info: {
          nombre: 'EliteEspaña VIP',
          nick: 'VIP',
          nivel: 'VIP'
        },
        media: {
          color1: '#ffc002',
          color2: '#ffa200',
          logo: 'logo_vip_claro_250.png',
          fondo: 'fondo_vip.jpg'
        }
      };
      this.clan = {
        banner: 'clanVIPbanner',
        logo: 'clanVIPlogo'
      };
    } else {
      clanCargado = "error";
    }
  }
}
