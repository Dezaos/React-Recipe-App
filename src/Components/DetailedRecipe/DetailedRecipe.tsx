import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  IconButton,
} from "@material-ui/core";
import PublicIcon from "@material-ui/icons/Public";
import IRecipe from "../../Interfaces/IRecipe";
import InformationBox from "../InformationBox";
import TextListWithTitle from "../TextListWithTitle";
import useDetailedRecipeStyles from "./DetailedRecipeCSS";

interface IDetailedRecipeProps {
  recipe: IRecipe;
}

const DetailedRecipe: React.FC<IDetailedRecipeProps> = ({ recipe }) => {
  const classes = useDetailedRecipeStyles();
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
              color={"inherit"}
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
              <TextListWithTitle
                values={recipe.ingredians.map((i) => i.name)}
                title={"Ingredients"}
                titleClassName={classes.minorTitle}
                dense={true}
              />
            </div>
            <div className={classes.secondContentContainer}>
              {recipe.healthLabels ? (
                <TextListWithTitle
                  values={recipe.healthLabels}
                  title={"Health Labels"}
                  dense={true}
                  titleClassName={classes.minorTitle}
                />
              ) : null}
              {recipe.cautions ? (
                <TextListWithTitle
                  values={recipe.cautions}
                  title={"Cautions"}
                  dense={true}
                  titleClassName={classes.minorTitle}
                />
              ) : null}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailedRecipe;
