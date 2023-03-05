'use strict';

const { newRecipe, findRecipe, getRecipes } = require('../models/recipe.model');
const scraper = require('../utils/scrape');

exports.scrapeUrl = async (req, res) => {
  try {
    const { url } = req.body;

    const dbRecipe = await findRecipe(url); // check DB for recipe
    let result;
    if (dbRecipe) {
      dbRecipe.url = '';
      result = dbRecipe;
    } else {
      result = await scraper.scrapeUrl(url);
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
    const response = await newRecipe(recipe);

    res.status(201);
    res.send(response);
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
