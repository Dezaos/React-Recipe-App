import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useRecipeContext } from "../Contexts/RecipeContext";
import useQuery from "../Hooks/RouterQueryHook";
import useOnceEffect from "../Hooks/OnceEffectHook";
import IRecipe from "../Interfaces/IRecipe";
import RecipeApiClient from "../RestApis/RecipeApiClient";
import RecipeRequestParams from "../Enums/RecipeRequestParams";
import DetailedRecipe from "./DetailedRecipe/DetailedRecipe";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const UrlToDetailedRecipe: React.FC = () => {
  const classes = useStyles();
  const { cachedRecipes } = useRecipeContext();
  const query = useQuery();
  const url = query.get(RecipeRequestParams.RecipeId);
  const api = new RecipeApiClient();

  const getRecipe: () => Promise<IRecipe | undefined> = () => {
    if (!url) return Promise.reject();

    if (cachedRecipes.has(url)) return Promise.resolve(cachedRecipes.get(url));
    return api.getRecipe({ id: url }).then((data) => {
      return data;
    });
  };

  const [recipe, setRecipe] = useState<IRecipe | null>(null);
  useOnceEffect(() => {
    getRecipe().then((data) => {
      if (data) setRecipe(data);
    });
  });

  if (!recipe) return null;

  return (
    <div className={classes.root}>
      <DetailedRecipe recipe={recipe} />
    </div>
  );
};

export default UrlToDetailedRecipe;
