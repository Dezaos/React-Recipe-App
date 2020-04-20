export interface IRecipeRequest {
  query?: string | null;
  ingredients?: string[] | null;
  maxResult?: Number | null;
}

export enum RecipeRequestParams {
  Query = "query",
  Ingredients = "ingredients",
  MaxResult = "max_result",
}
