'use strict';

var express = require('express');
var controller = require('./torneo.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.post('/:id/chat/', controller.createMsg);
router.delete('/:id/chat/:msg', controller.destroyMsg);

module.exports = router;
