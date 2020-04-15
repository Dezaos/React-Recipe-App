import React, { Props, useState, SetStateAction } from "react";
import { createCtx } from "./createCtx";
import IRecipe from "../Types/IRecipe";

interface RecipeConTextProps {
  currentRecipes: IRecipe[];
  setCurrentRecipes: React.Dispatch<SetStateAction<IRecipe[]>>;
  cachedRecipes: IRecipe[];
  setCachedRecipes: React.Dispatch<SetStateAction<IRecipe[]>>;
}

const [useRecipeContext, Provider] = createCtx<RecipeConTextProps>();
export { useRecipeContext };

export const RecipeProvier = ({ children }: Props<React.FC>) => {
  const [currentRecipes, setCurrentRecipes] = useState<IRecipe[]>([]);
  const [cachedRecipes, setCachedRecipes] = useState<IRecipe[]>([]);

  return (
    <Provider
      value={{
        currentRecipes,
        setCurrentRecipes,
        cachedRecipes,
        setCachedRecipes,
      }}
    >
      {children}
    </Provider>
  );
};
