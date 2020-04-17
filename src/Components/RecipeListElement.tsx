import React from "react";
import {
  CardMedia,
  Card,
  makeStyles,
  CardContent,
  CardActionArea,
} from "@material-ui/core";

interface RecipeListElementProps {
  image: string;
  title: string;
  author: string;
  authorLink: string;
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

const RecipeListElement: React.FC<RecipeListElementProps> = ({
  image,
  title,
  author,
  authorLink,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea
        className={classes.cardActionArea}
        onClick={() => {
          window.open(authorLink);
        }}
      >
        <CardMedia image={image} className={classes.media} />
        <CardContent className={classes.cardContent}>
          <strong className={classes.title}>{title}</strong>
          <p className={classes.authorText}>By: {author}</p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default RecipeListElement;
