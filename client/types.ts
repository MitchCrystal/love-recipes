export interface FieldOrderDataType {
  title: string;
  description: string;
  prepTime: string;
  cookTime: string;
  totalTime: string;
  servings: string;
};

export interface BlankRecipeType extends FieldOrderDataType {
  ingredients: string[];
  instructions: {
    title: string;
    instructions: string[];
  }[]
}

export interface RecipeType extends BlankRecipeType {
  image?: string;
  extUrl?: string;
}

export interface ScrapedRecipeData {
  data: RecipeType
  error?: string
}

export interface SavedRecipeType extends RecipeType {
  id: string;
  url: string;
  original: boolean;
  createdAt: string;
  updatedAt: string;
  authorId: string;
}

export type User = {
  id: string;
  name: string;
  lastName: string;
  token: string;
}

export interface SuccessProps {
  text: string;
}

export type RecipeDataLabel = {
  id: string;
  placeholder?: string;
  customClass?: string;
  label?: string;
}

export type recipeDefaultDataType = {
  title: RecipeDataLabel;
  description: RecipeDataLabel;
  prepTime: RecipeDataLabel;
  cookTime: RecipeDataLabel;
  totalTime: RecipeDataLabel,
  servings: RecipeDataLabel,
  ingredients: RecipeDataLabel,
  instructions: RecipeDataLabel,
};

export interface GeneralFormInputProps {
  formField: RecipeDataLabel;
  setInputs: React.Dispatch<React.SetStateAction<{
    title: string;
    description: string;
    prepTime: string;
    cookTime: string;
    totalTime: string;
    servings: string;
    ingredients: string[];
    instructions: NewInstructionType[]
}>>
}

export interface MainFormInputProps extends GeneralFormInputProps {
  value: string;
}

export interface NewInstructionType {
   title: string;
    instructions: string[];
}