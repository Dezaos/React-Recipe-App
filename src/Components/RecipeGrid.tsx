import React from "react";
import {
  GridList,
  GridListTile,
  useMediaQuery,
  useTheme,
  makeStyles,
} from "@material-ui/core";
import IRecipe from "../Types/IRecipe";
import RecipeListElement from "./RecipeListElement";

interface RecipeGridProps {
  recipes: IRecipe[];
}

const useStyles = makeStyles({
  list: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

const RecipeGrid: React.FC<RecipeGridProps> = ({ recipes }) => {
  const classes = useStyles();

  return (
    <div className={classes.list}>
      {recipes.map((recipe) => (
        <RecipeListElement
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
