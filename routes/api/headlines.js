'use strict';
let router = require('express').Router();
let headlineController = require('../../controllers/headline');

router.get('/', headlineController.findAll);
router.delete('/:id', headlineController.delete);
router.put('/:id', headlineController.update);

module.exports = router;