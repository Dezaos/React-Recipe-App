import React, { useState, useCallback, useRef, useEffect } from "react";
import RecipeSeacrhBar from "./RecipeSearchBar";
import RecipeGrid from "./RecipeGrid";
import { useHistory, useLocation } from "react-router-dom";
import RecipeApiClient from "../RestApis/RecipeApiClient";
import ErrorSnackBar from "./ErrorSnackBar";
import useQuery from "../Hooks/RouterQueryHook";
import { makeStyles } from "@material-ui/core";
import { useRecipeContext } from "../Contexts/RecipeContext";
import IRecipeRequest from "../Interfaces/IRecipeRequest";
import RecipeRequestParams from "../Enums/RecipeRequestParams";

const NO_MATCHES_ERROR_MESSAGE = "No recipes matches this search!";
const NO_MORE_API_CALLS_ERROR_MESSAGE =
  "No more calls to API, please try again in a minute!";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const RecipeSearch: React.FC = () => {
  const history = useHistory();
  const { currentRecipes, setCurrentRecipes } = useRecipeContext();
  const api = useRef(new RecipeApiClient());
  const [errorMessaage, setErrorMessage] = useState("");
  const query = useQuery();
  const location = useLocation();
  const classes = useStyles();

  const searchForRecipes = useCallback(
    (request: IRecipeRequest) => {
      api.current
        .getRecipes({ ...request, maxResult: 100 })
        .then((data) => {
          setErrorMessage(data.length === 0 ? NO_MATCHES_ERROR_MESSAGE : "");
          if (!data || data.length === 0) return;

          setCurrentRecipes(data);
        })
        .catch((error) => {
          setErrorMessage(NO_MORE_API_CALLS_ERROR_MESSAGE);
        });
    },
    [setCurrentRecipes, api]
  );

  const onSearch = (request: IRecipeRequest) => {
    history.push(
      location.pathname + `?${RecipeRequestParams.Query}=${request.query}`
    );
  };

  const applyParams = useCallback(() => {
    const queryParam = query.get(RecipeRequestParams.Query);
    const ingredients = query.get(RecipeRequestParams.Ingredients)?.split(",");

    if (queryParam || ingredients)
      searchForRecipes({ query: queryParam, ingredients } as IRecipeRequest);
  }, [query, searchForRecipes]);

  useEffect(applyParams, [location.search]);

  return (
    <div className={classes.root}>
      <RecipeSeacrhBar onSearch={onSearch} />
      <RecipeGrid recipes={currentRecipes} />
      <ErrorSnackBar
        message={errorMessaage}
        show={Boolean(errorMessaage)}
        onClose={() => {
          setErrorMessage("");
        }}
      />
    </div>
  );
};

export default RecipeSearch;
