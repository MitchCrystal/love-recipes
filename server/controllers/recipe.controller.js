'use strict';

const { findRecipe, updateRecipe,deleteRecipe } = require('../models/recipe.model');
const prisma = require('../models/db-connect');
const scraper = require('../utils/scrape');

const { customAlphabet } = require('nanoid');

const slugify = (str) => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const randomUuid = (length = 6) => {
  const alphabet =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const nanoid = customAlphabet(alphabet, length);
  return nanoid(); //=> "3Ztbty"
};

exports.scrapeUrl = async (req, res) => {
  try {
    const { extUrl } = req.body;

    const dbRecipe = await findRecipe({ extUrl }); // check DB for recipe
    let result;
    if (dbRecipe) {
      // recipe already exists
      result = dbRecipe;
    } else {
      // scrape recipe
      result = await scraper.scrapeUrl(extUrl);
    }

    res.status(200);
    res.send({ data: result });
  } catch (error) {
    console.log(`scrapeUrl error:\n${error}`);
    res.send({ data: null, error: 'Invalid URL', errorCode: 404 });
    res.status(400);
  }
};

/*
--- Todo ---
Recipe isn't fetched if already exists in the DB, even if it has been altered
*/
exports.saveRecipe = async (req, res) => {
  let resultStatus = 400;
  let result = {
    data: null,
    error: 'Unable to save recipe. Please refresh and try again',
  };

  try {
    const newRecipe = req.body;

    let response;
    if (newRecipe.id) {
      // if recipe has id, then update
      response = await updateRecipe(newRecipe);
      result = {
        data: response,
        success: 'Successfully updated recipe',
      };
    } else {
      let dbRecipe = null;
      if (newRecipe.extUrl) {
        dbRecipe = await prisma.recipe.findFirst({
          where: {
            extUrl: newRecipe.extUrl,
          },
        });
      }

      if (dbRecipe) {
        // if recipe extUrl exists in database, then update
        response = await updateRecipe(newRecipe);
        result = {
          data: response,
          success: 'Successfully updated recipe',
        };
      } else {
        // else create new recipe
        newRecipe.url =
          '/recipes/' + slugify(newRecipe.title) + '-' + randomUuid();
        response = await prisma.recipe.create({
          data: newRecipe,
        });
        result = {
          data: response,
          success: 'Successfully created new recipe',
        };
      }
    }

    if (result.data) resultStatus = 200;

    res.status(resultStatus);
    res.send(result);
  } catch (error) {
    console.log(`saveRecipe error:\n${error}`);
    res.send(result);
    res.status(400);
  }
};

exports.allRecipes = async (req, res) => {
  try {
    const response = await prisma.recipe.findMany();

    res.status(200);
    res.send(response);
  } catch (error) {
    console.log(`allRecipes error:\n${error}`);
    res.status(500);
  }
};

exports.oneRecipe = async (req, res) => {
  try {
    const { url } = req.body;
    let response = await findRecipe({ url });

    if (!response) {
      res.status(500);
      res.send({ data: null, error: 'Not found', errorCode: 404 });
    } else {
      res.status(200);
      res.send({ data: response });
    }
  } catch (error) {
    console.log(`oneRecipe error:\n${error}`);
    res.status(500);
  }
};

exports.deleteRecipe =  async (req, res) => {
  try { 
    const id= req.params["id"];
    let response = await deleteRecipe({ id });
    if (!response) {
      res.status(500);
      res.send({ data: null, error: 'Not found', errorCode: 404 });
    } else {
      res.status(200);
      res.send({ data: response });
    }
  } catch (error) {
    console.log(`deleteRecipe error:\n${error}`);
    res.status(500);
  }
};