import React, { useState, useCallback, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import RecipeSeacrh from "./RecipeSearch";
import RecipeGrid from "./RecipeGrid";
import IRecipe from "../Types/IRecipe";
import {
  Switch,
  Route,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";
import { IRecipeRequest, RecipeRequestParams } from "../Types/IRecipeRequest";
import RecipeApiClient from "../RestApis/RecipeApiClient";
import ErrorSnackBar from "./ErrorSnackBar";
import useQuery from "../Hooks/RouterQueryHook";

const NO_MATCHES_ERROR_MESSAGE = "No recipes matches this search!";
const NO_MORE_API_CALLS_ERROR_MESSAGE =
  "No more calls to API, please try again in a minute!";

const useStyles = makeStyles({
  body: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
});

const Body = () => {
  const classes = useStyles();
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const api = useRef(new RecipeApiClient());
  const [errorMessaage, setErrorMessage] = useState("");
  const query = useQuery();
  const location = useLocation();
  const history = useHistory();

  const onSearch = (request: IRecipeRequest) => {
    history.push(
      location.pathname + `?${RecipeRequestParams.Query}=${request.query}`
    );
  };

  const searchForRecipes = useCallback(
    (request: IRecipeRequest) => {
      api.current
        .getRecipes({ ...request, maxResult: 100 })
        .then((data) => {
          setErrorMessage(data.length === 0 ? NO_MATCHES_ERROR_MESSAGE : "");
          if (!data || data.length === 0) return;

          setRecipes(data);
        })
        .catch((error) => {
          setErrorMessage(NO_MORE_API_CALLS_ERROR_MESSAGE);
        });
    },
    [setRecipes, api]
  );

  const applyParams = useCallback(() => {
    const queryParam = query.get(RecipeRequestParams.Query);
    const ingredients = query.get(RecipeRequestParams.Ingredients)?.split(",");

    if (queryParam || ingredients)
      searchForRecipes({ query: queryParam, ingredients } as IRecipeRequest);
  }, [query, searchForRecipes]);

  useEffect(applyParams, [location.search]);

  return (
    <main className={classes.body}>
      <Switch>
        <Route path="/search">
          <RecipeSeacrh onSearch={onSearch} />
          <RecipeGrid recipes={recipes} />
        </Route>
        <Route path="/">
          <Redirect to="/search" />
        </Route>
      </Switch>
      <ErrorSnackBar
        message={errorMessaage}
        show={Boolean(errorMessaage)}
        onClose={() => {
          setErrorMessage("");
        }}
      />
    </main>
  );
};

export default Body;
