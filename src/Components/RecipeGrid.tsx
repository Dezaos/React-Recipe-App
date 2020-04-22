import React from "react";
import { makeStyles } from "@material-ui/core";
import IRecipe from "../Interfaces/IRecipe";
import RecipeListElement from "./RecipeElement";

interface IRecipeGridProps {
  recipes: IRecipe[];
}

const useStyles = makeStyles({
  list: {
    display: "grid",
    width: "100%",
    gridTemplateColumns: `repeat(auto-fill,250px)`,
    justifyContent: "center",
    padding: "10px 20px 10px",
    gridColumnGap: 10,
    gridRowGap: 10,
  },
});

const RecipeGrid: React.FC<IRecipeGridProps> = ({ recipes }) => {
  const classes = useStyles();

  return (
    <div className={classes.list}>
      {recipes.map((recipe) => (
        <RecipeListElement key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeGrid;
