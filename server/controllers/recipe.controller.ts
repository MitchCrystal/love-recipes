'use strict';

import { Request, Response } from "express";
import { findRecipe, updateRecipe, deleteOneRecipe } from '../models/recipe.model';
import {prisma} from '../models/db-connect';
import { customAlphabet } from 'nanoid';
const scraper = require('../utils/scrape');


const slugify = (str:string) => {
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

const scrapeUrl = async (req: Request, res: Response) => {
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
const saveRecipe = async (req: Request, res: Response) => {
  let resultStatus = 400;
  let result = {
    data: {},
    success: ""
  };

  try {
    const newRecipe = req.body;

    let response;
    if (newRecipe.id) {
      // if recipe has id, then update
      response = await updateRecipe(newRecipe);
      result = {
        data: response,
        success:'Successfully updated recipe',
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
  } catch (error:any) {
    console.log(`saveRecipe error:\n${error}`);
    res.send({
        data: {},
        error: error.message
      });
    res.status(400);
  }
};

const allRecipes = async (req: Request, res: Response) => {
  try {
    const response = await prisma.recipe.findMany();

    res.status(200);
    res.send(response);
  } catch (error) {
    res.status(500);
  }
};

const oneRecipe = async (req: Request, res: Response) => {
  try {
    const url  = "/recipes/" + req.params["url"].toString();
    console.log("url: " + url);
    let response = await findRecipe(url);

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

const deleteRecipe =  async (req: Request, res: Response) => {
  try { 
    const id = req.params["id"].toString();
    let response = await deleteOneRecipe( id );
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

export {scrapeUrl,saveRecipe,allRecipes,oneRecipe,deleteRecipe}