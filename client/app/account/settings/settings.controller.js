'use strict';

class SettingsController {
  constructor(Auth, $log, $scope, appConfig) {
    this.errors = {};
    this.submitted = false;
    $scope.appConfig = appConfig;
    this.$log = $log;


    this.Auth = Auth;
    $scope.user = Auth.getCurrentUser();
    this.$log.info($scope.user);

    $scope.status = {
            isopen: false
          };
  }

  changePassword(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.changePassword(this.user.oldPassword, this.user.newPassword)
        .then(() => {
          this.message = 'Password successfully changed.';
        })
        .catch(() => {
          form.password.$setValidity('mongoose', false);
          this.errors.other = 'Incorrect password';
          this.message = '';
        });
    }
  }

  setClan(user,clan) {
    user.clan = clan;
  }

  enviar(user){
    if(user.clanConfirmado){
      user.clanConfirmado = false;
    }
    user.$update();
  }
}

angular.module('eecrApp')
  .controller('SettingsController', SettingsController);
