'use strict';

import {Router} from 'express';
import * as auth from '../../auth/auth.service';
import * as controller from './infoclan.controller';

var router = new Router();

router.get('/', controller.index);
router.post('/update', auth.hasRole('admin'), controller.upsert);
router.post('/', controller.create);

module.exports = router;
