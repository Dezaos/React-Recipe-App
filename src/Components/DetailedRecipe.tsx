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
  GridList,
  GridListTile,
  useTheme,
} from "@material-ui/core";
import PublicIcon from "@material-ui/icons/Public";
import IRecipe from "../Interfaces/IRecipe";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  title: {
    margin: "10px 0 0",
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
  ingredientTitle: {
    fontSize: 25,
    paddingBottom: 5,
    margin: 0,
  },
  firstContentContainer: {
    flex: "1 1 50%",
    justifyContent: "center",
    padding: 25,
  },
  secondContentContainer: { flex: "1 1 50%" },
  ingredientItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  ingredientText: { flex: "1 1 140px" },
  secondaryGrid: { paddingTop: 25 },
  secondaryGridTile: {},
  secondayGridContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "100%",
  },
}));

interface IDetailedRecipeProps {
  recipe: IRecipe;
}

const DetailedRecipe: React.FC<IDetailedRecipeProps> = ({ recipe }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader
          title={<h2 className={classes.title}>{recipe.title}</h2>}
          subheader={`By: ${recipe.author}`}
          action={
            <IconButton
              onClick={() => {
                window.open(recipe.authorLink);
              }}
            >
              <PublicIcon fontSize="large" />
            </IconButton>
          }
        ></CardHeader>
        <CardContent className={classes.cardContent}>
          <CardMedia className={classes.media} image={recipe.image}></CardMedia>
          <div className={classes.textDivider}>
            <div className={classes.firstContentContainer}>
              <p className={classes.ingredientTitle}>Ingredients</p>
              <Divider></Divider>
              <List dense={true}>
                {recipe.ingredians.map((ingredient, index) => (
                  <ListItem className={classes.ingredientItem} key={index}>
                    <ListItemText
                      primary={ingredient.name}
                      className={classes.ingredientText}
                    ></ListItemText>
                  </ListItem>
                ))}
              </List>
            </div>
            <div className={classes.secondContentContainer}>
              {!recipe.secondayInformation ? null : (
                <GridList
                  cols={2}
                  cellHeight={65}
                  className={classes.secondaryGrid}
                >
                  {recipe.secondayInformation.map((information, index) => (
                    <GridListTile
                      style={{
                        borderRight:
                          index % 2 === 0
                            ? `1px solid ${theme.palette.divider}`
                            : "",
                        borderBottom:
                          index !== recipe.secondayInformation!.length - 1 &&
                          index !== recipe.secondayInformation!.length - 2
                            ? `1px solid ${theme.palette.divider}`
                            : "",
                      }}
                      className={classes.secondaryGridTile}
                      key={information.ValueA + information.ValueB}
                    >
                      <div className={classes.secondayGridContainer}>
                        <strong>{information.ValueA}</strong>
                        <strong>{information.ValueB}</strong>
                      </div>
                    </GridListTile>
                  ))}
                </GridList>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailedRecipe;
