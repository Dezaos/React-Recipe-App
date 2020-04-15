import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import InputWithButtonForm from "./MaterialComponents/InputWithButtonForm";
import RecipeSeacrh from "./RecipeSearch";
import RecipeListElement from "./RecipeListElement";
import bbb from "../bbb.png";
import RecipeApiClient from "../RestApis/RecipeApiClient";
import RecipeGrid from "./RecipeGrid";
import IRecipe from "../Types/IRecipe";

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

  useEffect(() => {
    api.getRecipe({}).then((data) => {
      setRecipes(data);
    });
  }, []);

  return (
    <main className={classes.body}>
      <RecipeSeacrh />
      <RecipeGrid recipes={recipes} />
    </main>
  );
};

export default Body;
