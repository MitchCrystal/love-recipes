'use strict';
//import {scrapeUrl,saveRecipe, allRecipes, oneRecipe,deleteRecipe} from "./controllers/recipe.controller";
//const recipeController = require('./controllers/recipe.controller');
const  {scrapeUrl,saveRecipe, allRecipes, oneRecipe,deleteRecipe}  = require('./controllers/recipe.controller');

const router = require('express').Router();

// Scrape URL
router.post('/scrape', scrapeUrl);

// Add recipe
router.post('/recipe/add', saveRecipe);

// Get all recipes
router.get('/recipes', allRecipes);

// Get one recipe
router.get('/recipes/:url', oneRecipe);

// Delete one recipe
router.delete('/recipes/:id', deleteRecipe);

export {router};
