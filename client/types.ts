export type CollapseProps = {
  title: string;
  content: JSX.Element;
}

export interface FieldOrderDataType {
 title: string;
  description: string;
  prepTime: string;
  cookTime: string;
  totalTime: string;
  servings: string;
};



export interface BlankRecipeType extends FieldOrderDataType {
  ingredients: any[]; //must correct this
  instructions: any[];  //must correct this

}

export interface RecipeType extends BlankRecipeType {
  image?: string;
  extUrl?: string;
}

export interface SavedRecipeType extends RecipeType {
  id: string;
  url: string;
  original: boolean;
  owner: any;  //NEED TO UPDATE THIS
  createdAt: any; //NEED TO UPDATE THIS
  updatedAt: any;  //NEED TO UPDATE THIS
  authorId: string;
}

export type User = {
  id: string;
  name: string;
  lastName: string;
  token: string;
  Recipe?: any[];
}

export interface SuccessProps {
  text: string;
}

export interface ErrorProps extends SuccessProps {
  className: any; //NEED TO UPDATE THIS
}

export type RecipeDataLabel = {
  id: string;
  placeholder?: string;
  customClass?: string;
  label?: string;
}

export type recipeDefaultDataType = {
  title: {
    id: string; placeholder: string;
  };
  description: {
    id: string;
  };
  prepTime: {
    id: string;
    label: string;
    placeholder: string;
    customClass: string;
  };
  cookTime: {
    id: string;
    label: string;
    customClass: string;
  };
  totalTime: {
    id: string;
    label: string;
    customClass: string;
  },
  servings: {
    id: string;
    placeholder: string;
    customClass: string;
  },
  ingredients: {
    id: string;
    placeholder: string;
  },
  instructions: {
    id: string;
  },
};

export interface CreateRecipeProps {
  createRecipeState: {
    recipe: BlankRecipeType | null;
    title: string;
    textContent?: string;
  }
}

export interface CreateRecipeDestructuredProps {
    recipe: BlankRecipeType | null;
    title: string;
    textContent?: string;

}

export interface DownloadRecipeFormProps {
  setRecipe: React.Dispatch<React.SetStateAction<null>>
}

export interface FormInputProps {
  field: string
}

export interface IngredientsFormProps {
  field: {
    id: string;
    placeholder: string;
  }
  list: string[];
  setInputs: React.Dispatch<React.SetStateAction<{
    title: string;
    description: string;
    prepTime: string;
    cookTime: string;
    totalTime: string;
    servings: string;
    ingredients: string[];
    instructions: string[];
}>>
}

export interface InstructionsFormProps {
  field: {id: string}
  list: string[];
  setInputs: React.Dispatch<React.SetStateAction<{
    title: string;
    description: string;
    prepTime: string;
    cookTime: string;
    totalTime: string;
    servings: string;
    ingredients: string[];
    instructions: string[];
}>>
}

export interface RatingProp {
  rating: number
}

export interface DefaultDataObject {
  id: string;
  placeholder?: string;
  customClass?: string;
  label?: string;
}

