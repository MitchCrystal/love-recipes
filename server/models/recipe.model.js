const prisma = require('./db-connect');

exports.newRecipe = async (recipe) => {
  recipe.url =
    '/recipe/' + recipe.title.toLowerCase().replaceAll(' ', '-').trim();
  console.log(recipe);

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
