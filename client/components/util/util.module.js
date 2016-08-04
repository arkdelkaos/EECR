'use strict';

import {
  UtilService
} from './util.service';

export default angular.module('eecrApp.util', [])
  .factory('Util', UtilService)
  .name;
