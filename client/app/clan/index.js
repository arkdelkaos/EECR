'use strict';

import angular from 'angular';

import ClanController from './clan.controller';
import routes from './clan.routes';
// import ClanController from './clan.controller';

export default angular.module('eecrApp.clan', ['ui.router'])
  .config(routes)
  .controller('ClanController', ClanController)
  // .controller('ClanController', ClanController)
  .name;
