'use strict';

const recipeController = require('./controllers/recipe.controller');

const router = require('express').Router();

// Scrape URL
router.post('/scrape', recipeController.scrapeUrl);

// Add recipe
router.post('/recipe/add', recipeController.saveRecipe);

// Get all recipes
router.get('/recipes/get', recipeController.allRecipes);

// Get one recipe
router.post('/recipe/get', recipeController.oneRecipe);

module.exports = router;
