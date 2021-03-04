export interface Ingredient {
  quantity: string;
  name: string;
  type: string;
}
export interface Recipe {
  id: number;
  name: string;
  imageURL: string;
  ingredients: Ingredient[];
  steps: string[];
}

export function createRecipe(params: Partial<Recipe>) {
  return {
    ...params
  } as Recipe;
}
