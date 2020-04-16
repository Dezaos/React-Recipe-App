import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import RecipeSeacrh from "./RecipeSearch";
import RecipeApiClient from "../RestApis/RecipeApiClient";
import RecipeGrid from "./RecipeGrid";
import IRecipe from "../Types/IRecipe";
import { SearchResult } from "../RestApis/IEdamamRecipeData";

const useStyles = makeStyles({
  body: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
});

const Body = () => {
  const classes = useStyles();
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const api = new RecipeApiClient();

  const onSearch = (
    event: React.FormEvent<HTMLFormElement>,
    value: string
  ) => {};

  useEffect(() => {
    api.getRecipes({}).then((data) => {
      setRecipes(data);
    });
  }, []);

  return (
    <main className={classes.body}>
      <RecipeSeacrh onSearch={onSearch} />
      <RecipeGrid recipes={recipes} />
    </main>
  );
};

export default Body;
