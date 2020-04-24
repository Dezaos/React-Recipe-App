import React from "react";
import { makeStyles } from "@material-ui/core";
import { Switch, Route, Redirect } from "react-router-dom";
import RecipeSearch from "./RecipeSearch";
import Routes from "../Enums/Routes";
import UrlToDetailedRecipe from "./UrlToDetailedRecipe";
import InformationBox from "./InformationBox";

const useStyles = makeStyles({
  body: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
});

const Body = () => {
  const classes = useStyles();

  return (
    <main className={classes.body}>
      <Switch>
        <Route path={Routes.Search}>
          <RecipeSearch />
        </Route>
        <Route path={Routes.DetailedRecipe}>
          <UrlToDetailedRecipe />
        </Route>
        <Route path={Routes.Root}>
          <Redirect to={Routes.Search} />
        </Route>
      </Switch>
    </main>
  );
};

export default Body;
