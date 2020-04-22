import React from "react";
import {
  CardMedia,
  Card,
  makeStyles,
  CardContent,
  CardActionArea,
} from "@material-ui/core";
import Routes from "../Enums/Routes";
import { useHistory } from "react-router-dom";
import RecipeRequestParams from "../Enums/RecipeRequestParams";
import IRecipe from "../Interfaces/IRecipe";

interface IRecipeListElementProps {
  recipe: IRecipe;
}

const useStyles = makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    width: 250,
  },
  cardActionArea: {
    display: "flex",
    alignItems: "stretch",
    flexDirection: "column",
    height: "100%",
  },
  cardContent: {
    flexGrow: 1,
  },
  media: {
    height: 200,
    width: "100%",
  },
  title: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    display: "block",
    fontSize: 14,
  },
  authorText: {
    margin: 0,
    fontSize: 11,
  },
});

const RecipeListElement: React.FC<IRecipeListElementProps> = ({ recipe }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card className={classes.card}>
      <CardActionArea
        className={classes.cardActionArea}
        onClick={() => {
          history.replace(
            Routes.DetailedRecipe +
              `?${RecipeRequestParams.RecipeId}=${encodeURIComponent(
                recipe.id
              )}`
          );
        }}
      >
        <CardMedia image={recipe.image} className={classes.media} />
        <CardContent className={classes.cardContent}>
          <strong className={classes.title}>{recipe.title}</strong>
          <p className={classes.authorText}>By: {recipe.author}</p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default RecipeListElement;
