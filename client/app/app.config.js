'use strict';

export function routeConfig($urlRouterProvider, $locationProvider, $provide) {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(true);

  $provide.decorator('taOptions', ['taRegisterTool', '$delegate', function(taRegisterTool, taOptions) {
    taOptions.forceTextAngularSanitize = false;
    return taOptions;
  }]);
}
