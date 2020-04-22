import React from "react";
import InputWithButtonForm from "./MaterialComponents/InputWithButtonForm";
import { Card, makeStyles } from "@material-ui/core";
import IRecipeRequest from "../Interfaces/IRecipeRequest";

interface IRecipeSeacrhProps {
  onSearch: (value: IRecipeRequest) => void;
}

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
    display: `flex`,
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

const RecipeSeacrhBar: React.FC<IRecipeSeacrhProps> = ({ onSearch }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card elevation={5} className={classes.card}>
        {" "}
        <InputWithButtonForm
          onSubmit={(event, value) => {
            event.preventDefault();

            if (value) onSearch({ query: value, maxResult: 100 });
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
    </div>
  );
};

export default RecipeSeacrhBar;
