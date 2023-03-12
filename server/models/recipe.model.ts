import {prisma} from './db-connect';

const findRecipe = async (options:any) => {
  const response = await prisma.recipe.findFirst({
    where: options,
  });

  return response;
};

const updateRecipe = async (newRecipe:any) => {
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

const deleteOneRecipe = async (id:string)  => {
  const response = await prisma.recipe.delete({
    where: {id: id},
  });
  return response;
};

export { findRecipe, updateRecipe, deleteOneRecipe};