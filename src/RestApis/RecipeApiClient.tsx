import React from "react";
import IRecipeApi from "../Interfaces/IRecipeAPi";
import IRecipeRequest from "../Types/IRecipeRequest";
import testData from "../testData.json";
import IRecipe from "../Types/IRecipe";
import { SearchResult } from "./IEdamamRecipeData";

const GET_ENDPOINT = "https://api.edamam.com/search";
const APP_ID = "377ebc8b";
const APP_KEY = "8df2e7244d7bc2590fcde4a21098e3b7";

class RecipeApiClient implements IRecipeApi {
  convertData = (data: SearchResult): IRecipe[] => {
    const mappedRecipes: IRecipe[] = data.hits.map(({ recipe }) => ({
      author: recipe.source,
      authorLink: recipe.url,
      image: recipe.image,
      title: recipe.label,
    }));
    return mappedRecipes;
  };

  generateEndpoint = (request: IRecipeRequest) => {
    return `${GET_ENDPOINT}?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  };

  getRecipe = (request: IRecipeRequest) => {
    // return fetch(this.generateEndpoint(request)).then((response) => {
    //   if (!response.ok) throw new Error(response.statusText);
    //   return response.json();
    // });
    return new Promise<any>((resolve, reject) => {
      resolve(this.convertData(testData as SearchResult));
    });
  };
  getRecipes = (request: IRecipeRequest, maxResult?: Number) => {
    return [];
  };
}

export default RecipeApiClient;