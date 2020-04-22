import React, { Props, useState } from "react";
import { createCtx } from "./createCtx";
import IRecipe from "../Interfaces/IRecipe";
import useOnceEffect from "../Hooks/OnceEffectHook";
import useUnload from "../Hooks/UnloadHook";

interface RecipeConTextProps {
  currentRecipes: IRecipe[];
  setCurrentRecipes: (value: IRecipe[]) => void;
  cachedRecipes: Map<string, IRecipe>;
  setCachedRecipes: React.Dispatch<Map<string, IRecipe>>;
}

const STORE_RECIPES_ID = "store_recipe_id";
const [useRecipeContext, Provider] = createCtx<RecipeConTextProps>();
export { useRecipeContext };

export const RecipeProvider = ({ children }: Props<React.FC>) => {
  const [currentRecipes, setCurrentRecipes] = useState<IRecipe[]>([]);
  const [cachedRecipes, setCachedRecipes] = useState<Map<string, IRecipe>>(
    new Map()
  );

  useUnload(() => {
    localStorage.setItem(
      STORE_RECIPES_ID,
      JSON.stringify(Array.from(cachedRecipes.entries()))
    );
  });

  useOnceEffect(() => {
    const storedJsonRecipes = localStorage.getItem(STORE_RECIPES_ID);

    if (!storedJsonRecipes) return;

    try {
      const storedRecipes = new Map<string, IRecipe>(
        JSON.parse(storedJsonRecipes)
      );
      setCachedRecipes(storedRecipes);
    } catch (error) {}
  });

  const setCurrentRecipesAndCacheit = (value: IRecipe[]) => {
    const clonedCache = new Map(cachedRecipes);
    value.forEach((recipe) => {
      if (!clonedCache.has(recipe.id)) {
        clonedCache.set(recipe.id, recipe);
      }
    });
    setCachedRecipes(clonedCache);
    setCurrentRecipes(value);
  };

  return (
    <Provider
      value={{
        currentRecipes,
        setCurrentRecipes: setCurrentRecipesAndCacheit,
        cachedRecipes,
        setCachedRecipes,
      }}
    >
      {children}
    </Provider>
  );
};
