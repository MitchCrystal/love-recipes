import { RecipeDataLabel } from "../../../types";

export const recipeDefaultData = {
  title: {
    id: 'title',
    placeholder: 'e.g. Spaghetti Bolognese',
  },
  description: {
    id: 'description',
  },
  prepTime: {
    id: 'prepTime',
    label: 'Preparation time',
    placeholder: 'e.g. 20 mins',
    customClass: ' w-6/12',
  },
  cookTime: {
    id: 'cookTime',
    label: 'Cook time',
    customClass: ' w-6/12',
  },
  totalTime: {
    id: 'totalTime',
    label: 'Total time',
    customClass: ' w-6/12',
  },
  servings: {
    id: 'servings',
    placeholder: 'e.g. 4',
    customClass: ' w-6/12',
  },
  ingredients: {
    id: 'ingredients',
    placeholder: 'Add ingredient',
  },
  instructions: {
    id: 'instructions',
  },
};

export const getRecipeDataLabel = (dataField: RecipeDataLabel) => {
  return (
    dataField.label || dataField.id[0].toUpperCase() + dataField.id.slice(1)
  );
};
