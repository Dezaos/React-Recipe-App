import React from "react";
import InputWithButtonForm from "./MaterialComponents/InputWithButtonForm";
import { Card, makeStyles } from "@material-ui/core";

interface RecipeSeacrhProps {
  onSearch: (event: React.FormEvent<HTMLFormElement>, value: string) => void;
}

const useStyles = makeStyles({
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
});

const RecipeSeacrh: React.FC<RecipeSeacrhProps> = ({ onSearch }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      {" "}
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
  );
};

export default RecipeSeacrh;
