import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import RecipeSeacrh from "./RecipeSearch";
import RecipeGrid from "./RecipeGrid";
import IRecipe from "../Types/IRecipe";

const useStyles = makeStyles({
  body: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
});

const onSearch = (value: IRecipe[], setRecipes: React.Dispatch<IRecipe[]>) => {
  if (!value || value.length === 0) return;
  setRecipes(value);
};

const Body = () => {
  const classes = useStyles();
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  return (
    <main className={classes.body}>
      <RecipeSeacrh
        onSearch={(recipes) => {
          onSearch(recipes, setRecipes);
        }}
      />
      <RecipeGrid recipes={recipes} />
    </main>
  );
};

export default Body;
