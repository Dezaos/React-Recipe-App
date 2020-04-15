import Reactt from "react";
import IRecipe from "../Types/IRecipe";
import IRecipeRequest from "../Types/IRecipeRequest";

interface IRecipeApi {
  getRecipe: (request: IRecipeRequest) => Promise<IRecipe>;
  getRecipes: (request: IRecipeRequest, maxResult?: Number) => IRecipe[];
}

export default IRecipeApi;