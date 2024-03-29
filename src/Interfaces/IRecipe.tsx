import React from "react";
import IStringPair from "./IStringPair";
import IIngredient from "./IIngredient";

interface IRecipe {
  id: string;
  image: string;
  title: string;
  author: string;
  authorLink: string;
  ingredians: IIngredient[];
  calories?: Number;
  totalWeight?: Number;
  preparationTime?: Number;
  healthLabels?: string[];
  cautions?: string[];
}

export default IRecipe;
