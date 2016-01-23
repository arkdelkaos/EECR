'use strict';

import {Router} from 'express';
import * as controller from './infoclan.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();

router.get('/', controller.index);
router.post('/update', auth.hasRole('admin'), controller.update);
router.post('/', controller.create);

export default router;
