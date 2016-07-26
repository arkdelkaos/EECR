'use strict';

var express = require('express');
var controller = require('./infoclan.controller');
import * as auth from '../../auth/auth.service';

var router = express.Router();

router.get('/', controller.index);
router.post('/update', auth.hasRole('admin'), controller.update);
router.post('/', controller.create);

module.exports = router;
