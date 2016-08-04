'use strict';

import angular from 'angular';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import 'angular-socket-io';

import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import 'ng-parallax';
import 'ngtweet';
import 'angular-ui-scrollpoint';
import 'angular-scroll';
import 'angular-markdown-directive';
import 'textAngular';


import {
  routeConfig
} from './app.config';

import _Auth from '../components/auth/auth.module';
import account from './account';
import admin from './admin';
import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import socket from '../components/socket/socket.service';
import rrss from '../components/rrss/rrss.component';
import infoclan from './services/infoclan/infoclan.service';
import clan from '../components/clan/clan.component';


import './app.scss';

angular.module('eecrApp', [
  ngCookies, ngResource, ngSanitize, 'btford.socket-io', uiRouter, uiBootstrap,
  'ui.scrollpoint', 'ngtweet', 'ngParallax', 'btford.markdown',
  'duScroll', 'textAngular',

  _Auth, account, admin, navbar, footer, main, constants, socket, util, rrss, infoclan, clan
])
  .config(routeConfig)
  .run(function($rootScope, $location, Auth) {
    'ngInject';
    // Redirect to login if route requires auth and you're not logged in

    $rootScope.$on('$stateChangeStart', function(event, next) {
      Auth.isLoggedIn(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['eecrApp'], {
      strictDi: true
    });
  });
