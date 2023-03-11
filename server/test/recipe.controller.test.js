const express = require('express');
const router = require('../router');
const supertest = require('supertest');
const recipeModel = require('../models/recipe.model')

const { PrismaClient } = require('@prisma/client');
const prisma = require('../models/db-connect');
const dataBaseName = 'test';
const { testrecipe, newTotalTime, shortURL } = require('./mocks')

describe('Database connection test', () => {
  const app = express();
  app.use(express.json());
  app.use(router);
  const request = supertest(app);



  beforeAll(async () => {
    process.env.DATABASE_URL = 'postgresql://postgres:IrhJ1BrgRiCVrKBV@127.0.0.1:5432/recipedbtest'
    console.log(process.env.DATABASE_URL)
    const prisma = new PrismaClient();
  })

  afterEach(async () => {
    await prisma.recipe.deleteMany({})
    console.log(process.env.DATABASE_URL)
  })

  it('should save a recipe to the database', async () => {

    const res = await request.post('/recipe/add')
      .send(testrecipe)

    const recipe = await recipeModel.findRecipe({ title: testrecipe.title })
    expect(recipe.title).toBe(testrecipe.title)

  })

  it('should update a recipe in the database', async () => {

    const res = await request.post('/recipe/add')
      .send(testrecipe)

    const recipe = await recipeModel.findRecipe({ title: testrecipe.title })

    testrecipe.id = recipe.id
    testrecipe.totalTime = newTotalTime

    const res2 = await request.post('/recipe/add')
    .send(testrecipe)

    const recipe2 = await recipeModel.findRecipe({ title: testrecipe.title })
    expect(recipe2.totalTime).toBe(newTotalTime)
  })

  // it('should find a specific recipe', async () => {

  //   testrecipe.url = shortURL

  //    const res = await request.post('/recipe/add')
  //      .send(testrecipe)

  //   const recipe = await request.post('/recipe/get')
  //     .send(testrecipe)
  //  // console.log(recipe)

  //   //expect(recipe.title).toBe(testrecipe.title)
  // })

})