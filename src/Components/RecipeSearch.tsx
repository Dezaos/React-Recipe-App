import React, { useState, useRef } from "react";
import InputWithButtonForm from "./MaterialComponents/InputWithButtonForm";
import { Card, makeStyles, IconButton } from "@material-ui/core";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import IRecipe from "../Types/IRecipe";
import RecipeApiClient from "../RestApis/RecipeApiClient";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";

interface RecipeSeacrhProps {
  onSearch: (value: IRecipe[]) => void;
}

const NO_MATCHES_ERROR_MESSAGE = "No recipes matches this search!";
const NO_MORE_API_CALLS_ERROR_MESSAGE =
  "No more calls to API, please try again in a minute!";

const ERROR_DISPLAY_STYLE = "flex";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 30,
  },
  input: {
    flexBasis: "auto",
  },
  searchButton: {
    minWidth: 125,
  },
  errorBox: {
    display: `${ERROR_DISPLAY_STYLE}`,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.palette.error.main,
    marginTop: 5,
    padding: "8px 16px",
  },
  errorText: {
    marginLeft: 10,
    color: "white",
  },
  errorIcon: {
    color: "white",
  },
  errorCloseIcon: {
    padding: 5,
  },
}));

const RecipeSeacrh: React.FC<RecipeSeacrhProps> = ({ onSearch }) => {
  const classes = useStyles();
  const [errorMessaage, setErrorMessage] = useState("");
  const api = useRef(new RecipeApiClient());

  const onRecipeSearch = (
    event: React.FormEvent<HTMLFormElement>,
    value: string
  ): Promise<IRecipe[]> => {
    event.preventDefault();

    return api.current
      .getRecipes({ search: value, maxResult: 100 })
      .then((data) => {
        setErrorMessage(data.length === 0 ? NO_MATCHES_ERROR_MESSAGE : "");
        return data;
      })
      .catch((error) => {
        setErrorMessage(NO_MORE_API_CALLS_ERROR_MESSAGE);
        return [];
      });
  };

  return (
    <div className={classes.root}>
      <Card elevation={5} className={classes.card}>
        {" "}
        <InputWithButtonForm
          onSubmit={(event, value) => {
            onRecipeSearch(event, value).then((data) => {
              onSearch(data);
            });
          }}
          buttonIcon={<strong>Search</strong>}
          inputProps={{
            className: classes.input,
            placeholder: "Recipe Search",
          }}
          buttonFormProps={{
            className: classes.searchButton,
          }}
        />
      </Card>

      <Snackbar
        open={errorMessaage !== ""}
        autoHideDuration={6000}
        onClose={() => {
          setErrorMessage("");
        }}
      >
        <Card
          className={classes.errorBox}
          style={{ display: errorMessaage ? ERROR_DISPLAY_STYLE : "none" }}
        >
          <ErrorOutlineIcon className={classes.errorIcon} />
          <strong className={classes.errorText}>{errorMessaage}</strong>
          <IconButton
            className={classes.errorCloseIcon}
            onClick={() => setErrorMessage("")}
          >
            <CloseIcon />
          </IconButton>
        </Card>
      </Snackbar>
    </div>
  );
};

export default RecipeSeacrh;
