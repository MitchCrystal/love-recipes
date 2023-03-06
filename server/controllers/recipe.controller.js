'use strict';

const { newRecipe, findRecipe, getRecipes } = require('../models/recipe.model');
const scraper = require('../utils/scrape');

const areEqual = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b);
};

exports.scrapeUrl = async (req, res) => {
  try {
    const { extUrl } = req.body;

    const dbRecipe = await findRecipe(extUrl); // check DB for recipe
    let result;
    if (dbRecipe) {
      // recipe already exists
      result = dbRecipe;
    } else {
      // scrape recipe
      result = await scraper.scrapeUrl(extUrl);
    }

    res.status(200);
    res.send(result);
  } catch (error) {
    console.log(`scrapeUrl error:\n${error}`);
    res.status(400);
  }
};

exports.addRecipe = async (req, res) => {
  try {
    const recipe = req.body;

    let dbRecipe = await findRecipe(recipe.extUrl); // check DB for recipe

    //error handling for response from prisma---------------

    // if recipe not already in DB, save it
    if (!areEqual(dbRecipe, recipe)) {
      dbRecipe = await newRecipe(recipe);
    }

    res.status(201);
    res.send(dbRecipe);
  } catch (error) {
    console.log(`addRecipe error:\n${error}`);
    res.status(400);
  }
};

exports.allRecipes = async (req, res) => {
  try {
    const response = await getRecipes();

    res.status(200);
    res.send(response);
  } catch (error) {
    console.log(`allRecipes error:\n${error}`);
    res.status(500);
  }
};
