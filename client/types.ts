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
  title: {
    id: string;
    label: string;
    placeholder: string;
    customClass: string;
  };
  description: {
    id: string;
    label: string;
    placeholder: string;
    customClass: string;
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
    placeholder: string;
    customClass: string;
  };
  totalTime: {
    id: string;
    label: string;
    placeholder: string;
    customClass: string;
  },
  servings: {
    id: string;
    label: string;
    placeholder: string;
    customClass: string;
  },
  ingredients: {
    id: string;
    label: string;
    placeholder: string;
    customClass: string;
  },
  instructions: {
   id: string;
    label: string;
    placeholder: string;
    customClass: string;
  },
};

export interface GeneralFormInputProps {
  formField: {
    id: string;
    label: string;
    placeholder: string;
    customClass: string;
  };
  setInputs: React.Dispatch<React.SetStateAction<{
    title: string;
    description: string;
    prepTime: string;
    cookTime: string;
    totalTime: string;
    servings: string;
    ingredients: string[];
    instructions: {
    title: string;
    instructions: string[];
  }[]
}>>
}

export interface MainFormInputProps extends GeneralFormInputProps {
  value: string;
}

export interface DefaultDataObject {
  id: string;
  placeholder?: string;
  customClass?: string;
  label?: string;
}

export interface NewInstructionType {
   title: string;
    instructions: string[];
  
}