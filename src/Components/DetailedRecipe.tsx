import React from "react";
import {
  Card,
  makeStyles,
  CardHeader,
  IconButton,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";
import PublicIcon from "@material-ui/icons/Public";

const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    height: "auto",
    flex: "0 1 700px",
  },
  cardContent: {
    flexGrow: 1,
    alignItems: "stretch",
    padding: 0,
  },
  textDivider: {
    display: "flex",
    flexDirection: "row",
  },
  media: {
    width: "100%",
    height: 400,
  },
  ingrediensTitle: {
    fontSize: 25,
    paddingBottom: 5,
    margin: 0,
  },
  firstContentContainer: {
    flex: "0.4 1 auto",
    justifyContent: "center",
    padding: 25,
  },
  secondContentContainer: { flex: "0.6 1 auto" },
});

const DetailedRecipe: React.FC = ({}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader
          title="Cheese Recipe"
          subheader="by me!"
          action={
            <IconButton>
              <PublicIcon fontSize="large" />
            </IconButton>
          }
        ></CardHeader>
        <CardContent className={classes.cardContent}>
          <CardMedia
            className={classes.media}
            image={
              "https://www.edamam.com/web-img/9c4/9c42e4c658b8e1c8d71946d71d48813a.jpg"
            }
          ></CardMedia>
          <div className={classes.textDivider}>
            <div className={classes.firstContentContainer}>
              <p className={classes.ingrediensTitle}>Ingrediens</p>
              <Divider></Divider>
              <List dense={true}>
                <ListItem>
                  <ListItemText primary={"Cheese"}></ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText primary={"Cheese"}></ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText primary={"Cheese"}></ListItemText>
                </ListItem>
              </List>
            </div>
            <div className={classes.secondContentContainer}>
              <div></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailedRecipe;
