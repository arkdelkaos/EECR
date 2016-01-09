'use strict';

var express = require('express');
var controller = require('./infoclan.controller');

var router = express.Router();

router.get('/', controller.info);
router.put('/', controller.updateInfo);
router.get('/texto/', controller.texto);
router.put('/texto/', controller.updateTexto);
router.post('/', controller.create);

module.exports = router;
