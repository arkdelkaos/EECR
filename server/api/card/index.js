'use strict';

import {Router} from 'express';
import * as controller from './card.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', auth.hasRole('admin'), controller.create);
router.put('/:id', auth.hasRole('admin'), controller.update);
router.patch('/:id', auth.hasRole('admin'), controller.update);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.get('/:id/msg/', controller.msgIndex);
router.post('/:id/msg/', auth.isAuthenticated(), controller.msgCreate);
router.delete('/:id/msg/', auth.hasRole('admin'), controller.msgDestroy);

export default router;
