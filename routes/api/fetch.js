'use strict';
let router = require('express').Router();
let fetchController = require('../../controllers/fetch');

router.get('/', fetchController.scrapeHeadlines);

module.exports = router;