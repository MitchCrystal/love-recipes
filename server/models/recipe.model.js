const prisma = require('./db-connect');
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
  const nanoid = customAlphabet(alphabet, 6);
  return nanoid(); //=> "3Ztbty"
};

exports.newRecipe = async (recipe) => {
  recipe.url = '/recipe/' + slugify(recipe.title) + '-' + randomUuid();
  const response = await prisma.recipe.create({
    data: recipe,
  });

  return response;
};

exports.findRecipe = async (url) => {
  const response = await prisma.recipe.findFirst({
    where: {
      url,
    },
  });

  return response;
};

exports.getRecipes = async () => {
  const response = await prisma.recipe.findMany();
  return response;
};
