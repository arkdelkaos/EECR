(function(angular, undefined) {
'use strict';

angular.module('eecrApp.constants', [])

.constant('appConfig', {userRoles:['guest','user','admin'],userRangos:['invitado','miembro','elder','colider','lider'],trofeoCalidades:['bronce','plata','oro'],clanes:['none','EE1','EE2','EE3','EE4'],torneoSize:['8','16','32']})

;
})(angular);