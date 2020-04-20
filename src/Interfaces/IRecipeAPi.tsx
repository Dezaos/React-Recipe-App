import IRecipe from "../Types/IRecipe";
import { IRecipeRequest } from "../Types/IRecipeRequest";

interface IRecipeApi {
  getRecipe: (request: IRecipeRequest) => Promise<IRecipe>;
  getRecipes: (
    request: IRecipeRequest,
    maxResult?: Number
  ) => Promise<IRecipe[]>;
}

export default IRecipeApi;
