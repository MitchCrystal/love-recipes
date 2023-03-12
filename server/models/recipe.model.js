const prisma = require('./db-connect');

exports.findRecipe = async (options) => {
  const response = await prisma.recipe.findFirst({
    where: options,
  });

  return response;
};

exports.updateRecipe = async (newRecipe) => {
  const response = await prisma.recipe.update({
    where: {
      id: newRecipe.id,
    },
    data: {
      ...newRecipe,
    },
  });

  return response;
};

exports.deleteRecipe = async (id)  => {
  const response = await prisma.recipe.delete({
    where: id,
  });
  return response;
};