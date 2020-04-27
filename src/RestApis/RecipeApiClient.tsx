import IRecipeApi from "../Interfaces/IRecipeAPi";
import testData from "../testData.json";
import IRecipe from "../Interfaces/IRecipe";
import { SearchResult, Recipe } from "./IEdamamRecipeData";
import IRecipeRequest from "../Interfaces/IRecipeRequest";
import IIngredient from "../Interfaces/IIngredient";

const GET_ENDPOINT = "https://api.edamam.com/search";
const APP_ID = "377ebc8b";
const APP_KEY = "8df2e7244d7bc2590fcde4a21098e3b7";
const DEFAULT_Max_SEARCH_RESULT = 50;

class RecipeApiClient implements IRecipeApi {
  convertToRecipes = (data: SearchResult): IRecipe[] => {
    if (!data || !data.hits) return [];

    const mappedRecipes: IRecipe[] = data.hits.map(({ recipe }) =>
      this.convertToRecipe(recipe)
    );
    return mappedRecipes;
  };

  convertToRecipe = (recipe: Recipe): IRecipe => {
    return {
      id: recipe.uri,
      author: recipe.source,
      authorLink: recipe.url,
      image: recipe.image,
      title: recipe.label,
      calories: recipe.calories,
      preparationTime: recipe.totalTime,
      totalWeight: recipe.totalWeight,
      ingredians: recipe.ingredients
        ? recipe.ingredients.map(
            (i) => ({ name: i.text, quantity: `${i.weight} g` } as IIngredient)
          )
        : [],
      healthLabels: recipe.healthLabels,
      cautions: recipe.cautions,
    } as IRecipe;
  };

  generateEndpoint = (request: IRecipeRequest) => {
    const query = request.query ? `q=${request.query}&` : "";
    const id = request.id ? `r=${encodeURIComponent(request.id)}` : "";

    const maxSearchResults = request.maxResult
      ? request.maxResult
      : DEFAULT_Max_SEARCH_RESULT;
    return `${GET_ENDPOINT}?${query}${id}&app_id=${APP_ID}&app_key=${APP_KEY}&to=${maxSearchResults}`;
  };

  getTestRecipes = () => {
    return new Promise<any>((resolve, reject) => {
      resolve(this.convertToRecipes(testData as SearchResult));
    });
  };

  private fetchRecipes = (endPoint: string) => {
    return fetch(endPoint).then((response) => {
      if (!response.ok) throw new Error(response.statusText);

      return response.json().then((data) => {
        return this.convertToRecipes(data);
      });
    });
  };

  private fetchRecipe = (endPoint: string) => {
    return fetch(endPoint).then((response) => {
      if (!response.ok) throw new Error(response.statusText);

      return response.json().then((data) => {
        return this.convertToRecipe(data[0]);
      });
    });
  };

  getRecipe = (request: IRecipeRequest) => {
    const endPoint = this.generateEndpoint(request);
    return this.fetchRecipe(endPoint);
  };
  getRecipes = (request: IRecipeRequest) => {
    const endPoint = this.generateEndpoint(request);
    return this.fetchRecipes(endPoint);
  };
}

export default RecipeApiClient;
