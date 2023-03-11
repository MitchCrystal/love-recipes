const express = require('express');
const router = require('../router');
const supertest = require('supertest');
const recipeModel = require('../models/recipe.model')

const { PrismaClient } = require('@prisma/client');
const prisma = require('../models/db-connect');
const dataBaseName = 'test';

describe('Database connection test', () => {
  const app = express();
  app.use(express.json());
  app.use(router);
  const request = supertest(app);

  const testrecipe = {
    title: 'This is a test recipe',
    prepTime: '1 minute',
    cookTime: '2 minutes',
    totalTime: '3.5 minutes',
    servings: '4 people',
    instructions:  [{"title":"fakeinstructiontitle","instructions":["fakeinstruction"]}],
    ingredients:  ["Fake ingredient"]
  }

  beforeAll(async () => {
    process.env.DATABASE_URL = 'postgresql://postgres:IrhJ1BrgRiCVrKBV@127.0.0.1:5432/recipedbtest'
    const prisma = new PrismaClient();
  })

  afterEach(async () => {
    await prisma.recipe.deleteMany({})
  })

  it('should save a recipe to the database', async () => {

    const res = await request.post('/recipe/add')
      .send(testrecipe)

    const recipe = await recipeModel.findRecipe({ title: testrecipe.title })
    expect(recipe.title).toBe(testrecipe.title)

  })

  

})