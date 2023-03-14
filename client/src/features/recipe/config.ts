import { RecipeDataLabel } from "../../../types";

export const recipeDefaultData = {
  title: {
    id: 'title',
    placeholder: 'e.g. Spaghetti Bolognese',
    customClass: '',
    label: ''
  },
  description: {
    id: 'description',
    customClass: '',
    placeholder: '',
    label: ''
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
    placeholder: ''
  },
  totalTime: {
    id: 'totalTime',
    label: 'Total time',
    customClass: ' w-6/12',
    placeholder: ''
  },
  servings: {
    id: 'servings',
    placeholder: 'e.g. 4',
    customClass: ' w-6/12',
    label: ''
  },
  ingredients: {
    id: 'ingredients',
    placeholder: 'Add ingredient',
    customClass: '',
    label: ''
  },
  instructions: {
    id: 'instructions',
    customClass: '',
    placeholder: '',
    label: ''
  },
};

export const getRecipeDataLabel = (dataField: RecipeDataLabel) => {
  return (
    dataField.label || dataField.id[0].toUpperCase() + dataField.id.slice(1)
  );
};
