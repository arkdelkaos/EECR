'use strict';

var express = require('express');
var controller = require('./pgo.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:usr/:pass/:prov/:loc', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);

module.exports = router;
