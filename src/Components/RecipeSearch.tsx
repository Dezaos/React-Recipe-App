import React from "react";
import InputWithButtonForm from "./MaterialComponents/InputWithButtonForm";
import SearchIcon from "@material-ui/icons/Search";
import { Card, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    padding: 30,
  },
  input: {
    minWidth: 400,
  },
  searchButton: {
    minWidth: 125,
  },
});

const onSearch = (
  event: React.FormEvent<HTMLFormElement>,
  value: string
): void => {};

const RecipeSeacrh = () => {
  const classes = useStyles();

  return (
    <div className="search">
      <Card className={classes.card}>
        <InputWithButtonForm
          onSubmit={onSearch}
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

export default RecipeSeacrh;
