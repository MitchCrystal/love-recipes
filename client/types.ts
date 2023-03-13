export type CollapseProps = {
  title: string;
  content: JSX.Element
}

export interface Recipe {
  title: string,
  description: string,
  image?: string,
  prepTime: string,
  cookTime: string,
  totalTime: string,
  servings: string,
  ingredients: string[],
  extUrl?: string,
  instructions: any[]  //must correct this

}

export interface SavedRecipe extends Recipe {
  id: string,
  url: string,
  original: boolean,
  owner: any,  //NEED TO UPDATE THIS
  createdAt: any, //NEED TO UPDATE THIS
  updatedAt: any,  //NEED TO UPDATE THIS
  authorId: string
}

export type User = {
  id: string,
  name: string,
  lastName: string,
  token: string,
  Recipe?: any[]
}

export interface SuccessErrorProps {
  text: string;
  className: any //NEED TO UPDATE THIS - PROBABLY NEEDS EXTEND
}