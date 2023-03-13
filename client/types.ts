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

export interface SavedRecipe {
  id: string,
  url: string,
  original: boolean,
  owner: any,  //must correct this
  createdAt: any, //must correct this
  updatedAt: any,  //must correct this
  authorId: string
}

export type User = {
  id: string,
  name: string,
  lastName: string,
  token: string,
  Recipe?: any[]
}

