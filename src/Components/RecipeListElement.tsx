import React from "react";
import {
  CardMedia,
  Card,
  makeStyles,
  CardContent,
  Link,
  CardActionArea,
} from "@material-ui/core";

interface RecipeListElementProps {
  image: string;
  title: string;
  author: string;
  authorLink: string;
}

const useStyles = makeStyles({
  root: { width: 350, height: 350, margin: 10 },
  card: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  media: {
    height: 180,
    paddingTop: "56.25%", //16:9,
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
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardActionArea
          onClick={() => {
            window.location.href = authorLink;
          }}
        >
          <CardMedia image={image} className={classes.media} />
          <CardContent>
            <strong style={{ fontSize: 20 }}>{title}</strong>
            <p style={{ margin: 0 }}>By: {author}</p>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default RecipeListElement;
