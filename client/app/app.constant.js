(function(angular, undefined) {
'use strict';

angular.module('eecrApp.constants', [])

.constant('appConfig', {userRoles:['guest','user','admin'],userRangos:['invitado','miembro','elder','colider','lider'],trofeoCalidades:['bronce','plata','oro']})

;
})(angular);