import IRecipe from "./IRecipe";
import IRecipeRequest from "./IRecipeRequest";

interface IRecipeApi {
  getRecipe: (request: IRecipeRequest) => Promise<IRecipe>;
  getRecipes: (
    request: IRecipeRequest,
    maxResult?: Number
  ) => Promise<IRecipe[]>;
}

export default IRecipeApi;
