import { prisma } from './db-connect';
import {SavedRecipeType} from '../../client/types'

const findRecipe = async (url:string) => {
  const response = await prisma.recipe.findFirst({
    where: {url: url},
  });

  return response;
};

const updateRecipe = async (newRecipe:SavedRecipeType) => {
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