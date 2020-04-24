import React from "react";
import {
  Card,
  makeStyles,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Divider,
  useTheme,
  CardHeader,
  IconButton,
} from "@material-ui/core";
import PublicIcon from "@material-ui/icons/Public";
import IRecipe from "../Interfaces/IRecipe";
import InformationBox from "./InformationBox";

const textColor = "white";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    margin: 0,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    height: "auto",
    flex: "0 1 700px",
  },
  cardHeader: { backgroundColor: theme.palette.primary.main, color: textColor },
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
  secondContentContainer: {
    flex: "1 1 50%",
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
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
  informationContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  informationBox: {
    backgroundColor: theme.palette.primary.main,
    borderRight: `1px solid ${theme.palette.divider}`,
    borderBottom: `1px solid ${theme.palette.divider}`,
    flex: `1 1 auto`,
    justifyContent: "center",
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
          className={classes.cardHeader}
          title={<h4 className={classes.title}>{recipe.title}</h4>}
          subheader={`By: ${recipe.author}`}
          subheaderTypographyProps={{ color: "inherit" }}
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
          {/* <div className={classes.titleContainer}>
            <h2 className={classes.title}>{recipe.title}</h2>
            <span>By: {recipe.author}</span>
          </div> */}
          <div className={classes.informationContainer}>
            <InformationBox
              data={
                recipe.preparationTime && recipe.preparationTime !== 0
                  ? recipe.preparationTime?.toFixed(0).toString()
                  : undefined
              }
              unit={"min"}
              title={"Prep Time"}
              boxClassName={classes.informationBox}
            />
            <InformationBox
              data={
                recipe.calories && recipe.calories !== 0
                  ? recipe.calories?.toFixed(0).toString()
                  : undefined
              }
              title={"Calories"}
              boxClassName={classes.informationBox}
            />
            <InformationBox
              data={
                recipe.totalWeight && recipe.totalWeight !== 0
                  ? recipe.totalWeight?.toFixed(0).toString()
                  : undefined
              }
              unit={"gram"}
              title={"Weight"}
              boxClassName={classes.informationBox}
            />
          </div>
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
              {/* <div className={classes.informationContainer}>
                <InformationBox
                  data={recipe.preparationTime?.toString()}
                  unit={"min"}
                  title={"Prep Time"}
                />
                <InformationBox
                  data={recipe.calories?.toString()}
                  title={"Calories"}
                />
                <InformationBox
                  data={recipe.totalWeight?.toString()}
                  unit={"gram"}
                  title={"Weight"}
                />
              </div> */}

              {/* {!recipe.secondayInformation ? null : (
                <GridList
                  cols={1}
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
                          index !== recipe.secondayInformation!.length - 1
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
                </GridList> */}
              {/* )} */}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailedRecipe;
