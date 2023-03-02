'use strict';

const { newRecipe } = require('../models/recipe.model');
const scraper = require('../utils/scrape');

exports.scrapeUrl = async (req, res) => {
  try {
    const { url } = req.body;
    const data = await scraper.scrapeUrl(url);

    res.status(200);
    res.send(data);
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
