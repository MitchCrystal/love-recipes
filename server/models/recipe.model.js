const prisma = require('./db-connect');

exports.newRecipe = async (recipe) => {
  console.log('--- HERE ---');
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
