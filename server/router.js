'use strict';

const recipeController = require('./controllers/recipe.controller');

const router = require('express').Router();

// Scrape URL
router.post('/scrape', recipeController.scrapeUrl);

// Add recipe
router.post('/recipe', recipeController.addRecipe);

// Get all recipes
router.get('/recipes', recipeController.allRecipes);

module.exports = router;
