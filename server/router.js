'use strict';

const recipeController = require('./controllers/recipe.controller');

const router = require('express').Router();

router.post('/scrape', recipeController.scrapeUrl);

module.exports = router;
