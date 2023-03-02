const prisma = require('./db-connect');

exports.newRecipe = async (recipe) => {
  const response = await prisma.recipe.create({
    data: recipe,
  });

  return response;
};
