import React from "react";
import { makeStyles } from "@material-ui/core";
import IRecipe from "../Types/IRecipe";
import RecipeListElement from "./RecipeListElement";

interface RecipeGridProps {
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

const RecipeGrid: React.FC<RecipeGridProps> = ({ recipes }) => {
  const classes = useStyles();

  return (
    <div className={classes.list}>
      {recipes.map((recipe) => (
        <RecipeListElement
          key={recipe.authorLink}
          author={recipe.author}
          authorLink={recipe.authorLink}
          image={recipe.image}
          title={recipe.title}
        />
      ))}
    </div>
  );
};

export default RecipeGrid;
